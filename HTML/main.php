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
        h1{
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

        .img-circle{
            box-shadow: 0 0 5px rgb(0,0,0);
        }

        .jumbotron {
            background-size: cover;
            background-image: url("../src/Images/nextrip_v_2.jpg");
            color: #fff;
            padding: 100px 25px;
            font-family: Montserrat, sans-serif;
        }

        .container-fluid {
            padding: 60px 50px;
        }

        .bg-grey {
            background-color: #f6f6f6;
        }

        .logo-small {
            color: #5bc0de;
            font-size: 50px;
        }

        .thumbnail {
            padding: 0 0 15px 0;
            border: none;
            border-radius: 0;
            box-shadow: 0 0 20px rgba(0,0,0, .4);
        }

        .thumbnail img {
            width: 100%;
            height: 100%;
            margin-bottom: 10px;
            background-size: cover;

        }

        .carousel-control.right, .carousel-control.left {
            background-image: none;
            color: #5bc0de;
        }

        .carousel-indicators li {
            border-color: #5bc0de;
        }

        .carousel-indicators li.active {
            background-color: #5bc0de;
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

        .panel-footer .btn:hover {
            border: 1px solid #5bc0de;
            background-color: #fff !important;
            color: #5bc0de;
        }

        .panel-footer h3 {
            font-size: 32px;
        }

        .panel-footer h4 {
            color: #aaa;
            font-size: 14px;
        }

        .panel-footer .btn {
            margin: 15px 0;
            background-color: #5bc0de;
            color: #fff;
        }

        .navbar {
            margin-bottom: 0;
            background-color: #5bc0de;
            z-index: 9999;
            border: 0;
            font-size: 12px !important;
            line-height: 1.42857143 !important;
            letter-spacing: 4px;
            border-radius: 0;
            font-family: Montserrat, sans-serif;
        }

        .navbar li a, .navbar .navbar-brand {
            color: #fff !important;
        }

        .navbar-nav li a:hover, .navbar-nav li.active a {
            color: #5bc0de !important;
            background-color: #fff !important;
        }

        .navbar-default .navbar-toggle {
            border-color: transparent;
            color: #fff !important;
        }

        footer .glyphicon {
            font-size: 20px;
            margin-bottom: 20px;
            color: #5bc0de;
        }

        .slideanim {
            visibility: hidden;
        }

        .slide {
            animation-name: slide;
            -webkit-animation-name: slide;
            animation-duration: 1s;
            -webkit-animation-duration: 1s;
            visibility: visible;
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

    </style>
</head>
<body id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">

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
                <li><a href="#services">SERVICES</a></li>
                <li><a href="#hotels">HOTELS</a></li>
                <li><a href="#restaurants">RESTAURANTS</a></li>
                <li><a href="#entertainment">ENTERTAINMENT</a></li>
                <li><a href="#thingstodo">THINGS TO DO</a></li>
                <li><a href="#developers">DEVELOPERS</a></li>
            </ul>
        </div>
    </div>
</nav>

<div class="jumbotron text-center">
    <img src="../src/Images/512x512.png" width="25%"/>
    <form>
        <div class="input-group" style="width: 60%; margin-left: auto; margin-right: auto; box-shadow: 0 0 4px #212121">
            <input type="email" class="form-control" size="50" placeholder="Location">
            <div class="input-group-btn">
                <button type="button" class="btn btn-primary">Search</button>
            </div>
        </div>
    </form>
</div>

<div id="services" class="container-fluid text-center">
    <h2>SERVICES</h2>
    <h4>What we offer</h4>
    <br>
    <div class="row slideanim">
        <div class="col-sm-6">
            <span class="glyphicon glyphicon-bed logo-small"></span>
            <h4>HOTELS</h4>
            <p>Best hotels</p>
        </div>
        <div class="col-sm-6">
            <span class="glyphicon glyphicon-cutlery logo-small"></span>
            <h4>RESTAURANTS</h4>
            <p>Best Restaurants</p>
        </div>
    </div>
    <br><br>
    <div class="row slideanim">
        <div class="col-sm-6">
            <span class="glyphicon glyphicon-star logo-small"></span>
            <h4>ENTERTAINMENT</h4>
            <p>Best Entertainmnet</p>
        </div>
        <div class="col-sm-6">
            <span class="glyphicon glyphicon-tower logo-small"></span>
            <h4>THINGS TO DO</h4>
            <p>Best Things To Do</p>
        </div>

    </div>
</div>

<div id="hotels" class="container-fluid text-center bg-grey">
    <h2>Hotels</h2><br>
    <h4>There are many kinds of Hotels around the world</h4>
    <div class="row text-center slideanim">
        <div class="col-sm-4">
            <div class="thumbnail">
                <img src="../src/Images/1.jpg" alt="Paris">
                <p><strong>Paris</strong></p>
                <p>Yes, we built Paris</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="thumbnail">
                <img src="../src/Images/2.jpg" alt="New York">
                <p><strong>New York</strong></p>
                <p>We built New York</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="thumbnail">
                <img src="../src/Images/3.jpg" alt="San Francisco">
                <p><strong>San Francisco</strong></p>
                <p>Yes, San Fran is ours</p>
            </div>
        </div>
    </div>
</div>
<div id="restaurants" class="container-fluid text-center bg-grey">
    <h2>Restaurants</h2><br>
    <h4>There are many kinds of Restaurants around the world</h4>
    <div class="row text-center slideanim">
        <div class="col-sm-4">
            <div class="thumbnail">
                <img src="../src/Images/a.jpg" alt="Paris" width="400" height="300">
                <p><strong>Paris</strong></p>
                <p>Yes, we built Paris</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="thumbnail">
                <img src="../src/Images/351885.jpg" alt="New York" width="400" height="300">
                <p><strong>New York</strong></p>
                <p>We built New York</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="thumbnail">
                <img src="../src/Images/world-superb-resort-tree-pool-hotel-wide-screen-1920x1080.jpg" alt="San Francisco"
                     width="400"
                     height="300">
                <p><strong>San Francisco</strong></p>
                <p>Yes, San Fran is ours</p>
            </div>
        </div>
    </div>
</div>
<div id="entertainment" class="container-fluid text-center bg-grey">
    <h2>Entertainment</h2><br>
    <h4>There are many kinds of Entertainment around the world</h4>
    <div class="row text-center slideanim">
        <div class="col-sm-4">
            <div class="thumbnail">
                <img src="../src/Images/a.jpg" alt="Paris" width="400" height="300">
                <p><strong>Paris</strong></p>
                <p>Yes, we built Paris</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="thumbnail">
                <img src="../src/Images/351885.jpg" alt="New York" width="400" height="300">
                <p><strong>New York</strong></p>
                <p>We built New York</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="thumbnail">
                <img src="../src/Images/world-superb-resort-tree-pool-hotel-wide-screen-1920x1080.jpg" alt="San Francisco" width="400"
                     height="300">
                <p><strong>San Francisco</strong></p>
                <p>Yes, San Fran is ours</p>
            </div>
        </div>
    </div>
</div>
<div id="thingstodo" class="container-fluid text-center bg-grey">
    <h2>Things To Do</h2><br>
    <h4>There are many kinds of Things To Do around the world</h4>
    <div class="row text-center slideanim">
        <div class="col-sm-4">
            <div class="thumbnail">
                <img src="../src/Images/a.jpg" alt="Paris" width="400" height="300">
                <p><strong>Paris</strong></p>
                <p>Yes, we built Paris</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="thumbnail">
                <img src="../src/Images/351885.jpg" alt="New York" width="400" height="300">
                <p><strong>New York</strong></p>
                <p>We built New York</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="thumbnail">
                <img src="../src/Images/world-superb-resort-tree-pool-hotel-wide-screen-1920x1080.jpg" alt="San Francisco" width="400"
                     height="300">
                <p><strong>San Francisco</strong></p>
                <p>Yes, San Fran is ours</p>
            </div>
        </div>
    </div>
</div>
<br>
<div id="myCarousel" class="carousel slide text-center" data-ride="carousel">
    <h2>What our visitors say</h2>
    <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
        <div class="item active">
            <h4>"This site is the best. I am so happy with the result!"<br><span>Michael Roe</span>
            </h4>
        </div>
        <div class="item">
            <h4>"One word... WOW!!"<br><span>John Doe</span></h4>
        </div>
        <div class="item">
            <h4>"Could I... BE any more happy with this site?"<br><span>Chandler Bing</span>
            </h4>
        </div>
    </div>

    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div>
</div>


<div id="developers" class="container-fluid text-center">
    <h2 class="text-center">DEVELOPERS</h2>
    <br>
    <div class="row slideanim">
        <div class="col-sm-4">
            <img src="../src/Images/Avaz.jpg" class="img-circle" alt="Cinque Terre" width="140" height="160">
            <h4>AVAZ ALIMOV</h4>
            <p>Back-End and Front-End Developer </p>
        </div>
        <div class="col-sm-4">
            <img src="../src/Images/profile2.jpg" class="img-circle" alt="Cinque Terre" width="140" height="160">
            <h4>NASIBA LUTFULLAEVA</h4>
            <p>Front-End Designer</p>
        </div>
        <div class="col-sm-4">
            <span class="glyphicon glyphicon-user logo-small"></span>
            <h4>JAKHON</h4>
            <p>Presentation</p>
        </div>
    </div>
</div>

<footer class="container-fluid text-center bg-grey">
    <a href="#myPage" title="To Top">
        <span class="glyphicon glyphicon-chevron-up"></span>
    </a>
    <p>This web site made by Avaz Alimov and Nasiba Lutfullaeva</p>
</footer>

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

</body>
</html>
