// function includeHTML(attr) {
//     var z, i, elmnt, file, xhttp;
//     /* Loop through a collection of all HTML elements: */
//     z = document.getElementsByTagName("*");
//     for (i = 0; i < z.length; i++) {
//       elmnt = z[i];
//       /*search for elements with a certain atrribute:*/
//       file = elmnt.getAttribute(attr);
//       if (file) {
//         /* Make an HTTP request using the attribute value as the file name: */
//         xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function() {
//           if (this.readyState == 4) {
//             if (this.status == 200) {elmnt.innerHTML = this.responseText;}
//             if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
//             /* Remove the attribute, and call this function once more: */
//             elmnt.removeAttribute(attr);
//             includeHTML();
//           }
//         }
//         xhttp.open("GET", file, true);
//         xhttp.send();
//         /* Exit the function: */
//         return;
//       }
//     }
//   }

function showResult(str, destination, res_des='search_result') {
    if (str.length==0) {
      document.getElementById(res_des).innerHTML="";
      document.getElementById(res_des).style.border="0px";
      return;
    }
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function() {
      if (this.readyState==4 && this.status==200) {
        document.getElementById(res_des).innerHTML=this.responseText;
        document.getElementById(res_des).style.border="1px solid #A5ACB2";
      }
    }
    // search_user.php?q=
    file = destination+".php?q="+str;
    xmlhttp.open("GET",file,true);
    xmlhttp.send();
  }

function login_func() {
    // const loggedInUser = document.getElementById('user-pan');
    // const loginLink = document.getElementById('login-btn');
    const loggedInUser = document.getElementById('login-user');

    // var loggedIn = false;
    loggedInUser.innerHTML = '<a href="login.html">Login</a>';
    // var xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function() {
    //         if (this.readyState == 4 && this.status == 200) {
    //             res = this.responseText;
    //             res =JSON.parse(res);
    //             // console.log(res);
    //             if (res['logged_in']) {
    //                 // console.log("logged in");
    //                 // change_login();
    //                 loggedInUser.innerHTML = res['user_name']; // Replace with actual user name
    //                 // console.log('hello ' + res['user_name']);
    //                 loginLink.style.display = 'none';
    //                 logout = document.getElementById("logout_btn");
    //                 logout.innerHTML = '<a class="nav-link active" href="logout.php" id="logout_link">Logout</a>';
    //             }
    //             else {
    //                 // loggedInUser.style.display = 'none';
    //                 loggedInUser.innerHTML = '<a href="login.html">Login</a>';
    //             }
    //         }
    //     }
    // xhttp.open("GET", "login_processing.php", true);
    // xhttp.send();
    // console.log("try to get user info");
}


function change_link(link, id, text) {
    document.getElementById(id).href = link;
    document.getElementById(id).innerHTML = text;
}

function validate_login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var cheat_username = "RegisLeywin@gmail.com";
    var cheat_password = "RegisLeywin123";
    var valid = false;

    // var specialChars = /[!#$%^&*()_+\-=\[\]{};':"\|,.<>\/?]+/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var numbers = /[0-9]/;

    if (!mailformat.test(username) && username.length > 0) {
        document.getElementById("username_error").textContent = "Username is not in mail format.";
        // return false;
        valid = false;
    }
    else{
        valid = true;
        // return true;
    }

    if (password.length < 8 || password.toLowerCase() === password || !numbers.test(password)) {
        if (password.length > 0){
            document.getElementById("password_error").textContent = "Password must be at least 8 characters long, contain at least one uppercase letter and one number.";
        }
        // return false;
        valid = false;
    }else{
        valid = true;
        // return true;
    }

    if (valid) {
        if (username == cheat_username && password == cheat_password) {
            // alert("Login successful!");
            var dict = {
                "username": username,
                "password": password,
                "logged_in": true
            };
            var dictstring = JSON.stringify(dict);
            localStorage.setItem("user", dictstring);
            window.location.href = "index.html";
            // return true;
            return true;
        } else {
            document.getElementById("log_res").innerHTML = "Incorrect username or password.";
            return false;
        }
    }


    // if(valid){
    //     var xmlhttp = new XMLHttpRequest();
    //     xmlhttp.onreadystatechange = function() {
    //         if (this.readyState == 4 && this.status == 200) {
    //             res = this.responseText;
    //             res =JSON.parse(res);
    //             // console.log(res);
    //             // console.log(typeof res['success']);
    //             // console.log(res['success'].length)
    //             // console.log(res['success']==true);
    //             if(res['success']) {
    //                 document.getElementById("log_res").innerHTML = "success";
    //                 window.location.href='index.html';
    //             } else {
    //                 // document.getElementById("log_res").innerHTML = products;
    //                 document.getElementById("log_res").innerHTML = "Incorrect username or password.";
    //             }
    //         }
    //     };
    //     xmlhttp.open("POST", "login_processing.php", true);
    //     // xmlhttp.open("GET", "login_processing.php?q="+username+"&p="+password, true);
    //     xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //     var postData = "username=" + username + "&password=" + password;
    //     xmlhttp.send(postData);   

    // }
}


