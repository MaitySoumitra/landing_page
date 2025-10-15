import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AlbumsAnimation() {
  useEffect(() => {
    const subtitle = document.getElementById("subtitle");
    const mainTitle = document.getElementById("main-title");
    const leftImg = document.getElementById("left-img");
    const rightTopImg = document.getElementById("right-top-img");
    const rightBottomImg = document.getElementById("right-bottom-img");
const  leftPart = document.getElementById("left-part");
const  beautifulPart = document.getElementById("beautiful-part");
const  rightPart = document.getElementById("right-part");
    // Animate subtitle h2: simple fade + slide up on scroll
    gsap.fromTo(
      subtitle,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: subtitle,
          start: "top 90%",
          end: "bottom 70%",
          scrub: true,
        },
      }
    );

    // Animate h1 ALBUMS gradient background position to swap colors
    gsap.to(mainTitle, {
      backgroundPosition: "100% center",
      duration: 1,
      ease: "none",
      scrollTrigger: {
        trigger: mainTitle,
        start: "top 80%",
        end: "bottom 50%",
        scrub: true,
        toggleActions: "play reverse play reverse",
      },
    });

    // Images blur and opacity on scroll
    [leftImg, rightTopImg, rightBottomImg].forEach((img) => {
      if (!img) return;
      gsap.fromTo(
        img,
        { filter: "blur(3px)", opacity: 0.3 },
        {
          filter: "blur(0px)",
          opacity: 1,
          scrollTrigger: {
            trigger: img,
            start: "top 90%",
            end: "top 60%",
            scrub: true,
          },
        }
      );
    });
      gsap.fromTo(
      leftPart,
      { x: 0, color: "#ef4444" }, // red
      {
        x: 30, // move right 30px
        color: "#ffffff", // white
        scrollTrigger: {
          trigger: "#clean-eye-text",
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    // Animate right part: move left and change color red → white
    gsap.fromTo(
      rightPart,
      { x: 0, color: "#ef4444" }, // red
      {
        x: -30, // move left 30px
        color: "#ffffff", // white
        scrollTrigger: {
          trigger: "#clean-eye-text",
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    // Animate beautiful part: change color white → red
    gsap.fromTo(
      beautifulPart,
      { color: "#ffffff" }, // white
      {
        color: "#ef4444", // red
        scrollTrigger: {
          trigger: "#clean-eye-text",
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}
