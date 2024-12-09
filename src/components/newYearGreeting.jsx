import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function NewYearGreeting({ isVisible }) {
  const NYRef = useRef(null);

  // Gsap animation: Checks if the new years box is visible and plays the animation
  useGSAP(() => {
    if (isVisible && NYRef.current) {
      gsap.fromTo(
        NYRef.current,
        { opacity: 0, y: "-40vh", x: 0, scale: 0 },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 3,
          ease: "elastic",
          scale: 1,
          delay: 1,
        }
      );
    }
  }, [isVisible]);
  return <h2 ref={NYRef}>Happy New Year!</h2>;
}
