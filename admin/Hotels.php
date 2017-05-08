<!DOCTYPE html>
<html>
<head>
    <title>NexTrip</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>
<table class="table table-striped table-bordered table-hover" id="dataTables-example">
    <thead>
    <tr>
        <th>Code</th>
        <th>NIT</th>
        <th>Name</th>
        <th>Address</th>
        <th>Type</th>
    </tr>
    </thead>
    <?php
    $servername = "localhost";
    $name = "root";
    $pass = "inhamoodle";
    $database = "nextripdb";
    $conn = new PDO("mysql:host=$servername;dbname=$database", $name, $pass);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "SELECT * FROM hotel;";
    $statement = $conn->prepare($sql);
    $statement->execute();
    ?>
    <tbody>
    <?php while ($row = $statement->fetch()) {
        echo "<tr>
        <td>" . $row[0] . "</td>
        <td>" . $row[1] . "</td>
        <td>" . $row[2] . "</td>
        <td>" . $row[3] . "</td>
        <td>" . $row[4] . "</td>
        <td>" . $row[5] . "</td>
        <td>" . $row[6] . "</td>
        <td>" . $row[7] . "</td>
        <td>" . $row[8] . "</td>
        <td>" . $row[9] . "</td>
        <td>" . $row[10] . "</td>
      </tr>";
    }
    ?>
    </tbody>
</table>
</body>
</html>