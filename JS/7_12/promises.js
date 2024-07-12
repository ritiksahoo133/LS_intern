async function getData() {
  const response = await fetch("https://reqres.in/api/users?page=2");
  const json = await response.json();
  //   console.log(json);
  const tableBody = document.getElementById("userData");
  json["data"].forEach((user) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${user.id}</td>
        <td><img src="${user.avatar}" alt="Avatar" style="border-radius:100px "></td>
        <td>${user.email}</td>
        <td>${user.first_name}</td>
        <td>${user.last_name}</td>
      `;
    tableBody.appendChild(row);
  });
}

getData();
// console.log(user);
// createFunc(user.data);
