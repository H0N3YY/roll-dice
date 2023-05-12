import Dice from "./components/Dice"
import "./style/button.css";
import"./style/board.css";

function App() {
  return (
    <div className="all_board">
     <Dice/>

     <button className="button"> Roll the Dice! </button>
     </div>
  );
}

export default App;
