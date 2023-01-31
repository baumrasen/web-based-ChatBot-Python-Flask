const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");

// Icons made by Freepik from www.flaticon.com
const BOT_IMG = "<i class='far fa-user-robot fa-3x'></i>";
const PERSON_IMG = "<i class='fa-regular fa-user fa-3x'></i>";
const BOT_NAME = "Tom";
const PERSON_NAME = "You";

msgerForm.addEventListener("submit", event => {
  event.preventDefault();

  const msgText = msgerInput.value;
  if (!msgText) return;

  appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
  msgerInput.value = "";
  botResponse(msgText);
});

function appendMessage(name, img, side, text) {
  //   Simple solution for small apps
  const msgHTML = `
                <div class="msg ${side}-msg">
                <div class="msg-img"> ${img} </div>

                <div class="msg-bubble">
                <div class="msg-info">
                <div class="msg-info-name">${name}</div>
                <div class="msg-info-time">${formatDate(new Date())}</div>
                </div>

                <div class="msg-text">${text}</div>
                </div>
                </div>
                `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}

function botResponse(rawText) {

  // Bot Response
  $.get("/get", { msg: rawText }).done(function (data) {
    console.log(rawText);
    console.log(data);
    const msgText = data;
    appendMessage(BOT_NAME, BOT_IMG, "left", msgText);

  });

}

// Utils
function get(selector, root = document) {
  return root.querySelector(selector);
}

function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}