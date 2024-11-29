import gsap from "gsap";
import Tree from "./components/tree_star";

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
        <Tree />
      </div>
    </>
  );
}

export default App;
