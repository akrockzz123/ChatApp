
console.log(db)
class ChatRoom {

    constructor(room,username) {

        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
        this.unsub;
    }

    async addChat(message) {

        //format a chat object

        const now = new Date();

        const chat = {
            message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        };

        // save the chat document

        const response = await this.chats.add(chat);

        return response;
    }

    // checks databse any time there is change in database

    getChats(callback) {
        this.unsub = this.chats.where('room' , '==' , this.room).orderBy('created_at').onSnapshot(snapshot => { // listen to docchanges only for particular room
            snapshot.docChanges().forEach(change => {

                if(change.type === 'added') {
                    // update the ui

                    callback(change.doc.data()) // data object 
                }
            });
        }); // function returns the unsubscribe function 
    }

    updateName(username) {

        this.username = username;
    }

    updateRoom(room) {

        this.room = room;

        if(this.unsub) { // this.unsub is initialized or not
            this.unsub(); // unsubscribe for previous room
        }
       

    }

}


//chatroom.updateRoom('general') // when we update room we need to unsubscribe the docchanges for the room and listen to updated room

/*chatroom.getChats((data) => {

    console.log(data)

})

setTimeout(() => {

    chatroom.updateRoom('general');

    chatroom.getChats((data) => {
        console.log(data);
    });

    chatroom.addChat('hellooo');

}, 3000);*/
