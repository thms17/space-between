// import './styles/customCursor.css';
import './animations/fix-left-positioning.js';
import './animations/heroNotification.js';
import './animations/heroNotificationExplode.js';

// import './animations/customCursor.js';
import { animateBeam } from './animations/beamAnimation';
import { animateBeamImage } from './animations/beamImageAnimation';
import { animateHeroSection } from './animations/heroFadeIn.js';
import { animateScene } from './animations/sceneAnimation';
import { initSparkles } from './animations/sparkleAnimation.js';
import { animateText } from './animations/textAnimations';

// Alle Animationen starten
animateScene();
animateBeam();
animateBeamImage();
animateText();
document.addEventListener('DOMContentLoaded', () => {
  initSparkles();
  animateHeroSection();
});
