import React, { useState, useEffect } from 'react';
import percentageData from '../Questions/percentage.json';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination';


function Percentage() {
  const [questions, setQuestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [userResponses, setUserResponses] = useState({});
  const [mathJaxLoaded, setMathJaxLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(2);
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

    script.onload = function () {
      setMathJaxLoaded(true);
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    setQuestions(percentageData);
  }, []);

  
  

  const handleSearch = (event) => {
    
    setSearchTerm(event.target.value);
    
  };

  const handleOptionChange = (event, questionIndex) => {
    const selectedOption = event.target.value;
    const updatedQuestions = [...questions];
    const updatedQuestion = { ...updatedQuestions[questionIndex] };
    updatedQuestion.selectedOption = selectedOption;
    updatedQuestions[questionIndex] = updatedQuestion;
    setQuestions(updatedQuestions);

    const updatedResponses = { ...userResponses };
    updatedResponses[questionIndex] = selectedOption;
    setUserResponses(updatedResponses);
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
  
  const bgClasses = ['bg-blue-100', 'bg-red-100', 'bg-green-100'];

  const lastPostIndex = currentPage * postPerPage;
  const firstPageIndex = lastPostIndex - postPerPage;
  const currentPost = questions.slice(firstPageIndex, lastPostIndex);

  useEffect(() => {
    setFilteredQuestions(
      currentPost.filter((question) =>
        question.question.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    
  }, [questions, searchTerm, mathJaxLoaded]);

  let pages = [];
  for(let i = 1; i <= Math.ceil(questions.length/postPerPage); i++){
      pages.push(i);
  }

  let i = 0;
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div>

      <div class="w-full px-2 mb-4">
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
                    <div class="">
                       
                <div>

                

                {filteredQuestions.map((question, index) => (
        <div key={question.id}>


<div key={index} className={`w-full flex-grow rounded-lg ${bgClasses[Math.floor(Math.random() * bgClasses.length)]}`}><div class='product max-h-screen w-full h-full items-center border-gray-200 border p-4 rounded-lg mt-2'><div class='p-details'><h2 class='text-gray-900 title-font text-lg mb-3'>
  
  {/* Test */}
  
  
  
  Q{i = i + 1}:  {question.question} <br/> </h2>
                {Object.entries(question.options).map(
              (option, optionIndex) => (
                
                <div class='inline-block py-1 px-4 mr-2 text-sm font-medium tracking-widest text-right mt-2' key={optionIndex}>  
                {/*{console.log('Options are' + option[1])}*/}

                {/*console.log(option[0] + '----' + question.answer)*/}
                    <input
                      type='checkbox'
                      name={`question${index}`}
                        value={option[1]}
                      style={{
                        transform: "scale(1.25)",
                    }}            
                      onClick={()=>{if(option[0] === question.answer){
                        toast.success('correct');
                      }else{
                        toast.error('wrong');
                      }}}
                        checked={option[1] === userResponses[index]}

                      
                    />
                    <span class='px-2'
                      dangerouslySetInnerHTML={{ __html: option[1]}}
                    />
                    <Link to={'/percentage/questions/' + index} target="_blank" rel="noopener noreferrer">Click Here</Link>
                </div>
                )
                
            )}
                
                 </div></div></div>
          
                
                


         
          {/* ... */}
          
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
{questions.length}
{postPerPage}
            <Toaster/>
                </section>
                
      
      {
    pages.map((page, index) => {
        return (
            <button key={index} onClick={(event) => {
                setCurrentPage(page);
                handleOptionChange(event, index)
                console.log(page);
            }} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>{page}</button>
        );
        
    })
}
        
    </div>
        
      </div>
    </>
  );
}

export default Percentage;