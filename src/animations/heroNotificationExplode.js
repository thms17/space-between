import { gsap } from 'gsap';
import Physics2DPlugin from 'gsap/Physics2DPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(SplitText, ScrollTrigger, Physics2DPlugin);

// 🚀 Textelement splitten
const text = document.querySelector('[hero=notification]');
const split = new SplitText(text, { type: 'chars' });

// 🌟 Timeline für die Explosionsanimation
let explodeAnimation = gsap.to(split.chars, {
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
  start: 'bottom 60%', // Startpunkt der Explosion bleibt
  end: 'bottom top', // Reset, wenn `bottom` die **obere Viewport-Kante** erreicht
  onEnter: () => explodeAnimation.play(),
  onEnterBack: () => explodeAnimation.restart().pause(),
});
