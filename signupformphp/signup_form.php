<?php
session_start();

if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
  header('Location: login.php');
  $_SESSION['loggedin'] = false;
  exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <title>Potluck Signup Form</title>
  <meta charset="UTF-8">
  <meta name="description" content="-">
  <meta name="author" content="--">
  <link rel="stylesheet" type="text/css" href="style2.css" >  
</head>



<body>
  <h2>Potluck Signup Form</h2>

  
  <form id="signup-form">
    
    <div id="name">
      <label for="name">Name:</label>
      <input id="name" type="text" maxlength="20"  name="name"  required>
    </div>

    <div id="item">
      <label for="item">Item:</label>
      <input id="item" type="text" maxlength="50"  name="item"  required>
    </div>

    <button type="submit"> Submit </button>
    
  </form>



</body>
</html>
