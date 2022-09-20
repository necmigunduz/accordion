import React from 'react'

const Button = ({btnName, onClick, className, number0fItems }) => {
  return (
    <button 
      className={className}
      onClick={onClick}
      >
        {btnName}{number0fItems ? <sup className='text-[0.5em]'>({number0fItems})</sup>:null}
      </button>
  )
}

export default Button