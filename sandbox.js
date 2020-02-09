//get a reference to the 'ul'
const ul = document.querySelector('.people');


const people = ['mario', 'luigi', 'rui', 'shaun', 'chun-li'];

let html = ``;

people.forEach(person => {
    //create html template
    html += `<li style="color: purple">${person}</li>` /*для каждого имени добавляем фрагмент этого шаблона html*/
});

console.log(html);
ul.innerHTML = html;