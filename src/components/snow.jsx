/**
 * Snow component:
 * This component renders and animates the snowflakes falling from the top of the viewport.
 * Each snowflake has a random size, opacity and horizontal drift to make it more organic. The animation is triggered when the snow container enteres the viewport and pauses when it leaves.
 * The snow animation also restarts when scrolling back into view.
 */

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Notes from https://codepen.io/rohaidAli/pen/KKJjgpm?editors=1010 with adjustments.

// Register plugin
gsap.registerPlugin(ScrollTrigger);

const Snow = () => {
  const snowContainerRef = useRef(null); // Ref for the container

  useEffect(() => {
    const container = snowContainerRef.current; // Gets the DOM element for the container
    if (!container) return; // Checks if the container is valid, if it's not, the snow won't fall

    const snowflakes = []; // Array to store the snowflakes

    // Creates and appends the snowflakes to the container
    for (let i = 0; i < 80; i++) {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake"; // Styling is found in the scss
      snowflake.style.left = `${Math.random() * 100}vw`; // Random horizontal position
      snowflake.style.width = `${5 + Math.random() * 10}px`; // Random size for snowflakes
      snowflake.style.height = snowflake.style.width; // Ensure snowflakes has the same height and width
      container.appendChild(snowflake);
      snowflakes.push(snowflake); // Pushes the snowflakes to the array
    }

    // GSAP animation: Animation for each of the snowflakes
    const animations = snowflakes.map((snowflake) => {
      // Random fall distance and duration
      const fallDistance = 40 + Math.random() * 20; // The vertical distance
      const duration = 5 + Math.random() * 20; // Time to complete the fall
      const opacity = Math.random() * 0.5 + 0.5; // Random opacity

      // GSAP animation: snowflakes fall from above the viewport and to the bottom
      return gsap.fromTo(
        snowflake,
        {
          y: `-${fallDistance}vh`, // Start above the viewport
          opacity: 0, // Starts out invisible
        },
        {
          y: `100vh`, // Fall to the bottom
          opacity: opacity, // Slight fade
          x: `+=${Math.random() * 15 - 5}vw`, // Slight horizontal drift
          duration: duration,
          repeat: -1, // Infinite loop
          ease: "none",
          delay: Math.random() * 5, // Staggered start
        }
      );
    });

    // ScrollTrigger plugin: Ensures that the snow stops and restars depending on the position in the viewport.
    ScrollTrigger.create({
      trigger: container,
      start: "top bottom", // Starts when the top of the container enters the viewport
      end: "bottom 70%", // Ends when the bottom of the container leaves the viewport
      onEnter: () => {
        animations.forEach((anim) => anim.play()); // Plays animations when entering the view
        gsap.to(container, {
          visibility: "visible",
          opacity: 1,
          duration: 0.5,
          ease: "power1.out",
        });
      },
      onLeave: () => {
        animations.forEach((anim) => anim.pause()); // Pause animations when leaving the view
        gsap.to(container, {
          opacity: 0,
          // Fades the container out
          duration: 0.2,
          ease: "power1.in",
          onComplete: () => gsap.set(container, { visibility: "hidden" }),
        }); // Hide container when out of view with easing
      },
      onEnterBack: () => {
        animations.forEach((anim) => anim.play()); // Resume animations when scrolling back into view
        gsap.to(container, {
          visibility: "visible",
          opacity: 1,
          duration: 0.5,
          ease: "power1.out",
        });
      },
      onLeaveBack: () => {
        animations.forEach((anim) => anim.pause()); // Pause animations when scrolling out of view
        gsap.to(container, {
          opacity: 0,
          duration: 0.2,
          ease: "power1.in",
          onComplete: () => gsap.set(container, { visibility: "hidden" }),
        });
      },
    });

    // Cleanup function to remove animations and ScrollTrigger when the component unmounts
    return () => {
      animations.forEach((anim) => anim.kill()); // Kill all animations
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Kill all ScrollTrigger animations
    };
  }, []); // Only runs once when the component is mounted

  return <div ref={snowContainerRef} className="snow-container"></div>;
};

export default Snow;
