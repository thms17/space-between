import { gsap } from './gsapSetup';

const cursor = document.querySelector('.custom-cursor');

if (cursor) {
  gsap.set(cursor, { xPercent: -50, yPercent: -50 });

  document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0, // Kein Delay → Sofortige Bewegung
      ease: 'none', // Kein Ease → Direktes Folgen
    });
  });

  document.addEventListener('mouseenter', () => {
    gsap.to(cursor, { opacity: 1, duration: 0.1 });
  });

  document.addEventListener('mouseleave', () => {
    gsap.to(cursor, { opacity: 0, duration: 0.1 });
  });
}
// // 🛠️ Scroll-Fix: Mausposition nach dem Scrollen anpassen
// document.addEventListener('scroll', () => {
//   isScrolling = true;

//   gsap.to(cursor, {
//     x: lastX + window.scrollX,
//     y: lastY + window.scrollY,
//     duration: 0,
//   });

//   setTimeout(() => {
//     isScrolling = false;
//   }, 50); // Verhindert, dass Trails beim Scrollen erzeugt werden
// });

// function createTrail(x, y) {
//   const trail = document.createElement('div');
//   trail.classList.add('cursor-trail');
//   document.body.appendChild(trail);

//   gsap.set(trail, {
//     x: x,
//     y: y,
//     opacity: 1,
//     scale: 1,
//   });

//   gsap.to(trail, {
//     opacity: 0,
//     scale: 1.5,
//     duration: 1.5,
//     ease: 'power2.out',
//     onComplete: () => trail.remove(),
//   });
// }
