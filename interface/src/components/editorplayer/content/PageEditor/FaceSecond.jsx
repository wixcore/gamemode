import React from 'react';
import InputRange from 'react-input-range';
import {Link} from "react-router-dom";

class FaceSecond extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'FaceSecond.jsx', error, errorInfo); // eslint-disable-line
    }

    render() {
        return (
            <React.Fragment>
                <div className="title-block">Шаг 4</div>
                <span className="title-in-block">Редактор</span>
                <div className="header-title-editor">Лицо</div>
                <div className="block-editor-range">
                    <div className="range-editor-block-big">
                        {this.props.input_editor_nose.map((e, index) => {
                            let i = "input_editor_face" + index;
                            return (
                                <div className="block-editor-range__element" key={i}>
                                    <span className="range-text">{e.name}</span>
                                    <div className="range-slider-editor-big">
                                        <InputRange
                                            maxValue={100}
                                            minValue={-100}
                                            value={e.value}
                                            onChange={value => {
                                                this.setState({...this.props.input_editor_nose[index].value = value});
                                                this.props.setCustomization(value);
                                            }}
                                            onChangeComplete={value => console.log(value)}
                                        />
                                        <div className="range-label">{e.value}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="header-title-editor">Глаза и Губы</div>
                <div className="block-editor-range">
                    <div className="range-editor-block-big">
                        {this.props.input_editor_eyes_lips.map((e, index) => {
                            let i = "input_editor_face" + index;
                            return (
                                <div className="block-editor-range__element" key={i}>
                                    <span className="range-text">{e.name}</span>
                                    <div className="range-slider-editor-big">
                                        <InputRange
                                            maxValue={100}
                                            minValue={-100}
                                            value={e.value}
                                            onChange={value => {
                                                this.setState({...this.props.input_editor_eyes_lips[index].value = value});
                                                this.props.setCustomization(value);
                                            }}
                                            onChangeComplete={value => console.log(value)}
                                        />
                                        <div className="range-label">{e.value}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="last-button-menu">
                    <Link to="/editor/editor-character/face-first">
                        <div className="box-last-btn">Назад</div>
                    </Link>
                    <div className="box-last-btn" onClick={() => this.props.reset(2)}>Сброс</div>
                    <Link to="/editor/editor-character/face-last">
                        <div className="box-last-btn">Далее</div>
                    </Link>
                </div>
            </React.Fragment>
        )
    }
}

export default FaceSecond;
