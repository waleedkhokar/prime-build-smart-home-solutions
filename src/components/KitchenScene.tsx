"use client";
import { useEffect, useRef, useState } from "react";
import type * as THREE from "three";

const BUILD = 15;
const CYCLE = 18.6;

export default function KitchenScene() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    let disposed = false;
    let raf = 0;
    let running = false;

    (async () => {
      try {
        const THREE = await import("three");
        if (disposed) return;
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        mount.appendChild(renderer.domElement);
        renderer.domElement.style.width = "100%";
        renderer.domElement.style.height = "100%";
        renderer.domElement.style.display = "block";

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xf3efe4);
        const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
        camera.position.set(7.6, 5.6, 9.2);

        const hemi = new THREE.HemisphereLight(0xfff6e6, 0x8a7a5f, 0.85);
        scene.add(hemi);
        const key = new THREE.DirectionalLight(0xffe9c4, 1.6);
        key.position.set(6, 10, 6);
        key.castShadow = true;
        key.shadow.mapSize.set(1024, 1024);
        scene.add(key);
        const pendantLight = new THREE.PointLight(0xffc978, 0, 12, 1.6);
        pendantLight.position.set(0.4, 3.4, 0.8);
        scene.add(pendantLight);

        // ---- canvas textures ----
        const mkTex = (w: number, h: number, draw: (g: CanvasRenderingContext2D) => void) => {
          const c = document.createElement("canvas"); c.width = w; c.height = h;
          draw(c.getContext("2d")!);
          const t = new THREE.CanvasTexture(c);
          t.wrapS = t.wrapT = THREE.RepeatWrapping;
          return t;
        };
        const woodTex = mkTex(512, 512, (g) => {
          g.fillStyle = "#a97c50"; g.fillRect(0, 0, 512, 512);
          for (let r = 0; r < 6; r++) for (let i = 0; i < 3; i++) {
            g.fillStyle = `hsl(27,38%,${38 + Math.random() * 10}%)`;
            g.fillRect(i * 172 + (r % 2) * 60 - 60, r * 86, 168, 82);
            g.strokeStyle = "rgba(70,45,20,.5)"; g.strokeRect(i * 172 + (r % 2) * 60 - 60, r * 86, 168, 82);
          }
        });
        woodTex.repeat.set(2, 2);
        const tileTex = mkTex(256, 256, (g) => {
          g.fillStyle = "#e9f0ec"; g.fillRect(0, 0, 256, 256);
          g.strokeStyle = "#b9cdc4"; g.lineWidth = 3;
          for (let i = 0; i <= 4; i++) { g.beginPath(); g.moveTo(i * 64, 0); g.lineTo(i * 64, 256); g.stroke(); g.beginPath(); g.moveTo(0, i * 64); g.lineTo(256, i * 64); g.stroke(); }
        });
        tileTex.repeat.set(6, 1.4);
        const stoneTex = mkTex(256, 256, (g) => {
          g.fillStyle = "#ddd6c6"; g.fillRect(0, 0, 256, 256);
          for (let i = 0; i < 900; i++) { g.fillStyle = `rgba(120,110,90,${Math.random() * 0.25})`; g.fillRect(Math.random() * 256, Math.random() * 256, 2, 2); }
        });

        const M = {
          wall: new THREE.MeshStandardMaterial({ color: 0xf1ebdd, roughness: 0.95 }),
          floor: new THREE.MeshStandardMaterial({ map: woodTex, roughness: 0.8 }),
          cab: new THREE.MeshStandardMaterial({ color: 0xe9e2d2, roughness: 0.55 }),
          cabDoor: new THREE.MeshStandardMaterial({ color: 0xf4efe2, roughness: 0.45 }),
          island: new THREE.MeshStandardMaterial({ color: 0x0e7a78, roughness: 0.5 }),
          counter: new THREE.MeshStandardMaterial({ map: stoneTex, roughness: 0.3 }),
          steel: new THREE.MeshStandardMaterial({ color: 0xb9bec4, metalness: 0.85, roughness: 0.35 }),
          black: new THREE.MeshStandardMaterial({ color: 0x17181c, roughness: 0.4 }),
          tile: new THREE.MeshStandardMaterial({ map: tileTex, roughness: 0.25 }),
        };

        interface Part { o: THREE.Object3D; start: number; dur: number; mode: "rise" | "drop" | "grow"; baseY: number }
        const parts: Part[] = [];
        const add = (o: THREE.Object3D, start: number, dur: number, mode: Part["mode"]) => {
          o.userData.baseY = o.position.y;
          parts.push({ o, start, dur, mode, baseY: o.position.y });
          scene.add(o);
          return o;
        };
        const box = (w: number, h: number, d: number, mat: THREE.Material, x: number, y: number, z: number, shadow = true) => {
          const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
          m.position.set(x, y, z); m.castShadow = shadow; m.receiveShadow = true;
          return m;
        };

        // room
        const floor = box(11, 0.2, 9, M.floor, 0, -0.1, 0, false); add(floor, 0, 1.6, "grow");
        const backWall = box(11, 5.4, 0.2, M.wall, 0, 2.7, -3.4, false); add(backWall, 0.2, 1.6, "rise");
        const leftWall = box(0.2, 5.4, 9, M.wall, -5.4, 2.7, 0, false); add(leftWall, 0.3, 1.6, "rise");
        // window glow on back wall
        const win = box(2.2, 1.6, 0.06, new THREE.MeshStandardMaterial({ color: 0xcfe8ef, emissive: 0x9fc8d8, emissiveIntensity: 0.5 }), 2.9, 3.4, -3.28, false);
        add(win, 0.5, 1.2, "grow");

        // base cabinets along back wall
        const cabY = 0.95;
        const baseXs = [-3.9, -2.6, -1.3, 0, 1.3];
        baseXs.forEach((x, i) => {
          const g = new THREE.Group();
          g.add(box(1.24, 1.7, 1.15, M.cab, 0, 0.85, 0));
          g.add(box(1.08, 1.45, 0.06, M.cabDoor, 0, 0.92, 0.6));
          g.add(box(1.24, 0.18, 1.05, M.black, 0, 0.09, 0.02)); // toe-kick
          const h = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.7), M.steel);
          h.rotation.z = Math.PI / 2; h.position.set(0, 1.5, 0.66); g.add(h);
          g.position.set(x, 0, -2.7);
          add(g, 2 + i * 0.85, 0.9, "rise");
        });
        // countertop + backsplash
        const counter = box(6.9, 0.12, 1.3, M.counter, -1.3, 1.86, -2.7); add(counter, 6.4, 0.8, "drop");
        const splash = box(6.9, 1.1, 0.06, M.tile, -1.3, 2.45, -3.26, false); add(splash, 6.8, 0.8, "rise");
        // wall cabinets
        [-3.9, -2.6, -0.2, 1.1].forEach((x, i) => {
          const g = new THREE.Group();
          g.add(box(1.24, 1.5, 0.8, M.cab, 0, 0, 0));
          g.add(box(1.08, 1.3, 0.05, M.cabDoor, 0, 0, 0.42));
          g.add(box(1.34, 0.1, 0.9, M.cab, 0, 0.8, 0)); // crown trim
          g.position.set(x, 3.6, -2.95);
          add(g, 8 + i * 0.7, 0.8, "drop");
        });
        // island + stools
        const island = new THREE.Group();
        island.add(box(3.2, 1.7, 1.3, M.island, 0, 0.85, 0));
        island.add(box(3.5, 0.12, 1.55, M.counter, 0, 1.76, 0));
        island.position.set(0.2, 0, 0.7);
        add(island, 9.6, 0.9, "rise");
        [-0.7, 0.9].forEach((dx, i) => {
          const s = new THREE.Group();
          const seat = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.09, 24), M.counter);
          seat.position.y = 1.15; seat.castShadow = true; s.add(seat);
          const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1.15), M.steel);
          leg.position.y = 0.57; s.add(leg);
          s.position.set(0.2 + dx, 0, 2.1);
          add(s, 10.4 + i * 0.4, 0.7, "rise");
        });
        // stove + burners + hood (on back run, x=-1.3)
        const stove = new THREE.Group();
        stove.add(box(1.2, 0.06, 1.1, M.black, 0, 0, 0));
        [-0.3, 0.3].forEach((dx) => [-0.25, 0.25].forEach((dz) => {
          const b = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.03, 20), M.steel);
          b.position.set(dx, 0.05, dz); stove.add(b);
        }));
        stove.position.set(-1.3, 1.93, -2.7);
        add(stove, 11, 0.6, "drop");
        const hood = new THREE.Group();
        hood.add(box(1.3, 0.14, 0.9, M.steel, 0, 0, 0));
        hood.add(box(0.5, 1.1, 0.5, M.steel, 0, 0.6, -0.1));
        hood.position.set(-1.3, 3.1, -2.85);
        add(hood, 11.5, 0.7, "drop");
        // sink + faucet (x=0.6)
        const sink = new THREE.Group();
        sink.add(box(1.0, 0.1, 0.7, M.steel, 0, 0, 0));
        const spout = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.045, 10, 20, Math.PI), M.steel);
        spout.position.set(0, 0.3, -0.2); spout.rotation.y = Math.PI / 2; sink.add(spout);
        const tapBase = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.34), M.steel);
        tapBase.position.set(0, 0.15, -0.42); sink.add(tapBase);
        sink.position.set(0.65, 1.9, -2.7);
        add(sink, 12, 0.6, "drop");
        // fridge
        const fridge = new THREE.Group();
        fridge.add(box(1.3, 3.6, 1.2, M.steel, 0, 1.8, 0));
        fridge.add(box(0.05, 1.1, 0.06, M.black, -0.2, 2.2, 0.62));
        fridge.add(box(0.05, 1.1, 0.06, M.black, 0.2, 2.2, 0.62));
        fridge.position.set(3.4, 0, -2.7);
        add(fridge, 12.4, 0.8, "rise");
        // pendant lights over island
        const shades: THREE.MeshStandardMaterial[] = [];
        [-0.8, 0.2, 1.2].forEach((dx, i) => {
          const p = new THREE.Group();
          const cord = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 1.1), M.black);
          cord.position.y = 0.9; p.add(cord);
          const shadeMat = new THREE.MeshStandardMaterial({ color: 0x0b3b36, roughness: 0.4, emissive: 0xffb85c, emissiveIntensity: 0 });
          const shade = new THREE.Mesh(new THREE.ConeGeometry(0.34, 0.4, 24, 1, true), shadeMat);
          shade.position.y = 0.3; p.add(shade);
          const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 12), new THREE.MeshStandardMaterial({ emissive: 0xffc978, emissiveIntensity: 0, color: 0x443311 }));
          bulb.position.y = 0.16; p.add(bulb);
          shades.push(shadeMat, bulb.material as THREE.MeshStandardMaterial);
          p.position.set(dx, 2.6, 0.7);
          add(p, 13.2 + i * 0.2, 0.6, "drop");
        });
        // props: kettle, fruit bowl, plant, jars
        const kettle = new THREE.Group();
        kettle.add(new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.2, 0.3, 18), M.steel));
        kettle.position.set(-1.6, 2.12, -2.8); add(kettle, 13.8, 0.5, "grow");
        const bowl = new THREE.Group();
        const bb = new THREE.Mesh(new THREE.SphereGeometry(0.3, 18, 10, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), M.steel);
        bb.rotation.x = Math.PI; bb.position.y = 0.16; bowl.add(bb);
        [[0, 0.22, 0, 0xff8c42], [0.16, 0.2, 0.08, 0xd94343], [-0.15, 0.2, -0.06, 0x9ccc3c]].forEach(([x, y, z, c]) => {
          const f = new THREE.Mesh(new THREE.SphereGeometry(0.1, 12, 12), new THREE.MeshStandardMaterial({ color: c as number, roughness: 0.5 }));
          f.position.set(x as number, y as number, z as number); bowl.add(f);
        });
        bowl.position.set(0.2, 1.82, 0.6); add(bowl, 14.1, 0.5, "grow");
        const plant = new THREE.Group();
        const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.1, 0.22, 14), new THREE.MeshStandardMaterial({ color: 0xb4532a }));
        pot.position.y = 0.11; plant.add(pot);
        const leaf = new THREE.Mesh(new THREE.IcosahedronGeometry(0.24, 0), new THREE.MeshStandardMaterial({ color: 0x3f8f4f, roughness: 0.8 }));
        leaf.position.y = 0.42; plant.add(leaf);
        plant.position.set(-3.6, 1.92, -2.7); add(plant, 14.3, 0.5, "grow");
        [-2.2, -1.95].forEach((x, i) => {
          const jar = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.3, 12), new THREE.MeshStandardMaterial({ color: 0xd8c9a3, roughness: 0.3 }));
          jar.position.set(x, 2.07, -2.85); add(jar, 14.4 + i * 0.15, 0.4, "grow");
        });

        const ease = (t: number) => 1 - Math.pow(1 - t, 3);
        const applyParts = (bt: number) => {
          for (const p of parts) {
            const t = Math.min(1, Math.max(0, (bt - p.start) / p.dur));
            const e = ease(t);
            p.o.visible = t > 0;
            if (p.mode === "rise") { p.o.position.y = p.baseY - (1 - e) * 1.4; p.o.scale.setScalar(0.6 + 0.4 * e); }
            if (p.mode === "drop") { p.o.position.y = p.baseY + (1 - e) * 1.6; p.o.scale.setScalar(0.7 + 0.3 * e); }
            if (p.mode === "grow") { p.o.scale.setScalar(Math.max(0.001, e)); }
          }
          const lightT = Math.min(1, Math.max(0, (bt - 13.6) / 1.2));
          pendantLight.intensity = lightT * 26;
          shades.forEach((m) => (m.emissiveIntensity = lightT * 1.6));
        };

        const resize = () => {
          const w = mount.clientWidth, h = mount.clientHeight;
          renderer.setSize(w, h, false);
          camera.aspect = w / h; camera.updateProjectionMatrix();
        };
        resize();
        const ro = new ResizeObserver(resize); ro.observe(mount);

        const clock = new THREE.Clock();
        const tick = () => {
          if (!running || disposed) return;
          raf = requestAnimationFrame(tick);
          const t = clock.getElapsedTime();
          const bt = t % CYCLE;
          applyParts(bt >= BUILD ? BUILD : bt);
          camera.position.x = 7.6 + Math.sin(t * 0.12) * 0.7;
          camera.position.y = 5.6 + Math.sin(t * 0.09) * 0.3;
          camera.lookAt(0, 1.1, -0.6);
          renderer.render(scene, camera);
        };
        const io = new IntersectionObserver((es) => {
          es.forEach((e) => {
            if (e.isIntersecting && !running) { running = true; clock.start(); tick(); }
            else if (!e.isIntersecting && running) { running = false; cancelAnimationFrame(raf); }
          });
        }, { threshold: 0.2 });
        io.observe(mount);

        return () => { io.disconnect(); ro.disconnect(); renderer.dispose(); mount.removeChild(renderer.domElement); };
      } catch {
        if (!disposed) setFallback(true);
      }
    })();

    return () => { disposed = true; cancelAnimationFrame(raf); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section aria-label="Watch a kitchen build itself" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="sr text-center">
          <h2 className="font-display text-4xl text-[#14201d] sm:text-5xl">Watch Your <span className="text-[#0E7A78]">Kitchen Come to Life</span></h2>
          <p className="mt-3 font-semibold text-[#14201d]/60">See every detail come together in a stunning 3D transformation of your dream modern kitchen.</p>
        </div>
        <div className="sr relative mt-8 aspect-[16/10] overflow-hidden rounded-[1.6rem] shadow-[0_30px_60px_rgba(11,59,54,.18)] sm:aspect-[16/8]">
          {fallback ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src="/projects/Kitchen.jpg" alt="Finished kitchen by Prime Build" className="h-full w-full object-cover" />
          ) : (
            <div ref={mountRef} className="absolute inset-0" />
          )}
        </div>
      </div>
    </section>
  );
}
