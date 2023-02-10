import React from 'react';
import {Link} from "react-router-dom";

class BottomBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'BottomBar.jsx', error, errorInfo); // eslint-disable-line
    }

    /*

    <div className="m_keys_bar">
                    <Link to="/phone/android/defaultpage">
                        <div className="m-trngl-bar" onClick={() => this.props.clickBack()}></div>
                    </Link>
                    <Link to="/phone/android/defaultpage">
                        <div className="m-crl-bar" onClick={() => this.props.clickHome()}></div>
                    </Link>
                    <div className="m-sqr-bar" onClick={() => this.props.rotateAndroid()}></div>
                </div>

                */
    render() {
        return (
            <React.Fragment>
                <div className="iphone__apps__bar__container">
                    {this.props.isMainScreen && (
                        <div className="iphone__apps__bar">
                            {this.props.data.slice(0, 4).map((item, index) => (
                                <Link
                                    to={item.link}
                                    className={`iphone__apps__bar__item icons-${item.img}`}
                                    onClick={() => this.props.clickApps(item, index)}
                                    key={`iphone__apps__bar__item-${index}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
                {!this.props.isMainScreen && (
                    <div className="iphone__bar__container">
                        <div className="iphone__bar" onClick={() => this.props.clickHome()} />
                    </div>
                )}
            </React.Fragment>
        )
    }
}

export default BottomBar;
