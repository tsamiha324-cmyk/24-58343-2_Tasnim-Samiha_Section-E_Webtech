
let name = localStorage.getItem("studentName");
let events = JSON.parse(localStorage.getItem("events")) || [];

let summary = document.getElementById("summary");

summary.innerHTML = "";

let nameLine = document.createElement("p");
nameLine.textContent = "Name: " + (name || "");
summary.appendChild(nameLine);

let eventHeading = document.createElement("p");
eventHeading.textContent = "Events:";
summary.appendChild(eventHeading);

for (let i = 0; i < events.length; i++) {
    let eventLine = document.createElement("p");
    eventLine.textContent = events[i];
    summary.appendChild(eventLine);
}

let totalFee = events.length * 150;

let feeLine = document.createElement("p");
feeLine.textContent = "Total Fee: " + totalFee + " Taka";
summary.appendChild(feeLine);

function goBack() {
    window.location.href = "index.html";
}
