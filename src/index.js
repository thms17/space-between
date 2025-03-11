import './styles/general.css';
import './animations/fix-left-positioning.js';

import { animateBeam } from './animations/beamAnimation';
import { animateBeamImage } from './animations/beamImageAnimation';
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
});
