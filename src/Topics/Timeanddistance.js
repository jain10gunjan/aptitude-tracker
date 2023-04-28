import React, { useState, useEffect } from 'react';
import percentageData from '../Questions/timeandwork.json';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer'

function Timeandwork() {
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState();
  const [firstPageIndex, setFirstPageIndex] = useState();

  useEffect(() => {
    setQuestions(percentageData);
    setPostPerPage(1);
    setFirstPageIndex(0);
  }, []);

  

  


const value = "Aptitude Questions";
const chapterName = "Time and Work"
const pageValue="time-and-work"

const handleOptionChange = (event, questionIndex) => {
  const selectedOption = event.target.value;
  const updatedQuestions = [...questions];
  const updatedQuestion = { ...updatedQuestions[questionIndex] };
  updatedQuestion.selectedOption = selectedOption;
  updatedQuestions[questionIndex] = updatedQuestion;
  setQuestions(updatedQuestions);
};

useEffect(() => {
  const lastPostIndex = currentPage * postPerPage;
  const firstPageIndex = lastPostIndex - postPerPage;
  const currentPost = questions.slice(firstPageIndex, lastPostIndex);

  setFilteredQuestions(
    currentPost.filter((question) =>
      question.question.toLowerCase()
    )
  );
}, [questions, currentPage, postPerPage]);

let x = currentPage;
let y = Math.floor((Math.random() * 10) + 1);
let q1 = y;
let q2 = y+1;
  let q3 = y+2;
  let q4 = y+3;
  let q5 = y+4;
let pages = [];
for (let i = 1; i <= Math.ceil(questions.length / postPerPage); i++) {
  pages.push(i);
}
  return (
    <>
<Navbar/>

<Helmet>

      <title>{chapterName +' Questions'} </title>
      <meta name="description" content={'Practice Quadractic Equation Questions For Placements and Other Competitive Examinations.'}/>
      <meta name="keywords"content="Aptitude Questions, Placements preparation, Quadratic Equations Placements Questions, UPSC Quadratic Equations Questions."/>
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      </Helmet>
      <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-3xl mt-5 tracking-tight">
          {chapterName + ' Questions'} 
        </h2>
        <p className="text-neutral-500 text-xl mt-3">
          Practice {chapterName} Aptitude Questions For Free.
        </p>
      </div>
      </div>

      <section class="text-gray-600 body-font relative">


    <div class="container px-5 py-2 mx-auto flex sm:flex-nowrap flex-wrap">
      
      <div class="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex relative">
        
      <div>
                  {/* Progress bar */}
<div class="container bg-gray-200 rounded-full dark:bg-gray-700">
    <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={ {width: `${Math.round((currentPage / percentageData.length) * 100) + '%'}`} }>{Math.round((currentPage / percentageData.length) * 100)}% Completed</div>
  </div>
{/* Progress bar */}    
          <MathJaxContext>
                {filteredQuestions.map((question, index) => (
          <div key={question.id} class="mt-4">
            <div class="quiz-container">
        <div class="question-numbercontainer"> 
        <p class="text-sm text-gray-600">{value}<br/>Chapter: {chapterName} </p>                
        </div>                
        <div class="questioncontainer text-sm leading-relaxed">                     
        <MathJax>Q{currentPage}:  {question.question}</MathJax>                                 
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

{/*
<Link to={`/${pageValue}/questions/` + index}>
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Discuss
</button>
</Link>
*/}
                           </div>

                           {/* Buttons */}
<div class="mt-0 mb-20 flex flex-wrap items-center">
<Link to={`/${pageValue}/questions/` + currentPage}>
                <button class="hover:bg-gray-400 text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                    Discuss
                </button>
</Link>

                <button
                onClick={(event) => {
                  if (currentPage > 1) {
                    setCurrentPage(currentPage - 1);
                    handleOptionChange(event, firstPageIndex + currentPage - 2);
                  }
                }}
                disabled={currentPage === 1}
                class="hover:bg-gray-400 text-xs mr-2 py-1.5 px-4 text-gray-600 bg-red-100 rounded-2xl">
                    Prev
                </button>
                <button
                onClick={(event) => {
                  setCurrentPage(currentPage + 1);
                  handleOptionChange(event, firstPageIndex + currentPage + 1);
                }}
                disabled={currentPage === percentageData.length}
                class="hover:bg-gray-400 text-xs mr-2 py-1.5 px-4 text-gray-600 bg-pink-100 rounded-2xl">
                    Next
                </button>

                {/* Accordian */}
<details class="py-2 group">
				<summary class="hover:bg-gray-400 text-xs mr-2 py-1.5 px-4 text-gray-600 bg-green-100 rounded-2xl">
                    View Solution
				</summary>
				<span class="text-neutral-600 mt-3 group-open:animate-fadeIn">
          Correct Option: {question.correct_option}
          <br/>
<MathJax>{question.solution}</MathJax>          
					 
				</span>
			</details>
{/* Accordian */}
            </div>
{/* Buttons */}

</div>
  



          </div>
          
        ))}
        </MathJaxContext>
          </div>
        </div>
<MathJaxContext>
      <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Simmilar Questions</h2>
      
<p class="text-sm leading-relaxed">
  
           <MathJax>{x}: {percentageData[q1].question}</MathJax>
                                               
              </p><br/>
  
              <p class="text-sm leading-relaxed">
           <MathJax>{x+1}: {percentageData[q2].question}</MathJax>
              </p><br/>

              <p class="text-sm leading-relaxed">
           <MathJax>{x+2}: {percentageData[q3].question}</MathJax>
              </p><br/>

              <p class="text-sm leading-relaxed">
           <MathJax>{x+3}: {percentageData[q4].question}</MathJax>
              </p><br/>

              <p class="text-sm leading-relaxed">
           <MathJax>{x+4}: {percentageData[q5].question}</MathJax>
              </p><br/>
        </div>
        </MathJaxContext>
        </div>       
        </section>  
    
      <Toaster position="top-left" reverseOrder={false} />
      <Footer/>
    </>
  );
}

export default Timeandwork;


//