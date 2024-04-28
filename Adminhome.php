<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Company_Home</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link
      href="https://getbootstrap.com/docs/5.2/assets/css/docs.css"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="script.js"></script>
</head>
<body>
    
<header class="container-fluid d-flex flex-wrap align-items-center justify-content-center py-3">
  <div>
    <a href="index.html" class="d-flex align-items-center mb-md-0 me-md-auto text-decoration-none">
      <!-- <img class="pe-2" src="img\MiHoYo_Logo.png" alt="Company Logo" height="40"> -->
      <span class="fs-1 fw-bolder text-dark">Company</span>
    </a>
  </div>
</header>
<nav class="navbar">
  <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-start" tabindex="-1" 
      id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dash Board</h5>
            <button type="button" class="btn-close btn-close-white" 
            data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3" id="offcontent">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="home.php">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" href="#">Sth</a>
            </li>
            <li class="nav-item active" id="logout_btn">
            </li>
        </div>  
    </div>
    <div>
      <a class="navbar-brand justify-content-start" href="index.html">Company Logo</a>
    </div>
    <div id="login-user">
      <script>
          login_func();
      </script>
    </div>
  </div>
</nav>
    <h1>Welcome to the home page</h1>
    <p>here lies some news</p>
    <div class="list-group">
      <a href="#" class="list-group-item list-group-item-action list-group-item-light">News 1</a>
      <a href="#" class="list-group-item list-group-item-action list-group-item-light">News 2</a>
      <a href="#" class="list-group-item list-group-item-action list-group-item-light">News 3</a>
      <a href="#" class="list-group-item list-group-item-action list-group-item-light">News 4</a>
      <a href="#" class="list-group-item list-group-item-action list-group-item-light">News 5</a>
    </div>
    <?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT * FROM news";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
      // output data of each row
      while($row = $result->fetch_assoc()) {
        echo "<h2>" . $row["title"]. "</h2>";
        echo "<p>" . $row["content"]. "</p>";
        echo '<a href="#" class="list-group-item list-group-item-action list-group-item-light">Read more</a>';
      }
    } else {
      echo "0 results";
    }
    $conn->close();
    ?>
    
</body>
</html>