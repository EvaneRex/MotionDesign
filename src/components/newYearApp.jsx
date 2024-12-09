import NewYearGreeting from "./newYearGreeting";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";

// Register plugin
gsap.registerPlugin(ScrollTrigger);

function NewYearApp() {
  const [isVisible, setVisible] = useState(false);

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
    <div className="new_year">
      <NewYearGreeting isVisible={isVisible} />
    </div>
  );
}
export default NewYearApp;
