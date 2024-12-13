/**
 * ChristmasGreeting component:
 * This component contains the text element that animates the text, making it fade in from the bottom of the viewport.
 * The animation is triggered when it passes the visibility check (the logic for this is found in the christmasApp.jsx file)
 */

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function ChristmasGreeting({ isVisible }) {
  const textRef = useRef(null); // Ref for the text

  // GSAP animation: Checks if the christmas scene is visible and plays the animation
  useGSAP(() => {
    // Checks if its visible before running the animation
    if (textRef.current && isVisible) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 700, x: 0, scale: 0 }, // Starts hidden, the y value indicates where its going to come from, so in this case its from the bottom of the viewport
        {
          opacity: 1, // Fully visible
          y: 150, // Positions it slightly down from the top.
          x: 0,
          duration: 3,
          ease: "power4.inOut",
          scale: 1,
        }
      );
    }
  }, [isVisible]); // Re-run the animation whenever isVisible changes

  return <h1 ref={textRef}>Merry Christmas</h1>;
}
