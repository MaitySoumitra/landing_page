import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AlbumsAnimation() {
  useEffect(() => {
   
    const reviewTitle = document.getElementById("review-title");
   
  

    // Animate h1 ALBUMS gradient background position to swap colors
    gsap.to(reviewTitle, {
      backgroundPosition: "100% center",
      duration: 1,
      ease: "none",
      scrollTrigger: {
        trigger: reviewTitle,
        start: "top 80%",
        end: "bottom 50%",
        scrub: true,
        toggleActions: "play reverse play reverse",
      },
    });

   
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}
