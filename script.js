function setGreeting() {
    const greetingElement = document.getElementById('greeting-box');
    if (!greetingElement) return;

    const hour = new Date().getHours();
    let greetingText = "";

    if (hour >= 5 && hour < 12) {
        greetingText = "☀️ Good morning";
    } else if (hour >= 12 && hour < 18) {
        greetingText = "🌤️ Good afternoon";
    } else {
        greetingText = "🌙 Good evening";
    }

    greetingElement.innerText = greetingText;
}

document.addEventListener('DOMContentLoaded', () => {
    setGreeting();
    console.log("Matheus' portfolio loaded.");
});