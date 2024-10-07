

function Finish({points,maxPossiblePoints,dispatch,highScore}) {
    const percentage=(points/maxPossiblePoints)*100
    let emoji;
    if (percentage === 100) emoji = "🥇";
    if (percentage >= 80 && percentage < 100) emoji = "🎉";
    if (percentage >= 50 && percentage < 80) emoji = "🙃";
    if (percentage >= 0 && percentage < 50) emoji = "🤨";
    if (percentage === 0) emoji = "🤦‍♂️";
  
  return (
    <div className="finish">
      <p><span>{emoji}</span>Your Scored <strong>{points}</strong> out of {maxPossiblePoints} ({Math.ceil(percentage)})%</p>
      <p>High Score : ({highScore} points)</p>
      <button onClick={()=>dispatch({type:"restart"})}
      >Restart Quiz</button>
    </div>
  )
}

export default Finish
