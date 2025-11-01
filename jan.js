document.getElementById("signUpForm").addEventListener("submit", function(e) {
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
    messageEl.textContent = "✅ Account created successfully! Redirecting...";

    // Redirect to sign in after 2 seconds
    setTimeout(() => {
        window.location.href = "file:///C:/Users/NandhiniPeriyasaamy/Documents/VS/index.html";
    }, 2000);
});
