import { useState, useEffect, useContext } from "react";
import "./Timer.css";
import { WordContext } from "./Word";

export default function Timer(){
    const {nbErr,setNbErr,gameState,setGameState,min,setMin,sec,setSec} = useContext(WordContext);

    useEffect(() => {
        if (gameState!=0) {
            return
        }
        const timerID = setInterval(() => {
            if(sec>=59){
                setMin(min+1);
                setSec(0);
            }
            else{
                setSec(sec+1);
            }
        }, 1000);
        return () => clearInterval(timerID);
      }, [gameState,min,sec]);


    return (
        <div className="Timer">
            <p>{String(min).padStart(2,"0")}:{String(sec).padStart(2,"0")}</p>
        </div>
    );
}