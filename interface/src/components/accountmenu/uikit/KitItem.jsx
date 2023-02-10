import React from 'react'
import '../css/donation.css'
import BigButton from './BigButton'
import { useState } from 'react'
import Icon from '../../hud/components/MainMenu/uikit/Icon'

const KitItem = ( props ) => {

    const { name, carchoice, price, list, buyed, type } = props

    const [active, setActive] = useState(0)


    const nextVal = () => {
        if (active + 1 === carchoice.length) {
            setActive(0)
        } else {
            setActive(active + 1)
        }
    }

    const prevVal = () => {
        if (active === 0) {
            setActive(carchoice.length - 1)
        } else {
            setActive(active - 1)
        }
    }

    return (
        <div className="accountmenu__donation__kit__kitcontainer">
                
                        {type === 0 ? 
                            <div className="accountmenu__donation__kit__kititem">
                                <div className="accountmenu__donation__kit__kititem__info">
                                    <React.Fragment>
                                        <div className="accountmenu__donation__kit__kititem__info__wrapper">
                                            <span className="accountmenu__donation__kit__kititem__name">{name}</span>
                                            <ol>
                                                {list.map((item, index) => (
                                                    <li key={`${item}-${index}`} className="accountmenu__content__cards__answer__li">{item}</li>
                                                ))}
                                            </ol>
                                        </div>
                                        <div className="accountmenu__donation__kit__kititem__img__wrapper">
                                            <img src={carchoice[active].img} className="accountmenu__donation__kit__kititem__img"  />
                                            <div className="accountmenu__donation__kit__kititem__img__wrapper__content">
                                                <div onClick={() => prevVal()}>
                                                    <Icon size={36} className="list-arrow-icon" arrow={true} name="arrow_left" />
                                                </div>
                                                <div 
                                                    className="accountmenu__donation__kit__kititem__img__wrapper__name"
                                                    onClick={() => nextVal()} 
                                                >
                                                    {carchoice[active].name}
                                                </div>
                                                <div onClick={() => nextVal()}>
                                                    <Icon size={36} className="list-arrow-icon" arrow={true} name="arrow_right" />
                                                </div>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                </div>
                                <BigButton type={buyed ? -1 : 0} text={buyed ? 'Вы уже покупали данный набор' : `Купить за ${price} DC`} />
                            </div>
                        :
                        <div className="accountmenu__donation__kit__kititem">
                            <div className="accountmenu__donation__kit__kititem__info__row">
                                <React.Fragment>
                                    <div className="accountmenu__donation__kit__kititem__info__wrapper__row">
                                        <span className="accountmenu__donation__kit__kititem__name">{name}</span>
                                        <div className="accountmenu__donation__kit__kititem__row">
                                            {list.map((item, index) => (
                                                <div key={`accountmenu__donation__kit__kititem__row__item-${index}`} className="accountmenu__donation__kit__kititem__row__item">
                                                    <span className="accountmenu__donation__kit__kititem__row__name">{item.name}</span>
                                                    {item.items.map((i, ind) => (
                                                        <li key={`${i}-${index}`} className="accountmenu__content__cards__answer__row__li">{i}</li>
                                                    ))}
                                                    <img src={item.img} className="accountmenu__donation__kit__kititem__row__img" />
                                                    <div style={{width: '88%'}}>
                                                        <BigButton text={`Купить за ${item.price} DC`} />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </React.Fragment>
                            </div>
                        </div>
                        }
        </div>
    )
}

export default KitItem