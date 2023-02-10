import React from 'react';
import './css/quickmenu.css'

class Quickmenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show:false,
        }
    }

    // componentDidCatch(error, errorInfo) {
    //     mp.trigger('client:ui:debug', 'Windows.jsx', error, errorInfo); // eslint-disable-line
    // }
//     componentDidMount() {
//         document.body.addEventListener('contextmenu', e => e.preventDefault() & e.stopPropagation());
// document.body.addEventListener('mousedown', onMouseDown);
// document.body.addEventListener('touchstart', e => onMouseDown(e.touches[0]));
// document.body.addEventListener('mouseup', onMouseUp);
// document.body.addEventListener('touchend', e => onMouseUp(e.touches[0]));
// document.body.addEventListener('mousemove', onMouseMove);
// document.body.addEventListener('touchmove', e => onMouseMove(e.touches[0]));

// let showing, anchorX, anchorY, min = 100;
// const wheel = document.querySelector('.wheel');

// function onMouseDown({ clientX: x, clientY: y }) {
// 	showing = true;
// 	anchorX = x;
// 	anchorY = y;

// 	wheel.style.setProperty('--x', `${x}px`);
// 	wheel.style.setProperty('--y', `${y}px`);
// 	wheel.classList.add('on');
// }

// function onMouseUp() {
// 	showing = false;
// 	wheel.setAttribute('data-chosen', 0);
// 	wheel.classList.remove('on');
// }

// function onMouseMove({ clientX: x, clientY: y }) {
// 	if (!showing) return;

// 	let dx = x - anchorX;
// 	let dy = y - anchorY;
// 	let mag = Math.sqrt(dx * dx + dy * dy);
// 	let index = 0;

// 	if (mag >= min) {
// 		let deg = Math.atan2(dy, dx) + 0.625 * Math.PI;
// 		while (deg < 0) deg += Math.PI * 2;
// 		index = Math.floor(deg / Math.PI * 4) + 1;
// 	}

// 	wheel.setAttribute('data-chosen', index);
// }
//     }

    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <React.Fragment>
                {/* <div className="position-quickmenu">
                <div class="wheel">
                    <div class="arc"><i class="fas fa-home"></i></div>
                    <div class="arc"><i class="fas fa-question"></i></div>
                    <div class="arc"><i class="fas fa-bell"></i></div>
                    <div class="arc"><i class="fas fa-camera"></i></div>
                    <div class="arc"><i class="fas fa-trash-alt"></i></div>
                    <div class="arc"><i class="fas fa-save"></i></div>
                    <div class="arc"><i class="fas fa-flag"></i></div>
                    <div class="arc"><i class="fab fa-codepen"></i></div>
                </div>
                </div> */}
            </React.Fragment>
        )
    }
}

export default Quickmenu;
