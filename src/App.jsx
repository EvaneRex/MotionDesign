/**
 * App component:
 * The main component that connects the <ChristmasApp />, <InBetween /> and the <NewYearApp />.
 * It also handles the scroll snapping logic, which is applies using GSAP's ScrollTrigger plugin
 *
 * Now the other textelements from other components have a parent app, as mentioned above, the <InBetween /> does not, so the logic is also placed here.
 */

import NewYearApp from "./components/newYearApp";
import ChristmasApp from "./components/christmasApp";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import InBetween from "./components/between";
import { useGSAP } from "@gsap/react";

// Register plugin
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isVisible, setVisible] = useState(false); // State for visibility of the InBetween component

  // Scroll snapping logic: Snap between the components when scrolling
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: "main", // Targeting the main section
      start: "top top", // Starts the trigger when the top of main reaches the top of viewport
      end: "bottom bottom", // Ends the trigger when the bottom of main reaches the bottom of the viewport
      snap: {
        snapTo: 1 / 2, // Snaps to the center of the page, tried with the 1/3 since there are 3 sektions but that makes it wierd and choppy
        duration: 0.2, // Duration of the snapping
        ease: "power1.out",
        scrub: true,
      },
      // markers: true, // For debugging
    });
    return () => ScrollTrigger.killAll(); // Cleanup for the ScrollTrigger
  }, []);

  // Scroll visibility check: Checks if the InBetween is in view (the other components have this logic within themselves). This is for the animation activating for the text.
  useEffect(() => {
    const handleScroll = () => {
      const middleElement = document.querySelector(".middle"); // Targeting the middle class
      if (middleElement) {
        const rect = middleElement.getBoundingClientRect();
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
    <main>
      <ChristmasApp />
      <InBetween isVisible={isVisible} />
      <NewYearApp />
    </main>
  );
}

export default App;
