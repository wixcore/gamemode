import React from 'react'
import NavigationPanel from './components/NavigationPanel.jsx'
import CatalogPanel from './components/CatalogPanel.jsx'
import StatsPanel from './components/StatsPanel.jsx'
import './css/main.css'
import EventManager from "../../../EventManager";

export default class GunShop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            selected: 0,
            selectedCatalog: -1,
            banner: 'ammu',
            bgColor: '#2f2f2f',
            catalog: [
                {
                    title: 'Оружие',
                    items: [
                        { //Если кликаем сюда, то открывается меню справа (Там где покупка)
                            title: 'Пастила P`s & Q`s 123123 123123 12312 312 312',
                            desc: 'Полное описание~br~Полное описание',
                            desc2t: 'Калибр',
                            desc2: '9x19mm',
                            img: 'Item_54.png',
                            price: '$500',
                            params: {id: 23, price: 12.5, shop: 106},
                            sale: 24
                        },
                        { //Если кликаем сюда, то открывается меню справа (Там где покупка)
                            title: 'Пастила P`s & Q`s',
                            desc: 'Полное описание~br~Полное описание',
                            desc2t: 'Калибр',
                            desc2: '9x19mm',
                            img: 'Item_54.png',
                            price: '$500',
                            params: {id: 23, price: 12.5, shop: 106},
                            sale: 24
                        },
                        { //Если кликаем сюда, то открывается меню справа (Там где покупка)
                            title: 'Пастила P`s & Q`s',
                            desc: 'Полное описание~br~Полное описание',
                            desc2t: 'Калибр',
                            desc2: '9x19mm',
                            img: 'Item_54.png',
                            price: '$500',
                            params: {id: 23, price: 12.5, shop: 106},
                            sale: 24
                        },
                        { //Если кликаем сюда, то открывается меню справа (Там где покупка)
                            title: 'Пастила P`s & Q`s',
                            desc: 'Полное описание~br~Полное описание',
                            desc2t: 'Калибр',
                            desc2: '9x19mm',
                            img: 'Item_54.png',
                            price: '$500',
                            params: {id: 23, price: 12.5, shop: 106},
                            sale: 24
                        },
                        { //Если кликаем сюда, то открывается меню справа (Там где покупка)
                            title: 'Пастила P`s & Q`s',
                            desc: 'Полное описание~br~Полное описание',
                            desc2t: 'Калибр',
                            desc2: '9x19mm',
                            img: 'Item_54.png',
                            price: '$500',
                            params: {id: 23, price: 12.5, shop: 106},
                            sale: 24
                        },
                        { //Если кликаем сюда, то открывается меню справа (Там где покупка)
                            title: 'Пастила P`s & Q`s',
                            desc: 'Полное описание~br~Полное описание',
                            desc2t: 'Калибр',
                            desc2: '9x19mm',
                            img: 'Item_54.png',
                            price: '$500',
                            params: {id: 23, price: 12.5, shop: 106},
                            sale: 24
                        },
                    ]
                },
                {
                    title: 'Оружие',
                    items: [
                        { //Если кликаем сюда, то открывается меню справа (Там где покупка)
                            title: 'Пастила P`s & Q`s',
                            desc: 'Полное описание~br~Полное описание',
                            desc2t: 'Калибр',
                            desc2: '9x19mm',
                            img: 'Item_54.png',
                            price: '$500',
                            params: {id: 23, price: 12.5, shop: 106},
                            sale: 24
                        },
                    ]
                },
                {
                    title: 'Оружие',
                    items: [
                        { //Если кликаем сюда, то открывается меню справа (Там где покупка)
                            title: 'Пастила P`s & Q`s',
                            desc: 'Полное описание~br~Полное описание',
                            desc2t: 'Калибр',
                            desc2: '9x19mm',
                            img: 'Item_54.png',
                            price: '$500',
                            params: {id: 23, price: 12.5, shop: 106},
                            sale: 24
                        },
                    ]
                },
                {
                    title: 'Оружие',
                    items: [
                        { //Если кликаем сюда, то открывается меню справа (Там где покупка)
                            title: 'Пастила P`s & Q`s',
                            desc: 'Полное описание~br~Полное описание',
                            desc2t: 'Калибр',
                            desc2: '9x19mm',
                            img: 'Item_54.png',
                            price: '$500',
                            params: {id: 23, price: 12.5, shop: 106},
                            sale: 24
                        },
                    ]
                },
                {
                    title: 'Оружие',
                    items: [
                        { //Если кликаем сюда, то открывается меню справа (Там где покупка)
                            title: 'Пастила P`s & Q`s',
                            desc: 'Полное описание~br~Полное описание',
                            desc2t: 'Калибр',
                            desc2: '9x19mm',
                            img: 'Item_54.png',
                            price: '$500',
                            params: {id: 23, price: 12.5, shop: 106},
                            sale: 24
                        },
                    ]
                },
                {
                    title: 'Оружие',
                    items: [
                        { //Если кликаем сюда, то открывается меню справа (Там где покупка)
                            title: 'Пастила P`s & Q`s',
                            desc: 'Полное описание~br~Полное описание',
                            desc2t: 'Калибр',
                            desc2: '9x19mm',
                            img: 'Item_54.png',
                            price: '$500',
                            params: {id: 23, price: 12.5, shop: 106},
                            sale: 24
                        },
                    ]
                },
                {
                    title: 'Оружие',
                    items: [
                        { //Если кликаем сюда, то открывается меню справа (Там где покупка)
                            title: 'Пастила P`s & Q`s',
                            desc: 'Полное описание~br~Полное описание',
                            desc2t: 'Калибр',
                            desc2: '9x19mm',
                            img: 'Item_54.png',
                            price: '$500',
                            params: {id: 23, price: 12.5, shop: 106},
                            sale: 24
                        },
                    ]
                },
                {
                    title: 'Оружие',
                    items: [
                        { //Если кликаем сюда, то открывается меню справа (Там где покупка)
                            title: 'Пастила P`s & Q`s',
                            desc: 'Полное описание~br~Полное описание',
                            desc2t: 'Калибр',
                            desc2: '9x19mm',
                            img: 'Item_54.png',
                            price: '$500',
                            params: {id: 23, price: 12.5, shop: 106},
                            sale: 24
                        },
                    ]
                },
                {
                    title: 'Оружие',
                    items: [
                        { //Если кликаем сюда, то открывается меню справа (Там где покупка)
                            title: 'Пастила P`s & Q`s',
                            desc: 'Полное описание~br~Полное описание',
                            desc2t: 'Калибр',
                            desc2: '9x19mm',
                            img: 'Item_54.png',
                            price: '$500',
                            params: {id: 23, price: 12.5, shop: 106},
                            sale: 24
                        },
                    ]
                },
                {
                    title: 'Оружие',
                    items: [
                        { //Если кликаем сюда, то открывается меню справа (Там где покупка)
                            title: 'Пастила P`s & Q`s',
                            desc: 'Полное описание~br~Полное описание',
                            desc2t: 'Калибр',
                            desc2: '9x19mm',
                            img: 'Item_54.png',
                            price: '$500',
                            params: {id: 23, price: 12.5, shop: 106},
                            sale: 24
                        },
                    ]
                },
                {
                    title: 'Оружие',
                    items: [
                        { //Если кликаем сюда, то открывается меню справа (Там где покупка)
                            title: 'Пастила P`s & Q`s',
                            desc: 'Полное описание~br~Полное описание',
                            desc2t: 'Калибр',
                            desc2: '9x19mm',
                            img: 'Item_54.png',
                            price: '$500',
                            params: {id: 23, price: 12.5, shop: 106},
                            sale: 24
                        },
                    ]
                },
                {
                    title: 'Оружие',
                    items: [
                        { //Если кликаем сюда, то открывается меню справа (Там где покупка)
                            title: 'Пастила P`s & Q`s',
                            desc: 'Полное описание~br~Полное описание',
                            desc2t: 'Калибр',
                            desc2: '9x19mm',
                            img: 'Item_54.png',
                            price: '$500',
                            params: {id: 23, price: 12.5, shop: 106},
                            sale: 24
                        },
                    ]
                },
                {
                    title: 'Оружие',
                    items: [
                        { //Если кликаем сюда, то открывается меню справа (Там где покупка)
                            title: 'Пастила P`s & Q`s',
                            desc: 'Полное описание~br~Полное описание',
                            desc2t: 'Калибр',
                            desc2: '9x19mm',
                            img: 'Item_54.png',
                            price: '$500',
                            params: {id: 23, price: 12.5, shop: 106},
                            sale: 24
                        },
                    ]
                },
                {
                    title: 'Оружие',
                    items: [
                        { //Если кликаем сюда, то открывается меню справа (Там где покупка)
                            title: 'Пастила P`s & Q`s',
                            desc: 'Полное описание~br~Полное описание',
                            desc2t: 'Калибр',
                            desc2: '9x19mm',
                            img: 'Item_54.png',
                            price: '$500',
                            params: {id: 23, price: 12.5, shop: 106},
                            sale: 24
                        },
                        { //Если кликаем сюда, то открывается меню справа (Там где покупка)
                            title: 'Пиротехническая установка',
                            desc: 'Описание',
                            img: 'Item_25.png',
                            price: '$500',
                            params: {id: 23, price: 12.5, shop: 106},
                            sale: 20
                        },
                        { //Если кликаем сюда, то открывается меню справа (Там где покупка)
                            title: 'Пистолет',
                            desc: 'Описание',
                            descFull: 'Полное описание~br~Полное описание',
                            img: 'Item_25.png',
                            price: '$500',
                            params: {id: 23, price: 12.5, shop: 106},
                            sale: 11
                        },
                        { //Если кликаем сюда, то открывается меню справа (Там где покупка)
                            title: 'Пистолет',
                            desc: 'Описание',
                            img: 'Item_25.png',
                            price: '$500',
                            params: {id: 23, price: 12.5, shop: 106},
                            sale: 0
                        },
                        { //Если кликаем сюда, то открывается меню справа (Там где покупка)
                            title: 'Пистолет',
                            desc: 'Описание',
                            img: 'Item_25.png',
                            price: '$500',
                            params: {id: 23, price: 12.5, shop: 106},
                            sale: 1
                        }
                    ]
                }

            ]
        }
    }

    componentDidMount() {
        EventManager.addHandler('gunshop', value => {
            if (value.type === 'show') {
                this.setState({show: true})
            } else if (value.type === 'hide') {
                this.setState({show: false})

                this.setState({
                    selected: 0,
                    selectedCatalog: -1
                })
            } else if (value.type === 'updateItems') {
                try {
                    this.setState({show: true})
                    this.setState({selected: value.selected})
                    this.setState({selectedCatalog: value.selectedCatalog})
                    this.setState({banner: value.banner})
                    this.setState({bgColor: value.bgColor})
                    this.setState({catalog: value.list})
                }
                catch (e) {

                }
            }
        })
    }

    componentWillUnmount() {
        EventManager.removeHandler('gunshop');
    }

    setHide = () => {
        this.setState({
            show: false
        })

        try {
            mp.trigger('client:shopMenu:hide'); // eslint-disable-line
        } catch (e) {
            console.log(e);
        }

        this.setState({
            selected: 0,
            selectedCatalog: -1
        })
    }

    setActive = (value) => {
        this.setState({
            selected: value,
            selectedCatalog: -1
        })
    }

    setActiveCatalog = (value) => {
        this.setState({
            selectedCatalog: value
        })
    }

    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <div className="hmenu__container">
                <div className="hmenu__gunshop">
                    <NavigationPanel
                        selected={this.state.selected}
                        bgcolor={this.state.bgColor}
                        activecolor="#000"
                        catalog={this.state.catalog}
                        setHide={this.setHide}
                        banner={this.state.banner}
                        setActive={this.setActive}
                    />
                    <CatalogPanel
                        selected={this.state.selected}
                        catalog={this.state.catalog}
                        selectedCatalog={this.state.selectedCatalog}
                        setActiveCatalog={this.setActiveCatalog}
                        banner={this.state.banner}
                    />
                    <StatsPanel
                        selected={this.state.selected}
                        catalog={this.state.catalog}
                        selectedCatalog={this.state.selectedCatalog}
                        btncolor={this.state.bgColor}
                    />
                </div>
            </div>
        )
    }
}