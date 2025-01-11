const users = [];

function showSignIn() {
  document.getElementById("signup").style.display = "none";
  document.getElementById("login").style.display = "block";
}

function showSignUp() {
  document.getElementById("signup").style.display = "block";
  document.getElementById("login").style.display = "none";
}

function signUp() {
  const firstName = document.getElementById("firstname").value.trim();
  const lastName = document.getElementById("lasttname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document
    .getElementById("Confirm-Password")
    .value.trim();

  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    alert("Please fill in all fields.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  const emailExists = users.some((user) => user.email === email);
  if (emailExists) {
    alert("This email is already registered. Please use another one.");
    return;
  }

  if (users.length >= 10) {
    alert("Maximum number of users reached. Cannot add more users.");
    return;
  }

  users.push({ firstName, lastName, email, password });
  alert("Sign up successful! You can now sign in.");
  showSignIn();
}

function signIn() {
  const email = document.getElementById("signin-email").value.trim();
  const password = document.getElementById("signin-password").value.trim();

  if (!email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  const user = users.find((user) => user.email === email);
  if (!user) {
    alert("Email not found. Please sign up.");
  } else if (user.password === password) {
    alert(`Sign in successful! Welcome, ${user.firstName} ${user.lastName}!`);
  } else {
    alert("Incorrect password. Please try again.");
  }
}
