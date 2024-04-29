<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ADMIN_Account</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" />
  <link href="https://getbootstrap.com/docs/5.2/assets/css/docs.css" rel="stylesheet" />
  <link rel="stylesheet" href="../styles.css">
  <link rel="stylesheet" href="admin.css">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />
  <script src="admin.js"></script>
</head>

<body>
  <?php include 'sidebar.php'; ?>
  <section class="w-screen h-screen pt-10 pl-10 flex flex-col justify-center items-center gap-2 bg-gray-200">
    <div class="w-full flex flex-row gap-2 justify-center items-center">
      <?php
      $conn_str = "postgresql://webdb_owner:htx50eprzaUA@ep-weathered-poetry-a129mhzu.ap-southeast-1.aws.neon.tech/webdb?options=endpoint%3Dep-weathered-poetry-a129mhzu&sslmode=require";
      $conn = pg_connect($conn_str);
      $result = pg_query($conn, "SELECT departmentname FROM departments");
      $alldepartments = pg_fetch_all($result);
      $res = pg_query($conn, "SELECT rolename FROM roles");
      $allroles = pg_fetch_all($res);
      ?>

      <div class="dropdown">
        <button class="btn btn-primary backk dropdown-toggle" type="button" id="roleDropdown" data-bs-toggle="dropdown"
          aria-expanded="false">
          All Roles
        </button>
        <ul class="dropdown-menu" aria-labelledby="roleDropdown">
          <li><a class="dropdown-item" href="#" onclick="filterRole('')">All Roles</a></li>
          <?php foreach ($allroles as $role): ?>
            <li><a class="dropdown-item" href="#"
                onclick="filterRole('<?php echo $role['rolename']; ?>')"><?php echo $role['rolename']; ?></a>
            </li>
          <?php endforeach; ?>
        </ul>
      </div>
      <script>
        var currentRole = "";
        var currentDepartment = "";

        function filterRole(role) {
          currentRole = role;
          filterTable();
          document.getElementById("roleDropdown").textContent = role || "All Roles";
        }

        function filterDepartment(department) {
          currentDepartment = department;
          filterTable();
          document.getElementById("departmentDropdown").textContent = department || "All Departments";
        }

        function filterTable() {
          var table = document.querySelector(".project-list-table");
          var rows = table.getElementsByTagName("tr");
          for (var i = 1; i < rows.length; i++) {
            var roleCell = rows[i].getElementsByTagName("td")[1];
            var departmentCell = rows[i].getElementsByTagName("td")[2];
            var roleMatch = currentRole === "" || roleCell.textContent.trim() === currentRole;
            var departmentMatch = currentDepartment === "" || departmentCell.textContent.trim() === currentDepartment;
            rows[i].style.display = roleMatch && departmentMatch ? "" : "none";
          }
        }
      </script>


      <div class="dropdown">
        <button class="btn btn-primary backk dropdown-toggle" type="button" id="departmentDropdown"
          data-bs-toggle="dropdown" aria-expanded="false">
          All Departments
        </button>
        <ul class="dropdown-menu" aria-labelledby="departmentDropdown">
          <li><a class="dropdown-item" href="#" onclick="filterDepartment('')">All Departments</a></li>
          <?php foreach ($alldepartments as $department): ?>
            <li><a class="dropdown-item" href="#"
                onclick="filterDepartment('<?php echo $department['departmentname']; ?>')"><?php echo $department['departmentname']; ?></a>
            </li>
          <?php endforeach; ?>
        </ul>
      </div>

      <div id="cover">
        <form onsubmit="event.preventDefault(); searchTable()">
          <div class="tb">
            <div class="td"><input type="text" id="searchBox" placeholder="Search by name" required></div>
            <div class="td" id="s-cover">
              <button type="submit" class="glass">
                <div id="s-circle"></div>
                <span></span>
              </button>
            </div>
          </div>
        </form>

        <script>
          function searchTable() {
            var input = document.getElementById("searchBox");
            var searchTerm = input.value.toLowerCase();
            var table = document.querySelector(".project-list-table");
            var rows = table.getElementsByTagName("tr");
            for (var i = 1; i < rows.length; i++) {
              var cell = rows[i].getElementsByTagName("td")[0];
              var cellText = cell.textContent.toLowerCase().trim().replace(/\s\s+/g, ' ');
              var match = cellText.includes(searchTerm);
              rows[i].style.display = match ? "" : "none";
            }
          }
        </script>

      </div>
      <button type="button" class="buttonn-74" data-bs-toggle="modal" data-bs-target="#addDepartmentModal">Add
        Department</button>
    </div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/boxicons/2.1.0/css/boxicons.min.css"
      integrity="sha512-pVCM5+SN2+qwj36KonHToF2p1oIvoU3bsqxphdOIWMYmgr4ZqD3t5DjKvvetKhXGc/ZG5REYTT6ltKfExEei/Q=="
      crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.css"
      integrity="sha256-NAxhqDvtY0l4xn+YVa6WjAcmd94NNfttjNsDmNatFVc=" crossorigin="anonymous" />
    <div class=" container">
      <div class="row">
        <div class="col-lg-12">
          <div class="">
            <div class="table-responsive bg-white rounded-xl mb-4 h-400 px-10 ">
              <table class="table project-list-table table-nowrap align-middle table-borderless">
                <thead>
                  <tr>
                    <th scope="col" style="width: 300px;">Full Name</th>
                    <th scope="col" style="width: 200px;">Role</th>
                    <th scope="col" style="width: 320px;">Department</th>
                    <th scope="col" style="width: 150px;">ID</th>
                    <th scope="col" style="width: 200px;">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <?php
                  $conn_str = "postgresql://webdb_owner:htx50eprzaUA@ep-weathered-poetry-a129mhzu.ap-southeast-1.aws.neon.tech/webdb?options=endpoint%3Dep-weathered-poetry-a129mhzu&sslmode=require";
                  $dbconn = pg_connect($conn_str);
                  if (!$dbconn) {
                    die("Connection failed: " . pg_last_error());
                  }
                  $query = 'SELECT * FROM roles';
                  $result = pg_query($dbconn, $query);
                  $allroles = pg_fetch_all($result);

                  $query = 'SELECT * FROM users';
                  $result = pg_query($dbconn, $query);
                  $allusers = pg_fetch_all($result);

                  $query = 'SELECT * FROM departments';
                  $result = pg_query($dbconn, $query);
                  $alldepartments = pg_fetch_all($result);


                  $query = 'SELECT users.username AS name, roles.rolename AS role, departments.departmentname AS department, users.userid AS id 
                        FROM users 
                        INNER JOIN roles ON users.roleid = roles.roleid 
                        INNER JOIN departments ON users.departmentid = departments.departmentid';

                  $result = pg_query($dbconn, $query);
                  $users = pg_fetch_all($result);
                  foreach ($users as $user) {
                    ?>

                    <tr>
                      <td>
                        <div class="avatar-sm d-inline-block me-2">
                          <div class="avatar-title bg-soft-primary rounded-circle text-primary">
                            <i class="mdi mdi-account-circle m-0"></i>
                          </div>
                        </div>
                        <a href="#" class="text-body"><?php echo $user['name']; ?></a>
                      </td>
                      <td><span id="role_<?= $user['id'] ?>"
                          class="badge badge-soft-danger mb-0"><?php echo $user['role']; ?></span></td>
                      <td><span id="department_<?= $user['id'] ?>"><?php echo $user['department']; ?></span></td>
                      <td><?php echo $user['id']; ?></td>
                      <td>
                        <ul class="list-inline mb-0">
                          <li class="list-inline-item dropdown">
                            <a class="text-muted dropdown-toggle font-size-18 px-2" href="#" role="button"
                              data-bs-toggle="dropdown" aria-haspopup="true">
                              <i class="bx bx-dots-vertical-rounded"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="#" data-bs-toggle="modal"
                                data-bs-target="#myModal<?= $user['id'] ?>">Change Role</a>
                              <a class="dropdown-item" href="#" data-bs-toggle="modal"
                                data-bs-target="#changeDepartmentModal<?= $user['id'] ?>">Change Department</a>
                            </div>
                            <div class="modal fade" id="myModal<?= $user['id'] ?>" tabindex="-1"
                              aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Change Role</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                      aria-label="Close"></button>
                                  </div>
                                  <div class="modal-body">
                                    <select id="roleSelect<?= $user['id'] ?>" class="form-select">
                                      <?php foreach ($allroles as $role): ?>
                                        <?php

                                        $isAvailable = true;
                                        foreach ($allusers as $anotherUser) {
                                          if ($anotherUser['roleid'] == $role['roleid'] && ($role['rolename'] == 'Administrator' || $role['rolename'] == 'Director' || ($anotherUser['roleid'] == 3 && $anotherUser['roleid'] == $role['roleid'] && $anotherUser['departmentid'] == $user['departmentid']))) {
                                            $isAvailable = false;
                                            break;
                                          }

                                        }
                                        if ($isAvailable): ?>
                                          <option value="<?php echo $role['roleid']; ?>"><?php echo $role['rolename']; ?>
                                          </option>
                                        <?php endif; ?>
                                      <?php endforeach; ?>
                                    </select>
                                  </div>
                                  <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary"
                                      onclick="changeRole(<?= $user['id'] ?>, document.getElementById('roleSelect<?= $user['id'] ?>').value)">Save
                                      changes</button>
                                  </div>
                                  <script>
                                    function changeRole(userId, roleId) {
                                      var xhr = new XMLHttpRequest();
                                      xhr.open("POST", "change_role.php", true);
                                      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                                      xhr.onreadystatechange = function () {
                                        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                                          alert("Role changed successfully");
                                          var newRoleName = this.responseText;
                                          document.getElementById('role_' + userId).textContent = newRoleName;
                                        }
                                      }
                                      xhr.send("user_id=" + userId + "&role_id=" + roleId);
                                    }
                                  </script>
                                </div>

                              </div>

                            </div>
                            <div class="modal fade" id="changeDepartmentModal<?= $user['id'] ?>" tabindex="-1"
                              aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Change Department</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                      aria-label="Close"></button>
                                  </div>
                                  <div class="modal-body">
                                    <select id="departmentSelect<?= $user['id'] ?>" class="form-select">
                                      <?php foreach ($alldepartments as $department): ?>
                                        <option value="<?php echo $department['departmentid']; ?>">
                                          <?php echo $department['departmentname']; ?>
                                        </option>
                                      <?php endforeach; ?>
                                    </select>
                                  </div>
                                  <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary"
                                      onclick="changeDepartment(<?= $user['id'] ?>, document.getElementById('departmentSelect<?= $user['id'] ?>').value)">Save
                                      changes</button>
                                  </div>
                                  <script>
                                    function changeDepartment(userId, departmentId) {
                                      var xhr = new XMLHttpRequest();
                                      xhr.open("POST", "change_department.php", true);
                                      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                                      xhr.onreadystatechange = function () {
                                        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                                          alert("Department changed successfully");
                                          var newDepartmentName = this.responseText;
                                          document.getElementById('department_' + userId).textContent = newDepartmentName;
                                        }
                                      }
                                      xhr.send("user_id=" + userId + "&department_id=" + departmentId);
                                    }
                                  </script>
                                </div>
                              </div>
                            </div>

                            <div class="modal fade" id="addDepartmentModal" tabindex="-1"
                              aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Add Department</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                      aria-label="Close"></button>
                                  </div>
                                  <div class="modal-body">
                                    <input type="text" id="newDepartmentName" class="form-control"
                                      placeholder="Department Name">
                                  </div>
                                  <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" onclick="addDepartment()">Add
                                      Department</button>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <script>
                              function addDepartment() {
                                var xhr = new XMLHttpRequest();
                                xhr.open("POST", "add_department.php", true);
                                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                                xhr.onreadystatechange = function () {
                                  if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                                    alert("Department added successfully");
                                    location.reload();
                                  }
                                }
                                xhr.send("department_name=" + document.getElementById('newDepartmentName').value);
                              }
                            </script>

                          </li>
                        </ul>
                      </td>
                    </tr>

                    <?php
                  }
                  ?>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>



    </div>
    <button src="https://code.jquery.com/jquery-1.10.2.min.js"></button>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script type="text/javascript"></script>
  </section>
</body>