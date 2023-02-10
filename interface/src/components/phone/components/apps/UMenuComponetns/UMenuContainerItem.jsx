import React, {useState} from 'react';
import UFrame from './UFrame';
import Icon from '../../../../hud/components/MainMenu/uikit/Icon'
import {Animated} from "react-animated-css";

const UMenuContainerItem = ({ e, data, callback, hidden }) => {

        const [isHidden, setHidden] = useState(hidden)

        return (
            <React.Fragment>
                <div className="umenu-family-box">
                    <div className="umenu-title-family" onClick={() => setHidden(!isHidden)}>
                        <span className="umenu-title-name">{e.title}</span>
                        <span data-hidden={isHidden} className="chevron left"></span>
                    </div>
                    {!isHidden ? e.umenu.map((e, i) => {
                        let index1 = `umenu${i}`
                        return (
                            <UFrame
                                menu={data.data.UUID}
                                item={e}
                                key={index1}
                                id={i}
                                type={e.type}
                                event={callback}
                                openScrollbar={data.openScrollbar}
                                openModal={data.openModal}
                                openInputModal={data.openInputModal}
                                rotate={data.rotate}
                                historyPush={data.historyPush}
                                path={data.path}
                            />
                        )
                    }) : null}
                </div>
            </React.Fragment>
        )
}

export default UMenuContainerItem;
