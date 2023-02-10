import React from 'react';
import './css/interactionmenu.css'

class InteractionMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'InteractionMenu.jsx', error, errorInfo); // eslint-disable-line
    }

    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <React.Fragment>
                <div className="inter-menu" style={{left: this.props.x + "%", top: this.props.y + "%"}}>
                    {this.props.inter_menu.map((button, i) => {
                        if (!button.show) {
                            return
                        }
                        const index = `intermenu${i}`
                        return (
                            <div key={index} className="inter-box" style={{color: button.color}}
                                 onClick={(e) => this.props.closeInterMenu(e, button)}><span>{button.name}</span></div>
                        )
                    })}
                </div>
            </React.Fragment>
        )
    }
}

export default InteractionMenu;
