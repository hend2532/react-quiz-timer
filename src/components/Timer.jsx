import { useEffect } from "react"

function Timer({SecondRemaining,dispatch}) {
    const mins=Math.floor(SecondRemaining/60)
    const second=SecondRemaining%60
    useEffect(function(){
        const id=setInterval(function(){
            dispatch({type:"tick"})
        },1000)
        return ()=> clearInterval(id)
    },[dispatch])
  return (
    <div className="time">
      {mins<10 && '0'}
      {mins}:{second<10 && '0'}
      {second}
    </div>
  )
}

export default Timer
