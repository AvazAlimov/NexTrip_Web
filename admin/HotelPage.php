<!DOCTYPE html>
<html lang="en">
<head>
    <title>Add Hotel Page</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <style>
        body {
            background-image: url("../src/Images/17.jpg");
        }

        h2 {
            text-align: center;
        }
    </style>
</head>
<body>
<?php
$serverName = "localhost";
$hostName = "root";
$pass = "inhamoodle";
$database = "nextripdb";
$conn = null;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    try {
        $conn = new PDO("mysql:host=$serverName;dbname=$database", $hostName, $pass);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $name = $_POST['name'];
        $info = $_POST['information'];
        $location = $_POST['location'];
        $startPrice = $_POST['startPrice'];
        $endPrice = $_POST['endPrice'];
        $freeWifi = $_POST['freeWifi'];
        $freeParking = $_POST['freeParking'];
        $freeYard = $_POST['freeYard'];
        $facebook = $_POST['facebook'];
        $site = $_POST['site'];
        $mail = $_POST['mail'];
        $telegram = $_POST['telegram'];
        $phone = $_POST['phone'];
        $amenities = array();
        $contacts = array();
        $images = array();

        if (isset($freeWifi))
            array_push($amenities, $freeWifi);
        if (isset($freeParking))
            array_push($amenities, $freeWifi);
        if (isset($freeYard))
            array_push($amenities, $freeYard);

        if (!empty($facebook))
            array_push($contacts, $facebook);
        if (!empty($mail))
            array_push($contacts, $mail);
        if (!empty($site))
            array_push($contacts, $site);
        if (!empty($telegram))
            array_push($contacts, $telegram);
        if (!empty($phone))
            array_push($contacts, $phone);

        $hotel = new Hotel();
        $hotel->setName($name);
        $hotel->setInfo($info);
        $hotel->setLocation($location);
        $hotel->setStartingPrice($startPrice);
        $hotel->setEndingPrice($endPrice);
        $hotel->setImages($images);
        $hotel->setAmenities($amenities);
        $hotel->setContacts($contacts);


        $sql = "INSERT INTO hotel('Name', 'Info', 'Location', 'Images', 'Contacts', 'Amenities', 'StartPrice', 'EndPrice') VALUES ('" . $hotel->getName() . "', '" . $hotel->getInfo() . "','" . $hotel->getLocation() . "','" . $hotel->getImageLinks() . "','" . $hotel->contactsToString() . "','" . $hotel->ammenityToString() . "','" . $hotel->getStartingPrice() . "','" . $hotel->getEndingPrice() . "');";
        $conn->exec($sql);
        header("Location: dashboard.php");
    } catch (PDOException $e) {
        echo $e->getMessage();
    }
}
?>
<div class="container text-center">
    <h2>Information</h2>
    <form method="post" class="form-horizontal">
        <div class="form-group">
            <label class="control-label col-sm-2" for="email">Name:</label>
            <div class="col-sm-10">
                <input type="email" class="form-control" placeholder="Enter name" name="name">
            </div>
        </div>
        <div class="form-group">
            <label class="control-label col-sm-2" for="lct">Location:</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="lct" placeholder="Enter location" name="location"
                       style="margin-top: 10px;">
            </div>
        </div>
        <div class="form-group">
            <label class="control-label col-sm-2" for="inf">Information:</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inf" placeholder="Enter information" name="information"
                       style="margin-top: 10px;">
            </div>
        </div>

        <div class="form-group row text-center" style="text-align: center;">
            <div class="col-sm-3">
                <label for="start">Start price</label>
                <input class="form-control" id="start" type="text" name="startPrice">
            </div>
            <div class="col-sm-3">
                <label for="end">End price</label>
                <input class="form-control" id="end" type="text" name="endPrice">
            </div>
        </div>

        <div class="form-group row" style="text-align: center;">
            <div class="col-xs-3">
                <label for="addPic">Add Picture</label>
                <button type="button" class="btn btn-default" id="addPic">Browse</button>
            </div>
        </div>

        <div class="container text-center" style="margin-bottom: 10px; ">
            <h2>Amenities</h2>
            <form>
                <label class="checkbox-inline">
                    <input type="checkbox" name="freeWifi">Free Wifi
                </label>
                <label class="checkbox-inline">
                    <input type="checkbox" value="" name="freeParking">Free Parking
                </label>
                <label class="checkbox-inline">
                    <input type="checkbox" value="" name="freeYard">Free Children Yard
                </label>
            </form>
        </div>

        <div class="form-group">
            <label class="control-label col-sm-2" for="facebook">Facebook:</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="facebook" placeholder="Facebook address" name="facebook">
            </div>
        </div>
        <div class="form-group">
            <label class="control-label col-sm-2" for="site">Site:</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="site" placeholder="Site address" name="site"
                       style="margin-top: 10px;">
            </div>
        </div>
        <div class="form-group">
            <label class="control-label col-sm-2" for="mail">Mail:</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="mail" placeholder="Mail address" name="mail"
                       style="margin-top: 10px;">
            </div>
        </div>
        <div class="form-group">
            <label class="control-label col-sm-2" for="tg">Telegram:</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="tg" placeholder="Telegram Link" name="telegram"
                       style="margin-top: 10px;">
            </div>
        </div>
        <div class="form-group">
            <label class="control-label col-sm-2" for="ph">Phone:</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="ph" placeholder="Mail address" name="phone"
                       style="margin-top: 10px;">
            </div>
        </div>

        <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
                <button type="submit" class="btn btn-default" style="margin-top: 10px;">Submit</button>
            </div>
        </div>
    </form>
</div>

</body>
</html>