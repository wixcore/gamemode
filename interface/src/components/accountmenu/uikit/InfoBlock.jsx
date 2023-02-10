import React from 'react'
import '../css/general.css'

const InfoBlock = ({ title, subtitle }) => {
    return (
        <div className="accountmenu__cards__logindata__item">
            <span className="accountmenu__cards__logindata__item__title">
                {title}
            </span>
            <span className="accountmenu__cards__logindata__item__subtitle">
                {subtitle}    
            </span>
        </div>
    )
}

export default InfoBlock