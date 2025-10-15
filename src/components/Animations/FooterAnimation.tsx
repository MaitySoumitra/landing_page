import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FooterAnimation() {
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#footer-cta",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
    });

    // Step 1: Title slides from left
    timeline.fromTo(
      "#footer-title",
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
      0
    );

    // Step 2: "GET IN TOUCH &" from right
    timeline.fromTo(
      "#footer-touch-line",
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
      0.2
    );

    // Step 3: Button scales from 0 to 1
    timeline.fromTo(
      "#footer-touch-button",
      { scale: 0, opacity: 0 },
      { scale: 1.1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
      0.4
    );

    // Step 4: Arrow rotates from bottom right corner
    timeline.fromTo(
      "#footer-arrow-icon",
      { rotation: 120, y: 30, x: 30, opacity: 0 },
      { rotation: 0, y: 0, x: 0, opacity: 1, duration: 0.6, ease: "back.out(2)" },
      0.45
    );

    // Step 5: "WORK TOGETHER" slides up with bounce
    timeline.fromTo(
      "#footer-work-line",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "bounce.out",
      },
      0.6
    );

    // Step 6: Whole block floats slightly up then resets
    timeline.to(
      "#footer-cta",
      {
        y: -10,
        duration: 1.5,
        ease: "sine.inOut",
        repeat: 1,
        yoyo: true,
      },
      1
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
