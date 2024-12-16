/**
 * ChristmasApp component:
 * This component serves as the main app for the Christmas scene,
 * containing all relevant components for the scene (greeting text, tree with star, snow).
 * It also handles the visibility check for triggering animations when elements enter the viewport.
 *
 * Components included:
 * <ChristmasGreeting />: Displays and animated the text.
 * <Tree />: Renders the tree and animated star.
 * <Snow />: Animated snowfall effect for ambiance.
 * <img />: Adds a landscape for visual interes.
 */

import ChristmasGreeting from "./christmasTxt";
import Snow from "./snow";
import Tree from "./tree_star";
import { useEffect, useRef, useState } from "react";

function ChristmasApp() {
  const [isVisible, setVisible] = useState(false); // Visibility check for the <ChristmasGreeting /> component
  const christmasRef = useRef(null); // Ref for the christmas scene

  useEffect(() => {
    const handleScroll = () => {
      const element = christmasRef.current; // Targets the ref
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setVisible(true); // Sets it as visible when true
        } else {
          setVisible(false); // Not visible when false
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Checks for visibility

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up
    };
  }, []);

  return (
    <section className="christmas" ref={christmasRef}>
      <ChristmasGreeting isVisible={isVisible} />
      <Tree />
      <Snow />
      <img src=".\src\assets\landscape.svg" alt="" className="landscape" />
    </section>
  );
}

export default ChristmasApp;
