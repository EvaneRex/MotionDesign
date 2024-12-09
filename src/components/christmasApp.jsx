import ChristmasGreeting from "./christmasTxt";
import Landscape from "./landscape";
import Snow from "./snow";
import Tree from "./tree_star";

function ChristmasApp() {
  return (
    <div className="christmas">
      <ChristmasGreeting />
      <Tree />
      <Snow />
      <Landscape />
    </div>
  );
}

export default ChristmasApp;
