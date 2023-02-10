import React from 'react'
import '../css/header.css'

const Header = ({ nick, accountId, donateBalance, setHide }) => {
    return (
        <div className="accountmenu__topdata">
            <div className="accountmenu__topdata__info">
                <span className="accountmenu__topdata__nick">
                    {nick}
                </span>
                <div className="accountmenu__topdata__number">
                    {accountId && (
                    <span className="accountmenu__topdata__number__text">
                        {`Номер аккаунта: ${accountId.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`}
                    </span>
                    )}
                </div>
            </div>
            <div className="accountmenu__topdata__donate">
                {accountId && (
                    <span className="accountmenu__topdata__donate__btn">
                        {`Баланс: $${donateBalance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                    </span>
                )}
                <span onClick={setHide} className="accountmenu__topdata__donate__btn">
                    Закрыть
                </span>
            </div>
        </div>
    )
}

export default Header