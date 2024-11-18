import { useContext } from "react";
import { WordContext } from "./Word";
import "./Stats.css";

export default function Stats() {
    const {stats} = useContext(WordContext);

    return (
        <section className="Stats-Section">
            <div className="Stats-display">
                <div>
                    <p>Meilleur Temps : {stats.timer[0]}</p>
                    <p>Victoires : {stats.wins[0]}</p>
                    <p>Défaites : {stats.losses[0]}</p>
                </div>
            </div>
            <div className="Stats-display">
                <div>
                    <p>Meilleur Temps : {stats.timer[1]}</p>
                    <p>Victoires : {stats.wins[1]}</p>
                    <p>Défaites : {stats.losses[1]}</p>
                </div>
            </div>
            <div className="Stats-display">
                <div>
                    <p>Meilleur Temps : {stats.timer[2]}</p>
                    <p>Victoires : {stats.wins[2]}</p>
                    <p>Défaites : {stats.losses[2]}</p>
                </div>
            </div>
        </section>
    );
}