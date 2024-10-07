
function Start({numQuestions,dispatch}) {
  return (
    <div className="start">
      <div>
        <h1>The React Quiz</h1>
      </div>
      <h2>Welcome to The React Quiz !</h2>
      <p>{numQuestions} Questions to test your React mastery</p>
      <button onClick={()=>dispatch({type :"start"})}>Let's  start</button>
    </div>
  )
}

export default Start
