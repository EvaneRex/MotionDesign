import Tree from "./components/tree_star";
import Snow from "./components/snow";

function App() {
  return (
    <>
      <div className="snow-container">
        <Snow />
      </div>
      <div landscape>
        <Tree />
      </div>
    </>
  );
}

export default App;
