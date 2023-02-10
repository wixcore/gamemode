import React from 'react'
import './css/main.css'
import Header from './components/Header';
import Car from './components/Car';
import EventManager from "../../../EventManager";

class CarRent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            banner: '',
            title: 'Аренда транспорта',
            bgcolor: '#252525',
            cars: [
                {
                    price: 200,
                    name: 'Elegy',
                    sale: -1,
                    type: 'Автомобиль'
                },
                {
                    price: 444,
                    name: 'Elegy2',
                    sale: 13,
                    type: 'Автомобиль'
                },
                {
                    price: 200,
                    name: 'Toros',
                    sale: 60,
                    type: 'Автомобиль'
                },
                {
                    price: 444,
                    name: 'Thrax',
                    sale: 0,
                    type: 'Автомобиль'
                },
                {
                    price: 200,
                    name: 'Nexus',
                    sale: 0,
                    type: 'Автомобиль'
                },
                {
                    price: 444,
                    name: 'Faggio',
                    sale: 0,
                    type: 'Автомобиль'
                },
                {
                    price: 200,
                    name: 'Faggio2',
                    sale: 13,
                    type: 'Автомобиль'
                },
                {
                    price: 444,
                    name: 'Faggio3',
                    type: 'Автомобиль'
                }
            ]
        }
    }

    componentDidMount() {
        EventManager.addHandler('carrent', value => {
            if (value.type === 'show') {
                this.setState({show: true})
            } else if (value.type === 'hide') {
                this.setState({show: false})
            } else if (value.type === 'updateItems') {
                try {
                    this.setState({show: true})
                    this.setState({title: value.title})
                    this.setState({banner: value.banner})
                    this.setState({bgcolor: value.bgColor})
                    this.setState({cars: value.items})
                }
                catch (e) {

                }
            }
        })
    }

    componentWillUnmount() {
        EventManager.removeHandler('carrent');
    }

    setHide = () => {
        this.setState({
            show: false
        })

        try {
            mp.trigger('client:carRent:hide'); // eslint-disable-line
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <div className="carrent__container">
                <div className="carrent__content">
                    <Header
                        bgcolor={this.state.bgcolor}
                        banner={this.state.banner}
                        title={this.state.title}
                        setHide={this.setHide}
                    />
                    <div className="carrent__content__list__container">
                        <div className="carrent__content__list">
                        {this.state.cars.map((item, index) => (
                            <Car
                                price={item.price}
                                name={item.name}
                                params={item.params}
                                type={item.type}
                                key={`carrent__content__list__item-${index}`}
                                btnbg="#000"
                                sale={item.sale}
                            />
                        ))}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CarRent