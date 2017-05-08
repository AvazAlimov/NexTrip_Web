<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>NexTrip</title>
    <script>
        window.onload = function () {
            animation();
            fadeOut();
        };
        function animation() {
            var logo = document.getElementById("logo");
            var opacity = 0.0;
            var pos = logo.style.left;
            var id = setInterval(anim_fade_in, 20);

            function anim_fade_in() {
                if (opacity >= 1.0) {
                    clearInterval(id);
                }
                else {
                    opacity += 0.01;
                    logo.style.opacity = opacity;
                }
            }

            var key = setInterval(move_left, 3);

            function move_left() {
                if (logo.offsetLeft <= 100) {
                    clearInterval(key);
                }
                else {
                    pos -= 2;
                    logo.style.left = pos + "px";
                }
            }
        }

        var contents = ["YOUR", "TOUR", "STARTS", "HERE 👉"];
        var index = 0;
        var delay = 10;

        function fadeOut() {
            var header = document.getElementById("text");
            var opacity = 0.0;
            var key = setInterval(show, delay);
            header.innerHTML = contents[index++];
            function show() {
                if (opacity >= 1.0) {
                    clearInterval(key);
                    if (index != contents.length)
                        key = setInterval(hide, delay);
                    else
                        nasiba();
                    function hide() {
                        if (opacity <= 0.0) {
                            header.innerHTML = contents[index++];
                            clearInterval(key);
                            key = setInterval(show, delay);
                        } else {
                            opacity -= 0.01;
                            header.style.opacity = opacity;
                        }
                    }
                } else {
                    opacity += 0.01;
                    header.style.opacity = opacity;
                }
            }
        }

        function nasiba() {
            var header = document.getElementById("text");
            var opacity = 1.0;
            var key = setInterval(lower, delay * 2);

            function lower() {
                if (opacity <= 0.3) {
                    clearInterval(key);
                    key = setInterval(higher, delay * 2);
                    function higher() {
                        if (opacity >= 1.0) {
                            clearInterval(key);
                            key = setInterval(lower, delay * 2);
                        } else {
                            opacity += 0.01;
                            header.style.opacity = opacity;
                        }
                    }
                } else {
                    opacity -= 0.01;
                    header.style.opacity = opacity;
                }
            }
        }
    </script>
    <style>
        @font-face {
            font-family: HelveticaNeueTPro-Roman;
            src: url("src/fonts/HelveticaNeueLTPro-Roman.otf");
        }

        @font-face {
            font-family: HelveticaNeueLTPro-Th;
            src: url("src/fonts/HelveticaNeueLTPro-Th.otf");
        }

        body {
            background-color: #222;
            text-align: center;
        }

        #text {
            cursor: pointer;
            opacity: 0;
            font-family: HelveticaNeueLTPro-Th, monospace;
            text-align: center;
            color: #fff;
            font-size: 96px;
        }

        #logo {
            margin-top: 3%;
            opacity: 0.0;
            position: relative;
            left: -30px;
            width: 40%;
        }

        div.textContainer {
            top: 35%;
            right: 20%;
            position: fixed;
        }
    </style>
</head>
<body>
<img id="logo" src="src/logo.gif" alt="NexTrip"/>
<div class="textContainer">
    <a href="HTML/bootstrap1.html" style="text-decoration: none;"><h1 id="text" class="text"></h1></a>
</div>
</body>
</html>