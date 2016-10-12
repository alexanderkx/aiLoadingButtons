# Кнопки со встроенным индикатором загрузки
## Built-In Loading Effect in Buttons
![](http://alexanderweb.ru/upload/git/aiLoadingButtons_git_final_2.gif?raw=true])

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

Для стилизации процесса загрузки необходимо добавить класс `.btn-load--circle`.  
_На данный момент есть только один вариант анимации, надеюсь буду постепенно расширять список._

### TODO List

- [ ] Добавить несколько вариантов анимации
