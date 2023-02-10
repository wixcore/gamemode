import React from 'react'
import './css/callbtn.css'
import MaterialIcon, {colorPalette} from 'material-icons-react';
import { useState } from 'react';


const DeclineCallButton = ({ action }) => {
    

    return (
        <div className="calls__declinecallbtn__container">
            <div onClick={action} className="calls__declinecallbtn__container__btn">
                <MaterialIcon icon="call_end" size={19} color="#fff" />
            </div>
        </div>
    )
}

export default DeclineCallButton