// "use strict";

// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.


document.addEventListener('DOMContentLoaded', function(e) {
    console.log('Задание 1');
    console.log('Все теги прогрузились');
});

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.


window.addEventListener('load', function(e) {
    console.log('Задание 2');
    console.log('страница загрузилась');
});

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.
// console.log('Задание 3');

const elem = document.querySelector('body');
const classEl = document.querySelector('.super_element');

elem.addEventListener('click', function(e) {
    if (elem.classList.contains === classEl.classList) {
        console.log(`Класс' ${e.target.className} '  присутствует в элементе ${e.target}`);

    } else {
        console.log(`Класс отсутствует в элементе ${e.target}`);

    }
});

// window.addEventListener('click', function(e) {
//     console.log('Задание 3');
//     if (!elem.classList.contains("super_element")) {
//         console.log(`Класс отсутствует в элементе ${e.target}`);
//         console.log(e.target);
//     } else {
//         console.log(`Класс' ${e.target.className} '  присутствует в элементе ${e.target}`);
//         // console.log(`Класс' ${e.target.className} '  присутствует в элементе ${e.target.toLowerCase()}`);
//         console.log(e.target);
//     }

// });



// const classEl = document.getElementsByClassName("super_element");

// window.addEventListener('click', function(e, className) {
//     if (elem, "super_element") {
//         console.log(`Класс отсутствует в элементе ${e.target}`);
//     } else {
//         console.log(`Класс' ${e.target.className} '  присутствует в элементе ${e.target}`);
//     }

// });



// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."
// console.log('Задание 4');
const areaEl = document.querySelector('textarea');

areaEl.addEventListener('mouseover', function(e) {
    console.log('Задание 4');
    console.log('Вы навели на textarea');
});
// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.
// console.log('Задание 5');

const ulEl = document.querySelector('ul');
const buttonEl = document.querySelectorAll('button');

ulEl.addEventListener('click', function(e) {
    console.log('Задание 5');
    buttonEl.forEach(element => {

        // element.addEventListener('click', function(e) {
        //     console.log(e.target);
        // });
    });
    console.log(e.target);

    // console.log(e.target, e.currentTarget);
    // console.log(e.target);
});

// const listener = (e) => {
//     console.log(e.target, e.currentTarget);
// }
// ulEl.addEventListener('click', function(e) {
//     console.log(e.target, e.currentTarget);
// });




// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.
console.log('Задание 6');

console.log('Возможно сначала выполняется обработка события в данном случае клик на кнопку(срабатывание события), а в 3м задании у нас идет слушание события, поэтому в консоли идет обработка от дочерних элементов к родительскому(снизу вверх)');


// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.
console.log('Задание 7');
const liEl = document.querySelectorAll('li');

for (let i = 1; i < liEl.length; i = i + 2) {
    const element = liEl[i];
    element.style.backgroundColor = "red";
}