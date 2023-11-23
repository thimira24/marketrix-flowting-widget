// Validation function for the name field
function validateName(name) {
    return /^[A-Za-z\s]+$/.test(name);
}

// Event listener for name field input
document.getElementById('name-field').addEventListener('input', function() {
    var nameField = document.getElementById('name-field');
    var nameHelpText = document.getElementById('name-help');
    nameHelpText.style.display = validateName(nameField.value) ? 'none' : 'block';
});

// Event listener for email field input
document.getElementById('email-field').addEventListener('input', function() {
    var emailField = document.getElementById('email-field');
    var emailHelpText = document.getElementById('email-help');
    emailHelpText.style.display = emailField.validity.typeMismatch || emailField.value.trim() === '' ? 'block' : 'none';
});

// Event listener for message field input and character count
document.getElementById('message-field').addEventListener('input', function() {
    var messageField = document.getElementById('message-field');
    var messageHelpText = document.getElementById('message-help');
    var charCount = document.getElementById('char-count');

    // Update character count
    charCount.textContent = `${messageField.value.length} / 200`;

    // Validate Message
    messageHelpText.style.display = messageField.value.length > 200 || messageField.value.trim() === '' ? 'block' : 'none';
});

// Event listener for the "Click Me" button
document.getElementById('floating-button').addEventListener('click', function() {
    var button = document.getElementById('floating-button');
    var card = document.getElementById('button-card');
    card.style.display = 'block';
    setTimeout(function() {
        card.classList.add('visible');
        button.style.opacity = 0;
    }, 10);
    setTimeout(function() {
        button.style.display = 'none';
    }, 300);
});

// Event listener for the close button
document.getElementById('close-button').addEventListener('click', function() {
    var button = document.getElementById('floating-button');
    var card = document.getElementById('button-card');
    card.classList.remove('visible');
    setTimeout(function() {
        card.style.display = 'none';
        button.style.display = 'block';
        setTimeout(function() {
            button.style.opacity = 1;
        }, 10);
    }, 500);
});

// Event listener for "Button 3" to perform validation checks
document.getElementById('submit-button').addEventListener('click', function(event) {
    var isValid = true;

    // Validate Name
    var nameField = document.getElementById('name-field');
    var nameHelpText = document.getElementById('name-help');
    if (!validateName(nameField.value)) {
        nameHelpText.style.display = 'block';
        isValid = false;
    } else {
        nameHelpText.style.display = 'none';
    }

    // Validate Email
    var emailField = document.getElementById('email-field');
    var emailHelpText = document.getElementById('email-help');
    if (emailField.validity.typeMismatch || emailField.value.trim() === '') {
        emailHelpText.style.display = 'block';
        isValid = false;
    } else {
        emailHelpText.style.display = 'none';
    }

    // Validate Message
    var messageField = document.getElementById('message-field');
    var messageHelpText = document.getElementById('message-help');
    if (messageField.value.length > 200 || messageField.value.trim() === '') {
        messageHelpText.style.display = 'block';
        isValid = false;
    } else {
        messageHelpText.style.display = 'none';
    }

    if (!isValid) {
        event.preventDefault(); // Prevent the default action if any field is invalid
    }
});




// Function to play sound
function playClickSound() {
    var sound = document.getElementById('click-sound');
    sound.play();
}

// Event listener for the "Click Me" button
document.getElementById('floating-button').addEventListener('click', function() {
    // Play the sound
    playClickSound();

    // Rest of the code for showing the card...
    var button = document.getElementById('floating-button');
    var card = document.getElementById('button-card');
    card.style.display = 'block';
    setTimeout(function() {
        card.classList.add('visible');
        button.style.opacity = 0;
    }, 10);
    setTimeout(function() {
        button.style.display = 'none';
    }, 300);
});


