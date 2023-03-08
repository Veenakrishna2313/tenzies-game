const Dice=(props)=>{
 
  const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
  return(
    <div onClick={()=>props.handleOnHeld(props.id)} className={`dice ${props.isHeld? "green":""}`}>
      <p className="dice-number">{props.value}</p>
    </div>
  )
}
//<div onClick={()=>props.handleOnHeld(props.id)} className={`dice ${props.isHeld? "green":""}`}>


export default Dice;