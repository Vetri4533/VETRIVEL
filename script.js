// --- Sign Up Logic ---
function handleSignUp(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();
  const messageEl = document.getElementById("message");

  // Basic validation
  if (password !== confirmPassword) {
    messageEl.style.color = "red";
    messageEl.textContent = "❌ Passwords do not match!";
    return;
  }

  // Get existing accounts from LocalStorage
  let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

  // Check if email already exists
  const exists = accounts.some(acc => acc.email === email);
  if (exists) {
    messageEl.style.color = "orange";
    messageEl.textContent = "⚠️ Account already exists!";
    return;
  }

  // Save new account
  accounts.push({ name, email, password });
  localStorage.setItem("accounts", JSON.stringify(accounts));

  messageEl.style.color = "green";
  messageEl.textContent = "✅ Account created successfully! Redirecting..."
;
// ...existing code...
  // Success
  document.getElementById("password-step").classList.add("hidden");
  document.getElementById("success-step").classList.remove("hidden");
  errorEl.classList.add("hidden");

  // Redirect to books.html after 2 seconds
  setTimeout(() => {
    window.location.href = "books.html";
  }, 2000);
// ...existing code...

  // Redirect to sign in after 2 seconds
  setTimeout(() => {
    window.location.href = "vetri.html";
  }, 2000);
}

// --- Sign In Logic ---
function handleLogin(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorEl = document.getElementById("error");

  // Get accounts from LocalStorage
  let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

  // Find account
  const user = accounts.find(acc => acc.email === email);

  if (!user) {
    errorEl.textContent = "Account does not exist.";
    errorEl.classList.remove("hidden");
    return;
  }

  if (user.password !== password) {
    errorEl.textContent = "Incorrect password.";
    errorEl.classList.remove("hidden");
    return;
  }

  // Success
  document.getElementById("password-step").classList.add("hidden");
  document.getElementById("success-step").classList.remove("hidden");
  errorEl.classList.add("hidden");
}

// --- Step Navigation ---
function goToPassword() {
  const email = document.getElementById("email").value.trim();
  if (email === "") {
    alert("Please enter your email.");
    return;
  }
  document.getElementById("email-step").classList.add("hidden");
  document.getElementById("password-step").classList.remove("hidden");
}

function backToEmail() {
  document.getElementById("password-step").classList.add("hidden");
  document.getElementById("email-step").classList.remove("hidden");
  document.getElementById("error").classList.add("hidden");
}

function togglePassword() {
  const pwd = document.getElementById("password");
  pwd.type = pwd.type === "password" ? "text" : "password";
}

// --- Attach Event Listeners after DOM is loaded ---
document.addEventListener("DOMContentLoaded", function () {
  // Sign Up Form
  const signUpForm = document.getElementById("signUpForm");
  if (signUpForm) {
    signUpForm.addEventListener("submit", handleSignUp);
  }

  // Login Form
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", handleLogin);
  }

  // Step navigation and password toggle
  const goToPasswordBtn = document.getElementById("goToPassword");
  if (goToPasswordBtn) {
    goToPasswordBtn.addEventListener("click", goToPassword);
  }

  const goToEmailBtn = document.getElementById("goToEmail");
  if (goToEmailBtn) {
    goToEmailBtn.addEventListener("click", backToEmail);
  }

  const togglePasswordBtn = document.getElementById("togglePassword");
  if (togglePasswordBtn) {
    togglePasswordBtn.addEventListener("click", togglePassword);
  }
});