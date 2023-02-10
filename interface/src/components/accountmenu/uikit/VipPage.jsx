import React from 'react'
import '../css/donation.css'
import BigButton from './BigButton'
import { useState } from 'react'
import Icon from '../../hud/components/MainMenu/uikit/Icon'
import VipCard from './VipCard'

const VipPage = ( props ) => {


    const [active, setActive] = useState(0)


    const nextVal = () => {
        if (active + 1 === [0].length) {
            setActive(0)
        } else {
            setActive(active + 1)
        }
    }

    const prevVal = () => {
        if (active === 0) {
            setActive([0].length - 1)
        } else {
            setActive(active - 1)
        }
    }

    return (
        <div className="accountmenu__donation__vip">
            <div className="govmenu__propertygov__imgheader" style={{backgroundImage: `url('https://state-99.com/client/images/mmenu/yacht.jpg')`}} />
            <div className="accountmenu__donation__vip__row">
            {props[0].map((element, index) => (
                <VipCard key={`accountmenu__donation__vip__row__item-${index}`} {...element} />
            ))}
            </div>
        </div>
    )
}

export default VipPage