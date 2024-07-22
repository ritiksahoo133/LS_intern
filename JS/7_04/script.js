// DOM ELEMENTS
const nm = document.getElementById("uname");
const eml = document.getElementById("eml");
const pwd = document.getElementById("pwd");
const reqName = document.getElementById("requiredName");
const reqEmail = document.getElementById("requiredEmail");
const reqPassword = document.getElementById("requiredPassword");
const skinColor = document.getElementById("skinColor");
const coins = document.getElementById("coins");
const currentDate = document.getElementById("currentDate");
const message = document.getElementById("message");
const loginForm = document.getElementById("loginForm");
const date = document.getElementById("currDate");
let allUserName;
let selectedUserEmail;
let selectedUser;
const msgInput = document.getElementById("msgInput");
const messagesDiv = document.getElementById("messages");
const userList = document.getElementById("userList");
const msgHeader = document.getElementById("msgHeader");
const users = JSON.parse(localStorage.getItem("users"));

let CURR_DATE = null;
const loggedInUser = JSON.parse(localStorage.getItem("currentUser"));

// REGEX
const validName = /^[a-zA-Z][a-zA-Z0-9_]{2,19}$/;
const validEmail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
const validPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$!@%*?])[A-Za-z\d$!@%*?]{6,18}$/;

// submit event listner for login form
loginForm?.addEventListener("submit", (e) => {
  loginFunc(e);
});

if (date) {
  date.addEventListener("change", (e) => {
    CURR_DATE = e.target.value;
    console.log(CURR_DATE);
  });
}

// handle page to display based on logged in state
(function () {
  const isLoggedIn = JSON.parse(localStorage.getItem("currentUser"));
  if (window.location.pathname === "/LS_intern/JS/7_04/login.html") {
    if (isLoggedIn)
      window.location.href =
        window.location.origin + "/LS_intern/JS/7_04/newPage.html";
  } else if (window.location.pathname === "/LS_intern/JS/7_04/newPage.html") {
    if (!isLoggedIn)
      window.location.href =
        window.location.origin + "/LS_intern/JS/7_04/login.html";
  } else if (window.location.pathname === "/LS_intern/JS/7_04/register.html") {
    if (isLoggedIn)
      window.location.href =
        window.location.origin + "/LS_intern/JS/7_04/newPage.html";
  } else if (window.location.pathname === "/LS_intern/JS/7_04/chat.html") {
    if (!isLoggedIn) {
      window.location.href =
        window.location.origin + "/LS_intern/JS/7_04/login.html";
    }
  }
})();

//-----------Login------------
function loginFunc(e) {
  e.preventDefault();
  message.innerHTML = "";
  let emailField = eml.value.trim();
  let passwordField = pwd.value.trim();
  let checkRequired = {
    email: emailField,
    password: passwordField,
  };

  //check for required field
  const isRequired = checkRequiredFunc(checkRequired);
  if (!isRequired) return;

  //check input data format is correct or not
  const isCorrectInput = checkValidFunc(checkRequired);
  if (!isCorrectInput) return;

  //get data from local storage
  const users = JSON.parse(localStorage.getItem("users"));

  // match email and password
  if (users[emailField] && users[emailField]["password"] === passwordField) {
    // login successful
    window.location.href =
      window.location.origin + "/LS_intern/JS/7_04/newPage.html";

    // if users logs in for first time then set last logged in date to current date
    const isLoggingInFirstTime =
      users[emailField].lastLoggedInDate === undefined;
    const lastLoggedInDate = isLoggingInFirstTime
      ? CURR_DATE
      : users[emailField].lastLoggedInDate;

    const isLoggingInOnSameDay =
      new Date(lastLoggedInDate).getDate() === new Date(CURR_DATE).getDate();

    const hasContinuedLogin = checkForDateDifference(lastLoggedInDate);

    let currentUser = {
      name: users[emailField].name,
      email: users[emailField].email,
      skinColor: users[emailField].skinColor,
      coins: users[emailField].coins,
      lastLoggedInDate: CURR_DATE,
      currentLoginCount: isLoggingInFirstTime
        ? 1
        : isLoggingInOnSameDay
        ? users[emailField].currentLoginCount
        : hasContinuedLogin
        ? users[emailField].currentLoginCount + 1
        : 1,
    };
    // calculate the coins earned by user on login
    currentUser.coins = isLoggingInFirstTime
      ? 100
      : isLoggingInOnSameDay
      ? currentUser.coins
      : hasContinuedLogin
      ? currentUser.currentLoginCount % 6 === 0
        ? currentUser.coins
        : currentUser.coins + calculateUserCoins(currentUser)
      : currentUser.coins + calculateUserCoins(currentUser);

    currentUser.skinColor =
      currentUser.currentLoginCount % 6 === 0 ? "blue" : "red";

    users[emailField] = { ...users[emailField], ...currentUser };

    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    localStorage.setItem("users", JSON.stringify(users));
  } else {
    message.innerHTML = "Incorrect Email address or password";
    message.style.color = "red";
  }
}

