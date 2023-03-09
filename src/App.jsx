import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import './App.css'
import Dice from './Components/dice';
import Confetti from 'react-confetti'



function App() {

  const generateNewDice=()=>{
 return {value:Math.floor(Math.random()*(7-1)+1), isHeld:false, id:nanoid()}
}
   const allNewDice=()=>{
     const numArray=[];

        for(let i=0;i<10;i++){
         numArray.push(generateNewDice());
        }

      return numArray;
  }

  const [dice,setDice]=useState(allNewDice);
  const [tenzies,setTenzies]=useState(false);

  useEffect(()=>{
    
   const allHeld =dice.every(dice=>dice.isHeld);
   const firstValue=dice[0].value;
   const allSame=dice.every(dice=>dice.value===firstValue);

   if(allHeld && allSame){
    setTenzies(true)
    console.log("You have Won")
   }
  },[dice])

  const handleOnHeld=(itemId)=>{
     setDice(oldDice=>oldDice.map(die=>{
     return die.id===itemId?{...die,isHeld:!die.isHeld}:die
  }))
 

}



  const diceElements=dice.map((dice)=><Dice key={dice.id} id={dice.id} handleOnHeld={handleOnHeld} isHeld={dice.isHeld} value={dice.value}/>)

  const handleRoll=()=>{
      if(!tenzies){
      setDice((prevState)=>prevState.map(die=>{
      return die.isHeld?die:generateNewDice();     
    }))
      }
      else{
        setTenzies(false);
        setDice(allNewDice())
      }
   
  }

  return (

    <div className="App">
    {tenzies && <Confetti />}
    <div className='main-container'>
      <h1 className='heading'>Tenzies</h1>
        <p className='text'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className='dice-container'>
        {diceElements}
        </div>
      <button className='roll-button' onClick={handleRoll}>{tenzies?"New Game": "Roll"}</button>   
      </div>
    </div>
    
  )
}

export default App
