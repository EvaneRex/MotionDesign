import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

//notes from https://codepen.io/rohaidAli/pen/KKJjgpm?editors=1010 with adjustments. Might add some svgs instead, later, maybe some thing where the mouse affects the snow. idk

const Snow = () => {
  const snowContainerRef = useRef(null);

  useEffect(() => {
    const container = snowContainerRef.current;
    const snowflakes = []; // Empty array for the snowflakes

    // Creates snowflakes
    for (let i = 0; i < 80; i++) {
      // Number of snowflakes on screen
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.width = `${5 + Math.random() * 10}px`; // Randomizes sizes
      snowflake.style.height = snowflake.style.width;
      container.appendChild(snowflake);
      snowflakes.push(snowflake);
    }

    snowflakes.forEach((snowflake) => {
      const fallDistance = 40 + Math.random() * 20; // Random fall distance, also dictates how fast the fall down, how they spread horisontally
      const duration = 5 + Math.random() * 3; // Random duration

      gsap.fromTo(
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
          repeat: -1, // Loop
          ease: "none",
          delay: Math.random() * 5, // Stagger start times
        }
      );
    });

    // Cleanup on component unmount
    return () => {
      snowflakes.forEach((flake) => flake.remove());
      gsap.killTweensOf(snowflakes); // Kill all GSAP animations
    };
  }, []);

  return <div ref={snowContainerRef} className="snow-container"></div>;
};

export default Snow;
