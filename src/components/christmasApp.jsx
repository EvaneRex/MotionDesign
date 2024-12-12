import { useState, useRef, useEffect } from "react";
import ChristmasGreeting from "./christmasTxt";
import Landscape from "./landscape";
import Snow from "./snow";
import Tree from "./tree_star";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register plugin
gsap.registerPlugin(ScrollTrigger);

function ChristmasApp() {
  const [isVisible, setVisible] = useState(false);
  const christmasRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (christmasRef.current) {
        const rect = christmasRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={christmasRef} className="christmas">
      <ChristmasGreeting isVisible={isVisible} />
      <Tree />
      <Snow isVisible={isVisible} />
      <Landscape />
    </div>
  );
}

export default ChristmasApp;
