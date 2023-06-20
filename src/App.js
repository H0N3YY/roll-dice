import Dice from "./components/Dice"
import "./style/dice.css";

import randomDice from './components/Dice'

function App() {
  return (
    <div className="all_board">
      <Dice />

      <button className="button" onClick={randomDice}> Roll the Dice! </button>
    </div>
  );
}

export default App;
