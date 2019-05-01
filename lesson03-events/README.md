# События

Для реакции на действия посетителя и внутреннего взаимодействия скриптов существуют события

**Событие** — это сигнал от браузера о том, что что-то произошло. Существует много видов событий

## События мыши:

- **click** – происходит, когда кликнули на элемент левой кнопкой мыши
- **contextmenu** – происходит, когда кликнули на элемент правой кнопкой мыши
- **mouseover** – возникает, когда на элемент наводится мышь
- **mousemove** – при движении мыши

## События на элементах управления:

- **submit** – посетитель отправил форму `<form>`
- **reset** – посетитель сбросил форму `<form>`
- **focus** – посетитель фокусируется на элементе, например нажимает на `<input>`
  Клавиатурные события:

- **keydown** – когда посетитель нажимает клавишу
- **keyup** – когда посетитель отпускает клавишу

[Список всех браузерных событий (~200 штук)](https://developer.mozilla.org/en-US/docs/Web/Events)

Событию можно назначить обработчик, то есть функцию, которая сработает, как только событие произошло. Именно благодаря обработчикам JavaScript-код может реагировать на действия посетителя

## Добавление обработчиков через атрибут

```html
<button onclick="this.parentElement.innerHTML+= '<span>click</span>'">
  Нажми меня
</button>
```

## Добавление обработчиков через свойства DOM-объекта

```javascript
let count = 0;
const element = document.getElementsByTagName('BUTTON')[0];
element.onclick = function() {
  element.innerHTML = `Кликнуто ${++count} раз(а)`;
};
```

## addEventListener и removeEventListener

// добавление обработчика

```javascript
element.addEventListener(event, handler);

// удаление обработчика
// нужно передать те же аргументы, что были у addEventListener

element.removeEventListener(event, handler);
```

[Подробнее про addEventListener](https://developer.mozilla.org/ru/docs/Web/API/EventTarget/addEventListener)

## Объект события event

```javascript
element.addEventListener('click', function(event) {
  console.log(`${event.type} на ${event.currentTarget}`);
  console.log(`${event.clientX}:${event.clientY}`);
});
```

## Фазы обработки событий

Ссуществуют целых три стадии прохода события:

- Событие сначала идет сверху вниз. Эта стадия называется «стадия перехвата» (capturing stage)
- Событие достигло целевого элемента. Это — «стадия цели» (target stage)
  После этого событие начинает всплывать. Это — «стадия всплытия» (bubbling stage)

## Перехват события на определённой

стадии
Используем третий аргумент addEventListener

```javascript
// добавление обработчика
element.addEventListener(event, handler, phase);

// phase === true - событие будет перехвачено по дороге вниз
// phase === false - событие будет поймано при всплытии

// при удалении нужно передать те же аргументы,
// что были у addEventListener
element.removeEventListener(event, handler, phase);
```

## Предотвращение обработки событий

```javascript
event.preventDefault(); // предотвращает поведение по умолчанию
event.stopPropagation(); // предотвращает всплывание события
// (все обработчики на этом элементе выполнятся)

// останавливает обработку событий на текущем элементе
// (все остальные обработчики на этом элементе не выполнятся)
event.stopImmediatePropagation();
```

## Более гибкое добавление

обработчиков
В современных браузерах в третьем аргументе addEventListener можно передавать объект с настройками

```javascript
// добавление обработчика
element.addEventListener(event, handler, options);

// options.capture - перехват события по дороге вниз
// options.once - обработчик будет вызван только один раз
// options.passive - говорит браузеру, что внутри обработчика не будет
//                   вызова preventDefault

// при удалении нужно передать те же аргументы
element.removeEventListener(event, handler, options);
```

## SPA — Single Page Application

Одностраничное приложение (SPA) — это веб-приложение, использующее единственный HTML-документ как оболочку для всех веб-страниц и организующий взаимодействие с пользователем через динамически подгружаемые ресурсы и данные, обычно посредством AJAX

```html
<html>
    <head> ... </head>
    <body>
        <div id="application"></html>
    </body>
</html>
```

## HTTP запрос

```http
// METHOD URI HTTP/VERSION <= стартовая строка
GET /lib/slides.css HTTP/1.1
Host: example.host.com
Content-Type: text/css; charset=utf-8
другие заголовки...

        тело запроса (опционально)
```

## Работа с XMLHttpRequest

```javascript
// 1. Создаём новый объект XMLHttpRequest
const xhr = new XMLHttpRequest();

// 2. Конфигурируем его: GET-запрос на URL '/lib/slides.css'; false значит, что запрос синхронный
xhr.open('GET', '/lib/slides.css', false);

// 3. Отсылаем запрос
xhr.send();

// 4. Если код ответа сервера не 200, то это ошибка
console.log(`Ответ от сервера: ${xhr.status} ${xhr.statusText}`);
if (xhr.status === 200) {
  console.log(xhr.responseText);
} else {
  console.error('Ошибка!');
}
```

## Пример POST-запроса

```javascript
const xhr = new XMLHttpRequest();
xhr.open('POST', '/post', false);

// Выставляем заголовок
xhr.setRequestHeader('Content-Type', 'text/plain; charset=utf-8');
xhr.send('Request payload');
// ждём ответа
```

## Отправка json в теле запроса

```javascript
const xhr = new XMLHttpRequest();
xhr.open('POST', '/post', false);

// Выставляем заголовок
xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
xhr.send(JSON.stringify({name: 'Alex'});
// ждём ответа
```

- JSON (JavaScript Object Notation) - это легкий формат, который используется для обмена данными. Он основан на подмножестве языка JavaScript (способ создания объектов в JavaScript). Как [указано в MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON), некоторые JavaScript не JSON, а некоторые JSON - не JavaScript.

## Асинхронные запросы

```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', '/lib/slides.css', true);

xhr.onreadystatechange = function() {
  if (xhr.readyState !== 4) return;
  console.log(`Ответ от сервера: ${xhr.status} ${xhr.statusText}`);
  console.log(xhr.responseText);
};
xhr.timeout = 5000; // 5 секунд (в миллисекундах)
xhr.send();
```

[Более подробно про cинхронные и асинхронные запросы](https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests)

## Событие readystatechange

```javascript
// Значения readyState
const UNSENT = 0; // начальное состояние
const OPENED = 1; // вызван open
const HEADERS_RECEIVED = 2; // получены заголовки
const LOADING = 3; // загружается тело
const DONE = 4; // запрос завершён
```

## Другие события

- **loadstart** — запрос начат
- **progress** — браузер получил очередной пакет данных
- **abort** — запрос был отменён вызовом xhr.abort()
- **error** — произошла ошибка
- **load** — запрос был успешно (без ошибок) завершён
- **loadend** — запрос был прекращён по таймауту
- **readystatechange** — запрос был завершён (успешно или неуспешно)
