import React from 'react';
import { Link } from 'react-router-dom';

class DefaultPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'DefaultPage.jsx', error, errorInfo); // eslint-disable-line
    }

    render() {
        return (
            <React.Fragment>
                <div className="android-content">
                    {/* <div className="info-top">
                <div className="icon-network"></div>
                <span> 12:00</span>
              </div> */}
                    {/*<div className="info-time-box">
                        <div className="time-date">
                            <div className="txt-time">{this.props.top_bar.time}</div>
                            <div className="txt-date">{this.props.top_bar.date}</div>
                        </div>
                        <div className="weather"><span>{this.props.top_bar.temperature}</span></div>
            </div>*/}
                    <div className="main-app-box">
                        {this.props.data.map((e, i) => {
                            const index = `appBox${i}`
                            return (
                                <Link to={e.link} className={`app-box icons-${e.img}`} onClick={() => this.props.clickApps(e, i)}
                                    key={index}>
                                    <div className="textfor-app">{e.name}</div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default DefaultPage;
