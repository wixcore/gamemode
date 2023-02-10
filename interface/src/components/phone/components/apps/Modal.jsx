import React from 'react';

class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'Modal.jsx', error, errorInfo); // eslint-disable-line
    }

    callback = (action, params) => {
        console.log(action, params)
        try {
            mp.trigger('client:phone:callBack', action, params); // eslint-disable-line
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        if (!this.props.data.show) {
            return null;
        }
        return (
            <React.Fragment>
                <div className="u-scrollable">
                    <div className="u-scrool-box">
                        <div className="u-scroll-title">{this.props.data.title}</div>
                        <div className="u-scroll-text">{this.props.data.text}</div>
                        <div className="u-select-input">
                            <div className="u-btn-w"
                                 onClick={() => this.props.closeModal(false)}>{this.props.data.buttons[0]}</div>
                            <div className="u-btn-w" onClick={() => {
                                this.props.closeModal(true);
                                this.callback('modal', JSON.stringify(this.props.data.params))
                            }}>{this.props.data.buttons[1]}</div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Modal;
