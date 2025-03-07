import '../libs/unicornStudio.umd';

const removeWatermark = () => {
  const unicornWatermark = document.querySelector("a[href*='unicorn.studio']");
  if (unicornWatermark) {
    unicornWatermark.remove();
    clearInterval(watermarkInterval); // Sobald es entfernt wurde, Intervall stoppen
  }
};

// Prüft alle 250ms, ob das Wasserzeichen existiert
const watermarkInterval = setInterval(removeWatermark, 250);
