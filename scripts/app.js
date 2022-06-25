const chatlist = document.querySelector('.chat-list');

const newchatform = document.querySelector('.new-chat');

const newNameForm = document.querySelector('.update-name');

const updatename =  document.querySelector('.updatedname');

newchatform.addEventListener('submit', e => { // we set up the listener to listen for the changes

    e.preventDefault();

    const newmessage = newchatform.message.value.trim();

    chatroom.addChat(newmessage) // returns the promise
       .then(() => newchatform.reset())
       .catch(err => console.log(err))
});

//updating the name

newNameForm.addEventListener('submit', e => {

    e.preventDefault();
    const newname = newNameForm.newname.value.trim();

    chatroom.updateName(newname);

    newNameForm.reset(); // clearing the name form after submiting

   

    setTimeout(() => 
        updatename.innerText = `Your name was updated to ${newname}`,3000); // show updated name 


});

const chatui = new chatUI(chatlist) // create new chaui class instance by passing the reference of chatlist address

const chatroom = new ChatRoom('gaming', 'shaun'); // created new instance of chats class

console.log(chatroom)

//get chats and render


chatroom.getChats((data) => {

    chatui.render(data); // calling render function of chatUI class to render the chat on web

});

