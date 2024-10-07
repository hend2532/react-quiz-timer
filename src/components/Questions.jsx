import data from "/src/questions";
function Questions({
  points,
  maxPossiblePoints,
  dispatch,
  index,
  answer,
  numQuestions,
}) {
  const hasAnswered = answer !== null;

  return (
    <div className="question">
      <div>
        <progress max={numQuestions} value={index + Number(answer !== null)} />
        <div className="progress">
          <p>
            Question <strong>{index + 1}</strong> /{numQuestions}
          </p>
          <p>
            <strong>{points}</strong> / {maxPossiblePoints}
          </p>
        </div>
      </div>
      <h4>{data[index].question}</h4>
      <div className="answer">
        {data[index].options.map((option, inx) => {
          return (
            <button
            className={`${inx===answer? "checked" : ""} 
            ${hasAnswered ?inx===data[index].correctOption ? "correct" :"error" : ""}`}
              key={option}
              onClick={() => dispatch({ type: "newAnswer", payload: inx })}
              disabled={hasAnswered}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Questions;
