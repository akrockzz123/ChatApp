// render chat documents to the dom

// clear the chatlist whenever the room is changed

class chatUI {

    constructor(list) {

        this.list = list;
    }

    render(data) { // rendering each chat document in the chatlist

        const when = dateFns.distanceInWordsToNow(
            data.created_at.toDate(),
            { addSuffix : true}
        ); // modifying the date


        const html = `
              <li class = "list-group-item">
                 <span class="username">${data.username}</span>
                 <span class="message">${data.message}</span>
                 <div class="time">${when}</div>
              </li>
        `;

        this.list.innerHTML += html;
    }

    clearchat() {

        this.list.innerHTML = "";
    }
}