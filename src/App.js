import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faShareSquare } from "@fortawesome/free-regular-svg-icons";
import Card from "./Card";
import data from "./database.json";
library.add(fas, faHeart, faShareSquare);

function App() {
  // const DATA = data.filter((card)=>{
  //   return 
  // })
  const DATA = data.at(0)
  console.log(DATA)
  return (
    <div className="App">
      <Card data={DATA} />
    </div>
  );
}

export default App;
