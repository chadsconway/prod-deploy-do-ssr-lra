<?php
// validation errors
  $msgClass='';
  $msg='';

// check for submit
  if(filter_has_var(INPUT_POST, 'submit')){
    // get form data
    $name = htmlspecialchars($_POST['name']);
    $message  = htmlspecialchars($_POST['message']);

    // validation
    if(!empty($name) && !empty($message)) {
        // passed
        echo 'PASSED';
        // test email
        // if(filter_var($email, FILTER-VALIDATE_EMAIL)===false){//fail}else{//passed}
        //---------------email setup------------------
        $toEmail = '';
        $subject = 'Join request from ' .$name;
        $body = '<h2>Request to join</h2><h4>Name</h4><p>'.$name.
        '</p><h4>'.$message.'</h4>';
        $headers = 'MIME-Version: 1.0'.'\r\n';
        $headers .= 'Content-Type:text/html;charset=UTF-8'.'
          \r\n';
        // additional headers
        $headers .= 'From: '.$name. '<email>'.'\r\n';
        if(mail($toEmail, $subject, $body, $headers)){
          $msg = 'email has been sent';
          $msgClass = 'alert-success';
        }else {
          $msg = 'email was not able to send';
          $msgClass = 'alert-danger';
        }
        //---------------email setup------------------
    } else {
      // failed
      $msg = 'Please in all fields';
      $msgClass = 'alert-danger';
    }
  }
?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mail me</title>
  <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css">
</head>
<body>
  <div class="container">
    <?php if($msg != ''): ?>
      <div class="alert <?php echo $msgClass; ?>"><?php echo $msg; ?></div>
    <?php endif; ?>
    <form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
      <div class="form-group">
        <label>Name</label>
        <input type="text" name="name" class="form-control" value="<?php echo isset($_POST['name']) ? $name : ''; ?>">
      </div>
 <div class="form-group">
        <label>Message</label>
        <textarea type="text" name="message" class="form-control" value="<?php echo isset($_POST['message']) ? $message : ''; ?>"></textarea>
      </div>


      <button type="submit" name="submit" class="btn btn-primary">submit</button>
    </form>
  
</body>
</html>