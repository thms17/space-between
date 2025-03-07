import { Container, Shape, Sprite, SpriteSheet, Stage, Ticker } from '@createjs/easeljs';

let rect, stage, canvas, sprite, spkls, sparkleInterval;

export function initSparkles() {
  const sparkleSpan = document.getElementById('sparkle-placeholder');
  if (!sparkleSpan) {
    console.warn('⚠️ Kein #sparkle-placeholder gefunden! Sparkles werden nicht gestartet.');
    return;
  }

  // 📌 `rect` speichern, damit es auch in anderen Funktionen verfügbar ist
  rect = sparkleSpan.getBoundingClientRect();

  canvas = document.createElement('canvas');
  canvas.id = 'sparkleCanvas';
  canvas.width = rect.width * 3;
  canvas.height = rect.height * 4.8;
  canvas.style.position = 'absolute';
  canvas.style.left = `${rect.left + window.scrollX}px`;
  canvas.style.top = `${rect.top + window.scrollY}px`;
  canvas.style.pointerEvents = 'none';
  canvas.style.transform = 'translateX(-50%)';
  document.body.appendChild(canvas);

  stage = new Stage(canvas);

  const img = new Image();
  img.onload = imageLoaded;
  img.src =
    'https://cdn.prod.website-files.com/67c8857960583da47e677a41/67cadfcd79e3e14dd41d5fa8_spritesheet_sparkle.png';
}
function imageLoaded() {
  const data = {
    images: [this],
    frames: { width: 21, height: 23, regX: 10, regY: 11 },
  };

  sprite = new Sprite(new SpriteSheet(data));

  spkls = new Container();
  stage.addChild(spkls);

  Ticker.timingMode = Ticker.RAF;
  Ticker.addEventListener('tick', tick);

  // 🌟 Starte kontinuierliches Funkeln mit weicherer Bewegung
  sparkleInterval = setInterval(
    () => {
      addSparkles(4 + Math.floor(Math.random() * 3), canvas.width / 2, rect.height * 1.2, 0.8);
    },
    300 + Math.random() * 300
  );
}

function tick(event) {
  let l = spkls.numChildren;
  let m = event.delta / 20;
  for (let i = 0; i < l; i++) {
    let sparkle = spkls.getChildAt(i);
    if (--sparkle.life <= 0) {
      spkls.removeChild(sparkle);
      i--;
      l--;
      continue;
    }
    sparkle.y += sparkle.vY * m;
    sparkle.alpha = sparkle.alphaStart * Math.pow(sparkle.life / sparkle.lifeMax, 0.8);
  }
  stage.update(event);
}

function addSparkles(count, x, y, speed) {
  for (let i = 0; i < count; i++) {
    let sparkle = sprite.clone();
    sparkle.x = x + (Math.random() * 20 - 10) + 5; // +5 verschiebt nach rechts
    sparkle.y = y;
    sparkle.alpha = sparkle.alphaStart = Math.random() * 0.8 + 0.5;
    sparkle.scale = Math.random() * 1.5 + 0.8;
    sparkle.life = sparkle.lifeMax = Math.random() * 120 + 80;
    sparkle.vY = (Math.random() * 1.5 + 0.5) * speed;
    sparkle.gotoAndPlay((Math.random() * sparkle.spriteSheet.getNumFrames()) | 0);
    spkls.addChild(sparkle);
  }
}
