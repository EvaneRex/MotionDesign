import Tree from "./components/tree_star";
import Snow from "./components/snow";
import Landscape from "./components/landscape";
import ChristmasGreeting from "./components/christmasTxt";
import NewYearGreeting from "./components/newYearGreeting";

function App() {
  return (
    <main>
      <div className="christmas">
        <ChristmasGreeting />
        <Tree />
        <Snow />
        <Landscape />
      </div>
      <div className="new_year">
        <NewYearGreeting />
      </div>
    </main>
  );
}

export default App;

// This is just inspo for later
// https://codepen.io/creativeocean/pen/qBbBLyB
