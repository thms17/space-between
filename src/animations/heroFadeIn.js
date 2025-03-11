import { gsap } from './gsapSetup';

export function animateHeroSection() {
  gsap.fromTo(
    "[data-section='hero']",
    { opacity: 0 },
    { opacity: 1, duration: 0.3, ease: 'power2.out' }
  );
}
