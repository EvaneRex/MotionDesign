/**
 * NewYearApp component:
 * This component serves as the main app for the New years scene, containing all relevant compontens for the scene (greetin txt, stars).
 * It also handles the visibility chech for the text to start the animation when it enters the viewport.
 *
 * Components included:
 * <NewYearGreeting />: Displays and animates text
 * <Stars />: Animated stars for ambiance
 */
import NewYearGreeting from "./newYearGreeting";
import { useEffect, useRef, useState } from "react";
import Stars from "./stars";

function NewYearApp() {
  const [isVisible, setVisible] = useState(false); // Visibility check for the <NewYearGreeting />
  const newYearRef = useRef(null); // Ref for the new years scene

  // Scroll visibility check: Checks if the scene is in the viewport
  useEffect(() => {
    const handleScroll = () => {
      const newYearElement = newYearRef.current; // Targets the ref
      if (newYearElement) {
        const rect = newYearElement.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setVisible(true); // Sets it as visible when true
        } else {
          setVisible(false); // Not visible when false
        }
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up
    };
  }, []);

  return (
    <section className="new_year" ref={newYearRef}>
      <NewYearGreeting isVisible={isVisible} />
      <Stars />
    </section>
  );
}
export default NewYearApp;
