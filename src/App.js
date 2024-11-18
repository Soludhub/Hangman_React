import logo from './logo.svg';
import './App.css';
import Timer from "./components/Timer";
import Word from "./components/Word";
import KeySpace from './components/KeySpace';
import Gallow from './components/Gallow';
import Home from "./components/Home";
import {useState,useContext,createContext} from 'react';
import {WordContext} from "./components/Word";
import GameEnd from './components/GameEnd';
// import { WordContext } from "./components/Word";

// export const WordContext = createContext(null);


function App() {

  const [validLetters, setValidLetters] = useState([]);
  const [word,setWord] = useState("");
  const [diff,setDiff] = useState(-1);
  const [nbErr, setNbErr] = useState(0);
  const [gameState, setGameState] = useState(0);
  const [min,setMin]=useState(0);
  const [sec,setSec]=useState(0);
  const [stats, setStats] = useState({
    timer: ["aucun","aucun","aucun"],
    wins: [0,0,0],
    losses: [0,0,0]
});


  return (
    <div id="App" className="App-h">
      <WordContext.Provider  value={{validLetters,setValidLetters,nbErr,setNbErr,stats,setStats,word,setWord,diff,setDiff,gameState, setGameState,sec,setSec,min,setMin}}>
        <header className="App-header">
          <p>HangMan</p>
        </header>
        {diff==-1 ? 
        (<Home/>) :  
        (<>
          <div className="App-b">
            <Gallow />
          </div>
          <div className="App-c">
          <Word diff={diff}/>
          </div>
          <div className="App-a">
            <Timer/>
            {gameState==0 ? (
              <KeySpace />
            ) : (
              <GameEnd/>
            )}
          </div>
        </>)}
        <footer className="App-footer">
          <p>Created by Somebody</p>
        </footer>
      </WordContext.Provider>
    </div>
  );
}

export default App;
