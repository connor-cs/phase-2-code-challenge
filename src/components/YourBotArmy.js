import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({botArmy}) {

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {botArmy.map(botData => {
            console.log(botData)
            return <BotCard bot={botData}/>
          })}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
