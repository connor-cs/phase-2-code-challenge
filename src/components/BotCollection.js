import React from "react";
import BotCard from './BotCard'

function BotCollection({bots, addToArmy, renamedProp}) {
  
  const allBots = bots.map(bot => <BotCard renamedProp={renamedProp} addToArmy={addToArmy} bot={bot} key={bot.id}/>)
  
  

  return (
    <div className="ui four column grid">
      <div className="row">
        {allBots}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
