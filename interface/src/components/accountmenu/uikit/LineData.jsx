import React from 'react'
import '../css/general.css'

const LineData = ({  leftinfo, rightinfo }) => {
    return (
        <div className="accountmenu__cards__icline__data">
            <span className="accountmenu__cards__icline__data__title">
                {leftinfo}
            </span>
            <span className="accountmenu__cards__icline__data__info">
                {rightinfo}
            </span>
        </div>
    )
}

export default LineData