import React from 'react'
import '../css/donation.css'
import BigButton from './BigButton'
import { useState } from 'react'
import Icon from '../../hud/components/MainMenu/uikit/Icon'

const ServiceItem = ( props ) => {

    const [active, setActive] = useState(0)


    const nextVal = () => {
        if (active + 1 === props.items.length) {
            setActive(0)
        } else {
            setActive(active + 1)
        }
    }

    const prevVal = () => {
        if (active === 0) {
            setActive(props.items.length - 1)
        } else {
            setActive(active - 1)
        }
    }

    return (
        <div className="accountmenu__donation__service__item">
            <div className="accountmenu__donation__service__item__info">
                <span className="accountmenu__content__cards__questinfo__header__name" style={{fontSize: '1.8rem'}}>
                    {props.title}
                </span>
                <span className="govmenu__propertygov__info__balance" style={{fontSize: '1.2rem'}}>
                    {props.subtitle}
                </span>
            </div>
            {props.type === 2 ? (
                    <React.Fragment>
                        <div className="accountmenu__content__reports__dialog__input" style={{width: '25%', height: 'auto', marginTop: 0, marginBottom: 0, paddingTop: '0.9rem', paddingBottom: '0.9rem'}}>
                            <label style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                                <input
                                    style={{width: '70%'}}
                                    type="text"
                                    name="name"
                                    className="accountmenu__report__input"
                                />
                            </label>
                        </div>
                    </React.Fragment>
                ) : props.type === 1 ? (
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '20%'}}>
                        <div onClick={() => prevVal()}>
                            <Icon size={36} className="list-arrow-icon" arrow={true} name="arrow_left" />
                        </div>
                        <div 
                            className="accountmenu__donation__kit__kititem__img__wrapper__name_bold"
                            onClick={() => nextVal()} 
                        >
                            {props.items[active]}
                        </div>
                        <div onClick={() => nextVal()}>
                            <Icon size={36} className="list-arrow-icon" arrow={true} name="arrow_right" />
                        </div>
                    </div>
                ) : null}
            <BigButton text={`Купить за ${props.price} DC`} />
        </div>
    )
}

export default ServiceItem