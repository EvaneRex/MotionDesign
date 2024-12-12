import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Stars = ({ count = 100, isVisible }) => {
  const starContainerRef = useRef(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [starsAnimation, setStarsAnimation] = useState([]);

  useEffect(() => {
    const updateContainerSize = () => {
      if (starContainerRef.current) {
        const rect = starContainerRef.current.getBoundingClientRect();
        setContainerSize({ width: rect.width, height: rect.height });
      }
    };

    updateContainerSize();
    window.addEventListener("resize", updateContainerSize);
    return () => {
      window.removeEventListener("resize", updateContainerSize);
    };
  }, []);

  useGSAP(() => {
    if (!starContainerRef.current) return;

    const container = starContainerRef.current;
    container.innerHTML = ""; // Clear previous stars if any

    const animations = [];

    for (let i = 0; i < count; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.position = "absolute";
      star.style.width = `${Math.random() * 4 + 1}px`;
      star.style.height = star.style.width;
      star.style.backgroundColor = "white";
      star.style.borderRadius = "50%";
      star.style.boxShadow = "0 0 4px 2px rgba(255, 255, 255, 0.6)";
      star.style.top = `${Math.random() * containerSize.height}px`;
      star.style.left = `${Math.random() * containerSize.width}px`;

      container.appendChild(star);

      const animation = gsap.fromTo(
        star,
        { opacity: 0.6, scale: 1 },
        {
          opacity: 1,
          scale: 1.5,
          repeat: -1,
          yoyo: true,
          duration: Math.random() * 2 + 1,
          delay: Math.random() * 2,
        }
      );
      animations.push(animation);
    }

    setStarsAnimation(animations); // Save the animations in state

    if (!isVisible) {
      animations.forEach((anim) => anim.kill()); // Kill all animations
    }

    return () => {
      animations.forEach((anim) => anim.kill()); // Cleanup when component unmounts
    };
  }, [count, containerSize, isVisible]);

  return <div ref={starContainerRef} className="stars"></div>;
};

export default Stars;
