import React from 'react'
import '../css/bank.css'

const HistoryAction = ({ data }) => {


    if (data.type === 0) {
        return (
            <div className="bank__menu__history__item">
                <div className="bank__menu__history__item__img_withdraw" />
                <span className="bank__menu__history__item__text">{`Снятие наличных`}</span>
                <span className="bank__menu__history__item__value_withdraw">{`-${data.money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`}</span>
            </div>
        )
    } else if (data.type === 1) {
        return (
            <div className="bank__menu__history__item">
                <div className="bank__menu__history__item__img_pull" />
                <span className="bank__menu__history__item__text">{`Внесение наличных`}</span>
                <span className="bank__menu__history__item__value_pull">{`+${data.money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`}</span>
            </div>
        )
    } else {
        return (
            <div className="bank__menu__history__item">
                <div className="bank__menu__history__item__img_transfer" />
                <span className="bank__menu__history__item__text">{`Перевод на счет #${data.to}`}</span>
                <span className="bank__menu__history__item__value_transfer">{`${data.money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`}</span>
            </div>
        )
    }
}

export default HistoryAction