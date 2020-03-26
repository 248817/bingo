<?php

header("Content-Type: text/html; charset=UTF-8"); 

echo ("<script charset='utf-8'>.....</script>");

$user = $_POST["user"];
$isPC=$_POST["isPC"];
$bingoValue = $_POST["binggovalue"];

print "<BR>";

$stuff=explode(',',$bingoValue);
$cnt = count($stuff);

print "<BR>";

for($i=0; $i<$cnt; $i++){
    print "$stuff[$i]";
    if($stuff[$i]=="-1"||$stuff[$i]=="-2"){
        print "출력오류";
        $flag="오류로 장난치시면 위험해요....";
        echo  "<script>alert('$flag');</script>";
        header( 'Location:http://l01l001.dothome.co.kr/bingo/sorrysorrysorrysorrysorry.html' );
        exit;
    }
}
$ans =array("00","01","02","05","07","08","09","10","13","15","17","22","23","25","26","27","28","29");
$userans=array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
$SIZE = 18;
$line=0;
for($i =0; $i<$cnt; $i++){
    for($j=0; $j<$SIZE; $j++){
        if($stuff[$i]==$ans[$j]){
            $userans[$i]=1;
        }
    }
}
for($i =0; $i<4; $i++){
    for($j=0; $j<4; $j++){
        $k=4*($i)+($j);
        print "$userans[$k]";
    }
    print "<BR>";
}
print "<BR>";
//채점
$rowline=0;
$colline=0;
$xline=0;
$col=0;
for($i=0; $i<4; $i++){
    $row=0;
    $col=0;
    for($j=0; $j<4; $j++){
        if($userans[4*($i)+$j]==1)
        {
            $row++;
        }
        if($userans[($i)+4*($j)]==1){
            $col++;
        }
    }
    if($row==4){
        $rowline+=1;
    }
    if($col==4){
        $colline+=1;
    }
}
if($userans[0]==1 && $userans[5]==1 && $userans[10]==1 && $userans[15]==1){
    $xline+=1;
}
if($userans[3]==1 && $userans[6]==1 && $userans[9]==1 && $userans[12]==1){
    $xline+=1;
}

$line = $rowline+$colline+$xline;

print "$line";
print "<BR>";

$mysqli = mysqli_connect('localhost','l01l001','spdlqjtlqkf12#','l01l001');
$mysqli->set_charset("utf8");
if($mysqli->conenct_error){
    die('Connect Error:('.$mysqli->connect_errno.')'.$mysqli->connect_error);
}

$sql = "SELECT * FROM BINGO WHERE name = '{$user}'";
$res = $mysqli->query($sql);
if($res->num_rows >= 1){

    
    header( 'Location:http://l01l001.dothome.co.kr/bingo/helpmehelpmehelpmehelpmm.html' );
    exit;
}
    
$sql="INSERT INTO BINGO (name, value, line) VALUES ('$user','$bingoValue','$line')";
$result = mysqli_query($mysqli,$sql);

if($result === false){
    echo mysqli_error($mysqli);
}
header( 'Location:http://l01l001.dothome.co.kr/bingo/helpmehelpmehelpmehelpm.html' );
$mysqli->close();


?>