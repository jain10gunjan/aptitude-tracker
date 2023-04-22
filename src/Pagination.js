import React from 'react'

const Pagination = ({totalPosts, postPerPage , setCurrentPage}) => {
    let pages = [];
    for(let i = 1; i <= Math.ceil(totalPosts/postPerPage); i++){
        pages.push(i);
    }
  return (
    <div>

{
    pages.map((page, index) => {
        return (
            <button key={index} onClick={() => {
                setCurrentPage(page);
                console.log(page);
            }} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>{page}</button>
        );
        
    })
}

    </div>
  );
};

export default Pagination;