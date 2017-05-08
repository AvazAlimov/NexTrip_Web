<?php
$serverName = "localhost";
$hostName = "root";
$pass = "inhamoodle";
$database = "nextripdb";
$conn = null;

if (isset($_REQUEST['submit'])) {
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