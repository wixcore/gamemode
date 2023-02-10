#### MainMenu component doc

##### Навигация

`uikit/Caption.jsx` - "чистый" элемент, отображение текста
`uikit/Checkbox.jsx` - элемент с чекбоксом
`uikit/ListMenu.jsx` - элемент с списком
`uikit/Desc.jsx` - элемент отображения дополнительной информации снизу
`List/InterfaceItem.jsx` - элемент оболочки для навигации типа элемента
`Header/Header.jsx` - хедер меню

`Памятка по парсингу цветов / HTML-кодов`

`const/index.js` — константы для цветов / HTML-кодов, для преобразования цвет/код должен быть в формате `~{STRING}~`, где `STRING` это одна из переменных объекта `COLORS / SPECIAL` (прим. blue, br)
`functions/parseText.js` — функция для парсинга



`Параметры компонента:`

```

    <MainMenu
        menuList={array}
        header={bool}
        headerText={string}
        opacity={number}
    />

```

`Пример параметров компонента на вход`

```
    header: true,
    opacity: 0.88,
    headerText: 'DEDNET',
    menuList: [
        {
            id: 1,
            type: 'caption',
            title: 'TEST',
            subtitle: 'TEST2',
            items: [],
            divider: false
        },
        {
            id: 2,
               type: 'caption',
            title: 'TEST2',
            items: [],
            divider: false
        },
        {
            id: 3,
            type: 'checkbox',
            title: 'TEST2',
            items: [],
            divider: false
        },
        {
            id: 4,
            type: 'listmenu',
            title: 'YOUR FRACTION',
            items: [
                'PD',
                'FIB',
                'TEST',
                'TEST14'
            ]
        }
    ]
```

`Параметры массива menuList на вход`

```

    menuList: [
        {
            id: number,
            type: string (из видов),
            title: string,
            subtitle: string,
            items: array,
            divider: bool
        }
    ]

```

Виды `type` на вход


* caption
* checkbox
* listmenu


`Пример массива menuList на вход`

```

    menuList: [
        {
            id: 1,
            type: 'caption',
            title: 'TEST',
            subtitle: 'TEST2',
            items: [],
            divider: false
        },
        {
            id: 2,
            type: 'checkbox',
            title: 'TEST2',
            items: [],
            divider: false
        },
        {
            id: 3,
            type: 'listmenu',
            title: 'YOUR FRACTION',
            items: [
                'PD',
                'FIB',
                'TEST',
                'TEST14'
            ]
        }
    ]

```