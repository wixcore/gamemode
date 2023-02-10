import React from 'react';
import MaterialIcon from 'material-icons-react';
import Avatar from '@material-ui/core/Avatar';
import '../Android/Calls/css/rotated.css'
import InputNumber from '../Android/Calls/InputNumber'
import ActionList from '../Android/Calls/ActionList'
import Keyboard from '../Android/Calls/Keyboard';
import DoCallButton from '../Android/Calls/DoCallButton'
import NavigationBar from '../Android/Calls/NavigationBar';

class Calls extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number: ""
        }
    }


    onClickKeyboardButton = (button) => {
        this.setState((state) => {
            return {number: state.number + button}
        })
    }

    setNumber = (value) => {
        this.setState({
            number: value
        })
    }

    onCall = (number) => {
        this.props.onCall(this.state.number)
    }

    render() {
        return (
            <div className="dedbit-menu calls">
                <InputNumber
                    number={this.state.number}
                    setNumber={this.setNumber}
                />
                <Keyboard
                    onClickKeyboardButton={this.onClickKeyboardButton}
                />
                <DoCallButton
                    action={this.onCall}
                />
            </div>
        )
    }
}

export default Calls;
