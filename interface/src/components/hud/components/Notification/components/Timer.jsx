import React from 'react'



const styles = {
    timerText: {
        fontFamily: 'Choujikuu',
        color: '#fff',
        fontSize: '0.8rem',
        width: '100%',
        marginLeft: '92%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },
    timer: {
        position: 'absolute',
        width: '100%',
        display: 'flex'
    },
    timerTextSeconds: {
        fontFamily: 'Choujikuu',
        color: '#fff',
        fontSize: '0.5rem'
    },
    lineOut: {
        width: '100%',
        backgroundColor: '#294b5d',
        height: '4%',
        position: 'absolute'
    }
}

class Timer extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            show: true,
            timer: this.props.time
        }
    }


    componentDidMount() {
        this.startTimer(this.state.timer)
   }



   startTimer = (time) => {
       const intervalId = setInterval(() => {
        if (this.state.timer >= 0.01) {
            this.setState((state) => {
                return {timer: state.timer - 0.01}
            })
        } else {
            if (this.props.deleteNotification()) {
                clearInterval(intervalId)
            } else {
                this.setState({
                    timer: this.props.data[0].time
                })
            }
        }
       }, 10)
   }
   
   componentWillReceiveProps(props) {
    this.setState({
        timer: props.time
    })
  }

    render() {

        return(
            <React.Fragment>
                <div
                    className="notification-timer-line" 
                    style={{width: `${this.state.timer / (this.props.time / 100)}%`}}
                />
                <div
                    style={styles.lineOut}
                />
                <div style={styles.timer}>
                    <span className="notification-timer">
                        {parseInt(Number(this.state.timer))}
                    </span>
                </div>
            </React.Fragment>
            
        )
    }


}

export default Timer