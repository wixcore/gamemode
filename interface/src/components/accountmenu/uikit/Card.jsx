import React from 'react'
import '../css/general.css'

const Card = ({ icon, title, subtitle }) => {
    return (
        <div className="accountmenu__content__cards__finance__card">
            <img src={icon === 'card' ? `https://state-99.com/client/images/icons/components/accountmenu/img/card.svg` : `https://state-99.com/client/images/icons/components/accountmenu/img/wallet-alt.svg`} alt="" className="accountmenu__card__icon" />
            <span className="accountmenu__content__cards__finance__card__title">
                {title}
            </span>
            <span className="accountmenu__content__cards__finance__card__subtitle">
                {subtitle}
            </span>
        </div>
    )
}

export default Card