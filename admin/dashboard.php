<!DOCTYPE html>
<html lang="en">
<head>
    <title>NexTrip</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <style>
        body {
            font: 400 15px Lato, sans-serif;
            line-height: 1.8;
            color: #818181;
        }

        h1 {
            text-shadow: 0 0 8px #212121;
        }

        h2 {
            font-size: 24px;
            text-transform: uppercase;
            color: #303030;
            font-weight: 600;
            margin-bottom: 30px;
        }

        h4 {
            font-size: 19px;
            line-height: 1.375em;
            color: #303030;
            font-weight: 400;
            margin-bottom: 30px;
        }

        .container-fluid {
            padding: 60px 50px;
        }

        .bg-grey {
            background-color: #f6f6f6;
        }

        .logo-small {
            top: 25%;
            color: #fff;
            font-size: 100px;
        }

        .thumbnail {
            padding: 0 0 15px 0;
            border: none;
            border-radius: 0;
            box-shadow: 0 0 20px rgba(0, 0, 0, .4);
        }

        .thumbnail:active {
            box-shadow: 0 0 10px rgba(0, 0, 0, .4);
        }

        .thumbnail img {
            width: 100%;
            height: 100%;
            margin-bottom: 10px;
            background-size: cover;

        }

        .item h4 {
            font-size: 19px;
            line-height: 1.375em;
            font-weight: 400;
            font-style: italic;
            margin: 70px 0;
        }

        .item span {
            font-style: normal;
        }

        .navbar {
            margin-bottom: 0;
            background-color: #d58512;
            z-index: 9999;
            border: 0;
            font-size: 12px !important;
            line-height: 1.42857143 !important;
            letter-spacing: 4px;
            border-radius: 0;
            font-family: Montserrat, sans-serif;
            box-shadow: 0 8px 5px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.19);
        }

        .navbar li a, .navbar .navbar-brand {
            color: #fff !important;
        }

        .navbar-nav li a:hover, .navbar-nav li.active a {
            color: #d58512 !important;
            background-color: #fff !important;
        }

        .navbar-default .navbar-toggle {
            border-color: transparent;
            color: #fff !important;
        }

        footer .glyphicon {
            font-size: 20px;
            margin-bottom: 20px;
            color: #d58512;
        }

        .slideanim {
            visibility: hidden;
        }

        @keyframes slide {
            0% {
                opacity: 0;
                transform: translateY(70%);
            }
            100% {
                opacity: 1;
                transform: translateY(0%);
            }
        }

        @-webkit-keyframes slide {
            0% {
                opacity: 0;
                -webkit-transform: translateY(70%);
            }
            100% {
                opacity: 1;
                -webkit-transform: translateY(0%);
            }
        }

        @media screen and (max-width: 768px) {
            .col-sm-4 {
                text-align: center;
                margin: 25px 0;
            }
        }

        a {
            text-decoration: none;
        }
    </style>
    <script>
        $(document).ready(function () {
            // Add smooth scrolling to all links in navbar + footer link
            $(".navbar a, footer a[href='#myPage']").on('click', function (event) {
                // Make sure this.hash has a value before overriding default behavior
                if (this.hash !== "") {
                    // Prevent default anchor click behavior
                    event.preventDefault();

                    // Store hash
                    var hash = this.hash;

                    // Using jQuery's animate() method to add smooth page scroll
                    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 900, function () {

                        // Add hash (#) to URL when done scrolling (default click behavior)
                        window.location.hash = hash;
                    });
                } // End if
            });

            $(window).scroll(function () {
                $(".slideanim").each(function () {
                    var pos = $(this).offset().top;

                    var winTop = $(window).scrollTop();
                    if (pos < winTop + 600) {
                        $(this).addClass("slide");
                    }
                });
            });
        })
    </script>
</head>
<body id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">
<?php
$serverName = "localhost";
$name = "root";
$pass = "inhamoodle";
$database = "nextripdb";
$conn = null;
?>
<div class="jumbotron text-center bg-grey">
    <div class="container-fluid text-center">
        <div class="col-sm-3">
            <a href="Hotels.php">
                <div class="thumbnail">
                    <div style="height: 200px; background-color: #999;">
                        <span class="glyphicon glyphicon-home logo-small"></span>
                    </div>
                    <h2><strong>HOTELS</strong></h2>
                    <h3>
                        <?php
                        $conn = new PDO("mysql:host=$serverName;dbname=$database", $name, $pass);
                        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                        $sql = "SELECT * FROM hotel;";
                        $statement = $conn->prepare($sql);
                        $statement->execute();
                        $result = $statement->rowCount();
                        print $result;
                        ?>
                    </h3>
                </div>
            </a>
        </div>
        <div class="col-sm-3">
            <div class="thumbnail">
                <div style="height: 200px; background-color: #999;">
                    <span class="glyphicon glyphicon-glass logo-small"></span>
                </div>
                <h2><strong>RESTAURANTS</strong></h2>
                <h3>
                    <?php
                    $conn = new PDO("mysql:host=$serverName;dbname=$database", $name, $pass);
                    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                    $sql = "SELECT * FROM restaurant;";
                    $statement = $conn->prepare($sql);
                    $statement->execute();
                    $result = $statement->rowCount();
                    print $result;
                    ?>
                </h3>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="thumbnail">
                <div style="height: 200px; background-color: #999;">
                    <span class="glyphicon glyphicon-film logo-small"></span>
                </div>
                <h2><strong>ENTERTAINMENTS</strong></h2>
                <h3>
                    <?php
                    $conn = new PDO("mysql:host=$serverName;dbname=$database", $name, $pass);
                    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                    $sql = "SELECT * FROM entertaining;";
                    $statement = $conn->prepare($sql);
                    $statement->execute();
                    $result = $statement->rowCount();
                    print $result;
                    ?>
                </h3>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="thumbnail">
                <div style="height: 200px; background-color: #999;">
                    <span class="glyphicon glyphicon-tags logo-small"></span>
                </div>
                <h2><strong>THINGS TO DO</strong></h2>
                <h3>
                    <?php
                    $conn = new PDO("mysql:host=$serverName;dbname=$database", $name, $pass);
                    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                    $sql = "SELECT * FROM thingstodo;";
                    $statement = $conn->prepare($sql);
                    $statement->execute();
                    $result = $statement->rowCount();
                    print $result;
                    ?>
                </h3>
            </div>
        </div>
    </div>
