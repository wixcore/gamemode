import React from 'react'
import '../css/property.css'
import ButtonGps from './ButtonGps'

const CardCard = ({ type, name, vin, carclass, def, number }) => {
    return (
        <div
            className="accountmenu__content__cards__car"
        >
            <div
                className="accountmenu__content__cards__car__img"
                style={{backgroundImage: `url('https://state-99.com/client/images/carsv/640/${name.toLowerCase()}.jpg')`}}
            />
            <div className="accountmenu__content__cards__car__gpscont">
                <ButtonGps filled={true} position="right" />
            </div>
            <span className="accountmenu__content__cards__car__type">
                {type}
            </span>
            <span className="accountmenu__content__cards__car__name">
                {name}
            </span>
            <div className="accountmenu__content__cards__car__props">
                <div className="accountmenu__content__cards__car__props__item">
                    <span className="accountmenu__content__cards__car__props__tdata">Налог</span>
                    <span className="accountmenu__content__cards__car__props__bdata">{vin}</span>
                </div>
                <div className="accountmenu__content__cards__car__props__item">
                    <span className="accountmenu__content__cards__car__props__tdata">Штраф</span>
                    <span className="accountmenu__content__cards__car__props__bdata">{carclass}</span>
                </div>
                <div className="accountmenu__content__cards__car__props__item">
                    <span className="accountmenu__content__cards__car__props__tdata">Топливо</span>
                    <span className="accountmenu__content__cards__car__props__bdata">{def}</span>
                </div>
                <div className="accountmenu__content__cards__car__props__item">
                    <span className="accountmenu__content__cards__car__props__tdata">Номера</span>
                    <span className="accountmenu__content__cards__car__props__bdata">{number}</span>
                </div>
            </div>
        </div>
    )
}

export default CardCard