import React from 'react'
import '../css/property.css'

const ButtonGps = ({ filled, position, x, y }) => {
    return (
        <div
            className={filled ? "accountmenu__cards__btngps_filled" : "accountmenu__cards__btngps_nonfilled"}
            style={{marginLeft: position === 'right' ? 'auto' : '', marginRight: position === 'left' ? 'auto' : ''}}
            onClick={() => {
                try {
                    mp.trigger('client:mainMenu:sendPos', x, y); // eslint-disable-line
                }
                catch (e) {}
            }}
        >
            <div className="accountmenu__cards__btngps__icon" />
            <span className="accountmenu__cards__btngps__text">
                Найти по GPS
            </span>
        </div>
    )
}

export default ButtonGps