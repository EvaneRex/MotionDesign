/**
 * InBetween component:
 * This component contains the text element that animates the text, making it appear letter by letter.
 * The animation is triggered when the component is in view (.middle is the one that will contain it, see App for the trigger)
 */

import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

function InBetween({ isVisible }) {
  const txtRef = useRef(null); // Ref for the text

  // GSAP animation: Triggers the staggered text animation when the .middle is in view
  useGSAP(() => {
    // ctx = context, its for cleanup
    const ctx = gsap.context(() => {
      // Checks if it's visible before running the animation
      if (isVisible && txtRef.current) {
        const spans = txtRef.current.querySelectorAll("span"); // Selects all the span elements in the ref

        gsap.fromTo(
          spans,
          { opacity: 0, x: -10 }, // Starts state (invisible and a little to the left)
          {
            opacity: 1, // Fully visible
            x: 0, // Resets the offset
            stagger: 0.2, // Staggers the animation for each span (letter by letter)
            duration: 0.8,
            ease: "power3.inOut",
            delay: 1,
          }
        );
      }
    }, txtRef); // Bind the context to the txtRef DOM element

    // Cleanup G
    return () => ctx.revert();
  }, [isVisible]); // Re-run the animation whenever isVisible changes

  return (
    <div className="middle" ref={txtRef}>
      <h2 className="middle-text">
        <span>A</span>
        <span>n</span>
        <span>d</span>
        <span> </span>
        <span>a</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </h2>
    </div>
  );
}

export default InBetween;
