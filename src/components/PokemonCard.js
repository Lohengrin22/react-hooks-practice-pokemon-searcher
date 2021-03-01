import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({poke}) {
const [clicked, setClicked] = useState(false)
  function handleClick(){
    setClicked(!clicked)
  }
  
  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          {clicked? <img src={poke.sprites.back} alt="oh no!" ></img> : (
            <img src={poke.sprites.front} alt="oh no!" />
          ) }
          {/* <img src={poke.sprites.front} alt="oh no!" /> */}
        </div>
        <div className="content">
          <div className="header">{poke.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {poke.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
