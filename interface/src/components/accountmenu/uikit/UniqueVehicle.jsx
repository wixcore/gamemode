import React from 'react'
import '../css/donation.css'
import BigButton from './BigButton'
import { useState } from 'react'
import Icon from '../../hud/components/MainMenu/uikit/Icon'
import MdCar from 'react-ionicons/lib/MdCar'

const UniqueVehicle = ( props ) => {

    const [active, setActive] = useState(0)



    const carmax = [{},{},{},{},{}]

    return (
        <div className="accountmenu__donation__uniqvehicle">
            <div className="accountmenu__donation__kit__kitcontainer">
                <div className="accountmenu__donation__kit__kititem__info">
                    <div className="accountmenu__donation__kit__kititem__info__wrapper accountmenu__donation__uniqvehicle__carpslots">
                        <span className="accountmenu__donation__kit__kititem__name">{`Слот под транспорт`}</span>
                        <ol>
                            <li className="accountmenu__content__cards__answer__li">{`Разблокируйте дополнительный слот, под любое транспортное средство навсегда, всего доступно для разблокировки 5 слотов`}</li>
                        </ol>
                        
                    </div>
                    <div className="accountmenu__donation__kit__kititem__cars">
                        {
                        carmax.map((slot, indx) => {
                                if (indx + 1 > props.carslots) {
                                    return (<MdCar key={`accountmenu__donation__kit__kititem__cars__item-${indx}`} fontSize="48px" color="#9e9e9e" />)
                                } else {
                                    return (<MdCar key={`accountmenu__donation__kit__kititem__cars__item-${indx}`} fontSize="48px" color="#70cfff" />)
                                }
                        })
                        }
                    </div>
                </div>
                <div className="accountmenu__cards__btnreports" style={{padding: 0}}>
                    <div style={{width: '45%'}}>
                        <BigButton text={props.carslots === 5 ? "Куплено" :"Купить за 499DC"} type={props.carslots === 5 ? -1 : 0} />
                    </div>
                    <div style={{width: '45%'}}>
                        <BigButton text={props.carslots === 5 ? "Куплено" :"Купить за $ 3.000.000"} type={props.carslots === 5 ? -1 : 0} />
                    </div>
                </div>
            </div>
                    {props.props[0].map((item, inx) => (
                        <div key={`${item.name}-${inx}`} className="accountmenu__donation__kit__kitcontainer">
                            <div className="accountmenu__donation__kit__kititem">
                                <div className="accountmenu__donation__kit__kititem__info">
                                    <React.Fragment>
                                        <div className="accountmenu__donation__kit__kititem__info__wrapper">
                                            <span className="accountmenu__donation__kit__kititem__name">{item.name}</span>
                                            <ol>
                                                {item.list.map((item, index) => (
                                                    <li key={`${item}-${index}`} className="accountmenu__content__cards__answer__li">{item}</li>
                                                ))}
                                            </ol>
                                        </div>
                                        <div className="accountmenu__donation__kit__kititem__img__wrapper">
                                            <img src={item.carchoice[0].img} className="accountmenu__donation__kit__kititem__img"  />
                                            <div className="accountmenu__donation__kit__kititem__img__wrapper__content">
                                                
                                                <div 
                                                    className="accountmenu__donation__kit__kititem__img__wrapper__name"
                                                >
                                                    {item.carchoice[0].name}
                                                </div>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                </div>
                                <BigButton text={`Купить за ${item.price} DC`} />
                            </div>
                        </div>
                    ))}
        </div>
    )
}

export default UniqueVehicle