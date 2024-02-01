function updateDateTime() {
    const now = new Date();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    const dayOfWeek = daysOfWeek[now.getDay()];
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    const formattedHours = (hours % 12) || 12;

    const timeString = `${formattedHours}:${minutes}:${seconds} ${ampm}`;
    const dayString = `${dayOfWeek}`;
    
    document.getElementById('time-display').textContent = timeString;
    document.getElementById('day-display').textContent = dayString;
}

function darkmode(){
    const body = document.body;
    body.classList.toggle("dark-mode");
}

// Update time every second
setInterval(updateDateTime, 1000);

// Initial call to display time immediately
updateDateTime();
