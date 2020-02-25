//Getting Collections
const list = document.querySelector('ul');
const form = document.querySelector('form');

const addRecipe = (recipe, id) => {
    let time = recipe.created_at.toDate();

    /*data-id="${id}" с помощью этой строки видно в консоли id каждого li тега*/
    let html = `
    <li data-id="${id}"> 
    <div>${recipe.title}</div>
    <div>${time}</div>
    <button class="btn btn-danger btn-sm my-2">delete</button>
    </li>
    `;

    list.innerHTML += html;
}

//get documenta
db.collection('recipes').get().then(snapshot => {
    //when we have the data
    //console.log(snapshot.docs[0].data());
    snapshot.docs.forEach(doc => {
        console.log(doc.id); //показывает id (который в датабазе) кажого рецепта 
        addRecipe(doc.data(), doc.id);
    });
}).catch(err => {
    console.log(err);
});






//Add & Saving Documents
form.addEventListener('submit', e => {
    e.preventDefault();

    const now = new Date();
    const recipe = {
        title: form.recipe.value,
        created_at: firebase.firestore.Timestamp.fromDate(now)
    };

    db.collection('recipes').add(recipe).then(() => {
        console.log('recipe added');
    }).catch(err => {
        console.lor(err);
    });

});





//Deleting Documents
list.addEventListener('click', e => {
    //console.log(e);
    if (e.target.tagName === 'BUTTON') {
        const id = e.target.parentElement.getAttribute('data-id'); //теперь при нажатии кнопки удалить, в консоли видно id удаляемого елемента
        console.log(id)
        //будет удалятся рецепт
        db.collection('recipes').doc(id).delete().then(() =>
            console.log('recipe deleted'));
    }
});





//Real-time Listeners