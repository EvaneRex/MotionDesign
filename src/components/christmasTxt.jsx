import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function ChristmasGreeting(isVisible) {
  const textRef = useRef(null);

  useGSAP(() => {
    if (isVisible) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 0, x: 0, scale: 0 },
        { opacity: 1, y: 50, x: 0, duration: 5, ease: "back.inOut", scale: 1 }
      );
    }
  }, [isVisible]);

  return <h1 ref={textRef}>Merry Christmas</h1>;
}