function validate_account_creation() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;
    var department = document.getElementById("department").value;
    var role = document.getElementById("role").value;
    var phone_number = document.getElementById("phone_number").value;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            res = this.responseText;
            res =JSON.parse(res);
            // console.log(res);
            // console.log(typeof res['success']);
            // console.log(res['success'].length)
            // console.log(res['success']==true);
        }
    };
    xmlhttp.open("GET", "get_company_info.php", true);

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var numbers = /[0-9]/;

    if (!mailformat.test(email) && username.length > 0) {
        document.getElementById("username_error").textContent = "Username is not in mail format.";
        // return false;
        valid = false;
    }
    else{
        valid = true;
        // return true;
    }

    if (password.length < 8 || password.toLowerCase() === password || !numbers.test(password)) {
        if (password.length > 0){
            document.getElementById("password_error").textContent = "Password must be at least 8 characters long, contain at least one uppercase letter and one number.";
        }
        // return false;
        valid = false;
    }else{
        valid = true;
        // return true;
    }

    if (password != confirm_password) {
        document.getElementById("confirm_password_error").textContent = "Passwords do not match.";
        valid = false;
    }
    for (var i = 0; i < res['departments'].length; i++) {
        if (department == res['departments'][i]) {
            if (role == 'Head' && res['departments'][i]['dep_head'] != None) {
                document.getElementById("department_error").textContent = "Department already had a head, if you want to assign new head, please delete the current head first.";
                valid = false;
            }
        }
    }
    if (department.length == '---') {
        document.getElementById("department_error").textContent = "Department cannot be empty.";
        valid = false;
    }
    if (role.length == 0) {
        document.getElementById("role_error").textContent = "Role cannot be empty.";
        valid = false;
    }
    
    if (phone_number.length != 10) {
        document.getElementById("phone_number_error").textContent = "Phone number must be 10 digits long.";
        valid = false;
    }

}

function validate_department_creation() {
    var dep_name = document.getElementById("dep_nme").value;
    var dep_head = document.getElementById("dep_head").value;
    var des = document.getElementById("dep_description").value;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            res = this.responseText;
            res =JSON.parse(res);
            // console.log(res);
            // console.log(typeof res['success']);
            // console.log(res['success'].length)
            // console.log(res['success']==true);
        }
    };
    xmlhttp.open("GET", "get_company_info.php", true);

    var valid = false;
    if (dep_name.length == 0) {
        document.getElementById("dep_name_error").textContent = "Department name cannot be empty.";
        valid = false;
    }else{
        valid = true;
    }

    if (dep_head.length == 0) {
        document.getElementById("dep_head_error").textContent = "Department head cannot be empty.";
        valid = false;
    }else{
        valid = true;
    }
    if (des.length == 0) {
        document.getElementById("dep_description_error").textContent = "Department description cannot be empty.";
        valid = false;
    }else{
        valid = true;
    }
    return valid && confirm("Are you sure you want to create the department?");
}


