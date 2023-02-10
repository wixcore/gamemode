import React from 'react';
import {Link} from "react-router-dom";
import SliderEditor from './Elements/SliderEditor';

class FaceLast extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'FaceLast.jsx', error, errorInfo); // eslint-disable-line
    }

    render() {
        return (
            <React.Fragment>
                <div className="title-block">Шаг 5</div>
                <span className="title-in-block">Редактор</span>
                <div className="header-title-editor margin-for-editor">Внешность</div>
                {this.props.input_editor_face_last.map((e, index) => {
                    let i = "input_editor_face_last" + index;
                    return (
                            <SliderEditor
                                index={index}
                                index_help={e.index_help}
                                title={e.title}
                                name_array={e.index_help}
                                clickLeftArrow={this.props.clickLeftArrow.bind(this)}
                                clickRightArrow={this.props.clickRightArrow.bind(this)}
                                key={`input_editor_face_last${index}`}
                            />
                    )
                })}
                <div className="last-button-menu">
                    <Link to="/editor/editor-character/face-second">
                        <div className="box-last-btn">Назад</div>
                    </Link>
                    <div className="box-last-btn" onClick={() => this.props.reset(3)}>Сброс</div>
                    <Link to="/choicerole" onClick={() => this.props.saveCustomization()}>
                        <div className="box-last-btn">Сохранить</div>
                    </Link>
                </div>
                
            </React.Fragment>
        )
    }
}

export default FaceLast;
