function handleRegistration(event) {
    event.preventDefault();
    const usernameInput = document.querySelector('input[name="username"]');
    const passwordInput = document.querySelector('input[name="password"]');
    const messageElement = document.querySelector('.message');
    // Check username length and forbidden characters
    if (usernameInput.value.length < 5 || /[!\/=?\\/]/.test(usernameInput.value)) {
        showMessage('Invalid username format. Must be at least 5 characters and cannot contain !, =, /, \\, or ?', 'invalid');
        return;
    }
    // Check password length and forbidden characters
    if (passwordInput.value.length < 8 || /[!\/=?\\/]/.test(passwordInput.value)) {
        showMessage('Invalid password format. Must be at least 8 characters and cannot contain !, =, /, \\, or ?', 'invalid');
        return;
    }
    // Display green message when registration formats are correct
    showMessage('Registration successful!', 'success');
}
function showMessage(message, messageType) {
    const messageElement = document.querySelector('.message');
    messageElement.textContent = message;
    messageElement.classList.remove('invalid', 'success');
    messageElement.classList.add(messageType);
    messageElement.style.display = 'block';
}