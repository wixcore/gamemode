import React from 'react';
import Camera from './content/Camera';
import FamilyCharacter from './content/FamilyCharacter';
import EditorCharacter from './content/EditorCharacter';
import {Route, Switch} from "react-router-dom";
import EventManager from "../../EventManager";
import NameCharacter from './content/NameCharacter';

class EditorPlayer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            input_editor_face: [
                {name: 'Высота бровей', value: 0},
                {name: 'Глубина бровей', value: 0},
                {name: 'Высота скул', value: 0},
                {name: 'Ширина скул', value: 0},
                {name: 'Глубина щеки', value: 0},
                {name: 'Ширина челюсти', value: 0},
                {name: 'Форма челюсти', value: 0},
                {name: 'Высота подбородка', value: 0},
                {name: 'Ширина подбородка', value: 0},
                {name: 'Глубина подбородка', value: 0},
                {name: 'Подбородочный отступ', value: 0},
                {name: 'Обхват шеи', value: 0},
            ],
            input_editor_nose: [
                {name: 'Ширина носа', value: 0},
                {name: 'Высота носа', value: 0},
                {name: 'Длина кончика носа', value: 0},
                {name: 'Высота кончика носа', value: 0},
                {name: 'Глубина моста носа', value: 0},
                {name: 'Поломаность носа', value: 0},
            ],

            input_editor_eyes_lips: [
                {name: 'Эпикантус', value: 0},
                {name: 'Толщина губ', value: 0},
            ],
            input_editor_face_last: [
                {title: "Причёска", maxVal: 72, index_help: 1},
                {title: "Стиль причёски", maxVal: 72, index_help: 0},
                {title: "Цвет волос", maxVal: 64, index_help: 0},
                {title: "Мелирование волос", maxVal: 64, index_help: 0},
                {title: "Брови", maxVal: 31, index_help: 0},
                {title: "Цвет бровей", maxVal: 64, index_help: 0},
                {title: "Цвет глаз", maxVal: 32, index_help: 0},
                {title: "Веснушки", maxVal: 17, index_help: 0},
            ],
            cheked_sex: false,
            slider: [
                {
                    title: "Мать",
                    parents: ["Дарлин", "Обри", "Жасмин", "Жизель", "Амелия", "Изабелла", "Зои", "Ава", "Камилла", "Вайолет", "София", "Эйлин", "Николь", "Эшли", "Грейс", "Брианна", "Натали", "Оливия", "Элизабет", "Кэтрин", "Эмма", "Мисти"],
                    index_help: 0
                },
                {
                    title: "Отец",
                    parents: ["Бенджамин", "Эллиот", "Эдвард", "Ной", "Андре", "Джоан", "Алекс", "Исаак", "Эвон", "Итон", "Винсент", "Анжел", "Диего", "Адриан", "Габриель", "Майкл", "Сантьяго", "Кевин", "Луис", "Самюэль", "Энтони", "Клайд", "Нико", "Джон"],
                    index_help: 0
                },
                {title: "Сходство", index_help: 10},
                {title: "Кожа", index_help: 10}
            ],
            stats_parents: [[ //22
                {endurance: 5, strength: 15, shooting: 10, stealth: 25, flying: 45, driving: 5, psychics: 5},
                {endurance: 15, strength: 25, shooting: 50, stealth: 15, flying: 10, driving: 40, psychics: 50},
                {endurance: 5, strength: 25, shooting: 10, stealth: 20, flying: 50, driving: 5, psychics: 15},
                {endurance: 50, strength: 10, shooting: 15, stealth: 25, flying: 45, driving: 20, psychics: 50},
                {endurance: 25, strength: 30, shooting: 35, stealth: 5, flying: 20, driving: 30, psychics: 45},
                {endurance: 30, strength: 40, shooting: 35, stealth: 50, flying: 15, driving: 25, psychics: 50},
                {endurance: 30, strength: 50, shooting: 35, stealth: 5, flying: 25, driving: 30, psychics: 50},
                {endurance: 45, strength: 10, shooting: 20, stealth: 30, flying: 40, driving: 15, psychics: 50},
                {endurance: 10, strength: 35, shooting: 5, stealth: 15, flying: 5, driving: 50, psychics: 20},
                {endurance: 15, strength: 35, shooting: 35, stealth: 10, flying: 10, driving: 35, psychics: 40},
                {endurance: 35, strength: 35, shooting: 25, stealth: 40, flying: 30, driving: 25, psychics: 50},
                {endurance: 20, strength: 40, shooting: 45, stealth: 5, flying: 15, driving: 10, psychics: 35},
                {endurance: 25, strength: 45, shooting: 5, stealth: 50, flying: 20, driving: 35, psychics: 50},
                {endurance: 10, strength: 20, shooting: 5, stealth: 20, flying: 5, driving: 50, psychics: 10},
                {endurance: 40, strength: 5, shooting: 30, stealth: 40, flying: 30, driving: 25, psychics: 50},
                {endurance: 10, strength: 10, shooting: 20, stealth: 35, flying: 35, driving: 20, psychics: 30},
                {endurance: 40, strength: 30, shooting: 25, stealth: 35, flying: 35, driving: 20, psychics: 50},
                {endurance: 20, strength: 25, shooting: 45, stealth: 10, flying: 15, driving: 35, psychics: 50},
                {endurance: 25, strength: 15, shooting: 20, stealth: 10, flying: 40, driving: 15, psychics: 25},
                {endurance: 50, strength: 20, shooting: 15, stealth: 25, flying: 45, driving: 10, psychics: 50},
                {endurance: 5, strength: 25, shooting: 10, stealth: 35, flying: 50, driving: 5, psychics: 30},
                {endurance: 15, strength: 30, shooting: 5, stealth: 15, flying: 5, driving: 50, psychics: 15},
            ], [ //24
                {endurance: 25, strength: 15, shooting: 20, stealth: 10, flying: 40, driving: 15, psychics: 25},
                {endurance: 20, strength: 25, shooting: 45, stealth: 10, flying: 15, driving: 35, psychics: 50},
                {endurance: 40, strength: 30, shooting: 25, stealth: 35, flying: 35, driving: 20, psychics: 50},
                {endurance: 10, strength: 10, shooting: 20, stealth: 35, flying: 35, driving: 20, psychics: 30},
                {endurance: 40, strength: 5, shooting: 30, stealth: 40, flying: 30, driving: 25, psychics: 50},
                {endurance: 10, strength: 20, shooting: 5, stealth: 20, flying: 5, driving: 50, psychics: 10},
                {endurance: 25, strength: 45, shooting: 5, stealth: 50, flying: 20, driving: 35, psychics: 50},
                {endurance: 20, strength: 40, shooting: 45, stealth: 5, flying: 15, driving: 10, psychics: 35},
                {endurance: 35, strength: 35, shooting: 25, stealth: 40, flying: 30, driving: 25, psychics: 50},
                {endurance: 15, strength: 35, shooting: 35, stealth: 10, flying: 10, driving: 35, psychics: 40},
                {endurance: 10, strength: 35, shooting: 5, stealth: 15, flying: 5, driving: 50, psychics: 20},
                {endurance: 45, strength: 10, shooting: 20, stealth: 30, flying: 40, driving: 15, psychics: 50},
                {endurance: 30, strength: 50, shooting: 35, stealth: 5, flying: 25, driving: 30, psychics: 50},
                {endurance: 30, strength: 40, shooting: 35, stealth: 50, flying: 15, driving: 25, psychics: 50},
                {endurance: 25, strength: 30, shooting: 35, stealth: 5, flying: 20, driving: 30, psychics: 45},
                {endurance: 50, strength: 10, shooting: 15, stealth: 25, flying: 45, driving: 20, psychics: 50},
                {endurance: 5, strength: 25, shooting: 10, stealth: 20, flying: 50, driving: 5, psychics: 15},
                {endurance: 15, strength: 25, shooting: 50, stealth: 15, flying: 10, driving: 40, psychics: 50},
                {endurance: 5, strength: 15, shooting: 10, stealth: 25, flying: 45, driving: 5, psychics: 5},
                {endurance: 15, strength: 30, shooting: 5, stealth: 15, flying: 5, driving: 50, psychics: 15},
                {endurance: 20, strength: 35, shooting: 45, stealth: 10, flying: 15, driving: 25, psychics: 50},
                {endurance: 5, strength: 25, shooting: 10, stealth: 35, flying: 50, driving: 5, psychics: 30},
                {endurance: 20, strength: 50, shooting: 25, stealth: 25, flying: 30, driving: 40, psychics: 50},
                {endurance: 50, strength: 20, shooting: 15, stealth: 25, flying: 45, driving: 10, psychics: 50},
            ]],
            stats: {endurance: 0, strength: 0, shooting: 0, stealth: 0, flying: 0, driving: 0, psychics: 0},

            first_name: '',
            last_name: '',
            old_input: '',
            promocode: '',
            referer: '',

            slider_national: [
                {
                    title: 'Выберите национальность',
                    desc: 'Ваша национальность никак не влияет на внешность. Внешность выбирается следующим шагом.',
                    nationality: [
                        "Абхаз",
                        "Австралиец",
                        "Австриец",
                        "Адыг",
                        "Азербайджанец",
                        "Американец",
                        "Аргентинец",
                        "Армянин",
                        "Белорус",
                        "Бельгиец",
                        "Бразилец",
                        "Британец",
                        "Венесуэлец",
                        "Вьетнамец",
                        "Гаваец",
                        "Гватемалец",
                        "Грек",
                        "Грузин",
                        "Дагестанец",
                        "Датчанин",
                        "Доминиканец",
                        "Египтянин",
                        "Израильтянин",
                        "Ингуш",
                        "Индиец",
                        "Ирландец",
                        "Исландец",
                        "Испанец",
                        "Итальянец",
                        "Казах",
                        "Камбоджиец",
                        "Канадец",
                        "Кениец",
                        "Кениец",
                        "Китаец",
                        "Колумбиец",
                        "Конголезец",
                        "Кореец",
                        "Кубинец",
                        "Латыш",
                        "Литовец",
                        "Марокканец",
                        "Мексиканец",
                        "Молдаванин",
                        "Монгол",
                        "Немец",
                        "Нидерландец",
                        "Новозеландец",
                        "Осетин",
                        "Перуанец",
                        "Поляк",
                        "Португалец",
                        "Пуэрториканец",
                        "Румын",
                        "Русский",
                        "Сальвадорец",
                        "Серб",
                        "Сингапурец",
                        "Словак",
                        "Таджик",
                        "Танзаниец",
                        "Татарин",
                        "Тунисец",
                        "Турок",
                        "Узбек",
                        "Украинец",
                        "Филиппинец",
                        "Финн",
                        "Француз",
                        "Хорват",
                        "Черкес",
                        "Черногорец",
                        "Чех",
                        "Чеченец",
                        "Швейцарец",
                        "Шотландец",
                        "Эквадорец",
                        "Эстонец",
                        "Ямаец",
                        "Японец"
                    ],
                    index_help: 0,
                }
            ],
        }
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'EditorPlayer.jsx', error, errorInfo); // eslint-disable-line
    }

    componentDidMount() {
        this.updateStatsFamilyCharacter();
    }

    resetEditorCharacter(i) {
        let copy;
        switch (i) {
            case 1:
                copy = this.state.input_editor_face;
                for (i = 0; i < copy.length; i++) {
                    copy[i].value = 0
                }
                this.setState({input_editor_face: copy})
                break;
            case 2:
                copy = this.state.input_editor_nose;
                for (i = 0; i < copy.length; i++) {
                    copy[i].value = 0
                }
                this.setState({input_editor_nose: copy})
                copy = this.state.input_editor_eyes_lips;
                for (i = 0; i < copy.length; i++) {
                    copy[i].value = 0
                }
                this.setState({input_editor_eyes_lips: copy})
                break;
            case 3:
                copy = this.state.input_editor_face_last;
                for (i = 0; i < copy.length; i++) {
                    copy[i].index_help = 0
                }
                this.setState({input_editor_face_last: copy})
                break;
            default:
                break;
        }
        this.setCustomization();
    }

    clickLeftArrowEditorCharacter(index) {
        let currentIndex = this.state.input_editor_face_last[index].index_help;
        if (currentIndex <= 0) {
            currentIndex = this.state.input_editor_face_last[index].maxVal;
        } else {
            currentIndex--;
        }
        this.setState(prev => ({...prev.input_editor_face_last[index].index_help = currentIndex}));

        setTimeout(
            function() {
                this.setCustomization();
            }
                .bind(this),
            100
        );
    }

    clickRightArrowEditorCharacter(index) {
        let currentIndex = this.state.input_editor_face_last[index].index_help;
        if (currentIndex >= this.state.input_editor_face_last[index].maxVal) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        this.setState(prev => ({...prev.input_editor_face_last[index].index_help = currentIndex}));

        setTimeout(
            function() {
                this.setCustomization();
            }
                .bind(this),
            100
        );
    }

    updateStatsFamilyCharacter() {
        let parents = this.state.stats_parents;
        let slider = this.state.slider;

        let edurance = (parents[0][slider[0].index_help].endurance * ((slider[2].index_help * 5) / 100) * 2 + parents[1][slider[1].index_help].endurance * ((100 - slider[2].index_help * 5) / 100) * 2) / 2;
        let strength = (parents[0][slider[0].index_help].strength * ((slider[2].index_help * 5) / 100) * 2 + parents[1][slider[1].index_help].strength * ((100 - slider[2].index_help * 5) / 100) * 2) / 2;
        let shooting = (parents[0][slider[0].index_help].shooting * ((slider[2].index_help * 5) / 100) * 2 + parents[1][slider[1].index_help].shooting * ((100 - slider[2].index_help * 5) / 100) * 2) / 2;
        let stealth = (parents[0][slider[0].index_help].stealth * ((slider[2].index_help * 5) / 100) * 2 + parents[1][slider[1].index_help].stealth * ((100 - slider[2].index_help * 5) / 100) * 2) / 2;
        let flying = (parents[0][slider[0].index_help].flying * ((slider[2].index_help * 5) / 100) * 2 + parents[1][slider[1].index_help].flying * ((100 - slider[2].index_help * 5) / 100) * 2) / 2;
        let driving = (parents[0][slider[0].index_help].driving * ((slider[2].index_help * 5) / 100) * 2 + parents[1][slider[1].index_help].driving * ((100 - slider[2].index_help * 5) / 100) * 2) / 2;
        let psychics = (parents[0][slider[0].index_help].psychics * ((slider[2].index_help * 5) / 100) * 2 + parents[1][slider[1].index_help].psychics * ((100 - slider[2].index_help * 5) / 100) * 2) / 2;

        let new_stats = {
            endurance: edurance > 90 ? 90 : edurance,
            strength: strength > 90 ? 90 : strength,
            shooting: shooting > 90 ? 90 : shooting,
            stealth: stealth > 90 ? 90 : stealth,
            flying: flying > 90 ? 90 : flying,
            driving: driving > 90 ? 90 : driving,
            psychics: psychics > 90 ? 90 : psychics
        }
        this.setState({
            stats: new_stats
        })
        this.setCustomization();
    }

    resetFamilyCharacter() {
        this.setState(prev => ({
            ...prev.slider[0].index_help = 0,
            ...prev.slider[1].index_help = 0,
            ...prev.slider[2].index_help = 10,
            ...prev.slider[3].index_help = 10,
        }, this.updateStatsFamilyCharacter()));
        this.setCustomization();
    }

    chekedSexFamilyCharacter() {
        this.setState({cheked_sex: !this.state.cheked_sex});
        this.setSex();
    }

    clickLeftArrowFamilyCharacter(index) {
        let copy = this.state.slider;
        if (index > 1) {
            let currentIndex = copy[index].index_help;
            if (currentIndex <= 0) {
                currentIndex = 0;
            } else {
                currentIndex--;
            }
            copy[index].index_help = currentIndex;
            this.setState({slider: copy}, this.updateStatsFamilyCharacter());
            this.setCustomization();
            return;
        }
        let array = copy[index].parents
        let currentIndex = copy[index].index_help;
        if (currentIndex === 0) {
            currentIndex = (array.length - 1);
        } else {
            currentIndex--;
        }
        copy[index].index_help = currentIndex;
        this.setState({slider: copy}, this.updateStatsFamilyCharacter());
        this.setCustomization();
    }

    clickRightArrowFamilyCharacter(index) {
        let copy = this.state.slider;
        if (index > 1) {
            let currentIndex = copy[index].index_help;
            if (currentIndex >= 20) {
                currentIndex = 20;
            } else {
                currentIndex++;
            }
            copy[index].index_help = currentIndex;
            this.setState({slider: copy}, this.updateStatsFamilyCharacter());
            this.setCustomization();
            return;
        }
        let array = copy[index].parents
        let currentIndex = copy[index].index_help;
        if (currentIndex === array.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        copy[index].index_help = currentIndex;
        this.setState({slider: copy}, this.updateStatsFamilyCharacter());
        this.setCustomization();
    }

    valueFirstName(event) {
        this.setState({first_name: event.target.value.replace(/[^a-zA-Z]+/g, '')})
    };

    valueLastName(event) {
        this.setState({last_name: event.target.value.replace(/[^a-zA-Z]+/g, '')})
    };

    valuePromocode(event) {
        this.setState({promocode: event.target.value.replace(/[^a-zA-Z0-9]+/g, '')})
    };

    valueReferer(event) {
        this.setState({referer: event.target.value.replace(/[^a-zA-Z\s]+/g, '')})
    };

    resetNameCharacter() {
        this.setState(prev => ({
            ...prev.slider_national[0].index_help = 0,

        }))
        this.setState({
            first_name: '',
            last_name: '',
            old_input: '',
            promocode: '',
            referer: '',
        })
    }

    clickLeftArrowNameCharacter(index) {
        if (index > 1) {
            let currentIndex = this.state.slider_national[index].index_help;
            if (currentIndex <= 0) {
                currentIndex = 0;
            } else {
                currentIndex--;
            }
            this.setState(prev => ({...prev.slider_national[index].index_help = currentIndex}));
            this.setCustomization();
            return;
        }
        let array = this.state.slider_national[index].nationality
        let currentIndex = this.state.slider_national[index].index_help;
        if (currentIndex === 0) {
            currentIndex = (array.length - 1);
        } else {
            currentIndex--;
        }
        this.setState(prev => ({...prev.slider_national[index].index_help = currentIndex}));
        this.setCustomization();
    }

    clickRightArrowNameCharacter(index) {
        if (index > 1) {
            let currentIndex = this.state.slider_national[index].index_help;
            if (currentIndex >= 20) {
                currentIndex = 20;
            } else {
                currentIndex++;
            }
            this.setState(prev => ({...prev.slider_national[index].index_help = currentIndex}));
            this.setCustomization();
            return;
        }
        let array = this.state.slider_national[index].nationality
        let currentIndex = this.state.slider_national[index].index_help;
        if (currentIndex === array.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        this.setState(prev => ({...prev.slider_national[index].index_help = currentIndex}));
        this.setCustomization();
    }

    onCheckNumber(evt) {
        const financialGoal = (evt.target.validity.valid) ? evt.target.value : this.state.old_input;
        this.setState({old_input: financialGoal});
    }

    saveCustomization() {
        try {
            mp.trigger('client:events:custom:set' // eslint-disable-line
                , JSON.stringify(this.state.input_editor_face), JSON.stringify(this.state.input_editor_nose)
                , JSON.stringify(this.state.input_editor_eyes_lips), JSON.stringify(this.state.input_editor_face_last), this.state.cheked_sex
                , this.state.slider[0].index_help, this.state.slider[1].index_help, this.state.slider[2].index_help, this.state.slider[3].index_help, true)

            mp.trigger('client:events:custom:save', // eslint-disable-line
                this.state.stats.endurance, this.state.stats.driving, this.state.stats.flying, this.state.stats.psychics, this.state.stats.shooting, this.state.stats.stealth, this.state.stats.strength);
        } catch (e) {
            console.log(e);
        }
    }

    setCustomization() {
        try {
            mp.trigger('client:events:custom:set' // eslint-disable-line
                , JSON.stringify(this.state.input_editor_face), JSON.stringify(this.state.input_editor_nose)
                , JSON.stringify(this.state.input_editor_eyes_lips), JSON.stringify(this.state.input_editor_face_last), this.state.cheked_sex
                , this.state.slider[0].index_help, this.state.slider[1].index_help, this.state.slider[2].index_help, this.state.slider[3].index_help, false)
        } catch (e) {
            console.log(e);
        }
    }

    setSex() {
        try {
            mp.trigger('client:events:custom:setSex' // eslint-disable-line
                , this.state.cheked_sex)
        } catch (e) {
            console.log(e);
        }
    }

    getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    randomize() {
        for(let i = 0; i<this.state.input_editor_face.length; i++){
            this.setState(prevState => ({ ...prevState.input_editor_face[i].value = this.getRandomArbitrary(-100, 100)}))
        };
        for(let i = 0; i<this.state.input_editor_nose.length; i++){
            this.setState(prevState => ({ ...prevState.input_editor_nose[i].value = this.getRandomArbitrary(-100, 100)}))
        };
        for(let i = 0; i<this.state.input_editor_eyes_lips.length; i++){
            this.setState(prevState => ({ ...prevState.input_editor_eyes_lips[i].value = this.getRandomArbitrary(-100, 100)}))
        };
        for(let i = 0; i<this.state.input_editor_face_last.length; i++){
            this.setState(prevState => ({ ...prevState.input_editor_face_last[i].index_help = this.getRandomArbitrary(0, this.state.input_editor_face_last[i].maxVal)}))
        };
        this.setState(prevState => ({ ...prevState.slider[0].index_help = this.getRandomArbitrary(0, this.state.slider[0].parents.length-1)}))
        this.setState(prevState => ({ ...prevState.slider[1].index_help = this.getRandomArbitrary(0, this.state.slider[1].parents.length-1)}))
        this.setState(prevState => ({ ...prevState.slider[2].index_help = this.getRandomArbitrary(0, 20)}))
        this.setState(prevState => ({ ...prevState.slider[3].index_help = this.getRandomArbitrary(0, 20)}))
        setTimeout(() => {
            this.updateStatsFamilyCharacter();
        }, 20);
        setTimeout(() => {
            this.setCustomization();
        }, 40);
    }

    render() {
        return (
            <React.Fragment>
                <div className="editor-box">
                    <Camera/>
                    <Switch>
                        <Route path="/editor/name-character">
                            <NameCharacter
                                first_name={this.state.first_name}
                                last_name={this.state.last_name}
                                old_input={this.state.old_input}
                                promocode={this.state.promocode}
                                referer={this.state.referer}
                                title={this.state.slider_national[0].title}
                                desc={this.state.slider_national[0].desc}
                                index_help={this.state.slider_national[0].index_help}
                                nationality={this.state.slider_national[0].nationality}
                                valueFirstName={this.valueFirstName.bind(this)}
                                valueLastName={this.valueLastName.bind(this)}
                                valuePromocode={this.valuePromocode.bind(this)}
                                valueReferer={this.valueReferer.bind(this)}
                                onCheckNumber={this.onCheckNumber.bind(this)}
                                clickLeftArrow={this.clickLeftArrowNameCharacter.bind(this)}
                                clickRightArrow={this.clickRightArrowNameCharacter.bind(this)}
                                reset={this.resetNameCharacter.bind(this)}
                            />
                        </Route>
                        <Route path="/editor/family-character">
                            <FamilyCharacter
                                chekedSex={this.chekedSexFamilyCharacter.bind(this)}
                                clickLeftArrow={this.clickLeftArrowFamilyCharacter.bind(this)}
                                clickRightArrow={this.clickRightArrowFamilyCharacter.bind(this)}
                                reset={this.resetFamilyCharacter.bind(this)}
                                randomize={this.randomize.bind(this)}

                                slider_one={this.state.slider[0].index_help}
                                title_one={this.state.slider[0].title}
                                name_array_one={this.state.slider[0].parents}

                                slider_two={this.state.slider[1].index_help}
                                title_two={this.state.slider[1].title}
                                name_array_two={this.state.slider[1].parents}

                                slider_three={this.state.slider[2].index_help}
                                title_three={this.state.slider[2].title}
                                name_array_three={this.state.slider[2].index_help}

                                slider_four={this.state.slider[3].index_help}
                                title_four={this.state.slider[3].title}
                                name_array_four={this.state.slider[3].index_help}

                                endurance={this.state.stats.endurance}
                                strength={this.state.stats.strength}
                                shooting={this.state.stats.shooting}
                                stealth={this.state.stats.stealth}
                                flying={this.state.stats.flying}
                                driving={this.state.stats.driving}
                                psychics={this.state.stats.psychics}
                            />
                        </Route>
                        <Route path="/editor/editor-character">
                            <EditorCharacter
                                input_editor_face={this.state.input_editor_face}
                                reset={this.resetEditorCharacter.bind(this)}
                                input_editor_nose={this.state.input_editor_nose}
                                input_editor_eyes_lips={this.state.input_editor_eyes_lips}
                                input_editor_face_last={this.state.input_editor_face_last}
                                clickLeftArrow={this.clickLeftArrowEditorCharacter.bind(this)}
                                clickRightArrow={this.clickRightArrowEditorCharacter.bind(this)}
                                saveCustomization={this.saveCustomization.bind(this)}
                                setCustomization={this.setCustomization.bind(this)}
                            />
                        </Route>
                    </Switch>
                </div>
            </React.Fragment>
        )
    }
}

export default EditorPlayer;
