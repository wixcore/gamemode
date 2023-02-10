import React from 'react'
import '../css/property.css'

const ButtonDone = ({ text }) => {
    return (
        <div className="accountmenu__content__cards__button_done">
            <span className="accountmenu__content__cards__button__text">{text}</span>
        </div>
    )
}

export default ButtonDone