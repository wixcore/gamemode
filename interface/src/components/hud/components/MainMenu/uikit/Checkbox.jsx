import React from 'react'
import Icon from './Icon'
import parseText from '../functions/parseText'

const styles = {
    container: {
        display: 'flex',
        paddingTop: '0.3rem',
        paddingBottom: '0.3rem',
        paddingLeft: '0.8rem',
        paddingRight: '0.8rem',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'RobotoLight',
        color: '#fff',
        fontSize: '1.3rem',
        marginRight: 'auto',
        maxWidth: '80%',
        overflow: 'hidden',
        textWrap: 'wrap'
    },
    checkbox: {
        cursor: 'pointer',
    },
    checkmark: {
    }
}

export default class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
        };
    }

    render() {

        try {
            styles.title.fontFamily = this.props.font;
        }
        catch (e) {}

        return (
            <label tabIndex="1" className="checkbox-container" style={styles.container}>
                {this.props.data.data.icon ? <Icon name={this.props.data.data.icon} /> : <></>}
                <label htmlFor={this.props.data.id} style={styles.title} dangerouslySetInnerHTML={{__html: parseText(this.props.data.data.title)}}>

                </label>
                <input type="checkbox"
                       autoFocus={true}
                       checked={this.props.data.data.checked}
                       className="checkbox"
                       style={styles.checkbox}
                       id={this.props.data.id}
                       onChange={() => this.props.data.onChangeCheckbox(this.props.data.id + 1)}
                />
                <label htmlFor={this.props.data.id} className="checkmark" style={styles.checkmark} />
            </label>
        );
    }
}