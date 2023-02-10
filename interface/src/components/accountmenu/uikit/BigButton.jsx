import React from 'react'
import '../css/faq.css'

const BigButton = ({ text, onPress, disabled, type, children, nowrap }) => {

    /*

        type - 1 (красный градиент), 0 (голубой градиент)

    */

    if (disabled) {
        type = -1
    }

    let btnClass = ''
    
    switch (type) {
        case -1:
            btnClass = 'accountmenu__content__cards__bigbutton_disabled'
            break;
        case 0:
            btnClass = 'accountmenu__content__cards__bigbutton_blue'
            break;
        case 1:
            btnClass = 'accountmenu__content__cards__bigbutton_red'
            break;
        case 2:
            btnClass = 'accountmenu__content__cards__bigbutton_green'
            break;
        case 3:
            btnClass = 'accountmenu__content__cards__bigbutton_border_red'
            break;
        case 4:
            btnClass = 'accountmenu__content__cards__bigbutton_border_blue'
            break;
        default:
            btnClass = 'accountmenu__content__cards__bigbutton_blue'
            break;
    }
    return (
        <div onClick={disabled ? null : onPress} className={btnClass} style={{alignItems: 'center'}}>
            {children && (
                children
            )}
            <span style={{paddingLeft: children ? '1rem' : 0, whiteSpace: nowrap ? 'nowrap' : ''}} className="accountmenu__content__cards__bigbutton__text">{text}</span>
        </div>
    )
}

export default BigButton