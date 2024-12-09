import Tree from "./components/tree_star";
import Snow from "./components/snow";
import Landscape from "./components/landscape";
import ChristmasGreeting from "./components/christmasTxt";
import NewYearGreeting from "./components/newYearGreeting";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";

// Register plugin
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isVisible, setVisible] = useState(false);

  // This is to ensure that the NY text shows up when its scrolled to
  useEffect(() => {
    const handleScroll = () => {
      const newYearElement = document.querySelector(".new_year");
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
    <main>
      <div className="christmas">
        <ChristmasGreeting />
        <Tree />
        <Snow />
        <Landscape />
      </div>
      <div className="new_year">
        <NewYearGreeting isVisible={isVisible} />
      </div>
    </main>
  );
}

export default App;

// This is just inspo for later
// https://codepen.io/creativeocean/pen/qBbBLyB
