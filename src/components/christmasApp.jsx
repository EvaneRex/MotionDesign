import { useGSAP } from "@gsap/react";
import ChristmasGreeting from "./christmasTxt";
import Landscape from "./landscape";
import Snow from "./snow";
import Tree from "./tree_star";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useState } from "react";

// Register plugin
gsap.registerPlugin(ScrollTrigger);

function ChristmasApp() {
  const [isVisible, setVisible] = useState(false);

  useGSAP(() => {
    const handleScroll = () => {
      const newYearElement = document.querySelector(".christmas");
      if (newYearElement) {
        const rect = newYearElement.getBoundingClientRect();
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
    <div className="christmas">
      <ChristmasGreeting isVisible={isVisible} />
      <Tree />
      <Snow isVisible={isVisible} />
      <Landscape />
    </div>
  );
}

export default ChristmasApp;
