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

  // Ab 1200px
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

  // 992px - 1199px
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
      x: '-50vw',
      scale: 2.2,
      transformOrigin: 'center center',
      ease: 'power1.in',
    });

    splitAnimation.to(
      "[data-scene='right']",
      {
        x: '40vw',
        scale: 1.8,
        transformOrigin: 'center center',
        ease: 'power1.in',
      },
      '<'
    );
  });

  // 768px - 991px → Szenen um 30% kleiner machen
  mm.add('(min-width: 768px) and (max-width: 991px)', () => {
    let splitAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "[data-section='3d-shape']",
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    });

    splitAnimation.to("[data-scene='left']", {
      x: '-35vw',
      scale: 1.54, // 30% kleiner als 2.2 (2.2 * 0.7)
      transformOrigin: 'center center',
      ease: 'power1.in',
    });

    splitAnimation.to(
      "[data-scene='right']",
      {
        x: '28vw',
        scale: 1.26, // 30% kleiner als 1.8 (1.8 * 0.7)
        transformOrigin: 'center center',
        ease: 'power1.in',
      },
      '<'
    );
  });
}
