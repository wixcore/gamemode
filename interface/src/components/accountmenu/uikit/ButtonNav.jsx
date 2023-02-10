import React from 'react'
import '../css/content.css'

const ButtonNav = ({ name }) => {
    return (
        <div className="nav__button">
            <span className="nav__button__name">{name}</span>
        </div>
    )
}

export default ButtonNav