import React from 'react'
import '../css/propcard.css'
import CarCard from '../../accountmenu/uikit/CarCard'
import { useState } from 'react'
import BigButton from '../../accountmenu/uikit/BigButton'
import Button from '../../accountmenu/uikit/Button'
import MdCard from 'react-ionicons/lib/MdCard'
import MdCash from 'react-ionicons/lib/MdCash'
import Alert from '../../alert/Alert'

const PropertyStock = (props) => {
    // <img className="govmenu__licensegov__propertycar__img" src={`https://state-99.com/client/images/cars/${props.name}_1.jpg`} />

    const { address, setAlert, gprice, tax, balance, maxbalance, stockType } = props

    const [ taxValue, setTaxValue ] = useState('')
    
    return (
        <React.Fragment>
            <div className="govmenu__propertygov__imgheader" style={{backgroundImage: `url('https://state-99.com/client/images/mmenu/stock.jpg')`}} />
            <div className="govmenu__propertygov__container">
                <div className="govmenu__propertygov__info">
                    <div className="govmenu__propertygov__info__wrapper">
                        <span className="govmenu__propertygov__info__name">
                            {address}
                        </span>
                        <div className="accountmenu__content__cards__house__hprice__sell" style={{marginTop: 0, paddingTop: '1%', paddingBottom: '2%'}}>
                                <div className="accountmenu__content__cards__house__hprice__sell__linebtn">
                                    <img src={'https://state-99.com/client/images/mmenu/all/icons/money-bag.svg'} className="accountmenu__content__cards__house__hprice__sell__icon" />
                                    <span className="accountmenu__content__cards__house__hprice__sell__text">{`$ ${gprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`}</span>
                                </div>
                        </div>
                        <span className="govmenu__propertygov__info__balance">
                            {`Текущая задолженость: `}
                            <span className="govmenu__propertygov__info__balance__info">
                                {`$ ${balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`}
                                <span className="govmenu__propertygov__info__balance"> из </span>
                                <span className="govmenu__propertygov__info__balance__info__max">
                                    {` $ ${maxbalance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`}
                                    <span className="govmenu__propertygov__info__balance">
                                        {`  [$ ${tax.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} в день ]`}
                                    </span>
                                </span>
                            </span>
                        </span>
                    </div>
                    
                </div>
                <div className="govmenu__propertygov__payment" style={{justifyContent: 'space-between'}}>
                    <div className="accountmenu__content__reports__dialog__input" style={{width: '20%', height: 'auto', marginTop: 0, marginBottom: 0, paddingTop: '0.9rem', paddingBottom: '0.9rem'}}>
                        <label style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                            <input style={{width: '70%'}} type="text" name="name" placeholder="Введите сумму..." className="accountmenu__report__input" value={taxValue} onChange={(event) => setTaxValue(event.target.value)} />
                            <div style={{display: 'flex'}}>
                                <span className="govmenu__propertygov__info__balance" style={{fontSize: '0.8rem', marginRight: '10%'}}>
                                    {`MAX`}
                                </span>
                                <span className="chevron chevron-top" style={{marginRight: 0}}></span>
                            </div>
                        </label>
                    </div>
                    <span className="govmenu__propertygov__info__balance" style={{marginLeft: '3%', marginRight: '3%'}}>
                        {`Оплатить`}
                    </span>
                    <div className="govmenu__propertygov__payment__btns" style={{minWidth: '60%'}}>
                        <div style={{width: '100%'}}>
                            <BigButton
                                text="Наличными"
                                children={<MdCash fontSize="20px" color="white" />}
                                type={0}
                                onPress={() => console.log('Успешно оплатил налог наличными на сумму ' + taxValue)}
                            />
                        </div>
                        <div style={{width: '100%', marginLeft: '4%'}}>
                            <BigButton
                                nowrap={true}
                                text="Банковской картой"
                                children={<MdCard fontSize="20px" color="white" />}
                                type={0}
                                onPress={() => console.log('Успешно оплатил налог банковской картой на сумму ' + taxValue)}
                            />
                        </div>
                    </div>
                </div>
                <div className="accountmenu__cards__btnreports">
                    <div style={{width: '45%'}}>
                        <BigButton text="Продать агенству" type={2} onPress={() => setAlert(true, {
                            type: 1,
                            title: 'Продажа агенству',
                            text: `Вы действительно хотите продать?`,
                            value: [{text: 'Отказаться', type: 0}, {text: 'Продать', type: 1}]
                        })}
                        />
                    </div>
                    <div style={{width: '45%'}}>
                        <BigButton text="Продать игроку" type={0} onPress={() => setAlert(true, {
                            type: 0, 
                            title: 'Продажа игроку', 
                            text: `Вы действительно хотите продать транспорт ${address}?`,
                            value: [{text: 'Отказаться', type: 0}, {text: 'Продать', type: 1}]
                        })} 
                        />
                    </div>
                </div>
                </div>
        </React.Fragment>
    )
}

export default PropertyStock