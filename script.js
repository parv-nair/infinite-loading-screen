document.addEventListener("DOMContentLoaded", () => {
    const progressText = document.getElementById("progress-text");
    const phrases = [
        "Loading data...",
        "Almost there...",
        "Just a few more seconds...",
        "Optimizing assets...",
        "Hang tight...",
        "Retrieving information...",
        "Any moment now..."
    ];

    // Function to update text periodically
    setInterval(() => {
        const randomIndex = Math.floor(Math.random() * phrases.length);
        progressText.textContent = phrases[randomIndex];
    }, 3000);

    // Function to update the progress percentage randomly
    setInterval(() => {
        const percentage = Math.floor(Math.random() * 100);
        progressText.textContent = `${phrases[Math.floor(Math.random() * phrases.length)]} ${percentage}%`;
    }, 4000);
});
