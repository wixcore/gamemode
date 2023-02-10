import React from 'react'
import '../css/main.css'

const DialogButton = ({ text, bgcolor, params }) => {
    return (
        <span onClick={() => {
            try {
                mp.trigger('client:dialog:btn', JSON.stringify(params)); // eslint-disable-line
            }
            catch (e) {}
        }} className="dialog__content__buttons__item" style={{backgroundColor: bgcolor}}>
            {text}
        </span>
    )
}

export default DialogButton