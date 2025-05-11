<?php
session_start();
if (isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    
  if ($username === 'potluck' && $password === 'feedMeN0w') {
    $_SESSION['loggedin'] = true;
    header('Location: signup_form.php');
    exit;
  } 
  else {
    $login_error = 'Invalid username or password.';
  }
}
if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] === true) {
  header('Location: signup_form.php');
  exit;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  
  <title>Login</title>
  <meta charset="UTF-8">
  <meta name="description" content="-">
  <meta name="author" content="--">
  <link rel="stylesheet" type="text/css" href="style1.css" >  
</head>




<body>
<h1>Login</h1>

  <form method="POST" action="login.php">
    <div id="usr">
      <label for="username"> Username: </label>
      <input type="text" id="username" name="username" required>
    </div>

    <div id="psswrd">
      <label for="password"> Password: </label>
      <input type="password" id="password" name="password" required>
    </div>

    <div>
      <button type="submit"> Login </button>
    </div>

  </form>
</body>
</html>
