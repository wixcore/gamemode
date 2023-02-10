import React from 'react';
import { Animated } from 'react-animated-css';

class Achiev extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            info_show: false,
            achievIndex: 0
        }
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'Achiev.jsx', error, errorInfo); // eslint-disable-line
    }


    clickEvent() {
        this.setState({info_show: !this.state.info_show})
    }

    clickLeft(){
        if(this.state.achievIndex === this.props.data.length-1) this.setState({ achievIndex: 0 })
        else this.setState({ achievIndex: this.state.achievIndex+1 })
    }

    clickRight(){
        if(this.state.achievIndex === 0) this.setState({ achievIndex: this.props.data.length-1 })
        else this.setState({ achievIndex: this.state.achievIndex-1 })
    }
    


    render() {
        if(this.props.data.length === 0) return;
        return (
            <React.Fragment>
                <div className="achiev-menu">
                    <div className="u-title-achiev">
                        <div className="u-l-arrow-achiev ar-left-tr" onClick={() => this.clickLeft()}></div>
                        <span className="u-texttittle-achiev">{this.props.data[this.state.achievIndex].title}</span>
                        <div className="u-l-arrow-achiev ar-right-tr" onClick={() => this.clickRight()}></div>
                    </div>
                    <div className="achiev-main">
                        {this.props.data[this.state.achievIndex].achiev_map.map((e, i) => {
                            let index = `achievmap${i}`;
                            let linear = (e.value[0] * 100) / e.value[1];                            
                            return (
                                <div className="main-achiev-box" key={index}>
                                    <div className="achiev-box">
                                        <div className="achiev-linear" style={{ width: linear + "%" }}></div>
                                        <img src={e.img} className="img-achiev" alt="" />
                                        <div className="info-box-achiev">
                                            <div className="i-achiev-title">{e.name}</div>
                                            <div className="i-achiev-title-two">{e.desc}</div>
                                            <div className="i-achiev-result">{e.result}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default Achiev;
