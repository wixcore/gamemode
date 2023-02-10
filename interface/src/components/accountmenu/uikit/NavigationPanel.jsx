import React from 'react'
import '../css/content.css'
import ButtonNav from './ButtonNav'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

const NavigationPanel = ({ activePage, onChangePage, handleKeyPress, panels }) => {

    const navigationPanel = useRef(null)

    useEffect(() => {
        navigationPanel.current.focus()
    }, [])

    return (
        <div className="accountmenu__content__nav" ref={navigationPanel} tabIndex="-1" onKeyDown={e => handleKeyPress(e.which)}>
            <div className="content__container">
                <ButtonNav name="Q" />
                <div className="accountmenu__content__nav__items">
                    {panels.map((item, index) => (
                        <div key={`nav-panel-` + index} onClick={() => onChangePage(index)} className={activePage === index ? "accountmenu__content__nav__item_active" : "accountmenu__content__nav__item_unactive"}>
                            <span className={activePage === index ? "accountmenu__content__nav__item__text_active" : "accountmenu__content__nav__item__text_unactive"}>
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>
                <ButtonNav name="E" />
            </div>
        </div>
    )
}

export default NavigationPanel