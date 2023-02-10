import React from 'react'
import '../css/propcard.css'
import PropertyCar from './PropertyCar';
import PropertyApartment from './PropertyApartment'
import PropertyHouse from './PropertyHouse';
import PropertyStock from './PropertyStock';
import PropertyBusiness from './PropertyBusiness'
import PropertyYacht from './PropertyYacht'

const PropertyCard = ({ props, type, setAlert }) => {
    let page = {}
    
    switch (type) {
        case 0:
            page = <PropertyCar {...props} setAlert={setAlert} />
            break;
        case 1:
            page = <PropertyApartment {...props} setAlert={setAlert} />
            break;
        case 2:
            page = <PropertyHouse {...props} setAlert={setAlert} />
            break;
        case 3:
            page = <PropertyStock {...props} setAlert={setAlert} />
            break;
        case 4:
            page = <PropertyBusiness {...props} setAlert={setAlert} />
            break;
        case 5:
            page = <PropertyYacht {...props} setAlert={setAlert} />
            break;
        default:
            page = <div></div>
            break;
    }

    return (page)
}

export default PropertyCard