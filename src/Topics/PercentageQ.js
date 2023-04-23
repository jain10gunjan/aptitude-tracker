import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import percentageData from '../Questions/percentage.json';
import toast, { Toaster } from 'react-hot-toast';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';



const PercentageQ = () => {
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









  



let {qid} = useParams()
let x = Math.floor((Math.random() * 10) + 1);
let q1 = x;
let q2 = x+1;
let q3 = x+2;
let q4 = x+3;
let q5 = x+4;
let q6 = x+5;

  return (
    <>
    

    <Navbar/>

    


                                


<div class="flex flex-wrap mt-4 mx-2 mb-8">
      <div class="w-full md:w-2/3 lg:w-3/4 px-2 mb-4">
      <div class="max-h-screen max-w-full p-8">
        <div class="question-numbercontainer"> 
        <p class="text-sm text-gray-300">Physics | JEE Mains 2022 | 24 - June Shift - 1  <br/> Chapter : Work, Energy and Power | Topic : Work Done by a Variable Force </p>                
        </div>                
        <div class="questioncontainer">                     
        {percentageData[qid].question}                                      
        </div>                
        <div class="optionscontainer">


                           <div onClick={()=>{
                            if(String.fromCharCode(65 + 0) === percentageData[qid].correct_option){
                                toast.success('correct option');
                            }else{
                                toast.error('wrong option');
                            }
                           }}>{percentageData[qid].options[String.fromCharCode(65 + 0)]}</div>                    
                           <div onClick={()=>{
                            if(String.fromCharCode(65 + 1) === percentageData[qid].correct_option){
                                toast.success('correct option');
                            }else{
                                toast.error('wrong option');
                            }
                           }}>{percentageData[qid].options[String.fromCharCode(65 + 1)]}</div>                    
                           <div  onClick={()=>{
                            if(String.fromCharCode(65 + 2) === percentageData[qid].correct_option){
                                toast.success('correct option');
                            }else{
                                toast.error('wrong option');
                            }
                           }}>{percentageData[qid].options[String.fromCharCode(65 + 2)]}</div>                    
                           <div  onClick={()=>{
                            if(String.fromCharCode(65 + 3) === percentageData[qid].correct_option){
                                toast.success('correct option');
                            }else{
                                toast.error('wrong option');
                            }
                           }}>{percentageData[qid].options[String.fromCharCode(65 + 3)]}</div>                    
                                     
                             </div>                
                             <div>                                     
                                </div>              
                                <div class="questioncontainer answercontainer">{percentageData[qid].solution}  </div>                                
                                </div>
      </div>
      <div class="w-full md:w-1/3 lg:w-1/4 px-2 mb-4">
      <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Related Questions</h2>
          <Link to={'/percentage/questions/' + q1} rel="noopener noreferrer"><p class="text-sm leading-relaxed">
        {x}: {percentageData[x].question}
        {x}                                      
            </p></Link><br/>

            <Link to={'/percentage/questions/' + q2} rel="noopener noreferrer"><p class="text-sm leading-relaxed">
        {x+1}: {percentageData[x+1].question}
        {x}                                      
            </p></Link><br/>

            <Link to={'/percentage/questions/' + q3} rel="noopener noreferrer"><p class="text-sm leading-relaxed">
        {x+2}: {percentageData[x+2].question}
        {x}                                      
            </p></Link><br/>


            <Link to={'/percentage/questions/' + q4} rel="noopener noreferrer"><p class="text-sm leading-relaxed">
        {x+3}: {percentageData[x+3].question}
        {x}                                      
            </p></Link><br/>


            <Link to={'/percentage/questions/' + q5} rel="noopener noreferrer"><p class="text-sm leading-relaxed">
        {x+4}: {percentageData[x+4].question}
        {x}                                      
            </p></Link><br/>

            <Link to={'/percentage/questions/' + q6} rel="noopener noreferrer"><p class="text-sm leading-relaxed">
        {x+5}: {percentageData[x+5].question}
        {x}                                      
            </p></Link><br/>
            
        </div>
      </div>
   </div>
                                <Toaster/>
    </>
  )
}

export default PercentageQ