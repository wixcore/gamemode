import React from 'react';
import InfoPlayer from './InfoPlayer';
import BoxCreate from './BoxCreate';
import EventManager from "../../../../EventManager";

class ChangePlayer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            first_character_create: true,
            second_character_create: true,
            third_character_create: false,
            info_player: [
                {
                    player: {
                        name: "Nika Kondr213",
                        old: "21",
                        money: "2500",
                        date: "01.08.1998",
                        sex: "w",
                        spawn: ["Дом", "Квартира", "Бомж"],
                        index_spawn: 0
                    }
                },
                {
                    player: {
                        name: "Godvil Moretti",
                        old: "25",
                        money: "250000",
                        date: "03.08.1994",
                        sex: "m",
                        spawn: ["Дом", "Квартира"],
                        index_spawn: 0
                    }
                },
                {
                    player: {
                        name: "Appi Moretti",
                        old: "155",
                        money: "250000",
                        date: "26.12.1996",
                        sex: "m",
                        spawn: ["Дом"],
                        index_spawn: 0
                    }
                }
            ]
        }
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'ChangePlayer.jsx', error, errorInfo); // eslint-disable-line
    }

    componentDidMount() {
        EventManager.addHandler('ChangePlayer', value => {
            if (value.type === 'show') {
                this.setState({show: true})
            } else if (value.type === 'hide') {
                this.setState({show: false})
            } else if (value.type === 'switch') {
                this.setState({show: !this.state.show})
            } else if (value.type === 'updatePlayers') {
                this.setState({first_character_create: value.isShow1});
                this.setState({second_character_create: value.isShow2});
                this.setState({third_character_create: value.isShow3});
                this.setState({info_player: value.players});

                //this.props.changeImg(); TODO надо тут обновить картинку, но чет не работает
            } else return;
        })
    }

    componentWillUnmount() {
        EventManager.removeHandler('ChangePlayer');
    }

    clickLeftArrow(index) {
        let array = this.state.info_player[index].player.spawn
        let currentIndex = this.state.info_player[index].player.index_spawn;
        if (currentIndex === 0) {
            currentIndex = (array.length - 1);
        } else {
            currentIndex--;
        }
        this.setState(prev => ({...prev.info_player[index].player.index_spawn = currentIndex}));
    }

    clickRightArrow(index) {
        let array = this.state.info_player[index].player.spawn
        let currentIndex = this.state.info_player[index].player.index_spawn;
        if (currentIndex === array.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        this.setState(prev => ({...prev.info_player[index].player.index_spawn = currentIndex}));
    }

    render() {
        return (
            <React.Fragment>
                <div className="main-box-change-create">
                    
                    {this.state.second_character_create ?
                        <InfoPlayer
                            index={1}
                            name={this.state.info_player[1].player.name}
                            old={this.state.info_player[1].player.old}
                            money={this.state.info_player[1].player.money}
                            date={this.state.info_player[1].player.date}
                            spawn={this.state.info_player[1].player.spawn}
                            index_spawn={this.state.info_player[1].player.index_spawn}
                            info_player={this.state.info_player}
                            clickLeftArrow={this.clickLeftArrow.bind(this)}
                            clickRightArrow={this.clickRightArrow.bind(this)}
                        />
                        : <BoxCreate/>}
                    {this.state.first_character_create ?
                        <InfoPlayer
                            index={0}
                            name={this.state.info_player[0].player.name}
                            old={this.state.info_player[0].player.old}
                            money={this.state.info_player[0].player.money}
                            date={this.state.info_player[0].player.date}
                            spawn={this.state.info_player[0].player.spawn}
                            index_spawn={this.state.info_player[0].player.index_spawn}
                            info_player={this.state.info_player}
                            clickLeftArrow={this.clickLeftArrow.bind(this)}
                            clickRightArrow={this.clickRightArrow.bind(this)}
                        />
                        : <BoxCreate/>}
                    {this.state.third_character_create ?
                        <InfoPlayer
                            index={2}
                            name={this.state.info_player[2].player.name}
                            old={this.state.info_player[2].player.old}
                            money={this.state.info_player[2].player.money}
                            date={this.state.info_player[2].player.date}
                            spawn={this.state.info_player[2].player.spawn}
                            index_spawn={this.state.info_player[2].player.index_spawn}
                            info_player={this.state.info_player}
                            clickLeftArrow={this.clickLeftArrow.bind(this)}
                            clickRightArrow={this.clickRightArrow.bind(this)}
                        />
                        : <BoxCreate/>}
                </div>
            </React.Fragment>
        )
    }
}

export default ChangePlayer;
