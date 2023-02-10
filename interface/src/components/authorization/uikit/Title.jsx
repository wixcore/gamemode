import React from 'react'
import '../css/auto.css'

const Title = ({ text, size }) => (
    <span className={`dednet__title-${size}`}>
        {text}
    </span>
)

export default Title