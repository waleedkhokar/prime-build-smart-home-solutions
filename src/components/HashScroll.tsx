"use client";
import { useEffect } from "react";

/**
 * When the home page is reached with a hash (e.g. /#services from the
 * navbar on /about or a service page), scroll to that section once the
 * page has rendered. Without this, cross-page hash links can land at
 * the top of the home page and look like dead buttons.
 */
export default function HashScroll() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash || hash.length < 2) return;
    let tries = 0;
    let timer = 0;
    const attempt = () => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      if (tries++ < 10) timer = window.setTimeout(attempt, 120);
    };
    timer = window.setTimeout(attempt, 60);
    return () => window.clearTimeout(timer);
  }, []);
  return null;
}
