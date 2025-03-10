import { gsap, ScrollTrigger } from './gsapSetup';

export function animateScene() {
  gsap.fromTo(
    '[data-scene]',
    { opacity: 0 },
    {
      opacity: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: "[data-section='3d-shape']",
        start: 'top bottom',
        end: '200vh top',
        scrub: 1,
      },
    }
  );

  let mm = gsap.matchMedia();

  mm.add('(min-width: 1200px)', () => {
    let splitAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "[data-section='3d-shape']",
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    });

    splitAnimation.to("[data-scene='left']", {
      x: '-37vw',
      scale: 2.2,
      transformOrigin: 'center center',
      ease: 'power1.in',
    });

    splitAnimation.to(
      "[data-scene='right']",
      {
        x: '25vw',
        scale: 1.8,
        transformOrigin: 'center center',
        ease: 'power1.in',
      },
      '<'
    );
  });

  mm.add('(max-width: 1199px)', () => {
    let splitAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "[data-section='3d-shape']",
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    });

    splitAnimation.to("[data-scene='left']", {
      x: '-50vw', // Mehr Verschiebung für schmalere Screens
      scale: 2.2,
      transformOrigin: 'center center',
      ease: 'power1.in',
    });

    splitAnimation.to(
      "[data-scene='right']",
      {
        x: '40vw', // Mehr Verschiebung für schmalere Screens
        scale: 1.8,
        transformOrigin: 'center center',
        ease: 'power1.in',
      },
      '<'
    );
  });
}
