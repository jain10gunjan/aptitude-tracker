import React from 'react'
import { Link } from 'react-router-dom'

const Aptitudelist = () => {
    const filteredQuestions = [
        { name: 'Number System',  link: '/number-system' },
        { name: 'Percentage',  link: '/percentage' },
        { name: 'Time and Work',  link: '/time-and-work' },
        { name: 'Quadratic Equations', link: '/quadratic-equations' },
        { name: 'Simplification',  link: 'number-system' },
        { name: 'LCM and HCF',  link: 'percentage' },
        { name: 'Average',  link: 'time-and-work' },
        { name: 'Approximation', link: 'quadratic-equations' },
        { name: 'Unitary Method',  link: 'number-system' },
        { name: 'Linear Method',  link: 'percentage' },
        { name: 'Discount',  link: 'time-and-work' },
        { name: 'Sqaure root and cube root', link: 'quadratic-equations' },
        { name: 'Surds and Indices', link: 'quadratic-equations' },
        { name: 'Order of magnitude', link: 'quadratic-equations' },
        { name: 'Profit and Loss', link: 'quadratic-equations' },
        { name: 'Odd man Out and series', link: 'quadratic-equations' },
        { name: 'Work and Wages', link: 'quadratic-equations' },
        { name: 'Algebra', link: 'quadratic-equations' },
        { name: 'Stocks and Shares', link: 'quadratic-equations' },
        { name: 'True Discount', link: 'quadratic-equations' },
        { name: 'Ratio and Proportion', link: 'quadratic-equations' },
        { name: 'Partnership', link: 'quadratic-equations' },
        { name: 'Alligation and Mixture', link: 'quadratic-equations' },
        { name: 'Pipes and Cistern', link: 'quadratic-equations' },
        { name: 'Speed, Time and Distance', link: 'quadratic-equations' },
        { name: 'Bankers Discount', link: 'quadratic-equations' },
        { name: 'Boats and Streams', link: 'quadratic-equations' },
        { name: 'Races and Games', link: 'quadratic-equations' },
        { name: 'Problems on Ages', link: 'quadratic-equations' },
        { name: 'Clocks and Calendars', link: 'quadratic-equations' },
        { name: 'Simple Interest', link: 'quadratic-equations' },
        { name: 'Compound Interest', link: 'quadratic-equations' },
        { name: 'Sets and Functions', link: 'quadratic-equations' },
        { name: 'Area and Perimeter', link: 'quadratic-equations' },
        { name: 'Volume and Surface Area of Solid Figures', link: 'quadratic-equations' },
        { name: 'Sequences and Series', link: 'quadratic-equations' },
        { name: 'Plane Geometry', link: 'quadratic-equations' },
        { name: 'Logarithm', link: 'quadratic-equations' },
        { name: 'Probability', link: 'quadratic-equations' },
        { name: 'Permuation', link: 'quadratic-equations' },
        { name: 'Statistics', link: 'quadratic-equations' },
        { name: 'Mensuration', link: 'quadratic-equations' },
        { name: 'Trigonometry', link: 'quadratic-equations' },

      ]

      let x = Math.floor((Math.random() * 10) + 1);

  return (
    <div class="overscroll-auto max-w-sm mx-auto  rounded-lg md:mx-4 dark:border-gray-700">
                     <div class="p-6">
                                    <h1 class="text-lg font-medium text-gray-700 capitalize lg:text-xl dark:text-white">Aptitude Topics</h1>

                                    <div class="mt-8 space-y-4">
                                        <div class="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                            </svg>

                                            <Link to={filteredQuestions[x].link}> <span class="mx-1 text-gray-700 dark:text-gray-300">{filteredQuestions[x].name}</span>
</Link>
                                        </div>
                                        <div class="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                            </svg>

                                            <Link to={filteredQuestions[x].link}> <span class="mx-1 text-gray-700 dark:text-gray-300">{filteredQuestions[x+1].name}</span>
</Link>
                                        </div>
                                        <div class="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                            </svg>

                                            <Link to={filteredQuestions[x].link}> <span class="mx-1 text-gray-700 dark:text-gray-300">{filteredQuestions[x+2].name}</span>
</Link>
                                        </div>
                                        <div class="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                            </svg>

                                            <Link to={filteredQuestions[x].link}> <span class="mx-1 text-gray-700 dark:text-gray-300">{filteredQuestions[x+3].name}</span>
</Link>
                                        </div>
                                        <div class="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                            </svg>

                                            <Link to={filteredQuestions[x].link}> <span class="mx-1 text-gray-700 dark:text-gray-300">{filteredQuestions[x+4].name}</span>
</Link>
                                        </div>
                                        <div class="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                            </svg>

                                            <Link to={filteredQuestions[x].link}> <span class="mx-1 text-gray-700 dark:text-gray-300">{filteredQuestions[x+5].name}</span>
</Link>
                                        </div>
                                        <div class="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                            </svg>

                                            <Link to={filteredQuestions[x].link}> <span class="mx-1 text-gray-700 dark:text-gray-300">{filteredQuestions[x+6].name}</span>
</Link>
                                        </div>
                                        <div class="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                            </svg>

                                            <Link to={filteredQuestions[x].link}> <span class="mx-1 text-gray-700 dark:text-gray-300">{filteredQuestions[x+7].name}</span>
</Link>
                                        </div>
                                        <div class="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                            </svg>

                                            <Link to={filteredQuestions[x].link}> <span class="mx-1 text-gray-700 dark:text-gray-300">{filteredQuestions[x+8].name}</span>
</Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
  )
}

export default Aptitudelist