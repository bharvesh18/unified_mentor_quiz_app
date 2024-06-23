import { useState } from 'react'
import excited from './assets/excited.gif'
function App() {
  const [ques,setQues] = useState([
    {
      quest:"Capital of India ?",
      options:["Delhi","Mumbai","Kolkata","Chennai"],
      corropt:"Delhi"
    },
    {
      quest:"Current Prime-Minister of India ?",
      options:["Narendra Modi","Rahul Gandhi","Vladimir Putin","Joe Bidin"],
      corropt:"Narendra Modi"
    },
    {
      quest:"When did India became Independent ?",
      options:["1945","1947","1948","1949"],
      corropt:"1947"
    }
  ])
  const [qno,setQno]=useState(0);
  const [score,setScore]=useState(0);
  const [selectedOpt,setSelOpt]=useState(null);
  const [feedback,setFeedback]=useState('');
  const checkAns=(e)=>{
    e.preventDefault();
    const select=e.target.value;
    setSelOpt(select);
    if(e.target.value==ques[qno].corropt){
      setScore(score+1);
      setFeedback('correct');
      setTimeout(() => {
        setQno(qno+1);
        setFeedback('');
        selectedOpt(null);
      },3000);
    }
    else{
      setFeedback('incorrect');
      setTimeout(() => {
        setQno(qno+1);
        setFeedback('');
        selectedOpt(null);
      },3000);
    }
  }
  const renderOptions=()=>{
    return ques[qno].options.map((q)=>(
      <button value={q} onClick={checkAns} onTouchEnd={checkAns} className={`optbutton ${selectedOpt===q ? feedback :""}`}>{q}</button>
    ))
  }
  return (
    <>
      <div className="container">
        <form>
          <div className="main-container">
          {qno<ques.length && <>
          <div className="header">
            <button>Questions</button>
            <button>{qno+1}/{ques.length}</button>
          </div>
          <div className="question"><h2>{ques[qno].quest}</h2></div>
          {renderOptions()}
          <button className='score-btn'>Score: {score}</button>
          </>
          }
          <div className="score-card">
            {qno>=ques.length &&<>
              <div className="question">
                <h2>Congratulations, you completed the game and your score is {score}/{ques.length}</h2>
                <div className="imgbox">
                  <img src={excited}></img>
                </div>
              </div>
            </>}
          </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