function validate_account_edit() {
    var user_id = document.getElementById("user_id").value;
    var phone_number = document.getElementById("phone_number").value;
    var department = document.getElementById("department").value;
    var role = document.getElementById("role").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;

    var numbers = /[0-9]/;
    var valid = false;

    if (phone_number.length != 10 && phone_number.length > 0) {
        document.getElementById("phone_number_error").textContent = "Phone number must be 10 digits long.";
        valid = false;
    }else{valid = true;}

    if ((password.length < 8 && password.length > 0)|| password.toLowerCase() === password || !numbers.test(password)) {
        document.getElementById("password_error").textContent = "Password must be at least 8 characters long, contain at least one uppercase letter and one number.";
        valid = false;
        // return false;
    }else{
        valid = true;
        // return true;
    }

    if (password != confirm_password) {
        document.getElementById("confirm_password_error").textContent = "Passwords do not match.";
        valid = false;
    }
    else{
        valid = true;
    }
    return valid && confirm("Are you sure you want to update the user?");
}

function validate_department_edit() {
    var user_id = document.getElementById("dep_id").value;
    var dep_name = document.getElementById("dep_name").value;
    var dep_head = document.getElementById("dep_head").value;
    var des = document.getElementById("dep_description").value;

    var valid = true;
    return valid && confirm("Are you sure you want to update the department?");
}
        

function get_department(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            res = this.responseText;
            res =JSON.parse(res);
            // console.log(res);
            // console.log(typeof res['success']);
            // console.log(res['success'].length)
            // console.log(res['success']==true);
        }
    };
    xmlhttp.open("GET", "get_company_info.php", true);
    var department = document.getElementById("department");
    for (var i = 0; i < res['departments'].length; i++) {
        var option = document.createElement("option");
        option.text = res['departments'][i];
        department.add(option);
    }

}


function get_user_table(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            res = this.responseText;
            res =JSON.parse(res);
            // console.log(res);
            // console.log(typeof res['success']);
            // console.log(res['success'].length)
            // console.log(res['success']==true);
        }
    };
    xmlhttp.open("GET", "get_company_info.php", true);
    var user = document.getElementById("user_info");
    for (var i = 0; i < res['users'].length; i++) {
        user.innerHTML += "<tr><th scrope='row'>"+res['users'][i]['user_id']+"</th><td>"+res['users'][i]['email']+"</td><td>"+res['users'][i]['last_name']+"</td><td>"+res['users'][i]['first_name']+"</td><td>"+res['users'][i]['phone_number']+"</td><td>"+res['users'][i]['department']+"</td><td>"+res['users'][i]['role']+"</td></tr>";
    }
}

function get_dep_table(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            res = this.responseText;
            res =JSON.parse(res);
            // console.log(res);
            // console.log(typeof res['success']);
            // console.log(res['success'].length)
            // console.log(res['success']==true);
        }
    };
    xmlhttp.open("GET", "get_company_info.php", true);
    var user = document.getElementById("dep_info");
    for (var i = 0; i < res['departments'].length; i++) {
        user.innerHTML += "<tr><th scrope='row'>"+res['departments'][i]['dep_id']+"</th><td>"+res['departments'][i]['description']+"</td><td>"+res['departments'][i]['dep_head']+"</td><td>"+res['departments'][i]['head_id']+"</td></tr>";
    }
}

function popup(file_nmae, tab_name){
    console.log("open file" + file_nmae);
    // window.open('add_user.html');
    // newwindow=window.open('add_user.html', 'Add User', 'height=800,width=450');
    newwindow=window.open(file_nmae, tab_name, 'height=800,width=450');
    if (window.focus) {newwindow.focus()}
    // return false;
}



function start_page() {
    const urlParams = new URLSearchParams(window.location.search);

    if (!urlParams.has('page')) {
    window.location.href = "index.html?page=home";
}
}

function get_php() {
    const urlParams = new URLSearchParams(window.location.search);

    const requestedPage = urlParams.get('page');
    const homeContent = document.getElementById('display-section');
    // const otherContent = document.getElementById('other-content'); // (Optional for other pages)

    if (requestedPage == 'home') {
    // homeContent.style.display = 'block';
    includeHTML("home_page");
    } else {
    // Handle other pages or display default content if no page is specified
    // otherContent.style.display = 'block'; // (Optional)
    // Alternatively, show an error message or redirect to another page
    }

}


//   https://www.w3schools.com/howto/howto_html_include.asp
//   https://www.w3schools.com/jsref/prop_anchor_href.asp