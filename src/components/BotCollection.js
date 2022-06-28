import React from "react";
import BotCard from '/.BotCard'

function BotCollection({bots}) {
  
  const allBots = bots.map(bot => <BotCard bot={bot}/>)
  
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
