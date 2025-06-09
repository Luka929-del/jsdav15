function login() {
  const username = prompt("Enter username:");
  const password = prompt("Enter password:");

  if (username === "admin" && password === "1234") {
    alert("Hello Admin");
  } else {
    alert("Hello guest");
  }
}
login();

