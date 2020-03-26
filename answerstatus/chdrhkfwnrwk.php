<html>
   <head>
    
    <title> 총괄전용 빙고판 </title>
</head>
<body>

        <?php
            header("Content-Type: text/html; charset=UTF-8"); 
            echo ("<script charset='utf-8'>.....</script>");

            $mysqli = New MySQLi('localhost','l01l001','spdlqjtlqkf12#','l01l001');
            $ans =array("00","01","02","05","07","08","09","10","13","15","17","22","23","25","26","27","28","29");
            
    
            
            if(isset($_GET['order'])){
                $order = $_GET['order'];
            }else{
                $order = 'line';
            }

            if(isset($_GET['sort'])){
                $sort = $_GET['sort'];
            }else{
                $sort = 'DESC';
            }
            $resultSet = $mysqli->query("SELECT * FROM BINGO ORDER BY $order $sort ");
            
            if($resultSet->num_rows >0){

                $sort == 'DESC' ? $sort = 'DESC' : $sort = 'ASC' ;
                echo"
                <table border='1' style='margin-left:auto;margin-right:auto;'>
                    <tr>
                        <th><a href='?order=id&&sort=$sort'>id</a></th>
                        <th><a href='?order=name&&sort=$sort'> name</a></th>
                        <th><a href='?order=line&&sort=$sort'> bingo line </a></th>
                        <th> 실제 입력값 </th>
                ";

                while ($rows = $resultSet->fetch_assoc())
                {
                    $id = $rows['id'];
                    $name = $rows['name'];
                    $line = $rows['line'];
                    $value = $rows['value'];
                    $stuff=explode(',',$value);
                    $cnt = count($stuff);
                    $ans =array("00","01","02","05","07","08","09","10","13","15","17","22","23","25","26","27","28","29");
                    $userans=array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
                    $answerarray = array('00'=>'패스','01'=>'우주','02'=>'우표','03'=>'꼬리','04'=>'표지판','05'=>'황금','06'=>'북마크','07'=>'모서리','08'=>'수평','09'=>'포톤','10'=>'풍선','11'=>'스파게티','12'=>'케일','13'=>'버튼','14'=>'선택','15'=>'천사','16'=>'스타일','17'=>'폭발','18'=>'비트','19'=>'오늘','20'=>'그림자','21'=>'스피드','22'=>'동전','23'=>'기하학','24'=>'친구','25'=>'멤버','26'=>'호텔','27'=>'별빛','28'=>'케이크','29'=>'음악','30'=>'프린터','31'=>'밀크티');
                    $word=array();
                    for($i=0; $i<16; $i++){
                        $word[$i] = $answerarray[$stuff[$i]];
                    }
                    for($i =0; $i<$cnt; $i++){
                        for($j=0; $j<18; $j++){
                            if($stuff[$i]==$ans[$j]){
                                $userans[$i]=1;
                            }
                        }
                    }
                    
                    echo"
                    <tr><td style='width:50px;text-align:center;'> $id </td>
                        <td > $name</td>
                        <td style='text-align:center;'> $line</td>
                        <td> <table border='1' style='width:250px;'> ";
                        
                        for($i=0; $i<4; $i++){
                            echo "<tr>";
                            for($j=0; $j<4; $j++){
                                $k = ($i)*4 + $j;
                                if($userans[$k]==1){
                                    echo "<td style='background-color:#AFA;text-align=center;'>$word[$k]</td>";
                                }else{
                                    echo "<td> $word[$k] </td>";
                                }
                            }
                            echo"</tr>";
                        }
                        echo "</table></td></tr>";
                    
                }

                echo"
                </table>
                ";


            }else
            {
                echo "No records returned.";
            }
            
        ?>

</body>
</html>