// src/components/Animations/PackagesAnimation.tsx
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PackagesAnimation() {
  useEffect(() => {
    const animations = [
      {
        selector: ".top-section",
        fromVars: { y: -50, opacity: 0.2 },
      },
      {
        selector: ".left-image",
        fromVars: { x: -50, opacity: 0.2 },
      },
      {
        selector: ".right-content",
        fromVars: { x: 50, opacity: 0.2 },
      },
      {
        selector: ".bottom-image",
        fromVars: { y: -50, opacity: 0.2 },
      },
      {
        selector: ".bottom-text",
        fromVars: { y: 50, opacity: 0.2 },
      },
      {
        selector: ".bottom-image",
        fromVars: { x: 50, opacity: 0.2 },
      },
    ];

    animations.forEach(({ selector, fromVars }) => {
      gsap.fromTo(
        selector,
        fromVars,
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: selector,
            start: "top 50%",
            toggleActions: "play none none reverse",
            // markers: true,
          },
        }
      );
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return null;
};


