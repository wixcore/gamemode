import React from 'react';
import UMenuContainerItem from './UMenuContainerItem';

class UMenuContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'UMenuContainer.jsx', error, errorInfo); // eslint-disable-line
    }

    render() {
        return (
            <React.Fragment>
                <div className="u-title">
                    <span className="u-texttittle-center">{this.props.data.title}</span>
                </div>
                <div className="u-li-menu">
                    {this.props.data.items.map((e, i) => {
                        let index = `umenucont${i}`
                        return (
                            <UMenuContainerItem
                                e={e}
                                key={index}
                                data={this.props}
                                callback={this.callback}
                                hidden={e.hidden}
                            />
                        )
                    })}
                </div>
            </React.Fragment>
        )
    }
}

export default UMenuContainer;
