# Кнопки со встроенным индикатором загрузки
![](http://alexanderweb.ru/upload/git/aiLoadingButtons.gif?raw=true])

Накидал небольшой вариант отображения индикации загрузки чего либо непосредственно в кнопке (например при отправки формы).

[ **Demo: [codepen.io](http://codepen.io/alexanderweb/pen/zKaYqq)** ]

## Использование

Подключаем стили:

```html
<link rel="stylesheet" href="/path/to/css/aiLoadingButtons.min.css">
```

Имеется 7 вариантов стилизации кнопок/ссылок:

```html
<button class="btn btn-outline">Outline</button>
<button class="btn btn-primary">Primary</button>
<button class="btn btn-info">Info</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-dark">Dark</button>
```

Настроить цвета можно в `_colors.styl`:

```css
$outline = #0a8cfd
$primary = #005888
$primary_hover = #0079bb
$info = #49AFCD
$info_hover = #71c1d8
$success = #5BB75B
$success_hover = #7ec77e
$warning = #FAA732
$warning_hover = #fbbc64
$danger = #DA4F49
$danger_hover = #e37873
$dark = #363636
$dark_hover = #505050
```

Для стилизации процесса загрузки необходимо добавить класс `.btn-load--circle` или `btn-load--circle-only` в зависимости от выбранного типа анимации.  
_На данный момент есть только два варианта анимации, надеюсь буду постепенно расширять список._

### TODO List

- [ ] Добавить несколько вариантов анимации