import React from 'react'
import '../css/general.css'
import ProgressBar from './ProgressBar'

const StatContainer = ({  title, value, maxvalue }) => {
    return (
        <div className="accountmenu__cards__stats__item">
            <span className="accountmenu__cards__stats__title">{title}</span>
            <ProgressBar 
                value={value}
                maxvalue={maxvalue}
            />
            <span className="accountmenu__cards__stats__value">{value}%</span>
        </div>
    )
}

export default StatContainer