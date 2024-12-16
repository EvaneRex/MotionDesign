/**
 * ChristmasGreeting component:
 * This component contains the text element that animates the text, making it fade in from the bottom of the viewport.
 * The animation is triggered when it passes the visibility check (the logic for this is found in the christmasApp.jsx file)
 */

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function ChristmasGreeting({ isVisible }) {
  const textRef = useRef(null); // Ref for the text

  useGSAP(() => {
    // ctx = context, its for cleanup
    const ctx = gsap.context(() => {
      // Checks if it's visible before running the animation
      if (textRef.current && isVisible) {
        gsap.fromTo(
          textRef.current,
          { opacity: 0, y: 700, x: 0, scale: 0 }, // Starts hidden, the y value indicates where it's going to come from, so in this case it's from the bottom of the viewport
          {
            opacity: 1, // Fully visible
            y: 20, // Positions it slightly down from the top.
            x: 0,
            duration: 3,
            ease: "power4.inOut",
            scale: 1,
          }
        );
      }
    }, textRef); // Bind the context to the textRef DOM element

    // Cleanup
    return () => ctx.revert();
  }, [isVisible]); // Re-run the animation whenever isVisible changes

  return <h1 ref={textRef}>Merry Christmas</h1>;
}
