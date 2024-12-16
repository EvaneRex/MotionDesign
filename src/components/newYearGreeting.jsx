/**
 * NewYearGreeting component:
 * This component contains the text element that animates the text, making it sling into the screen from the top of the viewport.
 * The animation is triggered when it passes the visibility check (the logic is found in the newYearApp.jsx file)
 */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function NewYearGreeting({ isVisible }) {
  const NYRef = useRef(null); // Ref for the text

  useGSAP(() => {
    // ctx = context, its for cleanup
    const ctx = gsap.context(() => {
      if (isVisible && NYRef.current) {
        // Checks if it's visible before running the animation
        gsap.fromTo(
          NYRef.current,
          { opacity: 0, y: "-30vh", x: 0, scale: 0 }, // Starts hidden, the y value indicates where it's coming from, in this case its the top of the viewport
          {
            opacity: 1, // Fully visible
            y: 0, // The end position is specified in the styling
            x: 0,
            duration: 3,
            ease: "elastic", // A slinging effect
            scale: 1,
            delay: 1, // To ensure that it doesn't play the second it shows, had a few problems with only this one
          }
        );
      }
    }, NYRef); // Bind the context to the NYRef DOM element

    // Cleanup
    return () => ctx.revert();
  }, [isVisible]);

  return <h2 ref={NYRef}>Happy New Year!</h2>;
}
