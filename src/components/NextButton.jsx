

function NextButton({dispatch,answer,numQuestions,index}) {
    if(answer==null) return null;
    if(index<numQuestions-1)
    return (
        <div>
        <button onClick={()=> dispatch({type : "nextQuestion"})}>Next</button>
        </div>
    )
    if(index=== numQuestions-1)
        return(
            <button onClick={()=>dispatch({type : 'finish'})}>
                Finish
            </button>
    )
}

export default NextButton
