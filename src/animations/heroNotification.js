import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(SplitText, ScrollTrigger);
gsap.registerPlugin(SplitText);

// Wähle den Paragraphen innerhalb von hero=notification
const notificationText = document.querySelector("[hero='notification'] p");

if (notificationText) {
  // Splitte den Text in Zeilen
  let split = new SplitText(notificationText, { type: 'lines' });

  // Setze den Container auf sichtbar
  gsap.set("[hero='notification']", { opacity: 1 });

  // Animations-Timeline
  gsap.from(split.lines, {
    rotationX: -200,
    transformOrigin: '50% 50% -10px',
    opacity: 0,
    duration: 0.8,
    ease: 'power3',
    force3D: true,
    stagger: 0.45,
    scale: 0.8,
    delay: 4,
  });
}
