import React from 'react'
import '../css/content.css'
import NavigationPanel from '../uikit/NavigationPanel'
import Cards from '../uikit/Cards'

const Content = (props) => {
    
    return (
        <div className="accountmenu__content">
            <NavigationPanel
                panels={props.panels}
                activePage={props.activeIndex}
                onChangePage={props.onChangePage}
                handleKeyPress={props.handleKeyPress}
            />
            <Cards
                {...props}
            />
        </div>
    )
}

export default Content