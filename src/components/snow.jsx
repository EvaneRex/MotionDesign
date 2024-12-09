import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react"; // Imports the hook, its supposed to handle the cleanup part
import ScrollTrigger from "gsap/ScrollTrigger";

// Notes from https://codepen.io/rohaidAli/pen/KKJjgpm?editors=1010 with adjustments.

//registers the plugin
gsap.registerPlugin(ScrollTrigger);

const Snow = () => {
  const snowContainerRef = useRef(null);
  const [opacity, setOpacity] = useState(1); // For the snow to fade when scrolling

  // GSAP animation for snowflakes
  useGSAP(() => {
    const container = snowContainerRef.current;
    if (!container) return; // Checks if the container is valid, if its not, the snow wont fall

    const snowflakes = [];

    // Create snowflakes
    for (let i = 0; i < 80; i++) {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.width = `${5 + Math.random() * 10}px`; // Random sizes
      snowflake.style.height = snowflake.style.width;
      container.appendChild(snowflake);
      snowflakes.push(snowflake);
    }

    // Animate snowflakes
    const animations = snowflakes.map((snowflake) => {
      const fallDistance = 40 + Math.random() * 20; // Random fall distance
      const duration = 5 + Math.random() * 3; // Random duration

      return gsap.fromTo(
        snowflake,
        {
          y: `-${fallDistance}vh`, // Start above the viewport
          opacity: 0,
        },
        {
          y: `100vh`, // Fall to the bottom
          opacity: 0.8,
          x: `+=${Math.random() * 15 - 5}vw`, // Slight horizontal drift
          duration: duration,
          repeat: -1, // Infinite loop
          ease: "none",
          delay: Math.random() * 5, // Staggered start
        }
      );
    });
  });

  // Scroll using the scrolltrigger plugin, to ensure that the snow disapears when the newyear box is in full view
  useEffect(() => {
    ScrollTrigger.create({
      trigger: snowContainerRef.current,
      start: "top top", // Starts when the top of the container is at the top
      end: "bottom top", // Ends when the bottom of the container is at the top of the viewport
      scrub: true, // Smoothly animates based on scroll position
      onUpdate: (self) => {
        // This updates the opacity based on the scroll position
        const newOpacity = 1 - Math.min(self.progress, 1);
        gsap.to(snowContainerRef.current, { opacity: newOpacity });
      },
    });
  }, []);

  return (
    <div
      ref={snowContainerRef}
      className="snow-container"
      style={{ opacity: opacity }} // Apply opacity from scroll effect
    ></div>
  );
};

export default Snow;
