import { gsap, ScrollTrigger } from './gsapSetup';

export function animateBeamImage() {
  const beamImage = "[data-section='beam-image']";

  gsap.set(beamImage, { opacity: 0 });

  gsap.to(beamImage, {
    opacity: 1,
    ease: 'power1.in',
    scrollTrigger: {
      trigger: beamImage,
      start: 'top top',
      end: '50% 50%',
      scrub: true,
    },
  });
}
