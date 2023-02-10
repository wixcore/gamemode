import React from 'react'
import '../css/auto.css'

const Button = ({ text, onClick }) => (
    <span className={`dednet__button`} onClick={onClick}>
        {text}
    </span>
)

export default Button