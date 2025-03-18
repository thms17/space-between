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

  // **iOS Safari Detection**
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  // 1200px+
  mm.add('(min-width: 1200px)', () => {
    let splitAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "[data-section='3d-shape']",
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        pin: isIOS, // **Pin auf Safari iOS aktivieren**
        toggleActions: 'play reverse play reverse',
        onEnterBack: () => splitAnimation.restart(), // **Animation neu starten**
        onLeaveBack: () => splitAnimation.reverse(), // **Sauberes Zurückspulen**
        invalidateOnRefresh: true,
        refreshPriority: 1,
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

  // 992px - 1199px
  mm.add('(max-width: 1199px)', () => {
    let splitAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "[data-section='3d-shape']",
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        pin: isIOS, // **Fix für Safari iOS**
        toggleActions: 'play reverse play reverse',
        onEnterBack: () => splitAnimation.restart(),
        onLeaveBack: () => splitAnimation.reverse(),
        invalidateOnRefresh: true,
        refreshPriority: 1,
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

  // 0px - 991px
  mm.add('(max-width: 991px)', () => {
    let splitAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "[data-section='3d-shape']",
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        toggleActions: 'play reverse play reverse',
        onEnterBack: () => splitAnimation.restart(),
        onLeaveBack: () => splitAnimation.reverse(),
        invalidateOnRefresh: true,
        refreshPriority: 1,
      },
    });

    splitAnimation.fromTo(
      "[data-scene='left']",
      { scale: 1 },
      {
        x: '-90vw',
        scale: 2.5,
        transformOrigin: 'center center',
        ease: 'power1.in',
      }
    );

    splitAnimation.fromTo(
      "[data-scene='right']",
      { scale: 1 },
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
