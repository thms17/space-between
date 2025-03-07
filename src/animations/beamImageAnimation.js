import { gsap, ScrollTrigger } from './gsapSetup';

export function animateBeamImage() {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "[data-section='beam-image']",
        start: 'top top',
        onLeaveBack: () => gsap.set("[data-section='beam-image']", { opacity: 0 }),
        toggleActions: 'restart none none restart',
      },
    })
    .to("[data-section='beam-image']", { opacity: 0.5, duration: 0.3, ease: 'power2.inOut' })
    .to("[data-section='beam-image']", { opacity: 0.4, duration: 0.2, ease: 'power2.out' })
    .to("[data-section='beam-image']", {
      opacity: 1,
      duration: 0.6,
      ease: 'power2.in',
      delay: 0.3,
    });
}
