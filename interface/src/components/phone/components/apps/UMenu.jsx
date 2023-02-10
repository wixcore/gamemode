import React from 'react';
import UMenuContainer from './UMenuComponetns/UMenuContainer';

class UMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'UMenu.jsx', error, errorInfo); // eslint-disable-line
    }

    render() {
        return (
            <React.Fragment>
                <div className="uni-menu">
                    <UMenuContainer data={this.props.data} openScrollbar={this.props.openScrollbar}
                                    openModal={this.props.openModal} openInputModal={this.props.openInputModal}
                                    rotate={this.props.rotate} historyPush={this.props.historyPush} path={this.props.path}/>
                </div>
            </React.Fragment>
        )
    }
}

export default UMenu;
