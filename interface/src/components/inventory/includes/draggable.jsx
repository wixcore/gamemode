import React from 'react'
import PropTypes from 'prop-types'

export default class Draggable extends React.PureComponent {

    state = {
        droppable: null
    }

    componentWillUnmount() {
        console.log(this.props.children)
        //mp.trigger('client:inventory:notify', 'CHG: ' + JSON.stringify(this.props.children)); // eslint-disable-line
    }

    drop = () => {
        try {
            if (!this.state.droppable) {
                console.log('DnD Inventory: Некорректный droppable элемент')
                //mp.trigger('client:inventory:notify', 'DnD Inventory: Некорректный droppable элемент'); // eslint-disable-line
                return false
            }

            let inventory = this.props.that // Доступ к инвентарю
            const type = this.props.type
            let item = this.props.item

            if (!item || !type || !inventory) {
                console.log('DnD Inventory: Отсутствует одно из свойств')
                //mp.trigger('client:inventory:notify', 'DnD Inventory: Отсутствует одно из свойств'); // eslint-disable-line
                return false
            }

            const validTypes = ['put_on', 'take_off', 'move', 'move_all', 'take', 'take_all', 'equip', 'unequip', 'drop']

            let id = this.state.droppable.id

            if (!validTypes.includes(id)) {
                console.log('DnD Inventory: Неверное ID')
                //mp.trigger('client:inventory:notify', 'DnD Inventory: Неверное ID'); // eslint-disable-line
                return false
            }

            // Для unequip
            if (id.match('take_off') && type.includes('unequip')) {
                id = 'unequip'
            }

            // Мультиайдишная система для Droppable с багажника в инвентарь
            if (id.match('take_off') && !type.includes('take_off')) {
                id = 'take'
            }

            // Если стак перекладываем - то move_all
            if (id.match('move') && type.includes('move_all')) {
                id = 'move_all'
            }

            // Если стак берём - то take_all
            if (id.match('take') && type.includes('take_all')) {
                id = 'take_all'
            }

            // Если Droppable не предназначена для этого Draggable
            if (!type.includes(id)) {
                console.log('DnD Inventory: Тип не совпадает с ID')
                //mp.trigger('client:inventory:notify', 'Тип не совпадает с ID'); // eslint-disable-line
                return false
            }

            // Ответы на действие
            switch (id) {

                case 'put_on': // Надеть
                    try { // Внимание. Чтобы точно никакие вещи не надевались из багажника - удалите экшены "Надеть" у предметов во втором инвентаре.
                        if (inventory.getActions(item, 'inventory').includes(id)) {
                            inventory.itemPutOn(item, 'inventory')
                        }
                    } catch { inventory.itemPutOn(item, 'secondary_inv') }
                    break

                case 'take_off': // Снять
                    inventory.itemTakeOff(item, 'outfit')
                    break

                case 'move': // Переложить
                    if (item.item_id !== undefined) {
                        inventory.moveItem(item, 'inventory')
                    } else {
                        // Закомментируйте, если НЕ нужно, чтобы одежду можно было перекладывать с тела в багажник
                        // inventory.moveItem(item, 'outfit')
                    }
                    break

                case 'move_all': // Переложить стак
                    inventory.moveAllItem(false, item)
                    break

                case 'take': // Взять с багажника
                    if (item.item_id !== undefined) {
                        inventory.moveToInventory(item, 'secondary_inv')
                    }
                    break

                case 'take_all': // Взять с багажника стак
                    inventory.moveAllToInventory(false, item)
                    break

                case 'equip': // Экипировать
                    inventory.itemEquip(item, 'inventory')
                    break

                case 'unequip': // Убрать экипировку в инвентарь
                    inventory.itemUnequip(item, 'weapon')
                    break

                case 'drop': // Выбросить
                    if (type.includes('unequip')) {
                        inventory.itemDrop(item, 'weapon')
                    } else if (type.includes('move') || type.includes('move_all')) {
                        inventory.itemDrop(item, 'inventory')
                    } else if (type.includes('take_off')) {
                        inventory.itemDrop(item, 'outfit')
                    } else if (type.includes('take') || type.includes('take_all')) {
                        inventory.itemDrop(item, 'secondary_inv')
                    }
                    break

                default:
                    break
            }

            return true
        }
        catch (e) {

            //mp.trigger('client:inventory:notify', 'TEST: ' + e.toString()); // eslint-disable-line
        }
        return false;
    }

