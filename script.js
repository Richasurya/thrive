document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Dynamic Greeting ---
    const greetingElement = document.getElementById('greeting');
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
        greetingElement.textContent = "Good Morning.";
    } else if (currentHour < 18) {
        greetingElement.textContent = "Good Afternoon.";
    } else {
        greetingElement.textContent = "Good Evening.";
    }

    // --- 2. Animate Cognitive Flow Score ---
    const scoreCircle = document.getElementById('flow-score-circle');
    const scoreValueElement = document.getElementById('flow-score-value');
    const targetScore = 82; // The score we want to display
    let currentScore = 0;

    const animateScore = () => {
        if (currentScore < targetScore) {
            currentScore++;
            scoreValueElement.textContent = currentScore;
            // Calculate the angle for the conic gradient
            const angle = currentScore * 3.6; // 360 degrees / 100
            scoreCircle.style.background = `conic-gradient(from 0deg, #8A2BE2, #FF69B4 ${angle}deg, var(--bg-light) ${angle}deg)`;
            requestAnimationFrame(animateScore);
        }
    };
    setTimeout(animateScore, 500);


    // --- 3. Button Interactivity ---
    const focusBtn = document.getElementById('focus-btn');
    const insightsBtn = document.getElementById('insights-btn');
    const chatBtn = document.getElementById('chat-btn');
    const breakBtn = document.getElementById('break-btn'); // New button

    focusBtn.addEventListener('click', () => {
        alert("Entering Focus Sanctuary... All distractions will be silenced.");
    });

    insightsBtn.addEventListener('click', () => {
        alert("Loading your Weekly Insights dashboard...");
    });

    chatBtn.addEventListener('click', () => {
        alert("Scheduling a 15-minute chat with Anjali...");
    });

    // Event listener for the new Mindful Break button
    breakBtn.addEventListener('click', () => {
        alert("Starting 2-minute guided breathing exercise. Inhale... Exhale...");
    });
});
