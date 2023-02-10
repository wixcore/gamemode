import React from 'react'
import KitItem from '../uikit/KitItem'
import VipPage from '../uikit/VipPage'
import ChangeDonate from '../uikit/ChangeDonate'
import ServicesDonate from '../uikit/ServicesDonate'
import AboutDonate from '../uikit/AboutDonate'
import UniqueVehicle from '../uikit/UniqueVehicle'

const DonationRouter = ({ props, type, setAlert, carslots }) => {
    let page = {}

    switch (type) {
        case 0:
            page = <KitItem {...props} />
            break;
        case 1:
            page = <VipPage {...props} />
            break;
        case 2:
            page = <ChangeDonate {...props} />
            break;
        case 3:
            page = <ServicesDonate {...props} />
            break;
        case 4:
            page = <AboutDonate {...props} />
            break;
        case 5:
            page = <UniqueVehicle props={props} carslots={carslots} />
            break;
        default:
            page = <div></div>
            break;
    }

    return (page)
}

export default DonationRouter