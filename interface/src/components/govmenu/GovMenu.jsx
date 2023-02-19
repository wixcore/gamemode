import React from 'react'
import Header from '../accountmenu/components/Header'
import Content from '../accountmenu/components/Content'
import './css/main.css'
import Alert from '../alert/Alert'

class GovMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            panels: [
                {name: 'Информация', id: 'govmenu-info'},
                {name: 'Имущество', id: 'govmenu-property'},
                {name: 'Работы', id: 'govmenu-jobs'},
                {name: 'Лицензии', id: 'govmenu-license'}
            ],
            activePage: 0,
            jobIndex: 0, // -1 - безработный
            jobname: 'Механик',
            isAlert: false,
            alertConfig: {
                type: 1,
                title: 'Test',
                text: 'Testtt',
                value: [{text: 'Далее', type: -1}]
            }
        }
    }

    setAlert = (value, alertConfig = this.state.alertConfig) => {
        this.setState({
            isAlert: value,
            alertConfig: alertConfig
        })
    }

    setHide = () => {
        this.setState({
            show: false
        })
    }

    onChangePage = (page) => {
        this.setState({
            activePage: page
        })
    }

    handleKeyPress = (key) => {
        if (key === 81) {
            if (this.state.activePage === 0) {
                this.setState({
                    activePage: this.state.panels.length - 1
                })
            } else {
                this.setState((state) => (
                    {activePage: state.activePage - 1}
                ))
            }
        }
        else if (key === 69) {
            if (this.state.activePage === this.state.panels.length - 1) {
                this.setState({
                    activePage: 0
                })
            } else {
                this.setState((state) => (
                    {activePage: state.activePage + 1}
                ))
            }
        }
    }

    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <React.Fragment>
                {this.state.isAlert && (
                    <Alert
                        title={this.state.alertConfig.title}
                        text={this.state.alertConfig.text}
                        value={this.state.alertConfig.value}
                        type={this.state.alertConfig.type}
                        setAlert={this.setAlert}
                    />
                )}
                <div className="govmenu">
                    <Header
                        setHide={this.setHide}
                    />
                    <Content
                        page={this.state.panels[this.state.activePage]}
                        jobname={this.state.jobname}
                        jobIndex={this.state.jobIndex}
                        activeIndex={this.state.activePage}
                        onChangePage={this.onChangePage}
                        handleKeyPress={this.handleKeyPress}
                        panels={this.state.panels}
                        setAlert={this.setAlert}
                    />
                </div>
            </React.Fragment>
        )
    }
}

export default GovMenu