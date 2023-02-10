import React from 'react'
import '../css/donation.css'
import BigButton from './BigButton'
import { useState } from 'react'
import Icon from '../../hud/components/MainMenu/uikit/Icon'

const VipCard = ( props ) => {


    const [active, setActive] = useState(0)


    const nextVal = () => {
        if (active + 1 === props.prices.length) {
            setActive(0)
        } else {
            setActive(active + 1)
        }
    }

    const prevVal = () => {
        if (active === 0) {
            setActive(props.prices.length - 1)
        } else {
            setActive(active - 1)
        }
    }

    return (
        <div className="accountmenu__donation__vip__row__card">
            <span className="accountmenu__donation__kit__kititem__name">{props.name}</span>
            {props.list.map((i, ind) => (
                <li key={`${i}-${ind}`} className="accountmenu__content__cards__answer__row__li">{i}</li>
            ))}
            <div className="accountmenu__donation__vip__row__card__wrapper">
                <div onClick={() => prevVal()}>
                    <Icon size={36} className="list-arrow-icon" arrow={true} name="arrow_left" />
                </div>
                <div 
                    className="accountmenu__donation__kit__kititem__img__wrapper__name_bold"
                    onClick={() => nextVal()} 
                >
                    {`На ${props.prices[active].days} дней [${props.prices[active].price} DC]`}
                </div>
                <div onClick={() => nextVal()}>
                    <Icon size={36} className="list-arrow-icon" arrow={true} name="arrow_right" />
                </div>
            </div>
            <BigButton text={`Купить за ${props.prices[active].price} DC`} />
        </div>
    )
}

export default VipCard