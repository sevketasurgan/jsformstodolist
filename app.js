let form = document.querySelector("#todoForm");

form.addEventListener("submit", handleEvent);
function randnum(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
const liDom = (task, date) => {

    let liEl = document.createElement("li");
    const states = ["primary", "secondary", "danger", "warning", "success"];
    liEl.classList.add("list-group-item");
    liEl.classList.add(`list-group-item-${states[randnum(0, states.length - 1)]}`);
    // liEl.createTextNode(`Task : ${task}  -  Deadline : ${date}`);
    liEl.innerHTML = `Task : ${task}  -  Deadline : ${date}`;
    return liEl;

}

function handleEvent(event) {
    event.preventDefault();
    let elDeadline = document.querySelector("#deadlineInput").value.toString().toUpperCase();
    let elTask = document.querySelector("#taskInput").value;

    let ulDom = document.querySelector(".list-group");
    ulDom.appendChild(liDom(elTask, elDeadline));



}