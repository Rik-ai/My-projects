const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => {
    console.log('Wow! my content is copyright'); /*при копировании обьекта выдаёт в консоль текст*/
});

const box = document.querySelector('.box');

box.addEventListener('mousemove', e => {
    //console.log(e);
    //console.log(e.offsetX, e.offsetY);/*показывает координаты курсора в консоли*/
    box.textContent = `x pos - ${e.offsetX}  y pos - ${e.offsetY}`; /*показываек координаты курсора в боксе*/
});


document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY); /*показывает координаты курсора при пролистывании страницы*/
});