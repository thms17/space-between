import { Container, Shape, Sprite, SpriteSheet, Stage, Ticker } from '@createjs/easeljs';

let rect, stage, canvas, sprite, spkls, sparkleInterval;

// Einheitliche Werte für alle Breakpoints
let sparkleConfig = {
  scale: 0.7,
  speed: 0.6,
  lifeMax: 100,
  fadePower: 3,
};

export function initSparkles() {
  const sparkleSpan = document.getElementById('sparkle-placeholder');
  if (!sparkleSpan) {
    console.warn('⚠️ Kein #sparkle-placeholder gefunden! Sparkles werden nicht gestartet.');
    return;
  }

  function getRectWithRetry() {
    rect = sparkleSpan.getBoundingClientRect();
    if (!rect || rect.height === 0) {
      setTimeout(getRectWithRetry, 50); // Falls noch nicht bereit, erneut versuchen
    }
  }
  getRectWithRetry();

  const existingCanvas = document.getElementById('sparkleCanvas');
  if (existingCanvas) existingCanvas.remove();

  // Neues Canvas erstellen
  canvas = document.createElement('canvas');
  canvas.id = 'sparkleCanvas';
  canvas.width = 100;
  canvas.height = 100;
  canvas.style.position = 'absolute';

  // Das Canvas soll exakt dort starten, wo der Placeholder beginnt
  const placeholderRect = sparkleSpan.getBoundingClientRect();
  canvas.style.top = '0'; // Direkt an der oberen Kante des Placeholders ausrichten
  canvas.style.left = '50%';
  canvas.style.transform = 'translateX(-50%)';
  canvas.style.pointerEvents = 'none';
  canvas.style.visibility = 'visible';

  // Canvas in den Placeholder einfügen
  sparkleSpan.appendChild(canvas);

  stage = new Stage(canvas);

  const img = new Image();
  img.onload = imageLoaded;
  img.src =
    'https://cdn.prod.website-files.com/67c8857960583da47e677a41/67cadfcd79e3e14dd41d5fa8_spritesheet_sparkle.png';
}

function imageLoaded() {
  if (!rect) {
    console.error('❌ Konnte die Position von #sparkle-placeholder nicht bestimmen!');
    return;
  }

  const data = {
    images: [this],
    frames: { width: 21, height: 23, regX: 10, regY: 11 },
  };

  sprite = new Sprite(new SpriteSheet(data));

  spkls = new Container();
  stage.addChild(spkls);

  Ticker.timingMode = Ticker.RAF;
  Ticker.addEventListener('tick', tick);

  sparkleInterval = setInterval(
    () => {
      addSparkles(
        4 + Math.floor(Math.random() * 3),
        canvas.width / 2.4, // X-Wert bleibt in der Mitte des Canvas
        22, // Y-Wert: Startpunkt direkt an der oberen Kante des Canvas
        sparkleConfig.speed
      );
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
    sparkle.alpha =
      sparkle.alphaStart * Math.pow(sparkle.life / sparkle.lifeMax, sparkleConfig.fadePower);
  }
  stage.update(event);
}

function addSparkles(count, x, y, speed) {
  for (let i = 0; i < count; i++) {
    let sparkle = sprite.clone();
    sparkle.x = x + (Math.random() * 20 - 10) + 9;
    sparkle.y = y;
    sparkle.alpha = sparkle.alphaStart = Math.random() * 0.8 + 0.5;
    sparkle.scale = (Math.random() * 1.2 + 0.6) * sparkleConfig.scale;
    sparkle.life = sparkle.lifeMax = Math.random() * sparkleConfig.lifeMax + 80;
    sparkle.vY = (Math.random() * 1.5 + 0.5) * speed;
    sparkle.gotoAndPlay((Math.random() * sparkle.spriteSheet.getNumFrames()) | 0);
    spkls.addChild(sparkle);
  }
}
