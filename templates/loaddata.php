<?php
 include"config.php";
 $query="SELECT * FROM member";
 $result= mysqli_query($conn,$sql);
 $arr=array();
 while($row=mysqli_fetch_array($result)){
	 $arr[]=$row;
 }
 mysqli_close($con);
 echo json_encode($arr);