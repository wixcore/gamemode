import React from 'react';

class Scrollbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: false,
            uid: false,
            params: '{}',
        }
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'Scrollbar.jsx', error, errorInfo); // eslint-disable-line
    }

    callback = (action, ...args) => {
        if (this.state.checked === false)
            return;
        console.log(action, args)
        try {
            mp.trigger('client:phone:callBack', 'radio', ...args); // eslint-disable-line
        } catch (e) {
            console.log(e);
        }
    }

    checkboxChange(event, params, uid) {
        console.log(event.target.checked, params, uid)
        try {
            this.setState({checked: event.target.checked});
            this.setState({uid: uid});
            this.setState({params: JSON.stringify(params)});
            // this.callback('checkbox', event.target.checked, uid, JSON.stringify(params));
        } catch (e) {
            console.log(e);
        }
    }

    getCheckbox(params, checked) {
        let uid = Math.random().toString(36).substr(2, 9);
        /*if (checked) {
          this.setState({checked: true});
          this.setState({uid: uid});
          this.setState({params: JSON.stringify(params)});
        }*/
        return (
            <React.Fragment>
                <input type="radio" defaultChecked={checked} name="rangkk" className="u-checkbox-style" id={uid}
                       onChange={e => this.checkboxChange(e, params, uid)}/>
                <span className="checkbox-icon" htmlFor={uid}></span>
            </React.Fragment>
        )
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
                        <div className="u-selet-rang">
                            {this.props.data.list.map((e, i) => {
                                let index = `umenulist${i}`
                                return (
                                    <div className="u-select-box" key={index}>
                    <span className="checkbox checkbox-circle">
                      {this.getCheckbox(e.params, e.checked)}
                    </span>
                                        <span>{e.title}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="u-select-input">
                            <div className="u-btn-w" onClick={this.props.closeScrollbar}>Закрыть</div>
                            <div className="u-btn-w" onClick={() => {
                                this.props.closeScrollbar();
                                this.callback('checkbox', this.state.checked, this.state.uid, this.state.params)
                            }}>Принять
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Scrollbar;
