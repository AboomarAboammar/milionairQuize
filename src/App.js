
import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Trivia from './components/Trivia';
import Timer from './components/Timer';
import Start from './components/Start';



function App() {
  const [userName,setUserName] =useState(null);
  const [questionNumber,setQuestionNumber] =useState(1);
  const [stop,setStop] =useState(false);
  const [earned,setEarnd] =useState("$ 0")
  const data = [
    {
      id:1,
      question:"Rolex is acompany that spetialize in what type product?",
      answers: [
        {
          text:"phone",
          correct:true,
        },
        {
          text:"car",
          correct:false,
        },
        {
          text:"glass",
          correct:false,
        },
        {
          text:"foode",
          correct:false,
        },
      ]
    },
    
    {
      id:2,
      question:"when did the website facbook launch?",
      answers:[
        {
          text:"2004",
          correct:true,
        },
        {
          text:"2002",
          correct:false,
        },
        {
          text:"2003",
          correct:false,
        },
        {
          text:"2005",
          correct:false,
        },
      ]
    },
    {
      id:3,
      question:"who played the character of harry potter in movie?",
      answers:[
        {
          text:"Jac Deep",
          correct:false,
        },
        {
          text:"jhonny Deep",
          correct:false,
        },
        {
          text:"jhonny Smith",
          correct:false,
        },
        {
            text:"Daniel Red Cliff",
            correct:true,
          },  
        
      ],
    },
    

  ];
  const moneyPuramid= useMemo(()=>

  [
    {id:1, amount:"$ 100"},
    {id:2, amount:"$ 200"},
    {id:3, amount:"$ 300"},
    {id:4, amount:"$ 500"},
    {id:5, amount:"$ 1000"},
    {id:6, amount:"$ 2000"},
    {id:7, amount:"$ 4000"},
    {id:8, amount:"$ 8000"},
    {id:9, amount:"$ 16000"},
    {id:10, amount:"$ 32000"},
    {id:11, amount:"$ 64000"},
    {id:12, amount:"$ 125000"},
    {id:13, amount:"$ 250000"},
    {id:14, amount:"$ 500000"},
    {id:15, amount:"$ 1000000"},
  ].reverse(),[])

  useEffect(()=>{
    questionNumber >1 && setEarnd(moneyPuramid.find((m)=>m.id===questionNumber -1).amount);
  },[questionNumber,moneyPuramid])
  return (
    <div className="app">

      {userName ? (
        <>
          <div className='main'> 
      {stop ?(
      <h1 className='endtext'>you earned:{earned}</h1>) 
      :(
        <>

      <div className='top'>
       <div className='timer'>
        <Timer setStop={setStop} questionNumber={questionNumber} />
       </div>
      </div>
      <div className='bottom'>
        <Trivia 
        data={data} 
        setStop={setStop}
        questionNumber={questionNumber} 
        setQuestionNumber={setQuestionNumber}/>
        </div>
        </>
        )};

      </div>
      <div className='pyramid'> 
      <ul className='moneyList'>
        {moneyPuramid.map((m)=>(
          <li key={m.id} className={questionNumber === m.id ? "monyListItem active" :"monyListItem"}>
          <span className='monyListItemNumber'>{m.id}</span>
          <span className='monyListItemAmount'>{m.amount}</span>

        </li>
        ))}
    
      </ul>
      </div>
        </>
      ) : <Start setUserName={setUserName}/>}
      
      
      
    </div>
  );
}

export default App;
