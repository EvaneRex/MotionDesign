/**
 * NewYearGreeting component:
 * This component cointains the text element that animates the text, making it sling into the screen from the top of the viewport.
 * The animation is triggered when it passes the visibility check (the logic is found in the newYearApp.jsx file)
 */
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function NewYearGreeting({ isVisible }) {
  const NYRef = useRef(null); // Ref for the text

  // Gsap animation: Checks if the new years box is visible and plays the animation
  useGSAP(() => {
    if (isVisible && NYRef.current) {
      // Checks if its visible before running the animation
      gsap.fromTo(
        NYRef.current,
        { opacity: 0, y: "-30vh", x: 0, scale: 0 }, // Starts hidden, the y value indicates where its coming from, in this case its the top of the viewport
        {
          opacity: 1, // Fully visible
          y: 0, // The end position is specified in the styling
          x: 0,
          duration: 3,
          ease: "elastic", // A slinging effect
          scale: 1,
          delay: 1, // To ensure that it doesnt play the second it shows, had a few problems with only this one
        }
      );
    }
  }, [isVisible]);
  return <h2 ref={NYRef}>Happy New Year!</h2>;
}
