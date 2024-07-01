function updateTimeAndDay() {
    const now = new Date();
    const utcTime = now.toUTCString();
    const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });

    document.querySelector('[data-testid="currentTimeUTC"]').textContent = utcTime;
    document.querySelector('[data-testid="currentDay"]').textContent = dayOfWeek;
}

// Update time and day on page load
updateTimeAndDay();

// Update time and day every minute
setInterval(updateTimeAndDay, 60000);
