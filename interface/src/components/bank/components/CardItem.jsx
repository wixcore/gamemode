import React from 'react'
import '../css/bank.css'
import EmeraldCardIcon from '../img/card__emerald.svg'
import PlatinumCardIcon from '../img/card__platinum.svg'
import GoldCardIcon from '../img/card__gold.svg'

const CardItem = ({ card, bankName, setSelected, selectedCard, index }) => {

    const getStyle = (index) => {
        let bg = ''
        switch (index) {
            case 0:
                bg = 'linear-gradient(270deg, rgba(0, 255, 56, 0.3) 0%, rgba(255, 255, 255, 0) 26.41%)'
                break;
            case 1:
                bg = 'linear-gradient(270deg, rgba(170, 177, 201, 0.3) 0%, rgba(170, 177, 201, 0) 26.41%)'
                break;
            case 2:
                bg = 'linear-gradient(270deg, rgba(255, 215, 0, 0.3) 0%, rgba(255, 215, 0, 0) 26.41%)'
                break;
            default:
                bg = 'linear-gradient(270deg, rgba(170, 177, 201, 0.1) 0%, rgba(170, 177, 201, 0) 26.41%)'
                break;
        }
        return bg
    }

    const getCardImage = (index) => {
        let img = ''
        switch (index) {
            case 0:
                img = EmeraldCardIcon
                break;
            case 1:
                img = PlatinumCardIcon
                break;
            case 2:
                img = GoldCardIcon
                break;
        }
        return img
    }

    return (
        <div className="bank__menu__cards__list__item" style={{background: getStyle(index), opacity: selectedCard === index ? "1 !important" : "0.5"}} onClick={setSelected}>
            <div className="carditem__content">
                <div className="carditem__content__row">
                    <span className="carditem__content__text">
                        {bankName}
                        <br></br>
                        {card.name}
                    </span>
                    <img src={getCardImage(index)} className="carditem__content__img" />
                </div>
                <span className="carditem__content__money">
                    {`${card.money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} $`}
                </span>
                <span className="carditem__content__number">
                    {card.number}
                </span>
            </div>
        </div>
    )
}

export default CardItem