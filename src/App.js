import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet';
import numbersystem from './Questions/numbersystem.json'
import percentage from './Questions/percentage.json'
import timeandwork from './Questions/timeandwork.json'
import quadraticequations from './Questions/quadraticequations.json'


function App() {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredQuestions = [
    { name: 'Number System', questions: numbersystem, link: 'number-system' },
    { name: 'Percentage', questions: percentage, link: 'percentage' },
    { name: 'Time and Work', questions: timeandwork, link: 'time-and-work' },
    { name: 'Quadratic Equations', questions: quadraticequations, link: 'quadratic-equations' },
    { name: 'Simplification',   questions: quadraticequations, link: 'simplification' },
        { name: 'LCM and HCF',  questions: quadraticequations,  link: 'lcm-and-hcf' },
        { name: 'Average',   questions: quadraticequations, link: 'average' },
        { name: 'Approximation',  questions: quadraticequations, link: 'approximation' },
        { name: 'Unitary Method',   questions: quadraticequations, link: 'unitary-method' },
        { name: 'Linear Method',   questions: quadraticequations, link: 'linear-method' },
        { name: 'Discount',   questions: quadraticequations, link: 'discount' },
        { name: 'Sqaure root and cube root',  questions: quadraticequations, link: 'square-root-and-cube-root' },
        { name: 'Surds and Indices',  questions: quadraticequations, link: 'surds-and-indices' },
        { name: 'Order of magnitude',  questions: quadraticequations, link: 'order-of-magnitude' },
        { name: 'Profit and Loss',  questions: quadraticequations, link: 'profit-and-loss' },
        { name: 'Odd man Out and series',  questions: quadraticequations, link: 'odd-man-out-and-series' },
        { name: 'Work and Wages',  questions: quadraticequations, link: 'work-and-wages' },
        { name: 'Algebra',  questions: quadraticequations, link: 'algebra' },
        { name: 'Stocks and Shares', questions: quadraticequations,  link: 'stocks-and-shares' },
        { name: 'True Discount',  questions: quadraticequations, link: 'true-discount' },
        { name: 'Ratio and Proportion',  questions: quadraticequations, link: 'ratio-and-proportion' },
        { name: 'Partnership',  questions: quadraticequations, link: 'partnership' },
        { name: 'Alligation and Mixture',  questions: quadraticequations, link: 'alligation-and-mixture' },
        { name: 'Pipes and Cistern',  questions: quadraticequations, link: 'pipes-and-cistern' },
        { name: 'Speed, Time and Distance',  questions: quadraticequations, link: 'speed-time-and-distance' },
        { name: 'Bankers Discount',  questions: quadraticequations, link: 'bankers-discount' },
        { name: 'Boats and Streams',  questions: quadraticequations, link: 'boats-and-streams' },
        { name: 'Races and Games', questions: quadraticequations,  link: 'races-and-games' },
        { name: 'Problems on Ages',  questions: quadraticequations, link: 'problems-and-ages' },
        { name: 'Clocks and Calendars',  questions: quadraticequations, link: 'quadratic-equations' },
        { name: 'Simple Interest',  questions: quadraticequations, link: 'quadratic-equations' },
        { name: 'Compound Interest',  questions: quadraticequations, link: 'quadratic-equations' },
        { name: 'Sets and Functions',  questions: quadraticequations, link: 'quadratic-equations' },
        { name: 'Area and Perimeter',  questions: quadraticequations, link: 'quadratic-equations' },
        { name: 'Volume and Surface Area of Solid Figures',  questions: quadraticequations, link: 'quadratic-equations' },
        { name: 'Sequences and Series',  questions: quadraticequations, link: 'quadratic-equations' },
        { name: 'Plane Geometry',  questions: quadraticequations, link: 'quadratic-equations' },
        { name: 'Logarithm', questions: quadraticequations,  link: 'quadratic-equations' },
        { name: 'Probability',  questions: quadraticequations, link: 'quadratic-equations' },
        { name: 'Permuation',  questions: quadraticequations, link: 'quadratic-equations' },
        { name: 'Statistics',  questions: quadraticequations, link: 'quadratic-equations' },
        { name: 'Mensuration',  questions: quadraticequations, link: 'quadratic-equations' },
        { name: 'Trigonometry',  questions: quadraticequations, link: 'quadratic-equations' },
  ].filter((category) => {
    return category.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
    <Navbar/>
      <Helmet>
<title>{'Aptitude Tracker'} </title>
      <meta name="description" content={'Practice Percentage Questions For Placements and Other Competitive Examinations.'}/>
      <meta name="keywords"content="Aptitude Questions, Placements preparation, Aptitude Placements Questions, UPSC Quadratic Equations Questions."/>
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      </Helmet>
      <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-5xl mt-5 tracking-tight">
          Aptitude Tracker
        </h2>
        <p className="text-neutral-500 text-xl mt-3">
          Practice Aptitude Questions For Free.
        </p>
        <input
          type="text"
          placeholder="Search for a category"
          value={searchTerm}
          onChange={handleSearch}
          className="mt-4 p-2 rounded-md border-gray-300 border-2"
        />
      </div>
      <div className="px-4 grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
        {filteredQuestions.map((category, index) => (
          <div className="py-5" key={index}>
            <Link to={`/${category.link}`}>
              <div className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span>{category.name}</span>
                <span className="text-xs transition group-open:rotate-180">
                  Total Questions: {category.questions.length}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
      </>
    
  );
}

export default App;
