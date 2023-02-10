import React from 'react';
import InputRange from 'react-input-range';
import {Link} from "react-router-dom";

class Face extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'Face.jsx', error, errorInfo); // eslint-disable-line
    }

    render() {
        return (
            <React.Fragment>
                <div className="title-block">Шаг 3</div>
                <span className="title-in-block">Редактор</span>
                <div className="header-title-editor">Лицо</div>
                <div className="block-editor-range">
                    <div className="range-editor-block-big">
                        {this.props.input_editor_face.map((e, index) => {
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
                                                this.setState({...this.props.input_editor_face[index].value = value});
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
                    <Link to="/editor/family-character">
                        <div className="box-last-btn">Назад</div>
                    </Link>
                    <div className="box-last-btn" onClick={() => this.props.reset(1)}>Сброс</div>
                    <Link to="/editor/editor-character/face-second">
                        <div className="box-last-btn">Далее</div>
                    </Link>
                </div>
            </React.Fragment>
        )
    }
}

export default Face;
