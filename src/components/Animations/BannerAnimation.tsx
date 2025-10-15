import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BannerAnimation: React.FC = () => {
  useEffect(() => {
  // ScrollTrigger media query based
  ScrollTrigger.matchMedia({
    // Tablet & Desktop (min-width: 768px)
    "(min-width: 768px)": () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#banner-section", // <-- replace with the ID or class of your banner wrapper
          start: "top 80%", // when top of trigger hits 80% of viewport
          end: "bottom 20%",
          toggleActions: "play reverse play reverse", // play on enter, reverse on leave
          markers: false, // set to true for debugging
        }
      });

      // Example animation (collision)
      timeline.fromTo("#capturing", { x: 0 }, { x: 60, duration: 0.5, ease: "power1.inOut" }, 0.5)
              .fromTo("#essence", { x: 0 }, { x: -50, duration: 0.5, ease: "power1.inOut" }, 0.5)
              .to("#the", {
                y: -50,
                duration: 1,
                ease: "power1.inOut",
                yoyo: true,
                repeat: 1,
              }, 0.75)
              .to("#capturing, #essence", {
                x: 0,
                duration: 0.75,
                ease: "power1.inOut"
              }, 2);

      // Additional animations (property letters, image, your-text, etc.)
      // You can chain them using timeline.add(...) or .to(...) etc

      const propertyElement = document.getElementById("property");
      if (propertyElement) {
        const letters = propertyElement.textContent?.split('') || [];
        propertyElement.innerHTML = '';
        letters.forEach(letter => {
          const span = document.createElement('span');
          span.textContent = letter;
          span.classList.add('letter');
          propertyElement.appendChild(span);
        });

        gsap.fromTo(".letter", {
          y: 0,
          rotationX: 90,
          scale: 1.2,
        }, {
          rotationX: 0,
          scale: 1,
          stagger: 0.1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#property",
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          }
        });
      }

      // Animate main image
      gsap.fromTo("#banner-main-image", {
        filter: "blur(5px) opacity(0.5)",
        transform: "rotate(15deg)"
      }, {
        filter: "blur(0px) opacity(1)",
        transform: "rotate(0deg)",
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#banner-main-image",
          start: "top 20%",
          toggleActions: "play reverse play reverse",
        }
      });

      // Animate YOUR, image, SEE sequence
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#your-text",
          start: "top 70%",
          toggleActions: "play reverse play reverse"
        }
      });

      tl.fromTo("#your-text", { opacity: 1 }, {
        x: 0,
        zIndex: 10,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
      })
      .to("#your-image", {
        x: -130,
        width: '135px',
        duration: 2.8,
        ease: "power2.out",
        delay: 0.3,
      })
      .to("#your-image", {
        x: -220,
        width: '80px',
        duration: 2.8,
        ease: "power2.out",
      })
      .to("#your-image", {
        x: -140,
        width: '135px',
        duration: 2.8,
        ease: "power2.out",
      })
      .fromTo("#see-text", { x: 0, opacity: 1 }, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      })
      .to("#your-image", {
        x: 0,
        width: '200px',
        duration: 0.6,
        ease: "power2.inOut",
      })
      .to(["#your-text", "#see-text"], {
        x: 0,
        scale: 1,
        rotation: 0,
        duration: 0.6,
        ease: "power2.inOut",
      });

        const lensTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#lens-animation",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    });

    lensTimeline
  .to("#lens-caption",       // Step 1
    { zIndex: 20, x: 0, y:0, opacity: 1 }
  )
  .fromTo("#lens-image", {           // Step 2
    x: 0,
    
    duration: 2.8,
   
  },{
    x: 250,
    width: '250px',
    duration: 2.8,
    ease: "power2.out",
  })
  .fromTo("#lens-image", {           // Step 3
    x: 250,
  },{
x: 540,
    width: '300px',
    duration: 2.8,
    ease: "power2.out",
  })
  .fromTo("#lens-image", {           // Step 4
    x: 540,
  },{
  x: 250,
    width: '250px',
    duration: 2.8,
    ease: "power2.out",
})
  .fromTo("#lens-image", {           // Step 5 (Reset)
    x: 250,
    
  },
  {    x: 0,
    width: '200px',
    duration: 0.6,
    ease: "power2.inOut",
  });


    },
  


    // Mobile (max-width: 767px)
    "(max-width: 767px)": () => {
      // Only a few animations on mobile
      gsap.fromTo("#banner-main-image", {
        opacity: 0.5,
        filter: "blur(3px)"
      }, {
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#banner-main-image",
          start: "top 20%",
          toggleActions: "play reverse play reverse"
        }
      });

      // Maybe animate "property" title only
      
    }
  });
}, []);

    return null; // This component does not render anything itself, it's just for animation
};

export default BannerAnimation;
