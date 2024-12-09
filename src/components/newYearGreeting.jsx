import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

export default function NewYearGreeting(isVisible) {
  const NYRef = useRef(null);

  useGSAP(() => {
    if (NYRef.current && isVisible) {
      gsap.fromTo(
        NYRef.current,
        { opacity: 0, y: "100vh", x: 0, scale: 0 },
        {
          opacity: 1,
          y: 150,
          x: 0,
          duration: 5,
          ease: "back.inOut",
          scale: 1,
          scrollTrigger: {
            trigger: NYRef.current,
            start: "top 80%",
            end: "bottom 10%",
            scrub: true,
          },
        }
      );
    }
  }, [isVisible]);
  return <h2 ref={NYRef}>Happy New Year!</h2>;
}
