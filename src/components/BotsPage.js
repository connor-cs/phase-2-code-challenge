import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import {useEffect, useState} from 'react'

function BotsPage() {
  
  const [botArmy, setbotArmy] = useState([])
  const [bots, setBots] = useState([])

  useEffect(()=> {
    fetch('http://localhost:8002/bots')
    .then(res=>res.json())
    .then(data=>setBots(data))
  }, [])

  function addToArmy(addedBot) {
    setbotArmy([...botArmy, addedBot])
    console.log(botArmy)
  }

  function deleteFromArmy(botId){
    const filteredBots = botArmy.filter(bot => bot !== botId)
    setbotArmy(filteredBots)
  }

  return (
    <div>
      <YourBotArmy botArmy={botArmy} handleDelete={deleteFromArmy}/>
      <BotCollection bots={bots} addToArmy={addToArmy}/>
    </div>
  )
}

export default BotsPage;
