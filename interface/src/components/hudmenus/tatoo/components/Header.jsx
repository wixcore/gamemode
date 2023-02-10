import React from 'react'
import '../css/header.css'

const Header = ({ banner, title, subtitle }) => (
    <React.Fragment>
        <div className="tatoo__content__img__container">
            <img src={`https://state-99.com/client/images/banners/${banner}.png`} className="tatoo__content__header__img" />
        </div>
        <div className="tatoo__content__header">
                <span className="tatoo__content__header__title">
                    {title}
                </span>
                <span className="tatoo__content__header__subtitle">
                    {subtitle}
                </span>
        </div>
    </React.Fragment>
)

export default Header