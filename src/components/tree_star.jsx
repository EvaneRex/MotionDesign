import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Tree() {
  const starRef = useRef(null);

  // GSAP animation: Makes the star rotate around its center and swing back and forth on hover!
  useGSAP(() => {
    const animation = gsap.to(starRef.current, {
      duration: 0.3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      rotation: 5,
      startAt: { rotation: -3 }, // Starts the animation further out. Ensures thats the animation is symmetrical
      transformOrigin: "center", // What makes it rotate at its center
      paused: true,
    });

    // Function to handle mouseover and mouseout events
    const handleMouseOver = () => animation.play(); // Starts the animation
    const handleMouseOut = () => animation.pause(); // Ends the animation

    // Stores the starRef in a variable
    const starElement = starRef.current;

    // Adding and removing eventlisteners.
    starElement.addEventListener("mouseover", handleMouseOver);
    starElement.addEventListener("mouseout", handleMouseOut);
    return () => {
      starElement.removeEventListener("mouseover", handleMouseOver);
      starElement.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="tree"
        data-name="Layer 2"
        viewBox="0 0 146.07 234.47"
      >
        <g id="Layer_2-2" data-name="Layer 2">
          <g>
            <g>
              <polygon
                className="cls-4"
                points="56.42 97.64 64.79 71.18 87.85 73.72 95.32 100.69 84.29 114.6 54.1 105.27 56.42 97.64"
              />
              <polygon
                className="cls-4"
                points="40.64 151.31 46.3 141.06 105.66 139.19 108.72 146.73 104.14 178.88 31.2 171.93 40.64 151.31"
              />
              <ellipse
                className="cls-5"
                cx="73.03"
                cy="225.15"
                rx="71.49"
                ry="9.33"
              />
              <path
                className="cls-3"
                d="M80.74,213.31v11.69c0,.41-.27.78-.66.91-1.95.67-4.52,1.4-5.56,1-1.48-.56-3.84-2.03-8.28-.73-.45.14-.9-.21-.9-.68v-12.55c1.69-.14,3.43-.49,5.21-1.1.01,0,.02-.01.04-.02.57-.19,1.13-.42,1.71-.67h.01c.1-.05.19-.1.28-.16,0,0,.01,0,.04.02.03-.02.05-.03.08-.04,0,0,.97.43,2.54.94h0c1.43.48,3.35,1.03,5.49,1.39Z"
              />
              <path
                className="cls-2"
                d="M104.91,84.4c-1.3,1.26-3.24,1.6-4.97,1.07-7.7-2.35-10.75-4.02-12.76-5.42-1.68-1.17-3.98-.52-4.89,1.3-.83,1.67-2.71,3.3-6.79,3.79-3.66.43-5.37-1.31-6.1-3.58-.65-2.05-3.43-2.36-4.56-.53-5.49,8.83-8.71,13.05-8.17,6.57.68-8.15-4.35-2.54-4.35-2.54-.34.79-1.23,1.17-2.04.92-2.49-.79-6.89-2.84-3.39-6.98,9.14-13.02,25.68-40.83,26.2-41.7v-.02s1.31-1.96,2.03-4.24c.22-.71,1.19-.79,1.51-.12l1.92,4.03.02.05c.8,1.45,18.49,33.83,24.46,39.03.45.4.87.83,1.25,1.3,2.81,3.48,2,5.73.62,7.07Z"
              />
              <path
                className="cls-2"
                d="M121.55,203.1c-6.36,11.7-25.18,5.34-25.18,5.34-3.48,5.56-10.23,5.8-15.63,4.87-2.14-.36-4.06-.91-5.49-1.38h0c-1.57-.52-2.54-.95-2.54-.95-.03.01-.05.02-.08.04-.03-.02-.04-.02-.04-.02-.09.06-.18.11-.28.16h-.01c-.58.25-1.14.48-1.71.67-.02,0-.03.02-.04.02-1.78.61-3.52.96-5.21,1.1-8.29.73-15.09-3.39-17.16-4.82l-.36-.24-.12-.09-.18-.13c-4.28,6.03-18.97,6.11-20.56-5.16-.02-.14-.03-.29-.05-.43-.12-.01-.24-.01-.36-.02-12.86-.66-39.15,4.21-19.48-9.9,16.31-11.72,28.74-32.26,32.65-39.18l.92-1.67c-.12.35-1.34,4.35,4.17,12.13,5.76,8.15,11.53.51,15.94-3.9s10.18,8.48,14.08,6.96c3.9-1.53,4.41-12.89,7.29-8.31s9.84,20.35,12.21,12.21c2.38-8.14-1.18-14.93,5.77-15.27,6.95-.34,8.62-8.4,8.62-8.4,26.09,40.57,9.27,12.86,36.75,47.72,5.09,11.44-23.92,8.65-23.92,8.65Z"
              />
              <path
                className="cls-2"
                d="M72.63,211.02c-.11.05-.21.1-.32.14.1-.05.19-.1.28-.16,0,0,.01,0,.04.02Z"
              />
              <path
                className="cls-5"
                d="M70.59,211.83c.57-.19,1.13-.42,1.71-.67-.56.31-1.18.52-1.71.67Z"
              />
              <path
                className="cls-5"
                d="M75.26,211.96c-.76-.27-2.37-.85-2.63-.94.03-.02.05-.03.08-.04,0,0,.97.43,2.54.94h0s.01.04.01.04Z"
              />
              <path
                className="cls-2"
                d="M108.32,144.12c-2.11-.07-4.03,1.18-4.83,3.13-.88,2.16-2.78,4.33-6.79,2.47-6.96-3.23-5.94,2.54-14.93,3.9-8.99,1.35-13.91-.34-15.77-4.58-1.87-4.24-14.76,8.99-17.3,4.24-1.11-2.07-1.89-4.28-2.41-6.12-.48-1.7-2.34-2.66-3.98-2.02-6.98,2.69-21.97,2.04-12.99-6.93,10.68-10.69,26.51-39.51,27.08-40.53v-.03s5.19,13.39,10.11,8.48c4.92-4.92,6.95-13.06,12.55-9.16,5.6,3.9,7.12,1.18,7.97-2.04.85-3.22,5.43-4.35,5.43-4.35l.03.06c.98,1.72,24.48,43.14,30.54,49.2,4.91,4.91-7.58,4.51-14.71,4.28Z"
              />
            </g>
            {/** This is the star!! */}
            <polygon
              className="treeStar"
              ref={starRef}
              points="76.09 0 81.6 16.98 99.46 16.98 85.01 27.48 90.53 44.46 76.09 33.97 61.64 44.46 67.16 27.48 52.71 16.98 70.57 16.98 76.09 0"
            />
          </g>
        </g>
      </svg>
    </>
  );
}
