// script.js

// Set the target date for the New Year
const targetDate = new Date("January 1, 2025 00:00:00").getTime();

// Update the countdown every second
const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update the HTML
    document.getElementById("days").textContent = days.toString().padStart(2, '0');
    document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');

    // Show the "Happy New Year" message when the countdown ends
    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").style.display = "none";
        document.getElementById("message").classList.remove("hidden");
    }
}, 1000);

const fallingObjects = ["🎉", "🎈", "✨", "🎊", "🎁", "🍾", "🥂", "🎆", "🎇", "💫"];

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createFallingObjects() {
    const container = document.getElementById("falling-objects-container");

    fallingObjects.forEach((emoji) => {
        const fallingObject = document.createElement("div");
        fallingObject.classList.add("falling-object");
        fallingObject.textContent = emoji;

        const leftPosition = getRandomNumber(0, 95);
        fallingObject.style.left = `${leftPosition}%`;

        const animationDuration = getRandomNumber(3, 8);
        fallingObject.style.animationDuration = `${animationDuration}s`;

        const animationDelay = getRandomNumber(0, 5);
        fallingObject.style.animationDelay = `${animationDelay}s`;

        container.appendChild(fallingObject);
    });
}

createFallingObjects();

function createFirework() {
    const firework = document.createElement("div");
    firework.classList.add("firework");
    firework.style.left = `${Math.random() * 100}%`;
    firework.style.top = `${Math.random() * 100}%`;
    firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    document.body.appendChild(firework);

    setTimeout(() => {
        firework.remove();
    }, 1000); // Remove after animation ends
}

setInterval(createFirework, 500); // Create a firework every 500ms