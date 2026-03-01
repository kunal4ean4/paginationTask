import React from 'react'
import './styles/Cards.css'
const Cards = ({title,image}) => {
  return (
    <div className='cardContainer'>
        <div className="card">
            <img src={image} alt={title} />
            <div className='title'>{title}</div>
        </div>
        
      
    </div>
  )
}

export default Cards
