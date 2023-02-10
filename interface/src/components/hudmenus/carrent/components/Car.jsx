import React from 'react'
import '../css/car.css'
import FlatButton from "../../gunshop/uikit/FlatButton";

const Car = ({ name, price, btnbg, sale, params, type }) => {
    return (
        <div className="carrent__content__list__item">
            <div className="carrent__content__list__img__container">
                <img alt="" src={`https://state-99.com/client/images/carsv/1080/${name.toLowerCase()}.jpg`} className="carrent__content__list__img__item" />
                {sale > 0 && (
                    <div className="carrent__content__list__item__sale__container">
                        <span className="carrent__content__list__item__sale">{`-${sale}%`}</span>
                    </div>
                )}
            </div>
            <div className="carrent__content__list__item__info">
                <div className="carrent__content__list__item__info__column">
                    <span className="carrent__content__list__item__info__name">
                        {`${name}`}
                    </span>
                    <span className='carrent__content__list__item__info__price'>
                        {`${price}`}
                    </span>
                </div>
                <div className={sale >= 0 ? 'carrent__content__list__item__info__rent' : 'carrent__hide'}>
                    <span onClick={() => {
                        try {
                            mp.trigger('client:carRent:buyCard', name, JSON.stringify(params)); // eslint-disable-line
                        } catch (e) {
                            console.log(e);
                        }
                    }} className="carrent__content__list__item__info__rentbtn">
                        По карте
                    </span>
                    <span onClick={() => {
                        try {
                            mp.trigger('client:carRent:buyCash', name, JSON.stringify(params)); // eslint-disable-line
                        } catch (e) {
                            console.log(e);
                        }
                    }} className="carrent__content__list__item__info__rentbtn">
                        Наличные
                    </span>
                </div>
                <div className={sale < 0 ? 'carrent__content__list__item__info__rent' : 'carrent__hide'}>
                    <span onClick={() => {
                        try {
                            mp.trigger('client:carRent:takeCar', name, JSON.stringify(params)); // eslint-disable-line
                        } catch (e) {
                            console.log(e);
                        }
                    }} className="carrent__content__list__item__info__rentbtn">
                        Взять
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Car