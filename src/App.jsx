import gsap from "gsap";

gsap.to(".logo", {
  duration: 2,
  x: 300,
  backgroundColor: "#560563",
  borderRadius: "20%",
  border: "5px solid white",
}); //called a tween
function App() {
  return (
    <>
      <div>
        <div className="logo"></div>
      </div>
    </>
  );
}

export default App;
