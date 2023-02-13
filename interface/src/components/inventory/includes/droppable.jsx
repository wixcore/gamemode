import React from 'react'
import PropTypes from 'prop-types'

export default class Droppable extends React.PureComponent {

    render() {
        return (
            <div className={this.props.className} id={this.props.id}>
                {this.props.children}
            </div>
        )
    }
}

Droppable.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node
}