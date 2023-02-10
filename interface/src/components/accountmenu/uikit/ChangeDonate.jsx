import React from 'react'
import '../css/donation.css'
import BigButton from './BigButton'
import { useState } from 'react'
import Icon from '../../hud/components/MainMenu/uikit/Icon'

const ChangeDonate = ( props ) => {

    const donateBalance = 1000

    const [ donateSumm, setDonateSumm ] = useState(0)

    const handleChange = (e) => {
        setDonateSumm(e.target.value.replace (/\D/, '') > donateBalance ? donateBalance : e.target.value.replace (/\D/, ''))
    }

    const deadcoinPrice = 300

    return (
        <div className="accountmenu__donation__change">
            <div className="govmenu__propertygov__imgheader" style={{backgroundImage: `url('https://state-99.com/client/images/mmenu/yacht.jpg')`}} />
            <div className="govmenu__worker__info about__donation">
                <span className="accountmenu__content__cards__questinfo__header__name">
                    {`Обменять валюту`}
                </span>
                <span className="accountmenu__content__cards__questinfo__header__count" style={{fontSize: '1.4rem', marginTop: '2%'}}>
                    {`1 DeadCoin — $${deadcoinPrice}`}
                </span>
            </div>
            <div className="accountmenu__donation__change__row">
                <div className="accountmenu__content__reports__dialog__input" style={{width: '25%', height: 'auto', marginTop: 0, marginBottom: 0, paddingTop: '0.9rem', paddingBottom: '0.9rem'}}>
                    <label style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <input
                            style={{width: '70%'}}
                            type="text"
                            name="name"
                            placeholder="Введите сумму..."
                            className="accountmenu__report__input"
                            value={donateSumm}
                            onChange={handleChange}    
                        />
                        <div style={{display: 'flex'}}>
                            <span className="govmenu__propertygov__info__balance" style={{fontSize: '0.8rem', marginRight: '10%'}}>
                                {`MAX`}
                            </span>
                            <span className="chevron chevron-top" style={{marginRight: 0}}></span>
                        </div>
                    </label>
                </div>
                <span className="govmenu__propertygov__info__balance" style={{marginLeft: '3%', marginRight: '3%'}}>
                    {`Вы получите`}
                </span>
                <span className="accountmenu__content__cards__questinfo__header__count" style={{fontSize: '2rem', marginTop: 0, whiteSpace: 'nowrap'}}>
                    {`$ ${(donateSumm * deadcoinPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`}
                </span>
                <div style={{width: '30%', marginLeft: '5%'}}>
                    <BigButton text="Обменять" />
                </div>
            </div>
        </div>
    )
}

export default ChangeDonate