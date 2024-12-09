import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function ChristmasGreeting() {
  const textRef = useRef(null);

  useGSAP(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 0, x: 0, scale: 0 },
        { opacity: 1, y: 150, x: 0, duration: 5, ease: "back.inOut", scale: 1 }
      );
    }
  }, []);

  return <h1 ref={textRef}>Merry Christmas</h1>;
}
