<?php
/*q4t7 start*/
$rows=array(
  array("id" => 1, "acc" => "admin", "pwd" => "1234"),
  array("id" => 2, "acc" => "shu", "pwd" => "5678")
);
switch ($_GET['do']) {
  case 'check':
    $flag = false;
    foreach ($rows as $row) 
    if ($row['acc'] == $_POST['acc']) {
      $flag = true;
      break;
    }
    // if ($flag) echo "帳號重複";
    // else echo "可使用此帳號";
    echo ($flag)?"帳號重複":"可使用此帳號";
    break;
}

?>