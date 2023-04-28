import React from 'react'
import { useParams } from 'react-router-dom';
import percentageData from '../Questions/percentage.json';
import toast, { Toaster } from 'react-hot-toast';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { MathJax, MathJaxContext } from "better-react-mathjax";
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';


const PercentageQ = () => {
    let {qid} = useParams()
    let x = Math.floor((Math.random() * 10) + 1);
    let q1 = x;
    let q2 = x+1;
    let q3 = x+2;
    let q4 = x+3;
    let q5 = x+4;
    
    const schema = {
      "@context": "https://schema.org/",
      "@type": "Quiz",
      "about": {
        "@type": "Question",
        "name": `${percentageData[qid].question}`
      },
      "educationalAlignment": [
        {
          "@type": "AlignmentObject",
          "alignmentType": "educationalSubject",
          "targetName": "Percentage"
        }
      ],
      "hasPart": [
        {
          "@context": "https://schema.org/",
          "@type": "Question",
          "eduQuestionType": "Flashcard",
          "text":
            `${percentageData[qid].question}`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `${percentageData[qid].solution}`
          }
        }
      ]
    };
  
    const pageValue = 'percentage';
    
      return (
        <>
        
    
        <Navbar/>
    
        <Helmet>
  
        <title> {(percentageData[qid].question).slice(0, 90)} </title>
        <meta name="description" content={percentageData[qid].question}/>
        <meta name="keywords"content="Aptitude Questions, Placements preparation, Percentage Placements Questions, UPSC Percentage  Questions."/>
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
  
        </Helmet>
    
        <MathJaxContext>
        <section class="text-gray-600 body-font relative">
      <div class="container px-5 py-2 mx-auto flex sm:flex-nowrap flex-wrap">
        <div class="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <div>
            <div class="question-numbercontainer"> 
            <p class="text-sm text-gray-300">Aptitude Questions <br/>Chapter : Percentage </p>                
            </div>                
            <div class="questioncontainer">                     
            <MathJax>{percentageData[qid].question}</MathJax>                                      
            </div>                
            <div class="optionscontainer">
    
    
                               <div onClick={()=>{
                                if(String.fromCharCode(65 + 0) === percentageData[qid].correct_option){
                                    toast.success('correct option');
                                }else{
                                    toast.error('wrong option');
                                }
                               }}><MathJax>{percentageData[qid].options[String.fromCharCode(65 + 0)]}</MathJax></div>                    
                               <div onClick={()=>{
                                if(String.fromCharCode(65 + 1) === percentageData[qid].correct_option){
                                    toast.success('correct option');
                                }else{
                                    toast.error('wrong option');
                                }
                               }}><MathJax>{percentageData[qid].options[String.fromCharCode(65 + 1)]}</MathJax></div>                    
                               <div  onClick={()=>{
                                if(String.fromCharCode(65 + 2) === percentageData[qid].correct_option){
                                    toast.success('correct option');
                                }else{
                                    toast.error('wrong option');
                                }
                               }}><MathJax>{percentageData[qid].options[String.fromCharCode(65 + 2)]}</MathJax></div>                    
                               <div  onClick={()=>{
                                if(String.fromCharCode(65 + 3) === percentageData[qid].correct_option){
                                    toast.success('correct option');
                                }else{
                                    toast.error('wrong option');
                                }
                               }}><MathJax>{percentageData[qid].options[String.fromCharCode(65 + 3)]}</MathJax></div>                    
                                         
                                 </div>                
                                 <div>                                     
                                    </div>              
                                    <div class="questioncontainer answercontainer">Solution: <MathJax>{percentageData[qid].solution}</MathJax>  </div>                                
                                    </div>
          </div>
        <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Related Questions</h2>
        <Link to={`/${pageValue}/questions/` + q1}>
  <p class="text-sm leading-relaxed">
    
             <MathJax>{x}: {percentageData[x].question}</MathJax>
                                                 
                </p></Link><br/>
    
                <Link to={`/${pageValue}/questions/` + q2} rel="noopener noreferrer"><p class="text-sm leading-relaxed">
             <MathJax>{x+1}: {percentageData[x+1].question}</MathJax>
                </p></Link><br/>
    
                <Link to={`/${pageValue}/questions/` + q3} rel="noopener noreferrer"><p class="text-sm leading-relaxed">
            <MathJax>{x+2}:  {percentageData[x+2].question}</MathJax>
                </p></Link><br/>
    
    
                <Link to={`/${pageValue}/questions/` + q4} rel="noopener noreferrer"><p class="text-sm leading-relaxed">
             <MathJax>{x+3}:{percentageData[x+3].question}</MathJax>
                </p></Link><br/>
    
    
                <Link to={`/${pageValue}/questions/` + q5} rel="noopener noreferrer"><p class="text-sm leading-relaxed">
             <MathJax>{x+4}: {percentageData[x+4].question}</MathJax>
                </p></Link><br/>
          </div>
          </div>       
          </section>     
          </MathJaxContext>
    
    
                                    <Toaster/>
                                    <Footer/>
        </>
      );
}

export default PercentageQ