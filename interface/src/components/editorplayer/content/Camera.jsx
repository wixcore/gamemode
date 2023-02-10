import React from 'react';
import InputRange from 'react-input-range';

class Camera extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 180,
            value2: 50,
            value3: 50,
        }
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'Camera.jsx', error, errorInfo); // eslint-disable-line
    }

    changeCam() {
        mp.trigger('client:events:custom:camera' // eslint-disable-line
            , this.state.value, this.state.value2, this.state.value3)
    }

    render() {
        return (
            <React.Fragment>
                <div className="сamera-editor-main">
                    <div className="range-editor-block">
                        <span className="range-text">Поворот камеры</span>
                        <div className="range-slider-editor">
                            <InputRange
                                maxValue={360}
                                minValue={0}
                                value={this.state.value}
                                onChange={value => {
                                    this.setState({value});
                                    this.changeCam()
                                }}

                                onChangeComplete={value => console.log(value)}
                            />
                            <div className="range-label">{this.state.value}</div>
                        </div>
                    </div>
                    <div className="range-editor-block">
                        <span className="range-text">Дальность камеры</span>
                        <div className="range-slider-editor">
                            <InputRange
                                maxValue={100}
                                minValue={0}
                                value={this.state.value2}
                                onChange={value2 => {
                                    this.setState({value2});
                                    this.changeCam()
                                }}
                                onChangeComplete={value2 => console.log(value2)}/>
                            <div className="range-label">{this.state.value2}</div>
                        </div>
                    </div>
                    <div className="range-editor-block">
                        <span className="range-text">Высота камеры</span>
                        <div className="range-slider-editor">
                            <InputRange
                                maxValue={100}
                                minValue={0}
                                value={this.state.value3}
                                onChange={value3 => {
                                    this.setState({value3});
                                    this.changeCam()
                                }}
                                onChangeComplete={value3 => console.log(value3)}/>
                            <div className="range-label">{this.state.value3}</div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Camera;
