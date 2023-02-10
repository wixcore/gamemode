import React from 'react'
import './css/keyboard.css'
import MaterialIcon, {colorPalette} from 'material-icons-react';
import { useState } from 'react';


const Keyboard = ({ onClickKeyboardButton }) => {
    
    const buttons = [
        [{button: '1', subtext: ' '},
        {button: '2', subtext: 'ABC'},
        {button: '3', subtext: 'DEF'}],
        [{button: '4', subtext: 'GHI'},
        {button: '5', subtext: 'JKL'},
        {button: '6', subtext: 'MNO'}],
        [{button: '7', subtext: 'PQRS'},
        {button: '8', subtext: 'TUV'},
        {button: '9', subtext: 'WXYZ'}],
        [{button: '*', subtext: ''},
        {button: '0', subtext: ' '},
        {button: '#', subtext: ''}]
    ]

    return (
        <div className="calls__keyboard">
            {buttons.map((itemRow, index) => (
                    <div key={`keyboard-${index.toString()}`} className="calls__keyboard__row">
                        {itemRow.map((item, i) => (
                            <div key={`keyboard-item-${i.toString()}`} className="calls__keyboard__row__number" onClick={() => onClickKeyboardButton(item.button)}>
                                <span className="calls__keyboard__row__number__text">{item.button}</span>
                                <span className="calls__keyboard__row__number__subtext">{item.subtext}</span>
                            </div>
                        ))}
                    </div>
            ))}
        </div>
    )
}

export default Keyboard