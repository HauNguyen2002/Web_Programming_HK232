let closePopup = (popup) => {
    document.getElementById(popup).className="popup";
    document.getElementById(popup).style.display="none";
    document.getElementById("overlay").style.display = "none";
}
let showPopUp = (taskName = "", desc = "",attach="", dept = "", start = "", end = "") => {
    document.getElementById("popup").style.display="block";
    document.getElementById("popup").className="popup popup--open_animation";
    document.getElementById("overlay").style.display = "block";
    if (taskName != "") {
        let currentDate = new Date();
        let startDate = document.getElementById(start).innerHTML;
        
        document.getElementById("taskName").value = document.getElementById(taskName).innerHTML;
        document.getElementById("attachment").href=document.getElementById("attachment").innerHTML = document.getElementById(attach).href;
        document.getElementById("description").value = document.getElementById(desc).innerHTML;
        document.getElementById("department").value = document.getElementById(dept).innerHTML;
        document.getElementById("startDate").value = changeFormat(document.getElementById(start).innerHTML).replaceAll(",", "-");
        document.getElementById("endDate").value = changeFormat(document.getElementById(end).innerHTML).replaceAll(",", "-");
        
        if (isTaskStarted(currentDate, startDate)) {
            document.getElementById("taskName").disabled = true;
            document.getElementById("description").disabled = true;
            document.getElementById("department").disabled = true;
            document.getElementById("startDate").disabled = true;
        }
        else {
            document.getElementById("taskName").disabled = false;
            document.getElementById("description").disabled = false;
            document.getElementById("department").disabled = false;
            document.getElementById("startDate").disabled = false;
        }
    }
}

let viewTask=(submitAttach,headComment)=>{
    document.getElementById("submitPopUp").style.display="block";
    document.getElementById("submitPopUp").className="popup popup--open_animation";
    document.getElementById("overlay").style.display = "block";

    document.getElementById("submitAttach").innerHTML=document.getElementById("submitAttach").href=document.getElementById(submitAttach).href;
    document.getElementById("comment_head").value=document.getElementById(headComment).innerHTML;
}
let commentTask=(id,cmtTaskName)=>{
    document.getElementById("commentPopUp").style.display="block";
    document.getElementById("commentPopUp").className="popup popup--open_animation";
    document.getElementById("overlay").style.display = "block";

    document.getElementById("cmtTaskName").innerHTML=document.getElementById(cmtTaskName).innerHTML;
}
let chooseStartDate = () => {
    let currentDate = new Date();
    let y = currentDate.getFullYear();
    let m = currentDate.getMonth() + 1;
    if (m < 10) m = "0" + m;
    let d = currentDate.getDate();
    if (d < 10) d = "0" + d;
    let fulldate = y + "-" + m + "-" + d;
    document.getElementById("startDate").min = fulldate;
    document.getElementById("startDate").max= document.getElementById("endDate").value;
}
let chooseEndDate = (startDate) => {
    document.getElementById("endDate").min = startDate;
}
let addTaskRecord = (taskName, desc, dept, start, end) => {
    let table = document.getElementById("tasktable");
    let data = {
        "id": table.rows.length,
        "taskName": document.getElementById(taskName).value,
        "description": document.getElementById(desc).value,
        "department": document.getElementById(dept).value,
        "startDate": document.getElementById(start).value,
        "endDate": document.getElementById(end).value,
    };
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
let isTaskStarted = (currentDate, startDate) => {
    startDate = changeFormat(startDate);
    let current = new Date(currentDate);
    let start = new Date(startDate);
    return (current >= start);
}



// op=0: delete
// op=1: accept
// op=2: deny
let recordOperation = (id, op) => {
    let id_value = document.getElementById(id).innerHTML;
    switch (op) {
        case 0:
            if (confirm(`Are you sure you want to delete ID: ${id_value} record?`)) {

            }
            else {

            }
            break;
        case 1:
            if (confirm(`Are you sure you want to accept ID: ${id_value} record?`)) {

            }
            else {

            }
            break;
        case 2:
            if (confirm(`Are you sure you want to deny ID: ${id_value} record?`)) {

            }
            else {

            }
            break;
    }

}
let searchTask = (name) => {
    console.log(name);
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

    }
}
let searchDept = (dept) => {
    console.log(dept);
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

    }
}