function includeHTML(attr) {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute(attr);
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute(attr);
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
  }



function login_func() {
    // const loggedInUser = document.getElementById('user-pan');
    // const loginLink = document.getElementById('login-btn');
    const loggedInUser = document.getElementById('login-user');

    var loggedIn = false;
    loggedInUser.innerHTML = '<a href="login.html">Login</a>';
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                res = this.responseText;
                res =JSON.parse(res);
                // console.log(res);
                if (res['logged_in']) {
                    // console.log("logged in");
                    // change_login();
                    loggedInUser.innerHTML = res['user_name']; // Replace with actual user name
                    // console.log('hello ' + res['user_name']);
                    loginLink.style.display = 'none';
                    logout = document.getElementById("logout_btn");
                    logout.innerHTML = '<a class="nav-link active" href="logout.php" id="logout_link">Logout</a>';
                }
                else {
                    // loggedInUser.style.display = 'none';
                    loggedInUser.innerHTML = '<a href="login.html">Login</a>';
                }
            }
        }
    xhttp.open("GET", "login_processing.php", true);
    xhttp.send();
    // console.log("try to get user info");
    
    // var loggedIndefault = true;
    // const retrievedDataString = localStorage.getItem("user");
    // if (!retrievedDataString) {
    //     // loggedIndefault = false;
    // } else {
    //     const retrievedData = JSON.parse(retrievedDataString);
    //     var loggedIn = retrievedData['logged_in'];
    //     var user_name = retrievedData['username'];
    // }
    // // var user_name = "user_name";
    // if (loggedIndefault) {
    //     // loggedInUser.innerHTML = 'user_name'; // Replace with actual user name
    //     loggedInUser.innerHTML = user_name; // Replace with actual user name
    //     // loginLink.style.display = '';
    //     logout = document.getElementById("logout_btn");
    //     logout.innerHTML = '<a class="nav-link active" href="logout.php" id="logout_link">Logout</a>';
    // } else {
    //     // loggedInUser.style.display = '';
    //     // loginLink.innerHTML = '<a class="navbar" href="login.html">Login</a>';
    //     loggedInUser.innerHTML = '<a class="login-class" href="login.html">Login</a>';
    //     // loggedInUser.innerHTML = 'Login';
    // }
    // console.log(loggedIndefault);
}


function change_link(link, id, text) {
    document.getElementById(id).href = link;
    document.getElementById(id).innerHTML = text;
}

function validateForm() {
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
    }else{
        valid = true;}

    if (password.length < 8 || password.toLowerCase() === password || !numbers.test(password)) {
        if (password.length > 0){
            document.getElementById("password_error").textContent = "Password must be at least 8 characters long, contain at least one uppercase letter and one number.";
        }
        // return false;
        valid = false;
    }else{
        valid = true;}
    // if (!validateInput(username, password)) {
    //     tmpUsername = username;
    //     tmpPassword = password;
    // }
    // return true;


    // if (valid) {
    //     if (username == cheat_username && password == cheat_password) {
    //         // alert("Login successful!");
    //         var dict = {
    //             "username": username,
    //             "password": password,
    //             "logged_in": true
    //         };
    //         var dictstring = JSON.stringify(dict);
    //         localStorage.setItem("user", dictstring);
    //         window.location.href = "index.html";
    //         // return true;
    //         return true;
    //     } else {
    //         document.getElementById("log_res").innerHTML = "Incorrect username or password.";
    //         return false;
    //     }
    // }


    if(valid){
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                res = this.responseText;
                res =JSON.parse(res);
                // console.log(res);
                // console.log(typeof res['success']);
                // console.log(res['success'].length)
                // console.log(res['success']==true);
                if(res['success']) {
                    document.getElementById("log_res").innerHTML = "success";
                    window.location.href='index.html';
                } else {
                    // document.getElementById("log_res").innerHTML = products;
                    document.getElementById("log_res").innerHTML = "Incorrect username or password.";
                }
            }
        };
        xmlhttp.open("POST", "login_processing.php", true);
        // xmlhttp.open("GET", "login_processing.php?q="+username+"&p="+password, true);
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        var postData = "username=" + username + "&password=" + password;
        xmlhttp.send(postData);   

    }
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