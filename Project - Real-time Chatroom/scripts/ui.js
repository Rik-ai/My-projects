//render chat templates to the DOM
//clear the list of chats (when the room changes)

class ChatUI {
    constructor(list) {
        this.list = list;
    }
    render(data) {//тот метод рендеринга будет отвечать за создание html фрагмент или шаблоны для каждого документа, который мы возвращаем, и отрисовываем его DOM
        const when = dateFns.distanceInWordsToNow(
            data.created_at.toDate(),
            { addSuffix: true }
        );
        const html = `
        <li class = "list-group-item">
            <span class="username">${data.username}</span>
            <span class = "message">${data.message}</span>
            <div class = "time">${when}</div>
        </li>
        `;


        this.list.innerHTML += html;
    }
}