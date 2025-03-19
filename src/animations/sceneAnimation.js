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
        invalidateOnRefresh: true,
      },
    }
  );

  let mm = gsap.matchMedia();

  // **1200px+**
  mm.add('(min-width: 1200px)', () => {
    let splitAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "[data-section='3d-shape']",
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        toggleActions: 'play reverse play reverse',
        invalidateOnRefresh: true,
        refreshPriority: 1,
        onLeave: () => {
          gsap.set("[data-scene='left']", { x: '-37vw', scale: 2.2 });
          gsap.set("[data-scene='right']", { x: '25vw', scale: 1.8 });
        },
        onEnterBack: () => {
          gsap.set("[data-scene='left']", { x: '-37vw', scale: 2.2 });
          gsap.set("[data-scene='right']", { x: '25vw', scale: 1.8 });
        },
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

    return () => splitAnimation.revert();
  });

  // **992px - 1199px**
  mm.add('(max-width: 1199px)', () => {
    let splitAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "[data-section='3d-shape']",
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        toggleActions: 'play reverse play reverse',
        invalidateOnRefresh: true,
        refreshPriority: 1,
        onLeave: () => {
          gsap.set("[data-scene='left']", { x: '-50vw', scale: 2.2 });
          gsap.set("[data-scene='right']", { x: '40vw', scale: 1.8 });
        },
        onEnterBack: () => {
          gsap.set("[data-scene='left']", { x: '-50vw', scale: 2.2 });
          gsap.set("[data-scene='right']", { x: '40vw', scale: 1.8 });
        },
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

    return () => splitAnimation.revert();
  });

  // **0px - 991px**
  mm.add('(max-width: 991px)', () => {
    let splitAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "[data-section='3d-shape']",
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        toggleActions: 'play reverse play reverse',
        invalidateOnRefresh: true,
        refreshPriority: 1,
        onLeave: () => {
          gsap.set("[data-scene='left']", { x: '-90vw', scale: 2.5 });
          gsap.set("[data-scene='right']", { x: '75vw', scale: 2 });
        },
        onEnterBack: () => {
          gsap.set("[data-scene='left']", { x: '-90vw', scale: 2.5 });
          gsap.set("[data-scene='right']", { x: '75vw', scale: 2 });
        },
      },
    });

    splitAnimation.to("[data-scene='left']", {
      x: '-90vw',
      scale: 2.5,
      transformOrigin: 'center center',
      ease: 'power1.in',
    });

    splitAnimation.to(
      "[data-scene='right']",
      {
        x: '75vw',
        scale: 2,
        transformOrigin: 'center center',
        ease: 'power1.in',
      },
      '<'
    );

    return () => splitAnimation.revert();
  });
}
