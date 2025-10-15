import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LayoutAnimation() {
  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 768px)": () => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: "#card-animation-section",
            start: "top top",
          end: "0px",
            scrub: true,
            pin: false,
            anticipatePin: 1,
            
            // markers: true,
          },
        });

        gsap.set(".animated-card", {
          rotateY: 25,
          opacity: 0.6,
        });

        // Animate each card one by one
        ["#card-1", "#card-2", "#card-3"].forEach((cardId) => {
          timeline
            .to(cardId, {
              rotateY: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
            })
            .to(`${cardId} button`, {
              backgroundColor: "#dc2626",
              color: "#fff",
              duration: 0.5,
              delay: 0.5,
            });
        });
      },
    });
  }, []);

  return null;
};


