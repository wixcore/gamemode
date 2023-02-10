import React from 'react';
import Face from './PageEditor/Face';
import FaceSecond from './PageEditor/FaceSecond';
import {Route} from "react-router-dom";
import FaceLast from './PageEditor/FaceLast';

class EditorCharacter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'EditorCharacter.jsx', error, errorInfo); // eslint-disable-line
    }

    render() {
        return (
            <React.Fragment>
                <div className="menu-editor-default">
                    <Route path="/editor/editor-character/face-first">
                        <Face
                            input_editor_face={this.props.input_editor_face}
                            reset={this.props.reset.bind(this)}
                            setCustomization={this.props.setCustomization.bind(this)}
                        />
                    </Route>
                    <Route path="/editor/editor-character/face-second">
                        <FaceSecond
                            input_editor_nose={this.props.input_editor_nose}
                            input_editor_eyes_lips={this.props.input_editor_eyes_lips}
                            reset={this.props.reset.bind(this)}
                            setCustomization={this.props.setCustomization.bind(this)}
                        />
                    </Route>
                    <Route path="/editor/editor-character/face-last">
                        <FaceLast
                            input_editor_face_last={this.props.input_editor_face_last}
                            clickLeftArrow={this.props.clickLeftArrow.bind(this)}
                            clickRightArrow={this.props.clickRightArrow.bind(this)}
                            reset={this.props.reset.bind(this)}
                            saveCustomization={this.props.saveCustomization.bind(this)}
                            setCustomization={this.props.setCustomization.bind(this)}
                        />
                    </Route>
                </div>
            </React.Fragment>
        )
    }
}

export default EditorCharacter;
