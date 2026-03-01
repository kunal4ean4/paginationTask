import React from 'react'

const Pagination = ({handleOnClick,goToPrePage,goToNextPage,noOfPages,currentPage}) => {
  return (
    <div className="paginationContainer">
        <button
          disabled={currentPage === 0}
          onClick={() => goToPrePage()}
          className="pageNumber"
        >
          ◀️
        </button>
        {[...Array(noOfPages).keys()].map((n) => {
          return (
            <button onClick={() => handleOnClick(n)} 
             className={`pageNumber ${n==currentPage?"activeColor":""}`}
            
            
            >
              {n} 
              
            </button>
          );
        })}
        <button
          disabled={currentPage === noOfPages - 1}
          onClick={() => goToNextPage()}
          className="pageNumber"
        >
          ▶️
        </button>
      </div>
  )
}

export default Pagination
