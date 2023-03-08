import { useState } from 'react'
import { nanoid } from 'nanoid'
import './App.css'
import Dice from './Components/dice'



function App() {
   const allNewDice=()=>{
     const numArray=[];

        for(let i=0;i<10;i++){
        let random= Math.floor(Math.random()*(7-1)+1)
        numArray.push({value:random, isHeld:false, id:nanoid()});
        }

      return numArray;
  }

const handleOnHeld=(itemId)=>{
  console.log("I was clicked",itemId)
   
  setDice(oldDice=>oldDice.map(die=>{
    return die.id===itemId?{...die,isHeld:!die.isHeld}:die
  }))
 

}

  const [dice,setDice]=useState(allNewDice);

  console.log(dice)

  const diceElements=dice.map((dice)=><Dice key={dice.id} id={dice.id} handleOnHeld={handleOnHeld} isHeld={dice.isHeld} value={dice.value}/>)

  const handleRoll=()=>{
    setDice(allNewDice());
  }

  return (

    <div className="App">
      <div className='main-container'>
        <div className='dice-container'>
        {diceElements}
        </div>
      <button className='roll-button' onClick={handleRoll}>Roll</button>   
      </div>
    </div>
    
  )
}

export default App
