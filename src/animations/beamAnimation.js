import { gsap, ScrollTrigger } from './gsapSetup';

export function animateBeam() {
  gsap.fromTo(
    "[data-section='beam']",
    { opacity: 0 },
    {
      opacity: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: "[data-section='beam']",
        start: 'top top',
        end: 'top -100vh',
        scrub: 1,
      },
    }
  );
}
