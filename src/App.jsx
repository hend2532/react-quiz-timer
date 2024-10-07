import { useReducer } from "react";
import "./App.css";
import Start from "./components/Start";
import data from "./questions";
import Questions from "./components/Questions";
import NextButton from "./components/NextButton";
import Finish from "./components/Finish";
import Timer from "./components/Timer";
const initialState = {
  questions: [],
  status: "ready",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  SecondRemaining: null,
};
const numQuestions = data.length;
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
        SecondRemaining: data.length * 30,
      };
    case "newAnswer":
      const question = data[state.index];
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finish":
      return {
        ...state,
        status: "finished",
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };
    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
      };
    case "tick":
      return {
        ...state,
        SecondRemaining: state.SecondRemaining - 1,
        status: state.SecondRemaining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Unknown action");
  }
}
function App() {
  const [
    { status, index, answer, points, highScore, SecondRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);
  const maxPossiblePoints = data.reduce((prev, cur) => prev + cur.points, 0);

  return (
    <>
      {status === "loading " && <h1>Loading...</h1>}
      {status === "error" && <h1>Error</h1>}
      {status === "ready" && (
        <Start numQuestions={numQuestions} dispatch={dispatch} />
      )}
      {status === "active" && (
        <div className="questions">
          <Questions
            dispatch={dispatch}
            index={index}
            answer={answer}
            maxPossiblePoints={maxPossiblePoints}
            numQuestions={numQuestions}
            points={points}
          />
          <div className="timer">
            <Timer SecondRemaining={SecondRemaining} dispatch={dispatch} />
            <NextButton
              dispatch={dispatch}
              answer={answer}
              numQuestions={numQuestions}
              index={index}
            />
          </div>
        </div>
      )}
      {status === "finished" && (
        <Finish
          points={points}
          maxPossiblePoints={maxPossiblePoints}
          highScore={highScore}
          dispatch={dispatch}
        />
      )}
    </>
  );
}

export default App;
