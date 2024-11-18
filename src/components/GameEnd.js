import { useContext, useEffect } from "react";
import { WordContext } from "./Word";
import clickSound0 from '../audio/Chalk0.mp3'
import clickSound1 from '../audio/Chalk1.mp3'
import clickSound2 from '../audio/Chalk2.mp3'

export default function Lose() {
    
    const clickAudio = [new Audio(clickSound0),new Audio(clickSound1),new Audio(clickSound2)];
    const {diff,setDiff,stats,setStats,setValidLetters,setNbErr,setWord,gameState,setGameState,min,setMin,sec,setSec} = useContext(WordContext);

    useEffect(() => {
        if(gameState==1){
            let tmp = stats;
            tmp.losses[diff]=parseInt(tmp.losses[diff])+1;
            setStats(tmp);
        }
        else if(gameState==2){
            let tmp = stats;
            tmp.wins[diff]=parseInt(tmp.wins[diff])+1;
            if(tmp.timer[diff]!="aucun"){
                let tmpCalc = tmp.timer[diff].split(":");
                tmpCalc[0]= parseInt(tmpCalc[0]);
                tmpCalc[1]= parseInt(tmpCalc[1]);
                if(min<=tmpCalc[0]){
                    if(min==tmpCalc[0]){
                        if(sec<tmpCalc[1]){
                            tmp.timer[diff] = String(min).padStart(2,"0")+":"+String(sec).padStart(2,"0");
                        }
                    }else{
                        tmp.timer[diff] = String(min).padStart(2,"0")+":"+String(sec).padStart(2,"0");
                    }
                }
            }
            else{
                tmp.timer[diff] = String(min).padStart(2,"0")+":"+String(sec).padStart(2,"0");
            }
            setStats(tmp)
        }
      }, [gameState,diff,stats,setStats]);

    function handleClick(e) {
        clickAudio[(Math.round(Math.random()*(clickAudio.length-1)))].play();
        if(e.currentTarget.getAttribute("value")==0){
            setValidLetters('');
            setNbErr(0);
            setWord('');
            setDiff(diff);
            setMin(0);
            setSec(0);
            setGameState(0);
        }
        else{
            setValidLetters('');
            setNbErr(0);
            setWord('');
            setDiff(-1);
            setMin(0);
            setSec(0);
            setGameState(0);
            document.getElementById('App').className=("App-h");
        }
    }
    return (
        <>
        <div className="a">
            <div className="Home-diff-label">
                <p>{gameState==1 ? "Perdu !" :" Gagné !"}</p>
            </div>
            <div className="Home-diff-buttons">
                <p value={0} onClick={handleClick}>Rejouer</p>
                <p value={1} onClick={handleClick}>Menu</p>
            </div>
        </div>
        </>
    );
}