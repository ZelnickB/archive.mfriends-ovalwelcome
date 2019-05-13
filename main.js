function creditsUpdate() {
    document.getElementById("credits").textContent = "Created for Moorestown Friends School by Benjamin Zelnick in 2019. Copyright © Benjamin N. Zelnick " + new Date().getFullYear().toString() + ". All rights reserved.";
}
function greetingUpdate() {
    if(new Date().getHours() < 12) {
        document.getElementById("greeting").textContent = "Good morning, Moorestown Friends School!"
    }
    if(new Date().getHours() >= 12 && new Date().getHours < 18) {
        document.getElementById("greeting").textContent = "Good afternoon, Moorestown Friends School!"
    }
    if(new Date().getHours() >= 18) {
        document.getElementById("greeting").textContent = "Good evening, Moorestown Friends School!"
    }
}
setInterval(creditsUpdate, 1000);
setInterval(greetingUpdate, 500);