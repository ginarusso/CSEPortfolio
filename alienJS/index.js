const title = "!sgnilhtraE olleH";
const messages = [
    "!PLEH",
    "!wol era seilppus ruO",
    ":DEEN EW"
];
const items = [
    "spord eye ytivarg-itnA",
    "rezirutsiom emilS",
    "sessalgnus foorp-VU"
];

const titleEl = document.getElementById("title");
const requestEl = document.getElementById("request");
const itemsEl = document.getElementById("items");
const btnEl = document.getElementById("btn");
const bleep = new Audio("sounds/bleep.mp3");
const resetMessage = new Audio("sounds/reset.mp3");

function reverseString(message){
    return message.split("").reverse().join("");
}

function reverseStringsInArray(messages) {
    return messages.map(reverseString);
}

function decryptMessages() {
    bleep.play();
    // Decrypt title
    titleEl.textContent = reverseString(title);

    // Decrypt request
    requestEl.innerHTML = "";
    const decryptedMessages = reverseStringsInArray(messages);
    decryptedMessages.forEach(msg => {
        const p = document.createElement("p");
        p.textContent = msg;
        p.classList.add("alien-para"); // << add class
        requestEl.appendChild(p);
    });

    // Decrypt items
    itemsEl.innerHTML = "";
    const ul = document.createElement("ul");
    ul.classList.add("alien-ul"); // << add class
    const decryptedItems = reverseStringsInArray(items);
    decryptedItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        li.classList.add("alien-li"); // << add class
        ul.appendChild(li);
    });
    itemsEl.appendChild(ul);

    // Change button to RESET
    btnEl.textContent = "RESET";
    btnEl.removeEventListener("click", decryptMessages);
    btnEl.addEventListener("click", resetPage);
}

function resetPage() {
    // Reset title
    resetMessage.play();
    titleEl.textContent = title;

    // Reset request
    requestEl.innerHTML = "";
    messages.forEach(msg => {
        const p = document.createElement("p");
        p.textContent = msg;
        p.classList.add("alien-para"); // << add class again
        requestEl.appendChild(p);
    });

    // Reset items
    itemsEl.innerHTML = "";
    const ul = document.createElement("ul");
    ul.classList.add("alien-ul"); // << add class again
    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        li.classList.add("alien-li"); // << add class again
        ul.appendChild(li);
    });
    itemsEl.appendChild(ul);

    // Change button back to DECRYPT
    btnEl.textContent = "CLICK HERE TO DECRYPT!";
    btnEl.removeEventListener("click", resetPage);
    btnEl.addEventListener("click", decryptMessages);
}

// Set up initial event listener
btnEl.addEventListener("click", decryptMessages);
