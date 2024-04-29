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
</head>
<body>
  <?php include 'sidebar.php'; ?>
  <section class="w-screen h-screen pl-10 flex flex-col justify-center items-center gap-2 bg-gray-200">
    <div class="w-full flex flex-row gap-4 justify-center items-center">
      
      <div class="flex flex-row gap-2">
        <button type="button" class=" button-74">Assign to Department</button>
        <button type="button" class=" button-74">Add Department</button>
      </div>
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
            <div class="table-responsive bg-white rounded-xl mb-4 h-400 px-10">
              <table class="table project-list-table table-nowrap align-middle table-borderless">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Role</th>
                    <th scope="col">Department</th>
                    <th scope="col">Account_ID</th>
                    <th scope="col" style="width: 200px;">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <?php
                  $users = [
                    [
                        'name' => 'Frederick White',
                        'role' => 'Head',
                        'department' => 'Marketing',
                        'id' => 112,
                    ],
                    [
                        'name' => 'John Doe',
                        'role' => 'Director',
                        'department' => 'IT',
                        'id' => 113,
                    ],
                    [
                        'name' => 'Jane Smith',
                        'role' => 'Staff',
                        'department' => 'Sales',
                        'id' => 114,
                    ],
                    [
                        'name' => 'Alice Johnson',
                        'role' => 'Admin',
                        'department' => 'Human Resources',
                        'id' => 115,
                    ],
                    [
                        'name' => 'Bob Brown',
                        'role' => 'Staff',
                        'department' => 'IT',
                        'id' => 116,
                    ],
                    [
                        'name' => 'Charlie Davis',
                        'role' => 'Staff',
                        'department' => 'Marketing',
                        'id' => 117,
                    ],
                    [
                        'name' => 'David Evans',
                        'role' => 'Staff',
                        'department' => 'Sales',
                        'id' => 118,
                    ],
                    [
                        'name' => 'Eva Foster',
                        'role' => 'Staff',
                        'department' => 'Human Resources',
                        'id' => 119,
                    ],
                ];

                  foreach ($users as $user) {
                    echo '
                    <tr>
                      
                      <td>
                        <div class="avatar-sm d-inline-block me-2">
                          <div class="avatar-title bg-soft-primary rounded-circle text-primary">
                            <i class="mdi mdi-account-circle m-0"></i>
                          </div>
                        </div>
                        <a href="#" class="text-body">' . $user['name'] . '</a>
                      </td>
                      <td><span class="badge badge-soft-danger mb-0">' . $user['role'] . '</span></td>
                      <td>' . $user['department'] . '</td>
                      <td>' . $user['id'] . '</td>
                      <td>
                        <ul class="list-inline mb-0">
                          <li class="list-inline-item">
                            <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" class="px-2 text-primary">
                              <i class="bx bx-pencil font-size-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" class="px-2 text-danger">
                              <i class="bx bx-trash-alt font-size-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item dropdown">
                            <a class="text-muted dropdown-toggle font-size-18 px-2" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                              <i class="bx bx-dots-vertical-rounded"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="#">Change Role</a>
                              <a class="dropdown-item" href="#">Delete from apartment</a>
     
                            </div>
                          </li>
                        </ul>
                      </td>
                    </tr>';
                  }
                  ?>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="row g-0 align-items-center pb-4">
        <div class="col-sm-6">
          <div>
            <p class="mb-sm-0">Showing 1 to 10 of 57 entries</p>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="float-sm-end">
            <ul class="pagination mb-sm-0">
              <li class="page-item disabled">
                <a href="#" class="page-link"><i class="mdi mdi-chevron-left"></i></a>
              </li>
              <li class="page-item active"><a href="#" class="page-link">1</a></li>
              <li class="page-item"><a href="#" class="page-link">2</a></li>
              <li class="page-item"><a href="#" class="page-link">3</a></li>
              <li class="page-item"><a href="#" class="page-link">4</a></li>
              <li class="page-item"><a href="#" class="page-link">5</a></li>
              <li class="page-item">
                <a href="#" class="page-link"><i class="mdi mdi-chevron-right"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script type="text/javascript"></script>
  </section>
</body>