<?php
require_once "recaptchalib.php";

$servername = "localhost";
$username = "vladysl9_doopa";
$password = "Forzamilan22";
$dbname = "vladysl9_doopadata";

$secret = "6LckXHQUAAAAAEQtnR_t1Gf3pEA5cfiq-2aTseQB";
 
// empty response
$response = null;
 
// check secret key
$reCaptcha = new ReCaptcha($secret);

if ($_POST["g-recaptcha-response"]) {
    $response = $reCaptcha->verifyResponse(
        $_SERVER["REMOTE_ADDR"],
        $_POST["g-recaptcha-response"]
    );
}

if ($response != null && $response->success) {
    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $message = trim($_POST["message"]);

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $result = mysqli_query($conn,"SELECT * FROM Comments ORDER BY id DESC LIMIT 1");
    $row = $result->fetch_assoc();
    $id=$row["id"]+1;

    $sql = "INSERT INTO Comments (id, author, content)
    VALUES ($id, '$name', '$message');";

    if ($conn->query($sql) === TRUE) {
        header("Location: http://vladyslavp.sgedu.site/skrut/index.php");
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}

?>