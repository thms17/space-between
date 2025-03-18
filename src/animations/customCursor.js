import { gsap } from './gsapSetup';

const cursor = document.querySelector('.custom-cursor');

if (cursor) {
  gsap.set(cursor, { xPercent: -50, yPercent: -50 });

  document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.15, // Sanfte Verzögerung
      ease: 'power2.out',
    });
  });

  document.addEventListener('mouseenter', () => {
    gsap.to(cursor, { opacity: 1, duration: 0.3 });
  });

  document.addEventListener('mouseleave', () => {
    gsap.to(cursor, { opacity: 0, duration: 0.3 });
  });
}