// ---------register----------
function registerFunc() {
  reqEmail.innerHTML = "";
  message.innerHTML = "";
  let nameField = nm.value.trim();
  let emailField = eml.value.trim();
  let passwordField = pwd.value.trim();
  let checkRequired = {
    name: nameField,
    email: emailField,
    password: passwordField,
  };

  // check for required field
  const isRequired = checkRequiredFunc(checkRequired);
  if (!isRequired) return;

  // check input data format is correct or not
  const isCorrectInput = checkValidFunc(checkRequired);
  if (!isCorrectInput) return;

  // get the data from local storage
  const users = JSON.parse(localStorage.getItem("users")) || {};

  // if user already exists
  if (users[emailField]) {
    message.innerHTML = "user already exists";
    message.style.color = "red";
  } else {
    // new User
    users[emailField] = {
      name: nameField,
      email: emailField,
      password: passwordField,
      skinColor: "Red",
      coins: 0,
      currentLoginCount: 0,
    };

    window.location.href =
      window.location.origin + "/LS_intern/JS/7_04/login.html";
    message.style.color = "green";

    localStorage.setItem("users", JSON.stringify(users));
  }
}

// ---------------logout-------------
function logout() {
  localStorage.removeItem("currentUser");
  window.location.href =
    window.location.origin + "/LS_intern/JS/7_04/login.html";
}

function checkRequiredFunc(allValue) {
  let isValid = true;

  Object.keys(allValue).forEach((key) => {
    switch (key) {
      case "name":
        if (allValue.name === "") {
          reqName.innerHTML = "Name is required";
          reqName.style.color = "red";
          isValid = false;
        } else reqName.innerHTML = "";
        break;

      case "email":
        if (allValue.email === "") {
          reqEmail.innerHTML = "Email address is required";
          reqEmail.style.color = "red";
          isValid = false;
        } else reqEmail.innerHTML = "";
        break;

      case "password":
        if (allValue.password === "") {
          reqPassword.innerHTML = "Password is required";
          reqPassword.style.color = "red";
          isValid = false;
        } else reqPassword.innerHTML = "";
        break;

      default:
        break;
    }
  });
  return isValid;
}

//check valid name,email and password
function checkValidFunc(userData) {
  let correctInputData = true;
  let validName = /^[a-zA-Z][a-zA-Z0-9_]{2,19}$/;
  let validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let validPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$!@%*?])[A-Za-z\d$!@%*?]{6,18}$/;

  Object.keys(userData).forEach((key) => {
    switch (key) {
      case "name":
        if (!validName.test(userData.name)) {
          reqName.innerHTML = "Please enter a valid name";
          reqName.style.color = "red";
          correctInputData = false;
        } else {
          reqName.innerHTML = "";
        }
        break;

      case "email":
        if (!validEmail.test(userData.email)) {
          reqEmail.innerHTML = "Please enter a valid email address";
          reqEmail.style.color = "red";
          correctInputData = false;
        } else {
          reqEmail.innerHTML = "";
        }
        break;

      case "password":
        if (!validPassword.test(userData.password)) {
          reqPassword.innerHTML = "Please enter a valid password";
          reqPassword.style.color = "red";
          correctInputData = false;
        } else {
          reqPassword.innerHTML = "";
        }
        break;

      default:
        break;
    }
  });
  return correctInputData;
}

