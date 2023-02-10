import React from 'react'
import '../css/donation.css'
import BigButton from './BigButton'
import { useState } from 'react'
import Icon from '../../hud/components/MainMenu/uikit/Icon'
import ServiceItem from './ServiceItem'

const ServicesDonate = ( props ) => {
    return (
        <div className="accountmenu__donation__about">
            <div className="govmenu__worker__info about__donation">
                {props[0].map((item, index) => (
                    <ServiceItem key={`about__donation__item-${index}`} {...item} />
                ))}
            </div>
        </div>
    )
}

export default ServicesDonate