    onMouseDown = (event) => {
        try {
            //mp.trigger('client:inventory:notify', 'event.button !== 0 ' + event.button !== 0); // eslint-disable-line
            if (event.button !== 0) return

            let element = document.getElementById(this.props.id)
            let clone = element.cloneNode(true)
            clone.canDrop = true;

            let shiftX = event.clientX - element.getBoundingClientRect().left
            let shiftY = event.clientY - element.getBoundingClientRect().top

            clone.style.position = 'absolute'
            clone.style.zIndex = 1000

            if (clone.id.includes('weaponplayer')) {
                clone.style.width = '350px'
            }

            document.body.append(clone)

            let that = this

            moveAt(event.clientX, event.clientY)


            //mp.trigger('client:inventory:notify', 'YES:START'); // eslint-disable-line

            function moveAt(clientX, clientY) {
                clone.style.left = clientX - shiftX + 'px'
                clone.style.top = clientY - shiftY + 'px'
            }

            function onMouseMove(event) {
                moveAt(event.clientX, event.clientY)

                clone.hidden = true
                let elemBelow = document.elementFromPoint(event.clientX, event.clientY)
                clone.hidden = false

                ////mp.trigger('client:inventory:notify', `BELOW: ${elemBelow}`); // eslint-disable-line

                if (!elemBelow) return

                let droppableBelow = elemBelow.closest('.droppable')
                let currentDroppable = that.state.droppable


                //mp.trigger('client:inventory:notify', `BELOW1: ${currentDroppable}`); // eslint-disable-line
                //mp.trigger('client:inventory:notify', `BELOW2: ${droppableBelow}`); // eslint-disable-line
                //mp.trigger('client:inventory:notify', `BELOW3: ${currentDroppable !== droppableBelow}`); // eslint-disable-line

                if (currentDroppable !== droppableBelow) {
                    if (currentDroppable) {
                        that.setState({
                            droppable: null
                        })
                    }

                    currentDroppable = droppableBelow

                    if (currentDroppable) {
                        that.setState({
                            droppable: currentDroppable
                        })
                    }
                }
            }

            document.addEventListener('mousemove', onMouseMove)

            document.onmouseup = function() {
                try {
                    if (clone.canDrop) {
                        document.removeEventListener('mousemove', onMouseMove);
                        clone.onmouseup = null;
                        clone.canDrop = false;
                        clone.remove();
                        //mp.trigger('client:inventory:notify', `MOUSE UP2`); // eslint-disable-line
                        that.drop()
                    }
                }
                catch (e) {
                    //mp.trigger('client:inventory:notify', `DROP ERROR2: ` + e.toString()); // eslint-disable-line
                }
            };

            /*clone.onmouseup = function() {
                try {
                    document.removeEventListener('mousemove', onMouseMove)
                    clone.onmouseup = null
                    clone.remove()

                    //mp.trigger('client:inventory:notify', `MOUSE UP`); // eslint-disable-line
                    that.drop()
                }
                catch (e) {
                    //mp.trigger('client:inventory:notify', `DROP ERROR: ` + e.toString()); // eslint-disable-line
                }
            }*/
        }
        catch (e) {
            //mp.trigger('client:inventory:notify', 'TEST2: ' + e.toString()); // eslint-disable-line
        }
    }

    onDragStart = () => {
        //mp.trigger('client:inventory:notify', 'ON MOUSE START????'); // eslint-disable-line
        return false
    }
    
    render() {
        return (
            <div
                id={this.props.id}
                onDragStart={this.onDragStart}
                onMouseDown={this.onMouseDown}
            >
                {this.props.children}
            </div>
        )
    }
}

Draggable.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    item: PropTypes.object,
    children: PropTypes.node
}