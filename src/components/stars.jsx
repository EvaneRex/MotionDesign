/**
 * Stars component:
 * This component renders and animates the stars with a twinkle effect, it only runs when the new year box is visible. The code is based on the snow components code.
 */

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Stars = ({ count = 100 }) => {
  const starContainerRef = useRef(null); // Ref for the container
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  // This updates the container, so the stars always fill it when the window is resized
  useEffect(() => {
    const updateContainerSize = () => {
      if (starContainerRef.current) {
        const rect = starContainerRef.current.getBoundingClientRect(); // Gets the current dimensions of the container
        setContainerSize({ width: rect.width, height: rect.height }); // Updates the state with the new height and width
      }
    };

    // Sets the container size when the component mounts
    updateContainerSize();

    // Adds event listener for window resize and calls the updateContainerSize
    window.addEventListener("resize", updateContainerSize);
    return () => {
      window.removeEventListener("resize", updateContainerSize); // Clean up
    };
  }, []); // Only runs once when the component is mounted

  // GSAP animation logic: animation for the stars so they twinkle
  useEffect(() => {
    const container = starContainerRef.current;
    if (!container) return;

    // Clear existing stars if they exist before creating new ones
    container.innerHTML = "";

    const stars = [];

    // Creates and animates the number of stars (prop is in line 8)
    for (let i = 0; i < count; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.position = "absolute"; // within the container. If removed, the stars lump together in a line
      star.style.width = `${Math.random() * 4 + 1}px`; // Random width
      star.style.height = star.style.width;
      star.style.backgroundColor = "white";
      star.style.borderRadius = "50%";
      star.style.boxShadow = "0 0 4px 2px rgba(255, 255, 255, 0.6)"; // Glow effect

      // Set start position within the container based on size
      star.style.top = `${Math.random() * containerSize.height}px`;
      star.style.left = `${Math.random() * containerSize.width}px`;

      container.appendChild(star);
      stars.push(star);

      // GSAP animation setup
      const animation = gsap.fromTo(
        star,
        { opacity: 0.6, scale: 1 }, // Initial state
        {
          opacity: 1, // Target opacity
          scale: 1.5, // Slightly bigger for the twinkle effect
          repeat: -1, // Infinite loop
          yoyo: true, // Makes the animation run back and forth (yoyo)
          duration: Math.random() * 2 + 1, // Random duration
          delay: Math.random() * 2, // Staggered start
          paused: true, // Start paused until we scroll to it
        }
      );

      // Store the animation in an array
      star.animation = animation;
    }

    // This checks if the stars are visible in the viewport
    const checkVisibility = () => {
      stars.forEach((star) => {
        const rect = star.getBoundingClientRect();
        const isVisible =
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= window.innerHeight &&
          rect.right <= window.innerWidth;

        // If star is visible, play its animation; if not, pause it
        if (isVisible) {
          if (star.animation.paused()) {
            star.animation.play();
          }
        } else {
          if (!star.animation.paused()) {
            star.animation.pause();
          }
        }
      });
    };

    // Add event listeners for scrolling and resizing to check visibility
    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);

    checkVisibility(); // Checks for visibility

    // Cleanup up
    return () => {
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
    };
  }, [count, containerSize]); // Dependencies: It reruns when the count is changed in the code or when the window is resized

  return <div ref={starContainerRef} className="star-container"></div>;
};

export default Stars;
