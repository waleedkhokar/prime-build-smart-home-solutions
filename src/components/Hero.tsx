'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Shield, Clock, Award, Sparkles } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const floatingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animations
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Floating elements animation
    gsap.to(floatingRef.current, {
      y: 20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // Hero text animation
    tl.fromTo(textRef.current,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1.2 }
    )
    .fromTo('.hero-text-line',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 },
      '-=0.8'
    )
    .fromTo(ctaRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.8 },
      '-=0.4'
    )
    .fromTo(featuresRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 },
      '-=0.4'
    );

    // Parallax effect
    gsap.to(heroRef.current, {
      backgroundPosition: '50% 100px',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      tl.kill();
    };
  }, []);

  const features = [
    { icon: <Shield className="w-6 h-6" />, text: 'Verified & Safe', highlight: 'Workers' },
    { icon: <Clock className="w-6 h-6" />, text: 'On-Time', highlight: 'Delivery' },
    { icon: <Award className="w-6 h-6" />, text: 'Quality', highlight: 'Workmanship' },
    { icon: <Sparkles className="w-6 h-6" />, text: 'Modern', highlight: 'Solutions' },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-full blur-3xl"></div>
        <div ref={floatingRef} className="absolute top-1/3 right-1/4">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg rotate-45"></div>
        </div>
      </div>

      <div className="container-custom text-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={textRef}>
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-500/20 mb-8">
            <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></span>
            <span className="text-blue-600 font-semibold">🏠 Serving Rawalpindi & Islamabad</span>
          </div>
          
          {/* Main headline with 3D effect */}
          <h1 className="hero-text-line text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
              We Build, Fix
            </span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600">
              & Improve Homes
            </span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
              You Can Trust
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="hero-text-line text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Professional Plumbing, Electrical, Tiles, Kitchen & Interior Services
            <span className="block text-lg text-gray-500 mt-4 font-medium">
              🔥 Quality Work | 👥 Trusted Team | ⏰ On-Time Delivery
            </span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <a
            href="#contact"
            className="group relative overflow-hidden btn-primary text-lg px-10 py-5 rounded-2xl flex items-center justify-center space-x-3 shadow-2xl hover:shadow-blue-500/30 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
            <span className="relative flex items-center space-x-3">
              <span className="text-2xl">📩</span>
              <span className="font-bold">Get Free Estimate</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </a>
         <a
    href="https://wa.me/923195707402"
    className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-medium px-8 py-4 text-lg rounded-2xl inline-flex items-center space-x-3 transition-all duration-300 hover:shadow-md"
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#25D366">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
    </svg>
    <span>WhatsApp</span>
  </a>
          
        </div>

        {/* Features */}
        <div ref={featuresRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50"
            >
              <div className="inline-flex p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="text-blue-600 group-hover:text-cyan-600 transition-colors">
                  {feature.icon}
                </div>
              </div>
              <div>
                <p className="font-bold text-gray-800 text-lg">{feature.text}</p>
                <p className="text-blue-600 font-semibold">{feature.highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-blue-500/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;