// Copyright (C) 2019 Benjamin N. Zelnick. All Rights Reserved. Permission is not granted to modify or distribute this software without the prior permission of the Creator.
function updateClock() {
    document.getElementById("date").textContent = "Today is " + moment().format("dddd MMMM Do, YYYY");
    document.getElementById("clock").textContent = moment().format("h:mm A");
}
setInterval(updateClock, 500);