import React from 'react'
import '../css/catalogpanel.css'

const CatalogPanel = ({ catalog, selected, selectedCatalog, setActiveCatalog, banner }) => {

    

    return (
        <div className="hmenu__gunshop__catalog__container">
            <div className={banner === 'ammu' ? 'hmenu__gunshop__catalog' : 'hmenu__gunshop__catalog cols-3'}>
                {catalog[selected].items.map((item, index) => (
                <div
                    onClick={() => setActiveCatalog(index)}
                    className={selectedCatalog === index ? "hmenu__gunshop__catalog__item_active" : "hmenu__gunshop__catalog__item"} 
                    key={`hmenu__gunshop__catalog__item-${index}`}
                >
                    <div className="hmenu__gunshop__catalog__item__header">
                        <span className="hmenu__gunshop__catalog__item__name" style={{fontSize: item.title.length > 10 ? '1.5rem' : '2rem'}}>
                                {item.title}
                        </span>
                    </div>
                    <div className="hmenu__gunshop__catalog__item__img__container">
                        <img src={`https://state-99.com/client/images/items-cl/${item.img}`} className="hmenu__gunshop__catalog__item__img" />
                    </div>
                    <div className="hmenu__gunshop__catalog__item__info">
                       <span className="hmenu__gunshop__catalog__item__price">
                            {`${item.price}`}
                       </span>
                        {item.sale > 0 && (
                            <span className="hmenu__gunshop__catalog__item__sale">
                                {`${item.sale}%`}
                        </span>
                        )}
                       <div className="hmenu__gunshop__catalog__item__calibr">
                            <span className="hmenu__gunshop__catalog__item__calibr__text">
                                {item.desc2t}
                            </span>
                                <span className="hmenu__gunshop__catalog__item__calibr__name">
                                {item.desc2}
                            </span>
                       </div>
                    </div>
                    </div> 
                ))}
            </div>
        </div>
    )
}

export default CatalogPanel