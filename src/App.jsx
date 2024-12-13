import NewYearApp from "./components/newYearApp";
import ChristmasApp from "./components/christmasApp";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: "main",
      start: "top top",
      end: "bottom bottom",
      snap: {
        snapTo: 1 / 2,
        duration: 1,
        ease: "power3.out",
        scrub: true,
      },
      markers: true,
    });
    return () => ScrollTrigger.killAll();
  }, []);

  return (
    <main className="snap-container">
      <div className="snap-section">
        <ChristmasApp />
      </div>
      <div className="middle snap-section">
        <h2>And a...</h2>
      </div>
      <div className="snap-sektion">
        <NewYearApp />
      </div>
    </main>
  );
}

export default App;

// This is just inspo for later
// https://codepen.io/creativeocean/pen/qBbBLyB
