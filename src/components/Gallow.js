import { useState, useEffect, useContext,createContext } from "react";
import { WordContext } from "./Word";
import "./Gallow.css";
import AnimatedGallow from "./AnimatedGallow";

export default function Gallow() {
    const {nbErr,setNbErr} = useContext(WordContext);
    
    if(nbErr==0){
        return
    }
    else{
        if(nbErr>=10){
            return <AnimatedGallow/>
        }
        else{
            return(
                <div className="gallow-div">
                    <img src={require(`../img/p${nbErr}.png`)} className="gallow-img">
                    </img>
                </div>
            );
        }
    }
}