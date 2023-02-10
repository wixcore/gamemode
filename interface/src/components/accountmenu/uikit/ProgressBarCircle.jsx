import React from 'react'
import '../css/general.css'

const ProgressBarCircle = ({ toptext, midtext, btmtext }) => {
    return (
        <div className="accountmenu__content__cards__status__circle">
            <span className="accountmenu__content__cards__status__circle__ttext">
                {toptext}
            </span>
            <span className="accountmenu__content__cards__status__circle__mtext">
                {midtext}
            </span>
            <span className="accountmenu__content__cards__status__circle__btext">
                {btmtext}
            </span>
        </div>
    )
}

export default ProgressBarCircle