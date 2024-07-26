let editUserId;

async function getData() {
  const response = await fetch("https://reqres.in/api/users?page=2");

  const json = await response.json();

  //   console.log(json);
  const tableBody = document.getElementById("userData");
  json["data"].forEach((user) => {
    // console.log(user);
    const row = document.createElement("tr");
    row.setAttribute("id", `user${user.id}`);
    row.innerHTML = `
        <td>${user.id}</td>
        <td><img src="${user.avatar}" alt="Avatar" style="border-radius:100px;width:80px;height:80px; margin:2px"></td>
        <td id="email${user.id}">${user.email}</td>
        <td id="fname${user.id}">${user.first_name}</td>
        <td id="lname${user.id}">${user.last_name}</td>
        <td><button onclick = "editUserData(${user.id})" id="editButton">Edit</button></td>
        <td><button onclick="deleteUser(${user.id})" id="deleteButton">Delete</button></td>
      `;
    tableBody.appendChild(row);
  });
}
getData();

async function deleteUser(id) {
  try {
    const response = await fetch(`https://reqres.in/api/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    console.log(response);
    if (response.status === 204) {
      document.getElementById(`user${id}`).remove();
    } else {
      console.log("Failed to delete", response.status);
    }
  } catch (error) {
    console.log(error);
  }
}
function editUserData(id) {
  editUserId = id;
  console.log(editUserId);
  window.location.href =
    window.location.origin + "/LS_intern/JS/7_12/addUser.html";
}
function afterSubmitFunc() {
  console.log(editUserId);
  let email = document.getElementById("eml").value;
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let avatar = document.getElementById("avatar").value;
  console.log(email, fname, lname, avatar);
}
