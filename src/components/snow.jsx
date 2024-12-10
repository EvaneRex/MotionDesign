import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react"; // Imports the hook, its supposed to handle the cleanup part
import ScrollTrigger from "gsap/ScrollTrigger"; // Importing the ScrollTrigger plugin

// Notes from https://codepen.io/rohaidAli/pen/KKJjgpm?editors=1010 with adjustments.

// Registers the plugin
gsap.registerPlugin(ScrollTrigger);

const Snow = () => {
  const snowContainerRef = useRef(null);

  // GSAP animation for snowflakes
  useGSAP(() => {
    const container = snowContainerRef.current; // Gets the DOM element for the container
    if (!container) return; // Checks if the container is valid, if its not, the snow wont fall

    const snowflakes = []; // Array to store the snowflakes

    // Creates and appends the snowflakes to the containter
    for (let i = 0; i < 80; i++) {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      snowflake.style.left = `${Math.random() * 100}vw`; // Random horizontal position
      snowflake.style.width = `${5 + Math.random() * 10}px`; // Random size for snowflakes
      snowflake.style.height = snowflake.style.width; // Ensure snowflakes are round
      container.appendChild(snowflake);
      snowflakes.push(snowflake);
    }

    // Animate each of the snowflakes
    snowflakes.forEach((snowflake) => {
      // Random fall distance and duration
      const fallDistance = 40 + Math.random() * 20; // The vertical distance
      const duration = 5 + Math.random() * 20; // Time to complete the fall

      // GSAP animation: snowflakes fall from above the viewport and to the bottom
      return gsap.fromTo(
        snowflake,
        {
          y: `-${fallDistance}vh`, // Start above the viewport
          opacity: 0, // Starts out invisible
        },
        {
          y: `100vh`, // Fall to the bottom
          opacity: 0.8, // Slight fade
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
        gsap.to(snowContainerRef.current, {
          opacity: 1 - Math.min(self.progress, 1),
        });
      },
    });
  }, []); // Only runs once when the component is mounted

  return <div ref={snowContainerRef} className="snow-container"></div>;
};

export default Snow;
