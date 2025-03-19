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

  function createSceneAnimation(leftX, leftScale, rightX, rightScale) {
    let splitAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "[data-section='3d-shape']",
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        refreshPriority: 1,
        invalidateOnRefresh: true,
        toggleActions: 'play reverse play reverse',
        onLeave: () => {
          // **Finale Positionen hart setzen**
          gsap.set("[data-scene='left']", { x: leftX, scale: leftScale });
          gsap.set("[data-scene='right']", { x: rightX, scale: rightScale });
        },
        onEnterBack: () => {
          // **Sicherstellen, dass GSAP beim Hochscrollen die richtige Position nimmt**
          gsap.set("[data-scene='left']", { x: leftX, scale: leftScale });
          gsap.set("[data-scene='right']", { x: rightX, scale: rightScale });
          ScrollTrigger.refresh(); // **Forciere Update, falls GSAP es verschluckt**
        },
      },
    });

    splitAnimation.to("[data-scene='left']", { x: leftX, scale: leftScale, ease: 'power1.in' });
    splitAnimation.to(
      "[data-scene='right']",
      { x: rightX, scale: rightScale, ease: 'power1.in' },
      '<'
    );

    return () => splitAnimation.revert();
  }

  // **Breakpoints & Werte**
  mm.add('(min-width: 1200px)', () => createSceneAnimation('-42vw', 2.2, '30vw', 1.8));
  mm.add('(max-width: 1199px)', () => createSceneAnimation('-50vw', 2.2, '40vw', 1.8));
  mm.add('(max-width: 991px)', () => createSceneAnimation('-90vw', 2.5, '75vw', 2));
}
