import React, { useState, useEffect } from 'react';
import percentageData from '../Questions/percentage.json';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Aptitudelist from '../components/Aptitudelist';

function Percentage() {
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [userResponses, setUserResponses] = useState({});

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

  useEffect(() => {
    setQuestions(percentageData);
  }, []);

  useEffect(() => {
    setFilteredQuestions(
      questions.filter((question) =>
        question.question.toLowerCase())
      )
  }, [questions]);

  

  

  useEffect(() => {
    const storedResponses = JSON.parse(localStorage.getItem('userResponses'));
    if (storedResponses) {
      setUserResponses(storedResponses);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('userResponses', JSON.stringify(userResponses));
  }, [userResponses]);

  return (
    <>

<Navbar/>
<div class="flex flex-wrap mt-4 mx-2 mb-8">
      <div class="w-full md:w-2/3 lg:w-3/4 px-2 mb-4">
      <div class="containerelement">
        <p id="text22"></p>
        <section class="relative py-16 bg-white min-w-screen animation-fade animation-delay">
            <div class="container px-8 m-auto sm:px-12 xl:px-5">
                <p class="text-xs font-bold text-left text-pink-500 uppercase sm:mx-6 sm:text-center sm:text-normal sm:font-bold">
                    Want to practice questions of Aptitude for Campus Placements, <br/>UPSC, GATE and other competitive exman. So Here You Can!.
                </p>
                <h3 class="mt-1 mb-4 text-2xl font-bold text-left text-gray-800 sm:mx-6 sm:text-3xl md:text-4xl lg:text-3xl sm:text-center sm:mx-0">
                    Practice Unlimited For Free
                </h3>
                
                
                <div>
                    <div class="max-h-screen max-w-full p-8">
                       
                <div>

                

                {filteredQuestions.map((question, index) => (
          <div key={question.id}>
            <div class="quiz-container">
        <div class="question-numbercontainer"> 
        <p class="text-sm text-gray-300">Aptitude Questions<br/> Chapter: Percentage </p>                
        </div>                
        <div class="questioncontainer">                     
        Q{index + 1}:  {question.question}                                      
        </div> 
            <div class="optionscontainer">
<div  onClick={()=>{
  
  if(String.fromCharCode(65 + 0) === question.correct_option){
    
    toast.success('correct option');
}else{
    
    toast.error('wrong option');
}
                            

                           }}>{question.options[String.fromCharCode(65 + 0)]}</div>
                           <div  onClick={()=>{
  if(String.fromCharCode(65 + 1) === question.correct_option){
    toast.success('correct option');
}else{
    toast.error('wrong option');
}}}>{question.options[String.fromCharCode(65 + 1)]}</div>

<div  onClick={()=>{
  if(String.fromCharCode(65 + 2) === question.correct_option){
    toast.success('correct option');
}else{
    toast.error('wrong option');
}}}>{question.options[String.fromCharCode(65 + 2)]}</div>

<div  onClick={()=>{
  if(String.fromCharCode(65 + 3) === question.correct_option){
    toast.success('correct option');
}else{
    toast.error('wrong option');
}}}>{question.options[String.fromCharCode(65 + 3)]}</div>
<Link to={'/percentage/questions/' + index} target="_blank" rel="noopener noreferrer">
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  View Solution
</button>
</Link>
                           </div>


</div>


          </div>
        ))}

          </div>
      
      </div>
      </div>


        
                <div>
              
                
                
            </div>
        
            </div>
            <div>
        
        
            </div>

                </section>
                
    
        
    </div>
      </div>
      <div class="w-full md:w-1/3 lg:w-1/4 px-2 mb-4">
      <Aptitudelist/>
      </div>
   </div>





    
      <Toaster position="top-right" reverseOrder={false} />
      
    </>
  );
}

export default Percentage;


//