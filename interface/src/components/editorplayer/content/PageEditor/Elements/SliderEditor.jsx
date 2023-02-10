import React from 'react';

class SliderEditor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'SliderEditor.jsx', error, errorInfo); // eslint-disable-line
    }

    render() {
        return (
                <div
                    className="box-change box-change__row otstup-box"
                    key={`box-change-otstup-box-${this.props.index}`}
                    style={{flexDirection: this.props.column ? 'column' : 'row'}}
                >
                    <span className="box-editor-title">{this.props.title}</span>
                    <div className="box-in-change editor-box-style">
                        <span className="chevron-left"
                             onClick={() => this.props.clickLeftArrow(this.props.index)}></span>
                        <div
                            className="label-change color-white">{this.props.name_array[this.props.index_help] !== undefined ? this.props.name_array[this.props.index_help] : this.props.name_array}</div>
                        <span className="chevron-right"
                             onClick={() => this.props.clickRightArrow(this.props.index)}></span>
                    </div>
                </div>
        )
    }
}

export default SliderEditor;
