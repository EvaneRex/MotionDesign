import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

//notes from https://codepen.io/rohaidAli/pen/KKJjgpm?editors=1010 with adjustments. Might add some svgs instead, later, maybe some thing where the mouse affects the snow. idk

const Snow = () => {
  const snowContainerRef = useRef(null);

  useGSAP(() => {
    const container = snowContainerRef.current;
    if (!container) return;

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

    // Return animations for cleanup
    return animations;
  });

  return <div ref={snowContainerRef} className="snow-container"></div>;
};

export default Snow;
