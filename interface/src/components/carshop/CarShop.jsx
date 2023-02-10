import React from 'react';
import './css/carshop.css'

import Slider from "react-slick";
import EventManager from "../../EventManager";

function NextArrow(props) {
    const {onClick} = props;
    return (
        <div className="clr-box-arrow-right" onClick={onClick}></div>
    )
}

function PrevArrow(props) {
    const {onClick} = props;
    return (
        <div className="clr-box-arrow-left" onClick={onClick}></div>
    );
}

export default class CarShop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            car_colors: [
                {id: '0', color: 'rgb(13, 17, 22)'},
                {id: '1', color: 'rgb(28, 29, 33)'},
                {id: '2', color: 'rgb(50, 56, 61)'},
                {id: '3', color: 'rgb(69, 75, 79)'},
                {id: '4', color: 'rgb(153, 157, 160)'},
                {id: '5', color: 'rgb(194, 196, 198)'},
                {id: '6', color: 'rgb(151, 154, 151)'},
                {id: '7', color: 'rgb(99, 115, 128)'},
                {id: '8', color: 'rgb(99, 98, 92)'},
                {id: '9', color: 'rgb(60, 63, 71)'},
                {id: '10', color: 'rgb(68, 78, 84)'},
                {id: '11', color: 'rgb(29, 33, 41)'},
                {id: '12', color: 'rgb(19, 24, 31)'},
                {id: '13', color: 'rgb(38, 40, 42)'},
                {id: '14', color: 'rgb(81, 85, 84)'},
                {id: '15', color: 'rgb(21, 25, 33)'},
                {id: '16', color: 'rgb(30, 36, 41)'},
                {id: '17', color: 'rgb(51, 58, 60)'},
                {id: '18', color: 'rgb(140, 144, 149)'},
                {id: '19', color: 'rgb(57, 67, 77)'},
                {id: '20', color: 'rgb(80, 98, 114)'},
                {id: '21', color: 'rgb(30, 35, 47)'},
                {id: '22', color: 'rgb(54, 58, 63)'},
                {id: '23', color: 'rgb(160, 161, 153)'},
                {id: '24', color: 'rgb(211, 211, 211)'},
                {id: '25', color: 'rgb(183, 191, 202)'},
                {id: '26', color: 'rgb(119, 135, 148)'},
                {id: '27', color: 'rgb(192, 14, 26)'},
                {id: '28', color: 'rgb(218, 25, 24)'},
                {id: '29', color: 'rgb(182, 17, 27)'},
                {id: '30', color: 'rgb(165, 30, 35)'},
                {id: '31', color: 'rgb(123, 26, 34)'},
                {id: '32', color: 'rgb(142, 27, 31)'},
                {id: '33', color: 'rgb(111, 24, 24)'},
                {id: '34', color: 'rgb(73, 17, 29)'},
                {id: '35', color: 'rgb(182, 15, 37)'},
                {id: '36', color: 'rgb(212, 74, 23)'},
                {id: '37', color: 'rgb(194, 148, 79)'},
                {id: '38', color: 'rgb(247, 134, 22)'},
                {id: '39', color: 'rgb(207, 31, 33)'},
                {id: '40', color: 'rgb(115, 32, 33)'},
                {id: '41', color: 'rgb(242, 125, 32)'},
                {id: '42', color: 'rgb(255, 201, 31)'},
                {id: '43', color: 'rgb(156, 16, 22)'},
                {id: '44', color: 'rgb(222, 15, 24)'},
                {id: '45', color: 'rgb(143, 30, 23)'},
                {id: '46', color: 'rgb(169, 71, 68)'},
                {id: '47', color: 'rgb(177, 108, 81)'},
                {id: '48', color: 'rgb(55, 28, 37)'},
                {id: '49', color: 'rgb(19, 36, 40)'},
                {id: '50', color: 'rgb(18, 46, 43)'},
                {id: '51', color: 'rgb(18, 56, 60)'},
                {id: '52', color: 'rgb(49, 66, 63)'},
                {id: '53', color: 'rgb(21, 92, 45)'},
                {id: '54', color: 'rgb(27, 103, 112)'},
                {id: '55', color: 'rgb(102, 184, 31)'},
                {id: '56', color: 'rgb(34, 56, 62)'},
                {id: '57', color: 'rgb(29, 90, 63)'},
                {id: '58', color: 'rgb(45, 66, 63)'},
                {id: '59', color: 'rgb(69, 89, 75)'},
                {id: '60', color: 'rgb(101, 134, 127)'},
                {id: '61', color: 'rgb(34, 46, 70)'},
                {id: '62', color: 'rgb(35, 49, 85)'},
                {id: '63', color: 'rgb(48, 76, 126)'},
                {id: '64', color: 'rgb(71, 87, 143)'},
                {id: '65', color: 'rgb(99, 123, 167)'},
                {id: '66', color: 'rgb(57, 71, 98)'},
                {id: '67', color: 'rgb(214, 231, 241)'},
                {id: '68', color: 'rgb(118, 175, 190)'},
                {id: '69', color: 'rgb(52, 94, 114)'},
                {id: '70', color: 'rgb(11, 156, 241)'},
                {id: '71', color: 'rgb(47, 45, 82)'},
                {id: '72', color: 'rgb(40, 44, 77)'},
                {id: '73', color: 'rgb(35, 84, 161)'},
                {id: '74', color: 'rgb(110, 163, 198)'},
                {id: '75', color: 'rgb(17, 37, 82)'},
                {id: '76', color: 'rgb(27, 32, 62)'},
                {id: '77', color: 'rgb(39, 81, 144)'},
                {id: '78', color: 'rgb(96, 133, 146)'},
                {id: '79', color: 'rgb(36, 70, 168)'},
                {id: '80', color: 'rgb(66, 113, 225)'},
                {id: '81', color: 'rgb(59, 57, 224)'},
                {id: '82', color: 'rgb(31, 40, 82)'},
                {id: '83', color: 'rgb(37, 58, 167)'},
                {id: '84', color: 'rgb(28, 53, 81)'},
                {id: '85', color: 'rgb(76, 95, 129)'},
                {id: '86', color: 'rgb(88, 104, 142)'},
                {id: '87', color: 'rgb(116, 181, 216)'},
                {id: '88', color: 'rgb(255, 207, 32)'},
                {id: '89', color: 'rgb(251, 226, 18)'},
                {id: '90', color: 'rgb(145, 101, 50)'},
                {id: '91', color: 'rgb(224, 225, 61)'},
                {id: '92', color: 'rgb(152, 210, 35)'},
                {id: '93', color: 'rgb(155, 140, 120)'},
                {id: '94', color: 'rgb(80, 50, 24)'},
                {id: '95', color: 'rgb(71, 63, 43)'},
                {id: '96', color: 'rgb(34, 27, 25)'},
                {id: '97', color: 'rgb(101, 63, 35)'},
                {id: '98', color: 'rgb(119, 92, 62)'},
                {id: '99', color: 'rgb(172, 153, 117)'},
                {id: '100', color: 'rgb(108, 107, 75)'},
                {id: '101', color: 'rgb(64, 46, 43)'},
                {id: '102', color: 'rgb(164, 150, 95)'},
                {id: '103', color: 'rgb(70, 35, 26)'},
                {id: '104', color: 'rgb(117, 43, 25)'},
                {id: '105', color: 'rgb(191, 174, 123)'},
                {id: '106', color: 'rgb(223, 213, 178)'},
                {id: '107', color: 'rgb(247, 237, 213)'},
                {id: '108', color: 'rgb(58, 42, 27)'},
                {id: '109', color: 'rgb(120, 95, 51)'},
                {id: '110', color: 'rgb(181, 160, 121)'},
                {id: '111', color: 'rgb(255, 255, 246)'},
                {id: '112', color: 'rgb(234, 234, 234)'},
                {id: '113', color: 'rgb(176, 171, 148)'},
                {id: '114', color: 'rgb(69, 56, 49)'},
                {id: '115', color: 'rgb(42, 40, 43)'},
                {id: '116', color: 'rgb(114, 108, 87)'},
                {id: '117', color: 'rgb(106, 116, 124)'},
                {id: '118', color: 'rgb(53, 65, 88)'},
                {id: '119', color: 'rgb(155, 160, 168)'},
                {id: '120', color: 'rgb(88, 112, 161)'},
                {id: '121', color: 'rgb(234, 230, 222)'},
                {id: '122', color: 'rgb(223, 221, 208)'},
                {id: '123', color: 'rgb(242, 173, 46)'},
                {id: '124', color: 'rgb(249, 164, 88)'},
                {id: '125', color: 'rgb(131, 197, 102)'},
                {id: '126', color: 'rgb(241, 204, 64)'},
                {id: '127', color: 'rgb(76, 195, 218)'},
                {id: '128', color: 'rgb(78, 100, 67)'},
                {id: '129', color: 'rgb(188, 172, 143)'},
                {id: '130', color: 'rgb(248, 182, 88)'},
                {id: '131', color: 'rgb(252, 249, 241)'},
                {id: '132', color: 'rgb(255, 255, 251)'},
                {id: '133', color: 'rgb(129, 132, 76)'},
                {id: '134', color: 'rgb(255, 255, 255)'},
                {id: '135', color: 'rgb(242, 31, 153)'},
                {id: '136', color: 'rgb(253, 214, 205)'},
                {id: '137', color: 'rgb(223, 88, 145)'},
                {id: '138', color: 'rgb(246, 174, 32)'},
                {id: '139', color: 'rgb(176, 238, 110)'},
                {id: '140', color: 'rgb(8, 233, 250)'},
                {id: '141', color: 'rgb(10, 12, 23)'},
                {id: '142', color: 'rgb(12, 13, 24)'},
                {id: '143', color: 'rgb(14, 13, 20)'},
                {id: '144', color: 'rgb(159, 158, 138)'},
                {id: '145', color: 'rgb(98, 18, 118)'},
                {id: '146', color: 'rgb(11, 20, 33)'},
                {id: '147', color: 'rgb(17, 20, 26)'},
                {id: '148', color: 'rgb(107, 31, 123)'},
                {id: '149', color: 'rgb(30, 29, 34)'},
                {id: '150', color: 'rgb(188, 25, 23)'},
                {id: '151', color: 'rgb(45, 54, 42)'},
                {id: '152', color: 'rgb(105, 103, 72)'},
                {id: '153', color: 'rgb(122, 108, 85)'},
                {id: '154', color: 'rgb(195, 180, 146)'},
                {id: '155', color: 'rgb(90, 99, 82)'},
                {id: '156', color: 'rgb(129, 130, 127)'},
                {id: '157', color: 'rgb(175, 214, 228)'},
                {id: '158', color: 'rgb(122, 100, 64)'},
                {id: '159', color: 'rgb(127, 106, 72)'},
            ],
            current_btn_color: 'main',
            car_list: [
                {
                    make: 'Annis',
                    model: 'Elegy',
                    name: 'elegy',
                    count: 0,
                    price: '$1,500,000',
                    rent: '$1,500',
                    img: 'https://i.yapx.ru/GakPT.png',
                    character_car: [
                        {title: 'Класс', info: 'SUVs'},
                        {title: 'Тип топлива', info: '100l'},
                        {title: 'Вместимость бака', info: '20l'},
                        {title: 'Расход топлива', info: '10l'},
                        {title: 'Объем багажника', info: '100 м'},
                        {title: 'Допустимый вес', info: '100 м'},
                    ],
                    color_car_main: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    color_car_secondary: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    current_main_color: '0',
                    current_secondary_color: '0',

                },
                {
                    make: 'Annis',
                    model: 'Elegy',
                    name: 'elegy',
                    count: 0,
                    price: '$1,500,000',
                    rent: '$1,500',
                    img: 'https://i.yapx.ru/GakPT.png',
                    character_car: [
                        {title: 'Класс', info: 'SUVs'},
                        {title: 'Тип топлива', info: '100l'},
                        {title: 'Вместимость бака', info: '20l'},
                        {title: 'Расход топлива', info: '10l'},
                        {title: 'Объем багажника', info: '100 м'},
                        {title: 'Допустимый вес', info: '100 м'},
                    ],
                    color_car_main: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    color_car_secondary: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    current_main_color: '0',
                    current_secondary_color: '0',

                },
                {
                    make: 'Annis',
                    model: 'Elegy',
                    name: 'elegy',
                    count: 0,
                    price: '$1,500,000',
                    rent: '$1,500',
                    img: 'https://i.yapx.ru/GakPT.png',
                    character_car: [
                        {title: 'Класс', info: 'SUVs'},
                        {title: 'Тип топлива', info: '100l'},
                        {title: 'Вместимость бака', info: '20l'},
                        {title: 'Расход топлива', info: '10l'},
                        {title: 'Объем багажника', info: '100 м'},
                        {title: 'Допустимый вес', info: '100 м'},
                    ],
                    color_car_main: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    color_car_secondary: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    current_main_color: '0',
                    current_secondary_color: '0',

                },
                {
                    make: 'Annis',
                    model: 'Elegy',
                    name: 'elegy',
                    count: 0,
                    price: '$1,500,000',
                    rent: '$1,500',
                    img: 'https://i.yapx.ru/GakPT.png',
                    character_car: [
                        {title: 'Класс', info: 'SUVs'},
                        {title: 'Тип топлива', info: '100l'},
                        {title: 'Вместимость бака', info: '20l'},
                        {title: 'Расход топлива', info: '10l'},
                        {title: 'Объем багажника', info: '100 м'},
                        {title: 'Допустимый вес', info: '100 м'},
                    ],
                    color_car_main: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    color_car_secondary: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    current_main_color: '0',
                    current_secondary_color: '0',

                },
                {
                    make: 'Annis',
                    model: 'Elegy',
                    name: 'elegy',
                    count: 0,
                    price: '$1,500,000',
                    rent: '$1,500',
                    img: 'https://i.yapx.ru/GakPT.png',
                    character_car: [
                        {title: 'Класс', info: 'SUVs'},
                        {title: 'Тип топлива', info: '100l'},
                        {title: 'Вместимость бака', info: '20l'},
                        {title: 'Расход топлива', info: '10l'},
                        {title: 'Объем багажника', info: '100 м'},
                        {title: 'Допустимый вес', info: '100 м'},
                    ],
                    color_car_main: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    color_car_secondary: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    current_main_color: '0',
                    current_secondary_color: '0',

                },
                {
                    make: 'Annis',
                    model: 'Elegy',
                    name: 'elegy',
                    count: 0,
                    price: '$1,500,000',
                    rent: '$1,500',
                    img: 'https://i.yapx.ru/GakPT.png',
                    character_car: [
                        {title: 'Класс', info: 'SUVs'},
                        {title: 'Тип топлива', info: '100l'},
                        {title: 'Вместимость бака', info: '20l'},
                        {title: 'Расход топлива', info: '10l'},
                        {title: 'Объем багажника', info: '100 м'},
                        {title: 'Допустимый вес', info: '100 м'},
                    ],
                    color_car_main: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    color_car_secondary: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    current_main_color: '0',
                    current_secondary_color: '0',

                },
                {
                    make: 'Annis',
                    model: 'Elegy',
                    name: 'elegy',
                    count: 0,
                    price: '$1,500,000',
                    rent: '$1,500',
                    img: 'https://i.yapx.ru/GakPT.png',
                    character_car: [
                        {title: 'Класс', info: 'SUVs'},
                        {title: 'Тип топлива', info: '100l'},
                        {title: 'Вместимость бака', info: '20l'},
                        {title: 'Расход топлива', info: '10l'},
                        {title: 'Объем багажника', info: '100 м'},
                        {title: 'Допустимый вес', info: '100 м'},
                    ],
                    color_car_main: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    color_car_secondary: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    current_main_color: '0',
                    current_secondary_color: '0',

                },
                {
                    make: 'Annis',
                    model: 'Elegy',
                    name: 'elegy',
                    count: 0,
                    price: '$1,500,000',
                    rent: '$1,500',
                    img: 'https://i.yapx.ru/GakPT.png',
                    character_car: [
                        {title: 'Класс', info: 'SUVs'},
                        {title: 'Тип топлива', info: '100l'},
                        {title: 'Вместимость бака', info: '20l'},
                        {title: 'Расход топлива', info: '10l'},
                        {title: 'Объем багажника', info: '100 м'},
                        {title: 'Допустимый вес', info: '100 м'},
                    ],
                    color_car_main: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    color_car_secondary: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    current_main_color: '0',
                    current_secondary_color: '0',

                },
                {
                    make: 'Annis',
                    model: 'Elegy',
                    name: 'elegy',
                    count: 0,
                    price: '$1,500,000',
                    rent: '$1,500',
                    img: 'https://i.yapx.ru/GakPT.png',
                    character_car: [
                        {title: 'Класс', info: 'SUVs'},
                        {title: 'Тип топлива', info: '100l'},
                        {title: 'Вместимость бака', info: '20l'},
                        {title: 'Расход топлива', info: '10l'},
                        {title: 'Объем багажника', info: '100 м'},
                        {title: 'Допустимый вес', info: '100 м'},
                    ],
                    color_car_main: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    color_car_secondary: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    current_main_color: '0',
                    current_secondary_color: '0',

                },
                {
                    make: 'Annis',
                    model: 'Elegy',
                    name: 'elegy',
                    count: 0,
                    price: '$1,500,000',
                    rent: '$1,500',
                    img: 'https://i.yapx.ru/GakPT.png',
                    character_car: [
                        {title: 'Класс', info: 'SUVs'},
                        {title: 'Тип топлива', info: '100l'},
                        {title: 'Вместимость бака', info: '20l'},
                        {title: 'Расход топлива', info: '10l'},
                        {title: 'Объем багажника', info: '100 м'},
                        {title: 'Допустимый вес', info: '100 м'},
                    ],
                    color_car_main: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    color_car_secondary: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    current_main_color: '0',
                    current_secondary_color: '0',

                },
                {
                    make: 'Annis',
                    model: 'Elegy',
                    name: 'elegy',
                    count: 0,
                    price: '$1,500,000',
                    rent: '$1,500',
                    img: 'https://i.yapx.ru/GakPT.png',
                    character_car: [
                        {title: 'Класс', info: 'SUVs'},
                        {title: 'Тип топлива', info: '100l'},
                        {title: 'Вместимость бака', info: '20l'},
                        {title: 'Расход топлива', info: '10l'},
                        {title: 'Объем багажника', info: '100 м'},
                        {title: 'Допустимый вес', info: '100 м'},
                    ],
                    color_car_main: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    color_car_secondary: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    current_main_color: '0',
                    current_secondary_color: '0',

                },
                {
                    make: 'Annis',
                    model: 'Elegy',
                    name: 'elegy',
                    count: 0,
                    price: '$1,500,000',
                    rent: '$1,500',
                    img: 'https://i.yapx.ru/GakPT.png',
                    character_car: [
                        {title: 'Класс', info: 'SUVs'},
                        {title: 'Тип топлива', info: '100l'},
                        {title: 'Вместимость бака', info: '20l'},
                        {title: 'Расход топлива', info: '10l'},
                        {title: 'Объем багажника', info: '100 м'},
                        {title: 'Допустимый вес', info: '100 м'},
                    ],
                    color_car_main: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    color_car_secondary: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    current_main_color: '0',
                    current_secondary_color: '0',

                },
                {
                    make: 'Annis',
                    model: 'Elegy',
                    name: 'elegy',
                    count: 0,
                    price: '$1,500,000',
                    rent: '$1,500',
                    img: 'https://i.yapx.ru/GakPT.png',
                    character_car: [
                        {title: 'Класс', info: 'SUVs'},
                        {title: 'Тип топлива', info: '100l'},
                        {title: 'Вместимость бака', info: '20l'},
                        {title: 'Расход топлива', info: '10l'},
                        {title: 'Объем багажника', info: '100 м'},
                        {title: 'Допустимый вес', info: '100 м'},
                    ],
                    color_car_main: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    color_car_secondary: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    current_main_color: '0',
                    current_secondary_color: '0',

                },
                {
                    make: 'Annis',
                    model: 'Elegy',
                    name: 'elegy',
                    count: 0,
                    price: '$1,500,000',
                    rent: '$1,500',
                    img: 'https://i.yapx.ru/GakPT.png',
                    character_car: [
                        {title: 'Класс', info: 'SUVs'},
                        {title: 'Тип топлива', info: '100l'},
                        {title: 'Вместимость бака', info: '20l'},
                        {title: 'Расход топлива', info: '10l'},
                        {title: 'Объем багажника', info: '100 м'},
                        {title: 'Допустимый вес', info: '100 м'},
                    ],
                    color_car_main: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    color_car_secondary: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    current_main_color: '0',
                    current_secondary_color: '0',

                },
                {
                    make: 'Annis',
                    model: 'Elegy',
                    name: 'elegy',
                    count: 0,
                    price: '$1,500,000',
                    rent: '$1,500',
                    img: 'https://i.yapx.ru/GakPT.png',
                    character_car: [
                        {title: 'Класс', info: 'SUVs'},
                        {title: 'Тип топлива', info: '100l'},
                        {title: 'Вместимость бака', info: '20l'},
                        {title: 'Расход топлива', info: '10l'},
                        {title: 'Объем багажника', info: '100 м'},
                        {title: 'Допустимый вес', info: '100 м'},
                    ],
                    color_car_main: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    color_car_secondary: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    current_main_color: '0',
                    current_secondary_color: '0',

                },
                {
                    make: 'Annis',
                    model: 'Elegy',
                    name: 'elegy',
                    count: 0,
                    price: '$1,500,000',
                    rent: '$1,500',
                    img: 'https://i.yapx.ru/GakPT.png',
                    character_car: [
                        {title: 'Класс', info: 'SUVs'},
                        {title: 'Тип топлива', info: '100l'},
                        {title: 'Вместимость бака', info: '20l'},
                        {title: 'Расход топлива', info: '10l'},
                        {title: 'Объем багажника', info: '100 м'},
                        {title: 'Допустимый вес', info: '100 м'},
                    ],
                    color_car_main: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    color_car_secondary: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    current_main_color: '0',
                    current_secondary_color: '0',

                },
                {
                    make: 'Annis',
                    model: 'Elegy',
                    name: 'elegy',
                    count: 0,
                    price: '$1,500,000',
                    rent: '$1,500',
                    img: 'https://i.yapx.ru/GakPT.png',
                    character_car: [
                        {title: 'Класс', info: 'SUVs'},
                        {title: 'Тип топлива', info: '100l'},
                        {title: 'Вместимость бака', info: '20l'},
                        {title: 'Расход топлива', info: '10l'},
                        {title: 'Объем багажника', info: '100 м'},
                        {title: 'Допустимый вес', info: '100 м'},
                    ],
                    color_car_main: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    color_car_secondary: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    current_main_color: '0',
                    current_secondary_color: '0',

                },
                {
                    make: 'Annis',
                    model: 'Elegy',
                    name: 'elegy',
                    count: 0,
                    price: '$1,500,000',
                    rent: '$1,500',
                    img: 'https://i.yapx.ru/GakPT.png',
                    character_car: [
                        {title: 'Класс', info: 'SUVs'},
                        {title: 'Тип топлива', info: '100l'},
                        {title: 'Вместимость бака', info: '20l'},
                        {title: 'Расход топлива', info: '10l'},
                        {title: 'Объем багажника', info: '100 м'},
                        {title: 'Допустимый вес', info: '100 м'},
                    ],
                    color_car_main: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    color_car_secondary: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    current_main_color: '0',
                    current_secondary_color: '0',

                },
                {
                    make: 'Annis',
                    model: 'Elegy',
                    name: 'elegy',
                    count: 0,
                    price: '$1,500,000',
                    rent: '$1,500',
                    img: 'https://i.yapx.ru/GakPT.png',
                    character_car: [
                        {title: 'Класс', info: 'SUVs'},
                        {title: 'Тип топлива', info: '100l'},
                        {title: 'Вместимость бака', info: '20l'},
                        {title: 'Расход топлива', info: '10l'},
                        {title: 'Объем багажника', info: '100 м'},
                        {title: 'Допустимый вес', info: '100 м'},
                    ],
                    color_car_main: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    color_car_secondary: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    current_main_color: '0',
                    current_secondary_color: '0',

                },
                {
                    make: 'Annis',
                    model: 'Elegy',
                    name: 'elegy',
                    count: 0,
                    price: '$1,500,000',
                    rent: '$1,500',
                    img: 'https://i.yapx.ru/GakPT.png',
                    character_car: [
                        {title: 'Класс', info: 'SUVs'},
                        {title: 'Тип топлива', info: '100l'},
                        {title: 'Вместимость бака', info: '20l'},
                        {title: 'Расход топлива', info: '10l'},
                        {title: 'Объем багажника', info: '100 м'},
                        {title: 'Допустимый вес', info: '100 м'},
                    ],
                    color_car_main: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    color_car_secondary: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    current_main_color: '0',
                    current_secondary_color: '0',

                },
                {
                    make: 'Annis',
                    model: 'Elegy',
                    name: 'elegy',
                    count: 0,
                    price: '$1,500,000',
                    rent: '$1,500',
                    img: 'https://i.yapx.ru/GakPT.png',
                    character_car: [
                        {title: 'Класс', info: 'SUVs'},
                        {title: 'Тип топлива', info: '100l'},
                        {title: 'Вместимость бака', info: '20l'},
                        {title: 'Расход топлива', info: '10l'},
                        {title: 'Объем багажника', info: '100 м'},
                        {title: 'Допустимый вес', info: '100 м'},
                    ],
                    color_car_main: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    color_car_secondary: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    current_main_color: '0',
                    current_secondary_color: '0',

                },
                {
                    make: 'Annis',
                    model: 'Elegy',
                    name: 'elegy',
                    count: 0,
                    price: '$1,500,000',
                    rent: '$1,500',
                    img: 'https://i.yapx.ru/GakPT.png',
                    character_car: [
                        {title: 'Класс', info: 'SUVs'},
                        {title: 'Тип топлива', info: '100l'},
                        {title: 'Вместимость бака', info: '20l'},
                        {title: 'Расход топлива', info: '10l'},
                        {title: 'Объем багажника', info: '100 м'},
                        {title: 'Допустимый вес', info: '100 м'},
                    ],
                    color_car_main: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    color_car_secondary: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    current_main_color: '0',
                    current_secondary_color: '0',

                },
                {
                    make: 'Annis',
                    model: 'Elegy',
                    name: 'elegy',
                    count: 0,
                    price: '$1,500,000',
                    rent: '$1,500',
                    img: 'https://i.yapx.ru/GakPT.png',
                    character_car: [
                        {title: 'Класс', info: 'SUVs'},
                        {title: 'Тип топлива', info: '100l'},
                        {title: 'Вместимость бака', info: '20l'},
                        {title: 'Расход топлива', info: '10l'},
                        {title: 'Объем багажника', info: '100 м'},
                        {title: 'Допустимый вес', info: '100 м'},
                    ],
                    color_car_main: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    color_car_secondary: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    current_main_color: '0',
                    current_secondary_color: '0',

                },
                {
                    make: 'Annis',
                    model: 'Elegy',
                    name: 'elegy',
                    count: 0,
                    price: '$1,500,000',
                    rent: '$1,500',
                    img: 'https://i.yapx.ru/GakPT.png',
                    character_car: [
                        {title: 'Класс', info: 'SUVs'},
                        {title: 'Тип топлива', info: '100l'},
                        {title: 'Вместимость бака', info: '20l'},
                        {title: 'Расход топлива', info: '10l'},
                        {title: 'Объем багажника', info: '100 м'},
                        {title: 'Допустимый вес', info: '100 м'},
                    ],
                    color_car_main: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    color_car_secondary: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    current_main_color: '0',
                    current_secondary_color: '0',

                },
                {
                    make: 'Annis',
                    model: 'Elegy',
                    name: 'elegy',
                    count: 0,
                    price: '$1,500,000',
                    rent: '$1,500',
                    img: 'https://i.yapx.ru/GakPT.png',
                    character_car: [
                        {title: 'Класс', info: 'SUVs'},
                        {title: 'Тип топлива', info: '100l'},
                        {title: 'Вместимость бака', info: '20l'},
                        {title: 'Расход топлива', info: '10l'},
                        {title: 'Объем багажника', info: '100 м'},
                        {title: 'Допустимый вес', info: '100 м'},
                    ],
                    color_car_main: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    color_car_secondary: ['0', '4', '28', '38', '42', '70', '81', '135', '107', '111'],
                    current_main_color: '0',
                    current_secondary_color: '0',

                },
            ],
            change_car: "",
            slider_settings: {}
        }
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'Carshop.jsx', error, errorInfo); // eslint-disable-line
    }

    componentDidMount() {

        EventManager.addHandler('carShop', value => {
            if (value.type === 'show') {
                this.setState({show: true})
            } else if (value.type === 'hide') {
                this.setState({show: false})
            } else if (value.type === 'updateValues') {
                this.setState({show: value.isShow});
                this.setState({car_list: value.list});
            } else return;
        })

        this.setState({change_car: this.state.car_list[0]}, () => console.log(this.state.change_car.color_car_main.indexOf(this.state.change_car.current_main_color)))
    }

    componentWillUnmount() {

        EventManager.removeHandler('carShop');

    }

    componentDidUpdate(prevProp, prevState) {
        if (this.state.car_list !== prevState.car_list) {
            this.setState({change_car: this.state.car_list[0]})
        }
    }

    changeCar(e) {
        this.setState({change_car: e})

        try {
            mp.trigger('client:carshop:changeCar', this.state.change_car.name); // eslint-disable-line
        }
        catch (e) {
            console.log(e);
        }
    }

    buyCar(payType) {
        console.log(this.state.change_car)

        try {
            mp.trigger('client:carshop:buyCar', this.state.change_car.name, this.state.change_car.count, payType); // eslint-disable-line
        }
        catch (e) {
            console.log(e);
        }
    }

    rentCar() {
        console.log(this.state.change_car)

        try {
            mp.trigger('client:carshop:rentCar', this.state.change_car.name); // eslint-disable-line
        }
        catch (e) {
            console.log(e);
        }
    }

    testCar() {
        console.log(this.state.change_car)

        try {
            mp.trigger('client:carshop:testCar', this.state.change_car.name); // eslint-disable-line
        }
        catch (e) {
            console.log(e);
        }
    }

    exitCar() {
        try {
            mp.trigger('client:carshop:exit'); // eslint-disable-line
        }
        catch (e) {
            console.log(e);
        }
    }

    currentColorBtn(type) {
        console.log(type);
        this.setState({current_btn_color: type})
    }

    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <React.Fragment>
                <div className="carshop-position">
                    <div className="car-leftmenu">
                        <div className="left-list-menu-car">
                            {this.state.car_list.map((e, i) => {
                                let index = `carlist${i}`
                                let listindex = `carradio${i}`
                                return (
                                    <div className="left-li-car" key={index} onClick={() => this.changeCar(e)}>
                                        {i === 0 ?
                                            <input type="radio" id={listindex} name="carradio" defaultChecked/>
                                            :
                                            <input type="radio" id={listindex} name="carradio"/>
                                        }
                                        <label htmlFor={listindex} className="label-carradio">
                                            <div className="l-c-info-car">
                                                <div className="t-c-txt">{e.make}</div>
                                                <span className="carshop__item__price">{e.price}</span>
                                                <span className="carshop__item__count">{`В наличии: ${e.count} шт.`}</span>
                                            </div>
                                            <div className="l-c-img-car">
                                                <img src={e.img} alt="" className="car-img-settings"/>
                                            </div>
                                        </label>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="color-menu-center-position">
                        {this.state.change_car !== "" ?
                            <React.Fragment>
                                <div className="clr-m-btn-box">
                                    <input type="radio" name="colorcarslider" id="ccslider1" defaultChecked
                                           onClick={() => this.currentColorBtn('main')}/>
                                    <label htmlFor="ccslider1" className="ccslider-box">Основной</label>
                                    <input type="radio" name="colorcarslider" id="ccslider2"
                                           onClick={() => this.currentColorBtn('secondary')}/>
                                    <label htmlFor="ccslider2" className="ccslider-box">Дополнительный</label>
                                </div>
                                <div className="color-box-slider"
                                     key={`${this.state.current_btn_color} ${this.state.change_car.make} ${this.state.change_car.model}`}>
                                    <Slider
                                        draggable={false}
                                        dots={false}
                                        className={"clr-slider-list"}
                                        infinite={true}
                                        speed={50}
                                        slidesToShow={1}
                                        slidesToScroll={1}
                                        centerPadding={"0px"}
                                        variableWidth={true}
                                        centerMode={true}
                                        focusOnSelect={false}
                                        initialSlide={this.state.current_btn_color === 'main' ?
                                            this.state.change_car.color_car_main.indexOf(this.state.change_car.current_main_color)
                                            :
                                            this.state.change_car.color_car_secondary.indexOf(this.state.change_car.current_secondary_color)
                                        }
                                        nextArrow={<NextArrow/>}
                                        prevArrow={<PrevArrow/>}
                                        afterChange={this.state.current_btn_color === 'main' ?
                                            (current, next) => {
                                                try {
                                                    mp.trigger('client:carshop:changeColor', 0, parseInt(this.state.change_car.color_car_main[current])); // eslint-disable-line
                                                }
                                                catch (e) {
                                                    console.log(e);
                                                }

                                                console.log(this.state.change_car.color_car_main[current]);
                                                this.setState(prev => ({...prev.change_car.current_main_color = this.state.change_car.color_car_main[current]}))                }
                                            :
                                            (current, next) => {

                                                try {
                                                    mp.trigger('client:carshop:changeColor', 1, parseInt(this.state.change_car.color_car_secondary[current])); // eslint-disable-line
                                                }
                                                catch (e) {
                                                    console.log(e);
                                                }

                                                console.log(this.state.change_car.color_car_secondary[current]);
                                                this.setState(prev => ({...prev.change_car.current_secondary_color = this.state.change_car.color_car_secondary[current]}))
                                            }
                                        }
                                        {...this.state.slider_settings}
                                    >
                                        {this.state.current_btn_color === 'main' ?
                                            this.state.change_car.color_car_main.map((e, i) => {
                                                let index = `colorcar${i}`;
                                                return (
                                                    <div key={index}>
                                                        <div className="clr-list-box"
                                                             style={{backgroundColor: this.state.car_colors[e].color}}></div>
                                                    </div>
                                                )
                                            })
                                            :
                                            this.state.change_car.color_car_secondary.map((e, i) => {
                                                let index = `colorcar${i}`;
                                                return (
                                                    <div key={index}>
                                                        <div className="clr-list-box"
                                                             style={{backgroundColor: this.state.car_colors[e].color}}></div>
                                                    </div>
                                                )
                                            })}
                                    </Slider>
                                </div>
                            </React.Fragment>
                            : null}
                    </div>
                    <div className="info-menu-right-position">
                        {this.state.change_car !== "" ?
                            <React.Fragment>
                                <div
                                    className="inf-t-menu-r">{this.state.change_car.make}
                                </div>
                                <div className="ml-li-list">
                                    {this.state.change_car.character_car.map((e, i) => {
                                        let index = `charactercar${i}`
                                        return (
                                            <div className="ml-box-l" key={index}>
                                                <div className="ml-box-l-title">{e.title}</div>
                                                <div className="ml-box-l-info">{e.info}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="buy-list-c-btn">
                                    <span className="carshop__action__title">Покупка</span>
                                    <div className="b-l-btn-title">{this.state.change_car.price}</div>
                                    <div className="carshop__action__row__btns">
                                        <div className="b-l-btn-box" onClick={() => this.buyCar(1)}>По карте</div>
                                        <div className="b-l-btn-box" onClick={() => this.buyCar(0)}>Наличкой</div>
                                    </div>
                                </div>
                                <div className="rent-list-c-btn">
                                    <span className="carshop__action__title">Аренда</span>
                                    <div className="b-l-btn-title" style={{fontSize: '35px', color: 'rgba(255, 255, 255, 0.4)'}}>{this.state.change_car.rent}</div>
                                    <div className="carshop__action__row__btns">
                                        <div className="b-l-btn-box" style={{margin: 0, width: '330px'}} onClick={() => this.rentCar()}>Аренда</div>
                                        {/*<div className="b-l-btn-box" onClick={() => this.testCar()}>Тест-драйв</div>*/}
                                    </div>
                                </div>
                                <div className="rent-list-c-btn">
                                    <div className="b-l-btn-box__exit" onClick={() => this.exitCar()}>Покинуть автосалон</div>
                                </div>
                            </React.Fragment>
                            : null}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
