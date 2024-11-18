import "./KeySpace.css";
import "../App.css";
import { WordContext } from "./Word";
import { useState, useEffect, useContext } from "react";
import clickSound0 from '../audio/Chalk0.mp3'
import clickSound1 from '../audio/Chalk1.mp3'
import clickSound2 from '../audio/Chalk2.mp3'


export default function KeySpace() {
  const alphabet1 = [...'abcdefghijklm'];
  const alphabet2 = [...'nopqrstuvwxyz'];
  const {validLetters,setValidLetters,nbErr,setNbErr} = useContext(WordContext);

  const clickAudio = [new Audio(clickSound0),new Audio(clickSound1),new Audio(clickSound2)];

  function handleClick(e) {
    if(nbErr<10 && e.currentTarget.children[1].getAttribute('value')=='off')
    {
      clickAudio[(Math.round(Math.random()*(clickAudio.length-1)))].play();
      e.currentTarget.children[1].setAttribute('value','on');
      e.currentTarget.children[1].setAttribute('src',require('../img/x.png'));
      const tmp = validLetters+e.currentTarget.children[0].textContent;
      setValidLetters(tmp);
    }
  }

  return (
    <div className="space-div">
      <div className="space" >
        {alphabet1.map((e, i) => (
          <div key={i} className="keyboard-letters" onClick={handleClick}  style={{ gridArea: `letter1${i}` }}>
            <p>{e}</p>            
            <img src='' value='off' className="keyboard-cross" />
          </div>
        ))}
        {alphabet2.map((e, i) => (
          <div key={i} className="keyboard-letters" onClick={handleClick} style={{ gridArea: `letter2${i}` }}>
            <p>{e}</p>
            <img src='' value='off' className="keyboard-cross" />
          </div>
        ))}
      </div>
    </div>
  );
}
