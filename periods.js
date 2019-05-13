// Copyright (C) 2019 Benjamin N. Zelnick. All Rights Reserved. Permission is not granted to modify or distribute this software without the prior permission of the Creator.
function printPeriod(period) {
    document.getElementById("currentPeriod").textContent = "Period " + period.toString();
}
function conditionalPrintPeriod(minutesStart, minutesEnd, periodNumber) {
    if(new Date().getMinutes() >= minutesStart && new Date().getMinutes() < minutesEnd) {
        printPeriod(periodNumber);
    }
}
function printPassingTime(periodNumberFrom, periodNumberTo) {
    document.getElementById("currentPeriod").textContent = "Passing Time: Period " + periodNumberFrom.toString() + " to Period " + periodNumberTo.toString();
}
function conditionalPrintPassingTime(periodNumberFrom, periodNumberTo, minutesStart, minutesEnd) {
    if(new Date().getMinutes() >= minutesStart && new Date().getMinutes() < minutesEnd) {
        printPassingTime(periodNumberFrom, periodNumberTo);
    }
}
function notInSession() {
    document.getElementById("currentPeriod").textContent = "School is not in session";
}
function periodUpdate() {
    if(new Date().getDay() >= 1 && new Date().getDay() <= 5) {
        switch(new Date().getHours()) {
            case 8:
                conditionalPrintPeriod(0, 42, 1);
                conditionalPrintPassingTime(1, 2, 42, 46);
                conditionalPrintPeriod(46, 60, 2);
                break;
            case 9:
                conditionalPrintPeriod(0, 28, 2);
                conditionalPrintPassingTime(2, 3, 28, 32);
                conditionalPrintPeriod(32, 60, 3);
                break;
            case 10:
                conditionalPrintPeriod(0, 32, 3);
                conditionalPrintPeriod(32, 42, "Break");
                conditionalPrintPeriod(42, 60, 4);
                break;
            case 11:
                conditionalPrintPeriod(0, 24, 4);
                conditionalPrintPassingTime(4, 5, 24, 28);
                conditionalPrintPeriod(28, 60, 5);
                break;
            case 12:
                conditionalPrintPeriod(0, 10, 5);
                conditionalPrintPassingTime(5, 6, 10, 14);
                conditionalPrintPeriod(14, 56, "6 (Middle School Lunch)");
                conditionalPrintPeriod(56, 60, "7 (Upper School Lunch)");
                break;
            case 13:
                conditionalPrintPeriod(0, 38, "7 (Upper School Lunch)");
                conditionalPrintPassingTime(7, 8, 38, 42);
                conditionalPrintPeriod(42, 60, 8);
                break;
            case 14:
                conditionalPrintPeriod(0, 24, 8);
                conditionalPrintPassingTime(8, 9, 24, 28);
                conditionalPrintPeriod(28, 60, 9);
                break;
            case 15:
                conditionalPrintPeriod(0, 10, 9);
                if(new Date().getMinutes() >= 10) {
                    notInSession();
                }
                if(new Date().getMinutes() >= 10 && new Date().getMinutes() < 20) {
                    document.getElementById("busStatus").removeAttribute("hidden");
                    document.getElementById("busStatus").textContent = "Buses leave in " + (20 - new Date().getMinutes()).toString() + " minutes."
                }
                else {
                    document.getElementById("busStatus").hidden = "true";
                }
                break;
            default:
                notInSession();
                break;
        }
    }
    else {
        notInSession();
    }
}
setInterval(periodUpdate, 500);