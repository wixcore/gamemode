import React from 'react';
import EventManager from "../../../EventManager";
import Header from './MainMenu/Header/Header.jsx'
import Desc from './MainMenu/uikit/Desc.jsx'
import InterfaceItem from './MainMenu/List/InterfaceItem.jsx'
import Draggable from '../Draggable'
class MainMenu extends React.Component {
    constructor(props) {
        super(props)
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.itemRefs = {}
        this.state = {
            show: false,
            selected: 0,
            header: true,
            opacity: 1,
            mStyle: {
                font: 'RobotoLight',
                fontOffset: 2,
                borderRadius: 4,
                bgColor: 'rgb(0,0,0,1)',
                width: '420px',
                height: '350px',
            },
            headerText: 'Test',
            headerDesc: '~r~HELL~g~O WO~b~RLD',
            banner: 'bs_hair',
            menuName: '',
            menuList: [
                {
                    type: 2,
                    title: '~r~Test',
                    subtitle: '~g~TEST2~y~Dfsdfdsf~br~qwerty~b~sdfsdfsdf~g~djasdnajksnd',
                    icon: 'test__icon__inverted',
                    rl: 'Right Label',
                    params: {},
                    items: [],
                    divider: false
                },
                {
                    type: 2,
                    title: 'Бизнес',
                    subtitle: 'default textdefault textdefault textdefault textdefault textdefault textdefault textdefault textdefault textdefault textdefault text',
                    iconr: 'test__icon__inverted',
                    items: [],
                    divider: false
                },
                {
                    type: 2,
                    title: 'Test3',
                    icon: 'test__icon__inverted',
                    items: [],
                    divider: false
                },
                {
                    type: 1,
                    title: 'Your fraction',
                    icon: 'test__icon__inverted',
                    items: [
                        '~r~DATA 1',
                        '~g~DATA 2',
                        'DATA 3',
                        'DATA 4'
                    ],
                    index: 2
                },
                {
                    type: 0,
                    title: 'Test4',
                    items: [],
                    divider: false,
                    checked: false
                },
                {
                    type: 0,
                    title: 'Test6',
                    icon: 'test__icon__inverted',
                    items: [],
                    divider: false,
                    checked: true
                },
                {
                    type: 0,
                    title: 'Test6',
                    items: [],
                    divider: false,
                    checked: false
                },
                {
                    type: 0,
                    title: 'Test6',
                    items: [],
                    divider: false,
                    checked: true
                },
                {
                    type: 0,
                    title: 'Test6',
                    items: [],
                    divider: false,
                    checked: false
                },
                {
                    type: 2,
                    title: 'Test6',
                    items: [],
                    divider: false
                },
                {
                    type: 2,
                    title: 'Test6',
                    items: [],
                    divider: false
                },
                {
                    type: 2,
                    title: 'Test6',
                    items: [],
                    divider: false
                },
                {
                    type: 2,
                    title: 'Test6',
                    items: [],
                    divider: false
                },
                {
                    type: 2,
                    title: 'Test6',
                    items: [],
                    divider: false
                },
                {
                    type: 2,
                    title: 'Test6',
                    items: [],
                    divider: false
                },
                {
                    type: 2,
                    title: 'Test6',
                    items: [],
                    divider: false
                },
                {
                    type: 2,
                    title: 'Test6',
                    items: [],
                    divider: false
                },
                {
                    type: 2,
                    title: 'Test6',
                    items: [],
                    divider: false
                },
                {
                    type: 2,
                    title: 'Test6',
                    items: [],
                    divider: false
                },
                {
                    type: 2,
                    title: 'Test6',
                    items: [],
                    divider: false
                },
                {
                    type: 2,
                    title: 'Test6',
                    items: [],
                    divider: false
                },
                {
                    type: 2,
                    title: 'Test6',
                    items: [],
                    divider: false
                },
                {
                    type: 2,
                    title: 'Test6',
                    items: [],
                    divider: false
                },
                {
                    type: 2,
                    title: 'Test6',
                    items: [],
                    divider: false
                },
                {
                    type: 2,
                    title: 'Test6',
                    items: [],
                    divider: false
                },
                {
                    type: 2,
                    title: 'Test6',
                    items: [],
                    divider: false
                },
                {
                    type: 2,
                    title: 'Test6',
                    items: [],
                    divider: false
                },
                {
                    type: 2,
                    title: 'Test6',
                    items: [],
                    divider: false
                },
                {
                    type: 2,
                    title: 'Test6',
                    items: [],
                    divider: false
                },
                {
                    type: 2,
                    title: 'Test6',
                    items: [],
                    divider: false
                },
                {
                    type: 2,
                    title: 'Test6',
                    items: [],
                    divider: false
                },
                {
                    type: 2,
                    title: 'Test6',
                    items: [],
                    divider: false
                }
            ]
        };
    }
    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'MainMenu.jsx', error, errorInfo); // eslint-disable-line
    }
    componentDidMount() {
        try {
            this.itemRefs[0].focus()
        } catch (e) {}
        EventManager.addHandler('hudm', value => {
            if (value.type === 'show') {
                this.setState({show: true})
            } else if (value.type === 'hide') {
                this.setState({show: false})
            } else if (value.type === 'switch') {
                this.setState({show: !this.state.show})
            } else if (value.type === 'updateStyle') {
                this.setState({mStyle: value.style})
            } else if (value.type === 'focus') {
                try {
                    this.itemRefs[value.selected].focus();
                }
                catch (e) {}
            } else if (value.type === 'updateInfo') {

                let select = 0;
                //if (value.menuList.length >= select)
                //    select = 0;

                this.setState({show: true});
                this.setState({header: value.header});
                //this.setState({opacity: value.opacity});
                this.setState({selected: select});
                this.setState({headerText: value.headerText});
                this.setState({headerDesc: value.headerDesc});
                this.setState({banner: value.banner});
                this.setState({menuList: value.menuList});
                this.setState({menuName: value.menuName});
                try {
                    this.itemRefs[select].focus();
                }
                catch (e) {}
            } else return;
        })
    }
    resetVal(type) {
        if (type === 'max') {
            this.setState((state) => {
                return {selected: 0}
            }, this.onChangeSelected(0))
            setTimeout(
                function() {
                    this.itemRefs[0].focus()
                }
                    .bind(this),
                100
            )
        } else {
            this.setState((state) => {
                return {selected: this.state.menuList.length - 1}
            }, this.onChangeSelected(this.state.menuList.length - 1))
            setTimeout(
                function() {
                    try {
                        this.itemRefs[this.state.menuList.length - 1].focus()
                    }
                    catch (e) {
                        
                    }
                }.bind(this),
                100
            )
        }
    }

    handleWheel(e) {
        if (e.deltaY < 0) {
            if (this.state.selected === 0) {
                this.resetVal('min')
            } else {
                this.setState((state) => {
                    return {selected: state.selected - 1}
                }, this.onChangeSelected(this.state.selected - 1))
            }
        } else if (e.deltaY > 0) {
            if (this.state.menuList.length - 1 === this.state.selected) {
                this.resetVal('max')
            } else {
                this.setState((state) => {
                    return {selected: state.selected + 1}
                }, this.onChangeSelected(this.state.selected + 1))
            }
        }
    }
    
    resetValList(type) {
        if (type === 'max') {
            let menuListNew = [...this.state.menuList]
            menuListNew[this.state.selected].index = 0
            this.setState((state) => {
                return {menuList: menuListNew}
            })
            try {
                mp.trigger('client:menuList:callBack:list', this.state.menuName, this.state.selected, JSON.stringify(menuListNew[this.state.selected].params), 0); // eslint-disable-line
            }
            catch (e) {}
        }
        else {
            let menuListNew = [...this.state.menuList]
            menuListNew[this.state.selected].index = menuListNew[this.state.selected].items.length - 1
            this.setState((state) => {
                return {menuList: menuListNew}
            })
            try {
                mp.trigger('client:menuList:callBack:list', this.state.menuName, this.state.selected, JSON.stringify(menuListNew[this.state.selected].params), menuListNew[this.state.selected].index); // eslint-disable-line
            }
            catch (e) {}
        }
    }
    nextVal = () => {
        if (this.state.menuList[this.state.selected].index + 2 > this.state.menuList[this.state.selected].items.length) {
            this.resetValList('max')
        } else {
            let menuListNew = [...this.state.menuList]
            menuListNew[this.state.selected].index = menuListNew[this.state.selected].index + 1
            this.setState((state) => {
                return {menuList: menuListNew}
            })
            try {
                mp.trigger('client:menuList:callBack:list', this.state.menuName, this.state.selected, JSON.stringify(menuListNew[this.state.selected].params), menuListNew[this.state.selected].index); // eslint-disable-line
            }
            catch (e) {}
        }
    }
    prevVal = () => {
        if (this.state.menuList[this.state.selected].index === 0) {
            this.resetValList('min')
        } else {
            let menuListNew = [...this.state.menuList]
            menuListNew[this.state.selected].index = menuListNew[this.state.selected].index - 1
            this.setState((state) => {
                return {menuList: menuListNew}
            })
            try {
                mp.trigger('client:menuList:callBack:list', this.state.menuName, this.state.selected, JSON.stringify(menuListNew[this.state.selected].params), menuListNew[this.state.selected].index); // eslint-disable-line
            }
            catch (e) {}
        }
    }

    handleKeyDown(e) {
        if([38, 32, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }

        if (e.keyCode === 13) {
            if (0 === this.state.menuList[this.state.selected].type) {
                // CHECKBOX
                let menuListNew = [...this.state.menuList]
                menuListNew[this.state.selected].checked = !menuListNew[this.state.selected].checked
                this.setState((state) => {
                    return {menuList: menuListNew}
                })
                try {
                    mp.trigger('client:menuList:callBack:check', this.state.menuName, id - 1, JSON.stringify(menuListNew[id - 1].params), menuListNew[id - 1].checked); // eslint-disable-line
                }
                catch (e) {}
            }
            if (1 === this.state.menuList[this.state.selected].type) {
                // LIST MENU
                try {
                    mp.trigger('client:menuList:callBack:btn', this.state.menuName, this.state.selected, JSON.stringify(this.state.menuList[this.state.selected].params)); // eslint-disable-line
                }
                catch (e) {}
            }
            if (2 === this.state.menuList[this.state.selected].type) {
                // CAPTION
                try {
                    mp.trigger('client:menuList:callBack:btn', this.state.menuName, this.state.selected, JSON.stringify(this.state.menuList[this.state.selected].params)); // eslint-disable-line
                }
                catch (e) {}
            }
        }
        if (e.keyCode === 39) {
            if (1 === this.state.menuList[this.state.selected].type) {
                this.nextVal()
            }
        }
        if (e.keyCode === 37) {
            if (1 === this.state.menuList[this.state.selected].type) {
                this.prevVal()
            }
        }
        if (e.keyCode === 38) {
            if (this.state.selected === 0) {
                this.resetVal('min')
            } else {
                this.setState((state) => {
                    return {selected: state.selected - 1}
                }, this.onChangeSelected(this.state.selected - 1))
                this.scrollMenu('up')
            }
        } else if (e.keyCode === 40) {
            if (this.state.menuList.length - 1 === this.state.selected) {
                this.resetVal('max')
            } else {
                this.setState((state) => {
                    return {selected: state.selected + 1}
                }, this.onChangeSelected(this.state.selected + 1))
                this.scrollMenu('down')
            }
        }
    }

    scrollMenu(type) {
        if ((this.state.selected === this.state.menuList.length) && (type === 'up')) {
            setTimeout(
                function() {
                    this.itemRefs[this.state.menuList.length - 2].focus()
                }
                    .bind(this),
                120
            )
            return null
        }

        if ((this.state.selected === 0) && (type === 'down')) {
            setTimeout(
                function() {
                    this.itemRefs[1].focus()
                }
                    .bind(this),
                120
            )
            return null
        }

        if (type === 'up') {
            const selected = this.state.selected - 1
            setTimeout(
                function() {
                    this.itemRefs[selected].focus()
                }
                    .bind(this),
                120
            )
        }
        if (type === 'down') {
            const selected = this.state.selected + 1
            setTimeout(
                function() {
                    this.itemRefs[selected].focus()
                }
                    .bind(this),
                120
            )
        }
    }

    toggleSelected(id) {
        this.setState((state) => {
            return {selected: id}
        }, this.onChangeSelected(id))
    }
    changeCheckbox = (id) => {
        let menuListNew = [...this.state.menuList]
        menuListNew[id - 1].checked = !menuListNew[id - 1].checked
        this.setState((state) => {
            return {menuList: menuListNew}
        })
        try {
            mp.trigger('client:menuList:callBack:check', this.state.menuName, id - 1, JSON.stringify(menuListNew[id - 1].params), menuListNew[id - 1].checked); // eslint-disable-line
        }
        catch (e) {}
    }
    onChangeSelected(selected) {
        //console.log('SELECTED', selected)
        try {
            mp.trigger('client:menuList:callBack:select', this.state.menuName, selected); // eslint-disable-line
        }
        catch (e) {}
    }
    render() {
        if (!this.state.show)
            return null;
        const styles = {
            container: {
                opacity: this.state.opacity,
                width: this.state.mStyle.width
            },
            menuContainer: {
                position: 'relative',
                overflow: 'hidden',
                overflowY: 'scroll',
                maxHeight: this.state.mStyle.height,
                borderRadius: '0 0 ' + this.state.mStyle.borderRadius + 'px ' + this.state.mStyle.borderRadius + 'px'
            }
        }
        return (
            <Draggable id='menu'>
            <div className="menu-box">
                <div
                    className="menu-box-content"
                    style={styles.container}
                    onWheel={(e) => this.handleWheel(e)}
                    tabIndex="1"
                    onKeyDown={(e) => this.handleKeyDown(e)}
                >
                    {this.state.header ? 
                        <Header
                            headerData={`${this.state.selected + 1} / ${this.state.menuList.length}`}
                            headerText={this.state.headerText}
                            headerDesc={this.state.headerDesc}
                            headerColor={this.state.mStyle.bgColor}
                            headerBorder={this.state.mStyle.borderRadius}
                            headerFont={this.state.mStyle.font}
                            banner={this.state.header && this.state.banner ? this.state.banner : ''}
                        />
                         : <></>}
                    <div className="menuContainer" style={styles.menuContainer}>
                        {this.state.menuList.map((item, index) => {
                            return (
                                <div tabIndex="-1" ref={el => (this.itemRefs[index] = el)} onClick={() => this.toggleSelected(index)} key={(index).toString()} className={index === this.state.selected ? 'menu-item-inverted' : 'menu-item'}>
                                    <InterfaceItem
                                        menuName={this.state.menuName}
                                        nextVal={this.nextVal}
                                        prevVal={this.prevVal}
                                        onChangeCheckbox={this.changeCheckbox}
                                        id={index}
                                        data={item}
                                        font={this.state.mStyle.font}
                                        selectCurrent={this.state.selected}
                                        selected={index === this.state.selected}
                                    />
                                </div>
                            )
                        })}
                    </div>
                    </div>
                    {this.state.menuList[this.state.selected].subtitle ? 
                        <Desc
                            font={this.state.mStyle.font}
                            border={this.state.mStyle.borderRadius}
                            color={this.state.mStyle.bgColor}
                            desc={this.state.menuList[this.state.selected].subtitle}
                            width={this.state.mStyle.width}
                        /> : <></>}
            </div>
            </Draggable>
        )
    }
}
export default MainMenu;
