import React from 'react'
import '../css/donation.css'
import BigButton from './BigButton'
import { useState } from 'react'
import Icon from '../../hud/components/MainMenu/uikit/Icon'

const AboutDonate = ( props ) => {
    return (
        <div className="accountmenu__donation__about">
            <div className="govmenu__propertygov__imgheader" style={{backgroundImage: `url('https://state-99.com/client/images/mmenu/yacht.jpg')`}} />
            <div className="govmenu__worker__info about__donation">
                <span className="accountmenu__content__cards__questinfo__header__name">
                    {`Пополнить валюту`}
                </span>
                <span className="govmenu__propertygov__info__balance" style={{fontSize: '1.8rem', marginTop: '2%'}}>
                    {`Вы можете пополнить валюту перейдя на сайт, атворизоваться войти в личный кабинет вролфыирвло фырволи фылови фыорви орфыив орфыив рфыив орфыиов .`}
                </span>
                <span className="accountmenu__content__cards__questinfo__header__count">
                    {`Текущий курс: 1 DC — 1 РУБЛЬ`}
                </span>
            </div>
        </div>
    )
}

export default AboutDonate