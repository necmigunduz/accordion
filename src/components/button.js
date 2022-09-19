import React from 'react'

const Button = ({btnName, onClick, className }) => {
  return (
    <button 
      className={className}
      onClick={onClick}
      >
        {btnName}
      </button>
  )
}

export default Button