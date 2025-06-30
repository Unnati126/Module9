const socket = io();

const nicknameInput = document.getElementById("nickname");
const messageInput = document.getElementById("message");
const messagesDiv = document.getElementById("messages");
const typingP = document.getElementById("typing");
const userList = document.getElementById("user-list");

let nickname = "";

// Set nickname when user types it
nicknameInput.addEventListener("change", () => {
  nickname = nicknameInput.value.trim();
  if (nickname) {
    socket.emit("setNickname", nickname);
  }
});

messageInput.addEventListener("keydown", () => {
  socket.emit("typing");
});

messageInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const msg = messageInput.value;
    if (msg && nickname) {
      socket.emit("chatMessage", msg);
      messageInput.value = "";
    }
  }
});

socket.on("yourMessage", ({ sender, msg }) => {
  const div = document.createElement("div");
  div.textContent = `You: ${msg}`;
  messagesDiv.appendChild(div);
});

socket.on("message", (data) => {
  const div = document.createElement("div");
  div.textContent = data;
  messagesDiv.appendChild(div);
});

socket.on("typing", (data) => {
  typingP.textContent = data;
  setTimeout(() => (typingP.textContent = ""), 1000);
});

socket.on("userList", (users) => {
  userList.innerHTML = "";
  users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = user;
    userList.appendChild(li);
  });
});
