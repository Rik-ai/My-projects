//Checking Answers
const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //check answers
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });
    //Showing the Score
    scrollTo(0, 0); /*метод который скролит страницу к заданным координатам*/
    //result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');

    //Intervals & Animating the Score
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if (output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);

});



// setTimeout(()=>{
// //метод при котором будет происходить какое-то действие по истечении заданного времени (время в милисикундах) действие выполняется 1 раз
// }, 3000);

// setInterval(() => {
//     console.log('hello'); //такой же метод как и setTimeout но повторяется каждый раз по истечении заданного времени
// }, 1000);

//если мы хотим что-бы метод остановился
// let i = 0;
// const timer = setInterval(() => {
//     console.log('hello');
//     i++;
//     if (i === 5) {
//         clearInterval(timer);
//     }
// }, 1000);
