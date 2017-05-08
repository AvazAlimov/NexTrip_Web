<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>NexTrip Admin Page</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="../CSS/HotelPage.css"/>
</head>
<body>
<?php
function normalizeString($string)
{
    $returnString = "";
    for ($i = 0; $i < strlen($string); $i++) {
        if ($string[$i] == '\'')
            $returnString .= '\\' . $string[$i];
        else
            $returnString .= $string[$i];
    }
    return $returnString;
}
require_once('../classes/Hotel.php');
require_once('../classes/Contact.php');
$servername = "localhost";
$name = "root";
$pass = "inhamoodle";
$database = "nextripdb";
$conn = null;
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    try {
        $conn = new PDO("mysql:host=$servername; dbname=$database", $name, $pass);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $name = $_POST['name'];
        $info = $_POST['info'];
        $location = $_POST['location'];
        $startPrice = $_POST['startPrice'];
        $endPrice = $_POST['endPrice'];
        $freeWifi = isset($_POST['freeWifi']) && $_POST['freeWifi'] ? "1" : "0";
        $freeParking = isset($_POST['freeParking']) && $_POST['freeParking'] ? "1" : "0";
        $freeYard = isset($_POST['freeYard']) && $_POST['freeYard'] ? "1" : "0";
        $facebook = $_POST['facebook'];
        $site = $_POST['site'];
        $mail = $_POST['mail'];
        $telegram = $_POST['telegram'];
        $phone = $_POST['phone'];
        $amenities = "";
        $contacts = "";
        $images = "";

        if ($freeWifi)
            $amenities .= "Free WiFi◎";
        if ($freeParking)
            $amenities .= "Free Parking◎";
        if ($freeYard)
            $amenities .= "Free Children Yard◎";

        if (!empty($facebook))
            $contacts .= "Facebook□" . $facebook . "◎";
        if (!empty($mail))
            $contacts .= "Mail□" . $mail . "◎";
        if (!empty($site))
            $contacts .= "Site□" . $site . "◎";
        if (!empty($telegram))
            $contacts .= "Telegram□" . $telegram . "◎";
        if (!empty($phone))
            $contacts .= "PhoneNumber□" . $phone . "◎";

        if (!empty($_POST['link1']))
            $images .= $_POST['link1'] . '□';
        if (!empty($_POST['link2']))
            $images .= $_POST['link2'] . '□';
        if (!empty($_POST['link3']))
            $images .= $_POST['link3'] . '□';
        if (!empty($_POST['link4']))
            $images .= $_POST['link4'] . '□';
        if (!empty($_POST['link5']))
            $images .= $_POST['link5'] . '□';

        $name = normalizeString($name);
        $info = normalizeString($info);
        $location = normalizeString($location);
        $amenities = normalizeString($amenities);
        $contacts = normalizeString($contacts);
        $images = normalizeString($images);

        $sql = "INSERT INTO `hotel`(`Name`, `Info`, `Location`, `Images`, `Contacts`, `Amenities`, `StartPrice`, `EndPrice`) VALUES ('$name', '$info', '$location', '$images', '$contacts', '$amenities', '$startPrice', '$endPrice');";
        $conn->exec($sql);
        header("Location: dashboard.php");
    } catch (PDOException $exception) {
        echo $exception->getMessage();
    }
}
?>
<form method="post" style="background-color: #eee;">
    <div class="container vertical-center">
        <div class="col-sm-6">
            <h1>HOTEL</h1>
            <hr>
            <h2>General Information</h2>
            <div class="row">
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-pencil custom-icon"></i></span>
                    <input id="name" type="text" class="form-control" name="name" placeholder="company name">
                </div>
            </div>
            <div class="row">
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-map-marker custom-icon"></i></span>
                    <input id="location" type="text" class="form-control" name="location" placeholder="location">
                </div>
            </div>
            <div class="row">
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-question-sign custom-icon"></i></span>
                    <textarea class="form-control" rows="5" id="comment" name="info" title="information"></textarea>
                </div>
            </div>
            <h2>Contacts</h2>
            <div class="row">
                <div class="input-group">
                    <span class="input-group-addon"><i class="fa fa-facebook custom-icon" style="font-size: 22px;"></i></span>
                    <input id="facebook" type="text" class="form-control" name="facebook" placeholder="facebook link">
                </div>
            </div>
            <div class="row">
                <div class="input-group">
                    <span class="input-group-addon"><i class="fa fa-google custom-icon"
                                                       style="font-size: 16px;"></i></span>
                    <input id="mail" type="text" class="form-control" name="mail" placeholder="mail address">
                </div>
            </div>
            <div class="row">
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-globe custom-icon"></i></span>
                    <input id="site" type="text" class="form-control" name="site" placeholder="site host">
                </div>
            </div>
            <div class="row">
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-send custom-icon"></i></span>
                    <input id="telegram" type="text" class="form-control" name="telegram" placeholder="telegram link">
                </div>
            </div>
            <div class="row">
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-phone custom-icon"></i></span>
                    <input id="phone" type="text" class="form-control" name="phone" placeholder="phone number">
                </div>
            </div>
        </div>
        <div class="col-sm-1"></div>
        <div class="col-sm-5">
            <h2>Price</h2>
            <div class="row">
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-usd custom-icon"></i></span>
                    <input id="startPrice" type="text" class="form-control" name="startPrice" placeholder="start price">
                </div>
            </div>
            <div class="row">
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-usd custom-icon"></i></span>
                    <input id="endPrice" type="text" class="form-control" name="endPrice" placeholder="end price">
                </div>
            </div>
            <h2>Amenities</h2>
            <div class="row">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="panel panel-default">
                            <ul class="list-group">
                                <li class="list-group-item">
                                    Free WiFi
                                    <div class="material-switch pull-right">
                                        <input type="checkbox" id="freeWifi" name="freeWifi"/>
                                        <label for="freeWifi" class="label-info"></label>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    Free Parking
                                    <div class="material-switch pull-right">
                                        <input type="checkbox" id="freeParking" name="freeParking"/>
                                        <label for="freeParking" class="label-info"></label>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    Free Children Yard
                                    <div class="material-switch pull-right">
                                        <input id="freeYard" name="freeYard" type="checkbox"/>
                                        <label for="freeYard" class="label-info"></label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <h2>Images</h2>
            <div class="row">
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-paperclip custom-icon"></i></span>
                    <input id="link1" type="text" class="form-control" name="link1" placeholder="image link 1">
                </div>
            </div>
            <div class="row">
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-paperclip custom-icon"></i></span>
                    <input id="link2" type="text" class="form-control" name="link2" placeholder="image link 2">
                </div>
            </div>
            <div class="row">
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-paperclip custom-icon"></i></span>
                    <input id="link3" type="text" class="form-control" name="link3" placeholder="image link 3">
                </div>
            </div>
            <div class="row">
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-paperclip custom-icon"></i></span>
                    <input id="link4" type="text" class="form-control" name="link4" placeholder="image link 4">
                </div>
            </div>
            <div class="row">
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-paperclip custom-icon"></i></span>
                    <input id="link5" type="text" class="form-control" name="link5" placeholder="image link 5">
                </div>
            </div>
            <div class="row">
                <button type="submit" name="submit" class="btn btn-primary btn-success">Submit</button>
                <a href="dashboard.php">
                    <button type="button" class="btn btn-primary btn-danger">Cancel</button>
                </a>
            </div>
        </div>
    </div>
</form>
</body>
</html>