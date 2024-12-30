function updateCountdown() {
    const now = new Date();
    const nextYear = now.getFullYear() + 1;
    const newYear = new Date(`January 1, ${nextYear} 00:00:00`);
    const diff = newYear - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const day = document.getElementById('day-item');
    const hour = document.getElementById('hour-item');
    const minute = document.getElementById('minute-item');
    const second = document.getElementById('second-item');

    day.textContent = `${days}`;
    hour.textContent = `${hours}`;
    minute.textContent = `${minutes}`;
    second.textContent = `${seconds}`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

const snowflakesContainer = document.getElementById('snowflakes');
const numberOfSnowflakes = 100;
const snowflakeInterval = 100;
const snowflakeDuration = 2 * 60 * 1000;

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    const size = Math.random() * 5 + 5;
    const leftPosition = Math.random() * 100;
    const animationDuration = Math.random() * 15 + 15;
    const delay = Math.random() * 10;

    snowflake.style.fontSize = `${size}px`;
    snowflake.style.left = `${leftPosition}%`;
    snowflake.style.animationDuration = `${animationDuration}s`;
    snowflake.style.animationDelay = `${delay}s`;

    snowflake.innerHTML = '🎁';

    snowflakesContainer.appendChild(snowflake);

    setTimeout(() => {
        snowflakesContainer.removeChild(snowflake);
    }, (animationDuration + delay) * 1000);
}

for (let i = 0; i < numberOfSnowflakes; i++) {
    createSnowflake();
}

const intervalId = setInterval(createSnowflake, snowflakeInterval);

setTimeout(() => {
    clearInterval(intervalId);
}, snowflakeDuration);
