import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import {useEffect, useState} from 'react'

function BotsPage() {
  
  const [botArmy, setbotArmy] = useState([])
  const [bots, setBots] = useState([])


  console.log(botArmy)
  console.log("this is bots", bots)
  useEffect(()=> {
    fetch('http://localhost:8002/bots')
    .then(res=>res.json())
    .then(data=>setBots(data))
  }, [])

  // function addToArmy(addedBot) {
  //   setbotArmy([...botArmy, addedBot])
  //   console.log(botArmy)
  // }

  function addToArmy(addedBot) {
    if (botArmy.includes(addedBot)){
      return (alert('Can only add a bot once!'))
    }
    else {setbotArmy([...botArmy, addedBot])}
  }

  function deleteFromArmy(botId){
    const filteredBots = botArmy.filter((bot) => bot !== botId)
    setbotArmy(filteredBots)
  }

  function filterBots(clickedBot){
    const filteredArmy = bots.filter((bot) => bot.id !== clickedBot.id)
    setBots(filteredArmy)
  }

  const filteredBots = bots.filter(bot => {
    for (const i of botArmy) {
      if (i === bot.id) return true
    } 
    return false
  })

  return (
    <div>
      <YourBotArmy botArmy={filteredBots} renamedProp={filterBots} handleDelete={deleteFromArmy}/>
      <BotCollection bots={bots} renamedProp={filteredBots} addToArmy={addToArmy} />
    </div>
  )
}

export default BotsPage;
