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
<div class="container text-center">
    <h2>Information</h2>
    <form method="post" action="/admin/AddHotel.php" class="form-horizontal">
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
                <button type="submit" name="submit" class="btn btn-default" style="margin-top: 10px;">Submit</button>
            </div>
        </div>
    </form>
</div>

</body>
</html>