// Hide/Show Password
function showpasswordFunc() {
  if (pwd.type === "password") pwd.type = "text";
  else pwd.type = "password";
}

// this function will check for login streak
function checkForDateDifference(lastLoggedInDate) {
  const dateDiff =
    new Date(CURR_DATE).getDate() - new Date(lastLoggedInDate).getDate();

  return dateDiff === 1;
}

// this function will update the user details after login
(function updateUserData(user) {
  const currentUser = user || loggedInUser;

  const date = new Date(currentUser?.lastLoggedInDate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  if (skinColor) {
    skinColor.innerHTML = currentUser?.skinColor;
    skinColor.style.color = currentUser?.skinColor;
  }
  if (coins) coins.innerHTML = currentUser?.coins;
  if (currentDate) currentDate.innerHTML = formattedDate;
})();

// this function will calculate the coins earned by the user
function calculateUserCoins(user) {
  const prizeCoins = [100, 200, 400, 600, 1000];

  const coinsReward = prizeCoins[(user.currentLoginCount % 6) - 1];

  return coinsReward;
}

//chat page

function chatnow() {
  window.location.href =
    window.location.origin + "/LS_intern/JS/7_04/chat.html";
}

// Function to initialize chat with selected user
function selectedUserFunc(selectedUserEmail) {
  selectedUser = users[selectedUserEmail];
  msgHeader.innerHTML = `
    <img src="./images/vecteezy_a-happy-woman-wearing-a-color-t-shirt-smiling-brightly_46822758.png" alt="" class="userImage chatImg" />
    <span class="headerUsername" id="selectedUserName">${selectedUser.name}</span>`;
  showMessages(selectedUserEmail);
}

// Function to display messages between logged-in user and selected user
function showMessages(selectedUserEmail) {
  const messages = JSON.parse(localStorage.getItem("messages")) || {};
  const conversationId = getConversationId(
    loggedInUser.email,
    selectedUserEmail
  );

  let html = "";
  if (messages[conversationId]) {
    messages[conversationId].forEach((message) => {
      const messageType =
        message.from === loggedInUser.email ? "sender" : "receiver";
      html += `
        <div class="message ${messageType}">
          <p>${message.text}</p>
          <div class="${messageType}Date">${message.date}</div>
        </div>`;
    });
  }
  messagesDiv.innerHTML = html;

  // Scroll to bottom of messages
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Function to send message
function sendMessage() {
  const selectedUserEmail = selectedUser.email;
  const text = msgInput.value.trim();
  if (text === "") return;

  const conversationId = getConversationId(
    loggedInUser.email,
    selectedUserEmail
  );
  const currentDate = new Date().toLocaleString();

  // Prepare message object
  const message = {
    from: loggedInUser.email,
    to: selectedUserEmail,
    text: text,
    date: currentDate,
  };

  // Save message to localStorage
  let messages = JSON.parse(localStorage.getItem("messages")) || {};
  if (!messages[conversationId]) {
    messages[conversationId] = [];
  }
  messages[conversationId].push(message);
  localStorage.setItem("messages", JSON.stringify(messages));

  // Clear input and display updated messages
  msgInput.value = "";
  showMessages(selectedUserEmail);
}

// Utility function to generate unique conversation id
function getConversationId(email1, email2) {
  return [email1, email2].sort().join("-");
}

//show all users excluding current loggedIn User
function showAllUser() {
  let html = "";
  Object.keys(users).forEach((key) => {
    if (key !== loggedInUser.email) {
      const user = users[key];
      html += `
        <li class="list-group-item d-flex align-items-center" data-email="${user.email}" onclick="selectedUserFunc('${user.email}')">
          <img src="./images/vecteezy_ai-generated-portrait-of-handsome-smiling-young-man-with_41642170.png" class="userImage">
          <span class="userName">${user.name}</span>
        </li>`;
    }
  });
  userList.innerHTML = html;
}

showAllUser();
