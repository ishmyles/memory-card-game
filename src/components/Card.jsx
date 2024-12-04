import "./Card.css";

import Capitalise from "../utils/Capitalise";
import FormatDashes from "../utils/FormatDashes";
import { generateCardColor, generateBgColor } from "../utils/ColorGenerator";

export default function Card({id, name, hp, type, img, moves}) {
    return (
        <div className="card" style={{backgroundColor: generateCardColor(type), color: (type === "poison") ? "white" : "black"}}>
            <div className="stats txt-bold">
                <p className="name">{Capitalise(name)}</p>
                <p className="hp"><span className="txt-sm">HP</span>{hp}</p>
            </div>
            <div className="card-img" style={{backgroundColor: generateBgColor(type)}}>
                <img src={img} alt="pokemon image"/>
            </div>
            <div className="movelist txt-bold">
                {moves.map((move, index) => <p key={index} className="move">{Capitalise(FormatDashes(move))}</p>)}
            </div>
        </div>
    )
}