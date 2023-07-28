const chatWidget = document.querySelector('.chat-widget');
chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
})

const message = document.querySelector('.message');
const chatWidgetMessages = document.querySelector('.chat-widget__messages');
const chatWidgetInput = document.getElementById('chat-widget__input');

function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
function startTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    m = checkTime(m);
    return h + ":" + m;
} 
let messageText = ['Не мешайте сладко спать!', 'c Новым Годом, пошел нафиг!', 'Где-где, нигде!', 'Очень дорого,вам не по карману)))'];
let messageTextRandom = function (e) {
   return Math.floor(Math.random() * e.length);
}
chatWidgetInput.addEventListener('keyup', (e) => {
    if (e.code === 'Enter') {
        if (chatWidgetInput.value.trim()) {
            chatWidgetMessages.innerHTML += '<div class="message message_client"><div class = "message__time">' + startTime() + '</div><div class = "message__text">' + chatWidgetInput.value + '</div></div>';
            chatWidgetInput.value = '';
            chatWidgetMessages.innerHTML += '<div class="message"><div class="message__time">' + startTime() + '</div><div class="message__text">' + messageText[messageTextRandom(messageText)] + '</div></div>';
        }
    }
})
