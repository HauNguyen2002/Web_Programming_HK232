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
    includeHTML("login_page");
    // window.location.href = "index.html";
    change_login();
    // login.link.disabled = true;
    logout = document.getElementById("logout_btn");
    logout.innerHTML = '<a class="nav-link active" href="#" id="logout_link">Logout</a>';
}

function change_login() {
    text = "user_name";
    change_link("#", "login-user", text);
}

function change_link(link, id, text) {
    document.getElementById(id).href = link;
    document.getElementById(id).innerHTML = text;
}

function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

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
                  window.location.href='index.php';
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




//   https://www.w3schools.com/howto/howto_html_include.asp
//   https://www.w3schools.com/jsref/prop_anchor_href.asp