import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function ChristmasGreeting({ isVisible }) {
  const textRef = useRef(null);

  useGSAP(() => {
    if (textRef.current && isVisible) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 0, x: 0, scale: 0 },
        {
          opacity: 1,
          y: 150,
          x: 0,
          duration: 5,
          ease: "power4.inOut",
          scale: 1,
        }
      );
    }
  }, [isVisible]);

  return <h1 ref={textRef}>Merry Christmas</h1>;
}
