let searchTask = (name) => {
    alert("Search for " + name);
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

    }
    document.getElementById("search_by_task").value = "";
}
let searchStatus = (status) => {
    alert("Search for " + status);
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

    }
}
let viewTask = (taskName = "", desc = "", attach = "", start = "", end = "",commentFromHead="") => {
    document.getElementById("popup").style.display="block";
    document.getElementById("popup").className = "popup popup--open_animation";
    document.getElementById("overlay").style.display = "block";
        let currentDate = new Date();
        let endDate = document.getElementById(end).innerHTML;
        document.getElementById("taskName").innerHTML = document.getElementById(taskName).innerHTML;
        document.getElementById("description").value = document.getElementById(desc).innerHTML;
        document.getElementById("startDate").innerHTML = document.getElementById(start).innerHTML;
        document.getElementById("endDate").innerHTML = document.getElementById(end).innerHTML;
        document.getElementById("cmtFromHead").value = document.getElementById(commentFromHead).innerHTML;
}
let closePopup = (popup) => {
    document.getElementById(popup).className = "popup";
    document.getElementById(popup).style.display="none";
    document.getElementById("overlay").style.display = "none";
}
let submitTask = () => {
    alert("Task submitted");
}
let changeFormat = (date) => {
    date = date.split('/');
    if (date[0] < 10) date[0] = '0' + date[0];
    if (date[1] < 10) date[1] = '0' + date[1];
    let tempDate = date[0];
    date[0] = date[2];
    date[2] = tempDate;
    return date.toString();
}
let isTaskEnded = (currentDate, endDate) => {
    endDate = changeFormat(endDate);
    let current = new Date(currentDate);
    let end = new Date(endDate);
    return (current > end);
}