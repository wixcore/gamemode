import React from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Buttons from './components/Buttons'
import Timer from './components/Timer'
import ReactDOM from 'react-dom'

const styles = {
    notificationContainer: {
        margin: '0px',
        position: 'absolute',
        left: '750px',
        top: '630px',
        width: '480px',
        height: '140px'
    }
}

class Notification extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            show: false,
            notificationData: [
                {
                    name: 'Подселение во фракцию',
                    img: 268,
                    time: 15, // seconds
                    text: 'Игрок (1362) приглашает Вас по фракцию "The Ballas Gang"'
                },
                {
                    name: 'Покупка квартиры',
                    img: 220,
                    time: 5, // seconds
                    text: 'Игрок (1362) приглашает Вас по фракцию "The Ballas Gang"'
                },
                {
                    name: 'Приглашение во фракцию',
                    img: 241,
                    time: 35, // seconds
                    text: 'Игрок (1362) приглашает Вас по фракцию "The Grove Gang"'
                }
            ]
        }
    }


    deleteNotification = () => {
        if (this.state.notificationData.length === 1) {
            this.setState({
                show: false
            })
            return true
        }
        this.setState((state) => {
            return {notificatioNData: state.notificationData.splice(0, 1)}
        })
    }
    
    componentDidMount() {
        if (this.state.show) {
          this.focusNotification()
        }
      }

      focusNotification() {
        ReactDOM.findDOMNode(this.refs.notification).focus()
      }

      handleKeyDown(e) {
          if (e.keyCode === 89) {
            console.log(`Ты принял предложение ${this.state.notificationData[0].name}`)
            this.deleteNotification()
          } else if (e.keyCode === 78) {
            console.log(`Ты отклонил предложение ${this.state.notificationData[0].name}`)
            this.deleteNotification()
          }
      }


    render() {

        if (!this.state.show) {
            return null;
        }

        return (
            <div
                onKeyDown={(e) => this.handleKeyDown(e)}
                ref="notification"
                style={styles.notificationContainer}
                className="notification-container"
                tabIndex="-1"
            >
                <Header
                    name={this.state.notificationData[0].name}
                    img={this.state.notificationData[0].img} // itemID
                    count={this.state.notificationData.length}
                />
                <Timer
                    time={this.state.notificationData[0].time}
                    deleteNotification={this.deleteNotification}
                    data={this.state.notificationData}
                    show={this.state.show}
                />
                <Content 
                    text={this.state.notificationData[0].text}
                />
                <Buttons />
            </div>
        )
    }


}

export default Notification