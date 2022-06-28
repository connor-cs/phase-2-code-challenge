import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import {useEffect, useState} from 'react'

function BotsPage() {
  
  const [bots, setBots] = useState([])

  useEffect(()=> {
    fetch('http://localhost:8002/bots')
    .then(res=>res.json())
    .then(data=>setBots(data))
  })

  return (
    <div>
      <YourBotArmy />
      <BotCollection bots={bots}/>
    </div>
  )
}

export default BotsPage;
