import React from 'react';

class InputModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ""
        }
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'InputModal.jsx', error, errorInfo); // eslint-disable-line
    }

    callback = (action, params, text) => {
        console.log(action, params, text)
        try {
            mp.trigger('client:phone:callBack', action, params, text); // eslint-disable-line
        } catch (e) {
            console.log(e);
        }
    }

    inputChange(event) {
        this.setState({text: event.target.value})
    }

    render() {
        if (!this.props.data.show) {
            return null;
        }
        return (
            <React.Fragment>
                <div className="u-scrollable">
                    <div className="u-input-b-box">
                        <div className="u-scroll-title">{this.props.data.title}</div>
                        <div className="box-input-u">
                            <input type="text" defaultValue={this.props.data.value} className="u-input-text"
                                   onChange={(e) => this.inputChange(e)}/>
                        </div>
                        <div className="u-select-input u-clr-violet">
                            <div className="u-btn-w"
                                 onClick={this.props.closeInputModal}>{this.props.data.buttons[0]}</div>
                            <div className="u-btn-w" onClick={() => {
                                this.props.closeInputModal();
                                this.callback('inputmodal', JSON.stringify(this.props.data.params), this.state.text)
                            }
                            }>{this.props.data.buttons[1]}</div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default InputModal;
