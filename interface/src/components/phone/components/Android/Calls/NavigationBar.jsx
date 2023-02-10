import React from 'react'
import './css/calls.css'
import MaterialIcon, {colorPalette} from 'material-icons-react';
import { useState } from 'react';
import IconIOSKeyboard from '../../../img/keyboard.svg'

const NavigationBar = ({  }) => {
    
    const [activeTabIndex, setActiveTabIndex] = useState(0)

    const elements = [
        {icon: IconIOSKeyboard, name: 'Клавиши'},
        {icon: IconIOSKeyboard, name: 'Клавиши'},
        {icon: IconIOSKeyboard, name: 'Клавиши'},
        {icon: IconIOSKeyboard, name: 'Клавиши'}
    ]

    return (
        <div className="calls__navbar">
            {elements.map((item, index) => (
                <div className="calls__navbar__item" key={`calls__navbar__item-${index}`}>
                    <img src={IconIOSKeyboard} className={activeTabIndex === index ? `calls__navbar__item__icon-active` : `calls__navbar__item__icon`} />
                    <span className={activeTabIndex === index ? `calls__navbar__item__text-active` : `calls__navbar__item__text`}>Клавиши</span>
                </div>
            ))}
        </div>
    )
}

export default NavigationBar