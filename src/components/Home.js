import { useContext } from "react";
import { WordContext } from "./Word";
import "./Home.css";
import Stats from "./Stats";
import clickSound0 from '../audio/Chalk0.mp3'
import clickSound1 from '../audio/Chalk1.mp3'
import clickSound2 from '../audio/Chalk2.mp3'

export default function Home() {
    const {setDiff} = useContext(WordContext);
    
    const clickAudio = [new Audio(clickSound0),new Audio(clickSound1),new Audio(clickSound2)];

    function handleClick(e) {
        clickAudio[(Math.round(Math.random()*(clickAudio.length-1)))].play();
        document.getElementById('App').className=("App-g");
        setDiff(e.currentTarget.getAttribute("value"));
    }

    return (
        <>
        <div className="a">
            <div className="Home-diff-label">
                <p>Choisissez une difficulté</p>
            </div>
            <div className="Home-diff-buttons">
                <p value={0} onClick={handleClick}>Facile</p>
                <p value={1} onClick={handleClick}>Normal</p>
                <p value={2} onClick={handleClick}>Difficile</p>
            </div>
        </div>
        <div className="c">
            <div className="Home-stats">
                <Stats/>
            </div>
        </div>
        </>
    );
}