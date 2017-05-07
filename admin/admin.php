<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>NexTrip Admin Page</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body style="background-color: #90caf9;">
<?php
$servername = "localhost";
$name = "root";
$pass = "inhamoodle";
$database = "nextripdb";
$conn = null;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$database", $name, $pass);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password';";
        $statement = $conn->prepare($sql);
        $statement->execute();
        $result = $statement->fetch();
        echo $result;
        if(!empty($result))
            header('Location: dashboard.php');
        else {
            //TODO: show an error message and ask for retry
            echo "Retry";
        }

    } catch (PDOException $e) {
        echo $e->getMessage();
    }
}
?>
<div class="container" align="center">
    <h2>Admin Page</h2>
    <p>Write your username and password</p>
    <form method="post">
        <div class="form-group">
            <label for="username">Username:</label>
            <div class="input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                <input type="text" class="form-control" name="username" placeholder="Username">
            </div>
        </div>
        <div class="form-group">
            <label for="password">Password:</label>
            <div class="input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                <input type="password" class="form-control" name="password" placeholder="Password">
            </div>
        </div>
        <div class="form-group">
                <button type="submit"><i class="glyphicon glyphicon-log-in">&emsp14;</i>&emsp14;Log In</button>
        </div>
    </form>
</div>

</body>
</html>