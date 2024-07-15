var editUser;

async function getData() {
  const response = await fetch("https://reqres.in/api/users?page=2");
  const json = await response.json();
  //   console.log(json);
  const tableBody = document.getElementById("userData");
  json["data"].forEach((user) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${user.id}</td>
        <td><img src="${user.avatar}" alt="Avatar" style="border-radius:100px;width:80px;height:80px; margin:2px"></td>
        <td>${user.email}</td>
        <td>${user.first_name}</td>
        <td>${user.last_name}</td>
        <td><button onclick = "editUserData(${user.id})" id="editButton">Edit</button></td>
        <td><button id="deleteButton">Delete</button></td>
      `;
    tableBody.appendChild(row);
  });
}
getData();

async function editUserData(id) {
  //   console.log(id);
  const response = await fetch("https://reqres.in/api/users?page=2");
  const allUserData = await response.json();
  editUser = allUserData["data"].find((user) => {
    if (user.id === id) {
      return user;
    }
  });
  console.log(editUser);
  window.location.href =
    window.location.origin + "/LS_intern/JS/7_12/editUserData.html";
}

function editAfterSubmitFunc() {
  let email = document.getElementById("eml");
  let fname = document.getElementById("fname");
  let lname = document.getElementById("lname");

  editUser.email = email.value;
  editUser.first_name = fname.value;
  editUser.lname = lname.value;
}
