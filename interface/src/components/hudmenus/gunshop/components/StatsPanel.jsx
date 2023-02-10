import React from 'react'
import '../css/stats.css'
import FlatButton from '../uikit/FlatButton.jsx'

const StatsPanel = ({ catalog, selected, selectedCatalog, btncolor, img }) => {

    return (
        <div className="hmenu__gunshop__stats">
            {selectedCatalog !== -1 && (
                <React.Fragment>
                <span className="hmenu__gunshop__stats__name">{catalog[selected].items[selectedCatalog].title}</span>
                <div className="hmenu__gunshop__stats__params">
                    <span className="hmenu__gunshop__stats__about">
                        {`${catalog[selected].items[selectedCatalog].desc.toString().replace(new RegExp('~br~', 'g'), '\n')}`}
                    </span>
                </div>
                <div className="hmenu__gunshop__stats__price">
                    <div className="hmenu__gunshop__catalog__item__img__container">
                        <img src={`https://state-99.com/client/images/items-cl/${catalog[selected].items[selectedCatalog].img}`} className="hmenu__gunshop__catalog__item__img" />
                    </div>
                    <div className={(catalog[selected].items[selectedCatalog].price !== '' ? 'hmenu__gunshop__stats__price__text' : 'hmenu__gunshop__hide')}>
                        <span className="hmenu__gunshop__stats__price__gtext">
                            Цена
                        </span>
                        <span className="hmenu__gunshop__stats__price__gprice">
                            {`${catalog[selected].items[selectedCatalog].price}`}
                        </span>
                    </div>
                    <FlatButton isHide={catalog[selected].items[selectedCatalog].price === ''} onPress={() => {
                        try {
                            mp.trigger('client:shopMenu:buyCard', JSON.stringify(catalog[selected].items[selectedCatalog].params)); // eslint-disable-line
                        } catch (e) {
                            console.log(e);
                        }
                    }} btncolor={btncolor} text="Оплатить по карте" />
                    <FlatButton isHide={catalog[selected].items[selectedCatalog].price === ''} onPress={() => {
                        try {
                            mp.trigger('client:shopMenu:buyCash', JSON.stringify(catalog[selected].items[selectedCatalog].params)); // eslint-disable-line
                        } catch (e) {
                            console.log(e);
                        }
                    }} btncolor={btncolor} text="Оплатить наличными" />
                    <FlatButton isHide={catalog[selected].items[selectedCatalog].price !== ''} onPress={() => {
                        try {
                            mp.trigger('client:shopMenu:doName', JSON.stringify(catalog[selected].items[selectedCatalog].params)); // eslint-disable-line
                        } catch (e) {
                            console.log(e);
                        }
                    }} btncolor={btncolor} text="Открыть" />
                </div>
                </React.Fragment>
            )}
        </div>
    )
}

export default StatsPanel