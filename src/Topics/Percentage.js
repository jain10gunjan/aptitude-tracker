import React, { useState, useEffect } from 'react';
import percentageData from '../Questions/percentage.json';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Aptitudelist from '../components/Aptitudelist';
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer'

function Percentage() {
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [userResponses, setUserResponses] = useState({});

  
  useEffect(() => {
    setQuestions(percentageData);
  }, []);

  

  useEffect(() => {
    setFilteredQuestions(
      questions.filter((question) =>
        question.question.toLowerCase()
      )
    );
    
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
<Helmet>
<title>Percentage Questions</title>
      <meta name="description" content={'Practice Percentage Questions For Placements and Other Competitive Examinations.'}/>
      <meta name="keywords"content="Aptitude Questions, Placements preparation, Percentage Placements Questions, UPSC Quadratic Equations Questions."/>
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      </Helmet>


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
                    Practice Unlimited For Free {percentageData.length}
                </h3>
              
                
                
                <div>
                    <div class="max-h-screen max-w-full">
                       
                <div>

                
                <MathJaxContext>
                {filteredQuestions.map((question, index) => (
          <div key={question.id}>
            <div class="quiz-container mb-10">
        <div class="question-numbercontainer"> 
        <p class="text-sm text-gray-300">Aptitude Questions<br/> Chapter: Quadratic Equations </p>                
        </div>                
        <div class="questioncontainer">                     
        <MathJax>Q{index + 1}:  {question.question}</MathJax>                                 
        </div> 
            <div class="optionscontainer">
<div  onClick={()=>{
  
  if(String.fromCharCode(65 + 0) === question.correct_option){
    
    toast.success('correct option');
}else{
    
    toast.error('wrong option');
}
                            

                           }}><MathJax>{question.options[String.fromCharCode(65 + 0)]}</MathJax></div>
                           <div  onClick={()=>{
  if(String.fromCharCode(65 + 1) === question.correct_option){
    toast.success('correct option');
}else{
    toast.error('wrong option');
}}}><MathJax>{question.options[String.fromCharCode(65 + 1)]}</MathJax></div>

<div  onClick={()=>{
  if(String.fromCharCode(65 + 2) === question.correct_option){
    toast.success('correct option');
}else{
    toast.error('wrong option');
}}}><MathJax>{question.options[String.fromCharCode(65 + 2)]}</MathJax></div>

<div  onClick={()=>{
  if(String.fromCharCode(65 + 3) === question.correct_option){
    toast.success('correct option');
}else{
    toast.error('wrong option');
}}}><MathJax>{question.options[String.fromCharCode(65 + 3)]}</MathJax></div>
<Link to={'/percentage/questions/' + index}>
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  View Solution
</button>
</Link>

<details class="mt-4 group">
				<summary class="">
					<span class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> View Answer</span>
					<span class="transition group-open:rotate-180">
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
          Correct Option: {question.correct_option}
          <br/>
<MathJax>{percentageData[index].solution}</MathJax>          
					 
				</p>
			</details>
                           </div>


</div>


          </div>
        ))}
        </MathJaxContext>

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





    
      <Toaster position="top-left" reverseOrder={false} />
      <Footer/>
    </>
  );
}

export default Percentage;


//