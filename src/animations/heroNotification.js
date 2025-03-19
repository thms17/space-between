import { gsap } from 'gsap';
import Physics2DPlugin from 'gsap/Physics2DPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(SplitText, ScrollTrigger, Physics2DPlugin);

// 🚀 Wähle den Paragraphen innerhalb von hero=notification
const notificationContainer = document.querySelector("[hero='notification']");
const notificationText = notificationContainer?.querySelector('p');

if (notificationText) {
  // Splitte den Text in Zeilen für die erste Animation
  let splitLines = new SplitText(notificationText, { type: 'lines' });

  // Setze den Container auf sichtbar
  gsap.set(notificationContainer, { opacity: 1 });

  // 🎬 Erste Animation: Text einblenden
  gsap.from(splitLines.lines, {
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

  // 🚀 Explosionsanimation – nur `chars` erneut splitten, um Redundanz zu vermeiden
  let splitChars = new SplitText(notificationText, { type: 'chars' });

  let explodeAnimation = gsap.to(splitChars.chars, {
    duration: 2.5,
    opacity: 0,
    rotation: 'random(-2000, 2000)',
    physics2D: { angle: 'random(240, 320)', velocity: 'random(300, 600)', gravity: 800 },
    stagger: 0.015,
    paused: true, // Startet nur, wenn getriggert
  });

  // 🎯 ScrollTrigger für Explosion + Reset
  ScrollTrigger.create({
    trigger: "[data-section='hero']",
    start: 'bottom 60%', // Explosion startet
    end: 'bottom top', // Reset, wenn `bottom` die **obere Viewport-Kante** erreicht
    onEnter: () => explodeAnimation.play(),
    onEnterBack: () => explodeAnimation.restart().pause(),
  });
}
