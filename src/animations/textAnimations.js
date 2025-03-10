import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(SplitText, ScrollTrigger);

export function animateText() {
  // ✨ Heading Animation mit größerem Stagger
  let heading = new SplitText("[text-animation='heading']", { type: 'words' });

  gsap.fromTo(
    heading.words,
    { opacity: 0, y: 30, filter: 'blur(15px)' },
    {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 6, // Etwas längere Dauer für weicheres Erscheinen
      ease: 'power3.out',
      stagger: 0.5, // Größerer Stagger für verzögerte Wortanimation
      scrollTrigger: {
        trigger: "[text-animation='heading']",
        start: 'top 50%',
        end: 'top 0%',
        scrub: 2.5, // Längere Scrub-Zeit für sanfteres Erscheinen
      },
    }
  );

  // ✨ Paragraph Animation (langsamer)
  gsap.utils.toArray("[text-animation='paragraph']").forEach((paragraph, i) => {
    let splitParagraph = new SplitText(paragraph, { type: 'words' });

    gsap.fromTo(
      splitParagraph.words,
      { opacity: 0, y: 4, filter: 'blur(3px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1.5,
        ease: 'power2.out',
        stagger: 0.3,
        scrollTrigger: {
          trigger: paragraph,
          start: 'top 85%',
          end: 'top top',
          scrub: 1.5,
          delay: i * 0.3,
        },
      }
    );
  });
}
