import React from 'react'
import '../css/property.css'
import ButtonGps from './ButtonGps'

const BusinessCard = ({ type, name, price, address, doors, title, x, y, img }) => {
    return (
        <div className="accountmenu__content__cards__business">
            <div className="accountmenu__content__cards__business__img__container" style={{backgroundImage: `url(${img})`}}>
                <div className={
                        type === 0 ? 'accountmenu__content__cards__business__img__bg' :
                        (type === 1 ? 'accountmenu__content__cards__business__img__bg_stype' : 'accountmenu__content__cards__business__img__bg_btype')
                }>
                    <img 
                        src={
                            type === 0 ? `https://state-99.com/client/images/icons/components/accountmenu/img/property__house__icon.svg` :
                            (type === 1 ? `https://state-99.com/client/images/icons/components/accountmenu/img/property__case__icon.svg` : `https://state-99.com/client/images/icons/components/accountmenu/img/property__apart__icon.svg`)
                        }
                        className="accountmenu__content__cards__business__img"
                    />
                </div>
            </div>
            <div className="accountmenu__content__cards__business__info__container">
                <span className="accountmenu__content__cards__business__type">
                    {title}
                </span>
                <span className="accountmenu__content__cards__business__gprice">
                    Гос. цена:
                </span>
            </div>
            <div className="accountmenu__content__cards__business__info__container">
                <span className="accountmenu__content__cards__business__name">
                    {name}
                </span>
                <span className="accountmenu__content__cards__business__gprice__text">
                    {`$ ${price.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`}
                </span>
            </div>
            <div className="accountmenu__content__cards__business__info__container">
                <span className="accountmenu__content__cards__business__address">
                    Адрес
                </span>
                <span className="accountmenu__content__cards__business__doors">
                    Налог
                </span>
            </div>
            <div className="accountmenu__content__cards__business__info__container">
                <span className="accountmenu__content__cards__business__address__text">
                    {address}
                </span>
                <span className="accountmenu__content__cards__business__doors__text">
                    {doors}
                </span>
            </div>
            <ButtonGps filled={false} position="left" x={x} y={y} />
        </div>
    )
}

export default BusinessCard