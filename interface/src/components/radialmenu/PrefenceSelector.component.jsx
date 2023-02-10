import React from 'react';
import PieMenu, { PieCenter, Slice } from 'react-pie-menu';
import { ThemeProvider } from 'styled-components';
import { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMoneyBillAlt,
    faVenusMars,
    faLocationArrow,
    faArrowLeft,
    faTimes,
} from '@fortawesome/free-solid-svg-icons';

import * as styles from './PreferenceSelector.style';
import IconClose from './icons/close.svg'
import EventManager from "../../EventManager";

const INITIAL = 0;
const PAYMENT = 1;
const GENDERS = 2;
const LOCATIONS = 3;

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            choice: 'init',
            currentData: {},
            hoverBackground: '#ba0633D0',
            centerBackground: '#ba0633',
            history: ['init'],
            choiceData: [
                {
                    id   : 'do',
                    title: 'Действия',
                    items: [
                        {
                            id   : 'giveMoney',
                            title: 'Передать'
                        },
                        {
                            id   : 'friend',
                            icon : 'close',
                            title: 'Знакомство'
                        },
                        {
                            id   : 'uncuff',
                            title: 'Снять',
                            icon: 'close'
                        },
                        {
                            id   : 'cuff',
                            title: 'Надеть',
                            icon: 'close'
                        },
                        {
                            id   : 'inCar',
                            title: 'Затащить',
                            icon: 'close'
                        },
                        {
                            id   : 'outCar',
                            title: 'Вытащить',
                            icon: 'close'
                        },
                        {
                            id   : 'more',
                            icon : '#more',
                            title: 'Еще',
                            items: [
                                {
                                    id   : 'takeGun',
                                    
                                    title: 'Изъять оружие',
                                },
                                {
                                    id   : 'takeMask',
                                    title: 'Снять маску',
                                    icon: 'close'
                                },
                                {
                                    id   : 'followUs',
                                    icon : 'close',
                                    title: 'Вести за собой'
                                },
                                {
                                    id   : 'frisk',
                                    icon : 'close',
                                    title: 'Обыск'
                                }
                            ]
                        }
                    ]
                },
                {
                    id   : 'run',
                    title: 'Документы',
                    items: [
                        {
                            id   : 'showGosDoc',
                            title: 'Удостоверение'
                        },
                        {
                            id   : 'showCardId',
                            title: 'Паспорт'
                        },
                        {
                            id   : 'showLic',
                            title: 'Лицензии'
                        }
                    ]
                },
                {
                    id   : 'home',
                    title: 'Главная',
                    items: [
                        {
                            id   : 'report',
                            icon   : 'close',
                            title: 'Жалоба'
                        },
                        {
                            id   : 'ask',
                            icon   : 'close',
                            title: 'Вопрос'
                        },
                        {
                            id   : 'faq',
                            icon   : 'close',
                            title: 'Справка'
                        },
                        {
                            id   : 'settings',
                            icon   : 'close',
                            title: 'Настройки'
                        }
                    ]
                },
                {
                    id   : 'carMenu',
                    title: 'Транспорт',
                    items: [
                        {
                            id   : 'leftIndicator',
                            icon   : 'close',
                            title: 'Поворотник'
                        },
                        {
                            id   : 'lockV',
                            icon   : 'close',
                            title: 'Открыть / Закрыть'
                        },
                        {
                            id   : 'rightIndicator',
                            icon   : 'close',
                            title: 'Поворотник'
                        },
                        {
                            id   : 'twoIndicator',
                            icon   : 'close',
                            title: 'Аварийка'
                        },
                    ]
                },
                {
                    id: 'anim',
                    title: 'Анимации',
                },
                {
                    id: 'donate',
                    title: 'Донат',
                },
                {
                    id: 'gps',
                    title: 'GPS'
                }
            ]
        };
    }

    componentDidMount() {
        EventManager.addHandler('radial', value => {
            if (value.type === 'show') {
                this.setState({show: true})
            } else if (value.type === 'hide') {
                this.setState({show: false})
            } else if (value.type === 'updateData') {
                this.setState({choiceData: value.choiceData})
                this.setState({currentData: value.choiceData})
            }else if (value.type === 'updateColorData') {
                this.setState({hoverBackground: value.hoverBackground})
                this.setState({centerBackground: value.centerBackground})
            } else return;
        })
    }

    componentWillUnmount() {
        EventManager.removeHandler('radial');
    }

    componentWillMount() {
        this.setState({
            currentData: this.state.choiceData
        })
    };

    showPayments = () => {
        this.setState({ choice: PAYMENT });
    };

    selectPayment = paymentOption => () => {
        this.setState({ paymentOption });
    };

    showGenders = () => {
        this.setState({ choice: GENDERS });
    };

    selectGender = gender => () => {
        this.setState({ gender });
    };

    showLocations = () => {
        this.setState({ choice: LOCATIONS });
    };

    selectLocation = location => () => {
        this.setState({ location });
    };

    goBack = () => {
        console.log('1')
        this.setState({ choice: this.findParent(this.state.choice) || 'init' });
        const current = this.getItemsById('anim');
        console.log(current);
        this.setState({
            currentData: current
        })
    };

    getItemsById = (value) => {
        /*if (this.state.choice !== 'init') {
          let result = null

          if (array.items) {
            const deep = array.items.find(x => x.id === value)
            if (deep.items) {
              return deep.items
            }
          }

          return result
        } else {
          return this.state.choiceData.find(x => x.id === value)
        }*/
        let parent = ''
        let result

        for (let i = 0; i < this.state.choiceData.length; i++) {
            let el = this.state.choiceData[i]
            parent = el.id
            if (el.items) {
                result = el.items.find(x => x.id === value)
                if (result) {
                    return result.items

                }
            }
            if (el.id === value) {
                return el.items
            }
        }
    };

    radialSelectiItem = (value) => {
        if (value.items) {
            this.setState({ choice: value.id })
            this.setState({ currentData: this.state.choiceData.find(x => x.id === value.id).items })
            /*this.setState((state) => (
              {history: state.history.push(value)}
            ))*/
        }
        try {
            mp.trigger('client:radialMenu:item', value.id, JSON.stringify(value.params)); // eslint-disable-line
        }
        catch (e) {
            try {
                mp.trigger('client:radialMenu:item', value.id, JSON.stringify({})); // eslint-disable-line
            }
            catch (e) {}
        }
        console.log('you clicked: ' + value.id)
    };

    radialSelectiItemNew = (value) => {
        if (value.items) {
            this.setState({
                choice: value.id
            })
            const current = this.getItemsById(value.id)
            this.setState({
                currentData: current
            })
        }
        try {
            mp.trigger('client:radialMenu:newItem', value.id, JSON.stringify(value.params)); // eslint-disable-line
        }
        catch (e) {
            try {
                mp.trigger('client:radialMenu:newItem', value.id, JSON.stringify({})); // eslint-disable-line
            }
            catch (e) {}
        }
        console.log('you clicked: ' + value.id)
    };

    closeMenu = () => {
        this.setState({
            show: false
        });

        try {
            mp.trigger('client:radialMenu:close'); // eslint-disable-line
        }
        catch (e) {}
    }

    findParent = (value) => {
        let parent = ''
        let result

        for (let i = 0; i < this.state.choiceData.length; i++) {
            let el = this.state.choiceData[i]
            parent = el.id
            if (el.items) {
                result = el.items.find(x => x.id === value)
                if (result) {
                    //console.log(this.state.choiceData.find(x => x.id === parent).items.find(x => x.id === this.state.choice).items)
                    return parent
                }
            }
        }
    };



    render() {

        const slice = css`
      cursor: pointer;
      color: grey;
      background: rgba(0, 0, 0, 0.6);
      &:hover {
        color: white;
        background: rgba(0,0,0,0.7);
        transition: 0.1s;
      }
    `;
        const center = css`
      background: rgba(0,0,0,1);
      &:not(:empty):hover {
        cursor: pointer;
      }
      > svg {
        position: relative;
        top: calc(50% - 15px);
        left: calc(50% - 15px);
      }
    `;

        const theme = {
            pieMenu: {
                container: styles.container,
                center: center,
            },
            slice: {
                container: slice,
            },
        };

        const Center = props => (
            <React.Fragment>
                {this.state.choice !== 'init' && (
                    <PieCenter {...props} onClick={this.goBack}>
                        <FontAwesomeIcon icon={faArrowLeft} size="2x" />
                    </PieCenter>
                )}
                {this.state.choice === 'init' && (
                    <PieCenter {...props} onClick={() => this.closeMenu()}>
                        <div className="radialmenu__center__container">
                            <FontAwesomeIcon icon={faTimes} size="2x" />
                        </div>
                    </PieCenter>
                )}
            </React.Fragment>
        );

        if (!this.state.show) {
            return null
        }


        return (
            <div className="radialmenu__container">
                <ThemeProvider theme={theme}>
                    <PieMenu radius="340px" centerRadius="60px" Center={Center}>
                        {this.state.choice === 'init' ? (
                            <React.Fragment>
                                {this.state.choiceData.map((item, index) => (
                                    <Slice onSelect={() => this.radialSelectiItem(item)}>
                                        <div key={`radialmenu__slice-${index}`}>
                                            {item.icon && <img src={`https://state-99.com/client/images/icons/radial/${item.icon}.png`} width="32px" />}
                                            <p className="radialmenu__slice__title">
                                                {item.title}
                                            </p>
                                        </div>
                                    </Slice>
                                ))}
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                {this.state.currentData.map((item, index) => (
                                    <Slice onSelect={() => this.radialSelectiItemNew(item)}>
                                        <div key={`radialmenu__slice-${item.id}`}>
                                            {item.icon && <img src={`https://state-99.com/client/images/icons/radial/${item.icon}.png`} width="32px" />}
                                            <p className="radialmenu__slice__title">
                                                {item.title}
                                            </p>
                                        </div>
                                    </Slice>
                                ))}
                            </React.Fragment>
                        )}
                    </PieMenu>
                </ThemeProvider>
            </div>
        );
    }
}