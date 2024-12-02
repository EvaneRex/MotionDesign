import gsap from "gsap";
import { useEffect } from "react";

export default function ChristmasGreeting(isVisible) {
  useEffect(() => {
    if (isVisible) {
      gsap.fromTo(
        "h1",
        { opacity: 0, y: 0, x: 50 },
        { opacity: 1, y: 50, x: 50, duration: 3, ease: "back.inOut" }
      );
    }
  }, [isVisible]);

  return <h1 className="greeting">Merry Christmas</h1>;
}
