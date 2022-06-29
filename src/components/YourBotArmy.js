import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({botArmy, handleDelete, renamedProp}) {

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {botArmy.map(botData => {
            console.log(botData)
            return <BotCard bot={botData} renamedProp={renamedProp} addToArmy={handleDelete} key={botData.id}/>
          })}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
