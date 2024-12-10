// This is more or less the code from the snow component just adjusted to fit the stars part.
// For this component and not the snow, we have to keep track of where the stars are placed in the container, and since they yoyo in size, it will affect how the browser calculates where they are. So in order to keep them contained, we track their position when the screen is resized.

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Stars = ({ count = 100 }) => {
  // The number indicates how many are created
  const starContainerRef = useRef(null);

  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 }); // State to track the size of the container, helps keep it responsive

  // This updates the container, so the stars always fills it when the window is resized
  useEffect(() => {
    const updateContainerSize = () => {
      if (starContainerRef.current) {
        const rect = starContainerRef.current.getBoundingClientRect(); // Gets the current dimentions od the container
        setContainerSize({ width: rect.width, height: rect.height }); // Updates the state with the new height and width
      }
    };

    // Sets the container size when the component mounts
    updateContainerSize();

    // Adds eventlistener for window resize and calss the updateContainerSize
    window.addEventListener("resize", updateContainerSize);
    return () => {
      // Cleanup function for when the component unmounts. Relevant as it uses useEffect and not useGSAP (which has the cleanup in it).
      window.removeEventListener("resize", updateContainerSize);
    };
  }, []); // Only runs once when the component is mounted

  // GSAP animation: animation for the stars so they twinkle
  useGSAP(() => {
    const container = starContainerRef.current;
    if (!container) return;

    // Clear existing stars if they exist before creating new ones
    container.innerHTML = "";

    // Creates and animates the number of stars (prop is in line 8)
    for (let i = 0; i < count; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.position = "absolute"; // within the container. If removed, the stars lump togerther in a line
      star.style.width = `${Math.random() * 4 + 1}px`; // Random width
      star.style.height = star.style.width;
      star.style.backgroundColor = "white";
      star.style.borderRadius = "50%";
      star.style.boxShadow = "0 0 4px 2px rgba(255, 255, 255, 0.6)"; // Glow effect

      // Set start position within the container based on size
      star.style.top = `${Math.random() * containerSize.height}px`;
      star.style.left = `${Math.random() * containerSize.width}px`;

      container.appendChild(star);

      // Twinkle effect
      gsap.fromTo(
        star, // Defines the target
        { opacity: 0.6, scale: 1 }, // Where it starts
        {
          opacity: 1, // Where its ends
          scale: 1.5, // This is a little bigger to help with the effect
          repeat: -1, // Infinite loop
          yoyo: true, // Makes the animation run from a-b to b-a and so on
          duration: Math.random() * 2 + 1, // Random duration
          delay: Math.random() * 2, // Staggered start
        }
      );
    }
  }, [count, containerSize]); // Dependensies: It reruns when the count is changed in the code or when the window is resized

  return <div ref={starContainerRef} className="stars"></div>;
};

export default Stars;
