import React from 'react'
import PropTypes from 'prop-types'

import EventManager from "../../EventManager"

import {HudContext} from './context/HudContext'

export default class Draggable extends React.Component {

    constructor(props) {
        super(props)

        this.draggable = React.createRef()
    }

    static contextType = HudContext

    state = {
        id: this.props.id,
        x: null,
        y: null
    }

    componentDidMount() {
        this.setPosToDefault()

        // Сюда вставить функционал приёма координат с серверной БД (использовать this.setPos)
        // this.setPos({ x: 0, y: 0 })

        EventManager.addHandler('hud-draggable-' + this.props.id, value => {
            //mp.trigger('client:inventory:notify', `${value.id} | ${this.props.id}`); // eslint-disable-line
            if (value.id === this.props.id) {
                try {
                    //mp.trigger('client:inventory:notify', `${value.id} | ${value.x} | ${value.y}`); // eslint-disable-line
                    this.setPos({ x: value.x, y: value.y })
                }
                catch (e) {
                    //mp.trigger('client:inventory:notify', `${e}`); // eslint-disable-line
                }
            } else return;
        })
    }

    dragStop = () => {
        const x = this.state.x
        const y = this.state.y
        try {
            mp.trigger('client:ui:saveHudDrag', this.props.id, x, y); // eslint-disable-line
        }
        catch (e) {}
        // mp.event на сохранение координат в БД
    }

    componentWillUnmount() {
        EventManager.removeHandler('hud-draggable' + this.props.id);
    }

    // Вызывайте этот метод для изменения координат компонента
    setPos = ({x, y}) => { // this.setPos({ x: 10, y: 15 })
        let element = this.draggable.current

        //element.style.position = 'absolute'
        //element.style.left = `${x}px`
        //element.style.top = `${y}px`

        this.setState({ x, y })
    }

    onMouseDown = (event) => {
        if (!this.context.allowDraggable) return

        if (event.button === 2) {
            this.setPosToDefault(true)
            //this.dragStop()
            return
        }

        if (event.button !== 0) return

        let element = this.draggable.current

        let shiftX = event.clientX - element.getBoundingClientRect().left
        let shiftY = event.clientY - element.getBoundingClientRect().top

        const oldZindex = element.style.zIndex
        element.style.zIndex = '9999'
        element.style.position = 'absolute'

        // document.body.append(element)

        let that = this

        moveAt(event.clientX, event.clientY)

        function moveAt(clientX, clientY) {
            that.setPos({ x: (clientX - shiftX), y: (clientY - shiftY) })
        }

        function onMouseMove(event) {
            moveAt(event.clientX, event.clientY)
        }

        document.addEventListener('mousemove', onMouseMove);

        document.onmouseup = function() { //TODO
            document.removeEventListener('mousemove', onMouseMove)
            element.style.zIndex = oldZindex
            element.onmouseup = null

            that.dragStop()
        }
    }

    onDragStart = () => {
        return false
    }

    setPosToDefault = (byClick = false) => {
        let element = this.draggable.current

        let x = element.offsetLeft
        let y = element.offsetTop

        if (this.props.id === 'car-speedbox') {
            x += 193 // Из-за zoom'a в CSS
        } else if (this.props.id === 'car-fuel') {
            x += document.getElementById('car-elements').offsetWidth+2
        }

        //element.style.margin = '0'
        //element.getElementsByTagName("DIV")[0].style.margin = '0'

        //if (element.getElementsByTagName('DIV')[0].classList.contains('hide')) {
        //    y-=52
        //}

        try {
            if (byClick)
                mp.trigger('client:ui:saveHudDefault', this.props.id); // eslint-disable-line
        }
        catch (e) {}

        /*if (this.props.id === 'car-speedbox') {
            y-=52
        }*/

        if (!window.HudComponents[this.props.id]) {
            window.HudComponents[this.props.id] = { x, y }
        } else {
            this.setPos({ x: window.HudComponents[this.props.id].x, y: window.HudComponents[this.props.id].y })
            return
        }

        this.setPos({ x, y })
    }
    
    render() {
        return (
            <div
                id={this.props.id}
                ref={this.draggable}
                className={this.props.className}
                onDragStart={this.onDragStart}
                onMouseDown={this.onMouseDown}
                style={this.props.style}
                onContextMenu={(e) => e.preventDefault()}
            >
                {this.props.children}
            </div>
        )
    }
}

Draggable.propTypes = {
    id: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.node
}