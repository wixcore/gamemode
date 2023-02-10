import React from 'react';

class SliderArrow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'SliderArrow.jsx', error, errorInfo); // eslint-disable-line
    }

    render() {
        return (
            <React.Fragment>
                <div className="box-change">
                    <span className="box-title">{this.props.title}</span>
                    <div className="box-in-change">
                        <span className="chevron-left"
                             onClick={() => this.props.clickLeftArrow(this.props.index)}></span>
                        <div
                            className="label-change color-white">{this.props.name_array[this.props.index_help] !== undefined ? this.props.name_array[this.props.index_help] : this.props.name_array + "%"}</div>
                        <span className="chevron-right"
                             onClick={() => this.props.clickRightArrow(this.props.index)}></span>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default SliderArrow;
