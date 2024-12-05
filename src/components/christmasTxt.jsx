import gsap from "gsap";
import { useEffect } from "react";

export default function ChristmasGreeting(isVisible) {
  useEffect(() => {
    if (isVisible) {
      gsap.fromTo(
        "h1",
        { opacity: 0, y: 0, x: 0, scale: 0 },
        { opacity: 1, y: 50, x: 0, duration: 5, ease: "back.inOut", scale: 1 }
      );
    }
  }, [isVisible]);

  return <h1>Merry Christmas</h1>;
}
