import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import percentageData from '../Questions/quadraticequations.json';
import toast, { Toaster } from 'react-hot-toast';




const QuadraticEquationQ = () => {
const [className1, setClassName1] = useState('');
const [className2, setClassName2] = useState('');
const [className3, setClassName3] = useState('');
const [className4, setClassName4] = useState('');



useEffect(() => {
  const script = document.createElement('script');
  script.src =
    'https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML';
  script.async = true;
  document.body.appendChild(script);

  

  return () => {
    if (document.body.contains(script)) {
      document.body.removeChild(script);
    }
  };
}, []);









  



const {qid} = useParams()
  return (
    <>
    <div>PercentageQ</div>
    <p> {qid} </p>
    <p>{percentageData[qid].question}</p>
    <p>{percentageData[qid].options[String.fromCharCode(65 + 0)]}</p>
    <p>{percentageData[qid].options[String.fromCharCode(65 + 1)]}</p>
    <p>{percentageData[qid].options[String.fromCharCode(65 + 2)]}</p>
    <p>{percentageData[qid].options[String.fromCharCode(65 + 3)]}</p>

  
    {console.log(percentageData[qid].answer)}
{console.log('index checking....'  + String.fromCharCode(65 + Object.keys(percentageData[qid].options).indexOf(percentageData[qid].answer)))}

    <div class="quiz-container">
        <div class="question-numbercontainer"> 
        <p class="text-sm text-gray-300">Physics | JEE Mains 2022 | 24 - June Shift - 1  <br/> Chapter : Work, Energy and Power | Topic : Work Done by a Variable Force </p>                
        </div>                
        <div class="questioncontainer">                     
        {percentageData[qid].question}                                      
        </div>                
        <div class="optionscontainer">


                           <div className={className1} onClick={()=>{
                            if(String.fromCharCode(65 + 0) === percentageData[qid].correct_option){
                                setClassName1('correct')
                                toast.success('correct option');
                            }else{
                                setClassName1('wrong')
                                toast.success('wrong option');
                            }
                           }}>{percentageData[qid].options[String.fromCharCode(65 + 0)]}</div>                    
                           <div className={className2} onClick={()=>{
                            if(String.fromCharCode(65 + 1) === percentageData[qid].correct_option){
                                setClassName2('correct')
                                toast.success('correct option');
                            }else{
                                setClassName2('wrong')
                                toast.success('wrong option');
                            }
                           }}>{percentageData[qid].options[String.fromCharCode(65 + 1)]}</div>                    
                           <div className={className3} onClick={()=>{
                            if(String.fromCharCode(65 + 2) === percentageData[qid].correct_option){
                                setClassName3('correct')
                                toast.success('correct option');
                            }else{
                                setClassName3('wrong')
                                toast.success('wrong option');
                            }
                           }}>{percentageData[qid].options[String.fromCharCode(65 + 2)]}</div>                    
                           <div className={className4} onClick={()=>{
                            if(String.fromCharCode(65 + 3) === percentageData[qid].correct_option){
                                setClassName4('correct')
                                toast.success('correct option');
                            }else{
                                setClassName4('wrong')
                                toast.success('wrong option');
                            }
                           }}>{percentageData[qid].options[String.fromCharCode(65 + 3)]}</div>                    
                                     
                             </div>                
                             <div>                                     
                                </div>              
                                <div class="questioncontainer answercontainer">{percentageData[qid].solution}  </div>                                
                                </div>
                                <Toaster/>
    </>
  )
}

export default QuadraticEquationQ