export default function NewYearGreeting() {
  useEffect(() => {
    if (isVisible) {
      gsap.fromTo(
        "h1",
        { opacity: 0, y: 0, x: 0, scale: 0 },
        { opacity: 1, y: 50, x: 0, duration: 5, ease: "back.inOut", scale: 1 }
      );
    }
  }, [isVisible]);
  return <h1>Happy New Year!</h1>;
}
