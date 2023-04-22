import React, { useState, useEffect } from 'react';
import percentageData from '../Questions/percentage.json';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Percentage() {
  const [questions, setQuestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
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
        question.question.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [questions, searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  

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

<div class="containerelement">
        <p id="text22"></p>
        <section class="relative py-16 bg-white min-w-screen animation-fade animation-delay">
            <div class="container px-8 m-auto sm:px-12 xl:px-5">
                <p class="text-xs font-bold text-left text-pink-500 uppercase sm:mx-6 sm:text-center sm:text-normal sm:font-bold">
                    Want to practice questions for JEE - NEET? So Here You Can!.
                </p>
                <h3 class="mt-1 mb-4 text-2xl font-bold text-left text-gray-800 sm:mx-6 sm:text-3xl md:text-4xl lg:text-3xl sm:text-center sm:mx-0">
                    Practice Unlimited For JEE - NEET
                </h3>
                <form>   
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                    <div class="relative">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="search-item" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Questions Or Chapters" required="" value={searchTerm} onChange={handleSearch}/>
                        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>
                
                <div>
                    <div class="max-h-screen max-w-full p-8">
                       
                <div>

                

                {filteredQuestions.map((question, index) => (
          <div key={question.id}>
            <div class="quiz-container">
        <div class="question-numbercontainer"> 
        <p class="text-sm text-gray-300">Physics | JEE Mains 2022 | 24 - June Shift - 1  <br/> Chapter : Work, Energy and Power | Topic : Work Done by a Variable Force </p>                
        </div>                
        <div class="questioncontainer">                     
        {question.question}                                      
        </div> 
            <div class="optionscontainer">
<div  onClick={()=>{
  
  if(String.fromCharCode(65 + 0) === question.answer){
    
    toast.success('correct option');
}else{
    
    toast.error('wrong option');
}
                            

                           }}>{question.options[String.fromCharCode(65 + 0)]}</div>
                           <div  onClick={()=>{
  if(String.fromCharCode(65 + 1) === question.answer){
    toast.success('correct option');
}else{
    toast.error('wrong option');
}}}>{question.options[String.fromCharCode(65 + 1)]}</div>

<div  onClick={()=>{
  if(String.fromCharCode(65 + 2) === question.answer){
    toast.success('correct option');
}else{
    toast.error('wrong option');
}}}>{question.options[String.fromCharCode(65 + 2)]}</div>

<div  onClick={()=>{
  if(String.fromCharCode(65 + 3) === question.answer){
    toast.success('correct option');
}else{
    toast.error('wrong option');
}}}>{question.options[String.fromCharCode(65 + 3)]}</div>
                           </div>
</div>
<Link to={'/percentage/questions/' + index} target="_blank" rel="noopener noreferrer">Click Here</Link>

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



    
      <Toaster position="top-right" reverseOrder={false} />
      
    </>
  );
}

export default Percentage;


//
