
let events = [];

function addEvent() {
    let eventBox = document.getElementById("event");
    let eventName = eventBox.value.trim();

    if (eventName === "") {
        alert("Please enter an event name.");
        return;
    }

    if (events.length >= 3) {
        alert("You can join a maximum of 3 events.");
        return;
    }

    events.push(eventName);

    let list = document.getElementById("eventList");
    list.innerHTML = "";

    for (let i = 0; i < events.length; i++) {
        let item = document.createElement("li");
        item.textContent = events[i];
        list.appendChild(item);
    }

    eventBox.value = "";
    alert("Event Added");
}

function confirmRegistration() {
    let name = document.getElementById("studentName").value.trim();

    if (name === "" || events.length === 0) {
        alert("Please enter your name and add at least one event.");
        return;
    }

    localStorage.setItem("studentName", name);
    localStorage.setItem("events", JSON.stringify(events));

    window.location.href = "confirm.html";
}
