import { useState, useEffect, useContext,createContext } from "react";
import "./Word.css";

// Easy words
const words = [
    [
        "chat",       
        "pomme",      
        "maison",     
        "soleil",     
        "chien",      
        "livre",      
        "fleur",      
        "école",      
        "porte",      
        "plage",
        "pomme",
        "plage",
        "sucre",
        "danse",
        "terre",
        "lune",
        "poisson",
        "forêt",
        "étoile",
        "jaune",
        "neige",
        "orange",
        "roi",
        "mer",
        "tigre",
        "bonbon"
    ]
    ,[
        "brouillard",    
        "grenouille",    
        "chocolat",      
        "ordinateur",    
        "bibliothèque",  
        "château",       
        "papillon",      
        "horloge",       
        "jardinier",     
        "vacances",
        "biscuit",
        "chapeau",
        "diamant",
        "girafe",
        "magique",
        "hélicoptère",
        "valise",
        "peinture",
        "mangue",
        "lampe",
        "machine",
        "météo",
        "étrange",
        "pirate",
        "spectacle",
        "saisir",
        "courage",
        "parfum",
        "jardin"      
    ]
    ,[
        "hippopotame",       
        "parapluie",         
        "inexplicable",      
        "zébrure",           
        "périphérique",      
        "bourgeon",          
        "labyrinthe",        
        "croquemitaine",     
        "évanescence",       
        "cacophonie",
        "algorithme",
        "bricolage",
        "charabia",
        "énigmatique",
        "embellissement",
        "fluorescent",
        "généalogie",
        "hibernation",
        "imperturbable",
        "juxtaposer",
        "kaléidoscope",
        "mécanisme",
        "nostalgie",
        "oxymore",
        "paradoxe",
        "quintessence",
        "symbiose",
        "imprévisible"       
    ]
];
export const WordContext = createContext([]);

export default function Word({diff}) {

    const {validLetters,setValidLetters,nbErr,setNbErr,word,setWord,setGameState} = useContext(WordContext);
    const wordLetters = word.split("");
    const regex = new RegExp(`[${validLetters}]`);
    const [guessMe, setGuessMe] =useState(wordLetters.map((e,i)=>(regex.test(e.normalize('NFD')))?e:""));

    useEffect(() => {
        if(word==""){
            setWord(words[diff][Math.floor(Math.random()*(words[diff].length-1))]);
        }
        else{
            setGuessMe(wordLetters.map((e,i)=>(regex.test(e.normalize('NFD')))?e:""));
        }
        
        return 
      }, [word,setWord]);

    useEffect(() => {
        if (RegExp(validLetters[validLetters.length-1]).test(word)){
            
            let winTest=wordLetters.every((e)=>(regex.test(e.normalize('NFD'))));            
            
            if(winTest==true&&regex!='/[]/'){
                setGameState(2);
            }            
        }
        else{
            let tmp = nbErr+1;
            setNbErr(tmp);
            if(tmp>=10){setGameState(1)}
        }
        setGuessMe(wordLetters.map((e,i)=>(regex.test(e.normalize('NFD')))?e:""))
        return 
    }, [validLetters,setValidLetters]);

    useEffect(()=>{
        if (nbErr>=10) {
        setGuessMe(wordLetters.map((e,i)=>(e)));
        }

    },[nbErr,setNbErr])

    let numL = guessMe.length;  
    document.documentElement.style.setProperty('--numL', (100/(numL+(numL/3)))+'%');
    
    return (
        <div className="word-div">
            {guessMe.map((e,i)=>(
                <p key={i} id={i} className="letter">
                    {e}
                </p>
            ))}
        </div>
    );
}