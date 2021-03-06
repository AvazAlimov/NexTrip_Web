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
    <link rel="stylesheet" href="../CSS/ThingsToDoPage.css"/>
</head>
<body>
<form method="post" style="background-color: #eee;">
    <div class="container">
        <div class="col-sm-6">
            <h1>THINGS TO DO</h1>
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
                    <textarea class="form-control" rows="5" id="comment" title="information"></textarea>
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
            <h2>Price</h2>
            <div class="row">
                <div class="input-group" STYLE="margin-bottom: 15px;">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-usd custom-icon"></i></span>
                    <input id="Price" type="text" class="form-control" name="Price" placeholder="price">
                </div>
            </div>
        </div>
        <div class="col-sm-1"></div>
        <div class="col-sm-5">

            <h2>Rules</h2>
            <div class="row">
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-question-sign custom-icon"></i></span>
                    <textarea class="form-control" rows="5" id="rules" title="rules"></textarea>
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
                                        <input id="freeWifi" name="freeWifi" type="checkbox"/>
                                        <label for="freeWifi" class="label-info"></label>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    Free Parking
                                    <div class="material-switch pull-right">
                                        <input id="freeParking" name="freeParking" type="checkbox"/>
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
                <button type="button" class="btn btn-primary btn-danger">Cancel</button>
            </div>
        </div>
    </div>
</form>
</body>
</html>