</div>
<nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#myPage"><strong>NexTrip</strong></a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav navbar-right">
                <li><a href="#hotels">HOTELS</a></li>
                <li><a href="#restaurants">RESTAURANTS</a></li>
                <li><a href="#entertainment">ENTERTAINMENT</a></li>
                <li><a href="#thingstodo">THINGS TO DO</a></li>
            </ul>
        </div>
    </div>
</nav>
<div id="hotels" class="container-fluid text-center">
    <h2>Manage Hotels</h2><br>
    <div class="row text-center">
        <a href="HotelPage.php">
            <div class="col-sm-4">
                <div class="thumbnail">
                    <div style="height: 200px; background-color: #4CAF50;">
                        <span class="glyphicon glyphicon-plus logo-small"></span>
                    </div>
                    <h2><strong>ADD</strong></h2>
                </div>
            </div>
        </a>
        <div class="col-sm-4">
            <div class="thumbnail">
                <div style="height: 200px; background-color: #00BCD4;">
                    <span class="glyphicon glyphicon-edit logo-small"></span>
                </div>
                <h2><strong>EDIT</strong></h2>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="thumbnail">
                <div style="height: 200px; background-color: #FF5722;">
                    <span class="glyphicon glyphicon-trash logo-small"></span>
                </div>
                <h2><strong>DELETE</strong></h2>
            </div>
        </div>
    </div>
</div>
<div id="restaurants" class="container-fluid text-center bg-grey">
    <h2>Manage Restaurants</h2><br>
    <div class="row text-center">
        <div class="col-sm-4">
            <a href="RestaurantPage.php">
                <div class="thumbnail">
                    <div style="height: 200px; background-color: #4CAF50;">
                        <span class="glyphicon glyphicon-plus logo-small"></span>
                    </div>
                    <h2><strong>ADD</strong></h2>
                </div>
            </a>
        </div>
        <div class="col-sm-4">
            <div class="thumbnail">
                <div style="height: 200px; background-color: #00BCD4;">
                    <span class="glyphicon glyphicon-edit logo-small"></span>
                </div>
                <h2><strong>EDIT</strong></h2>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="thumbnail">
                <div style="height: 200px; background-color: #FF5722;">
                    <span class="glyphicon glyphicon-trash logo-small"></span>
                </div>
                <h2><strong>DELETE</strong></h2>
            </div>
        </div>
    </div>
</div>
<div id="entertainment" class="container-fluid text-center">
    <h2>Manage Entertainment</h2><br>
    <div class="row text-center">
        <div class="col-sm-4">
            <div class="thumbnail">
                <div style="height: 200px; background-color: #4CAF50;">
                    <span class="glyphicon glyphicon-plus logo-small"></span>
                </div>
                <h2><strong>ADD</strong></h2>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="thumbnail">
                <div style="height: 200px; background-color: #00BCD4;">
                    <span class="glyphicon glyphicon-edit logo-small"></span>
                </div>
                <h2><strong>EDIT</strong></h2>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="thumbnail">
                <div style="height: 200px; background-color: #FF5722;">
                    <span class="glyphicon glyphicon-trash logo-small"></span>
                </div>
                <h2><strong>DELETE</strong></h2>
            </div>
        </div>
    </div>
</div>
<div id="thingstodo" class="container-fluid text-center bg-grey">
    <h2>Manage Things To Do</h2><br>
    <div class="row text-center">
        <div class="col-sm-4">
            <div class="thumbnail">
                <div style="height: 200px; background-color: #4CAF50;">
                    <span class="glyphicon glyphicon-plus logo-small"></span>
                </div>
                <h2><strong>ADD</strong></h2>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="thumbnail">
                <div style="height: 200px; background-color: #00BCD4;">
                    <span class="glyphicon glyphicon-edit logo-small"></span>
                </div>
                <h2><strong>EDIT</strong></h2>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="thumbnail">
                <div style="height: 200px; background-color: #FF5722;">
                    <span class="glyphicon glyphicon-trash logo-small"></span>
                </div>
                <h2><strong>DELETE</strong></h2>
            </div>
        </div>
    </div>
</div>
<br>
<footer class="container-fluid text-center">
    <a href="#myPage" title="To Top">
        <span class="glyphicon glyphicon-chevron-up"></span>
    </a>
    <p>This web site made by Avaz Alimov and Nasiba Lutfullaeva</p>
</footer>
</body>
</html>