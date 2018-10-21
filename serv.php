<?php
$servername = "localhost";
$username = "vladysl9_doopa";
$password = "Forzamilan22";
$dbname = "vladysl9_doopadata";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 

$sql = "SELECT author, content FROM Comments";
$result = $conn->query($sql);
$data = array();
while($row = mysqli_fetch_assoc($result)) {
    $data[]=$row;
}
echo json_encode($data);

?>