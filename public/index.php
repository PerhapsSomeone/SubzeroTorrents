<?php



?>

<html>
<head>
    <title>SubzeroTorrents</title>
    <link rel="stylesheet" href="css/styling.css">
    <link rel="stylesheet" href="css/loader.css">
</head>
<body>

<section class="hero">
    <div class="hero-body">
        <div class="container">
            <div class="notification" style="float: right">
                    <div class="field has-addons centered is-centered">
                        <div class="control">
                            <input id="searchBox" class="input is-rounded is-centered is-large" style="float: left" placeholder="Search...">
                        </div>
                        <div class="control">
                            <button id="searchButton" class="button is-rounded is-large" style="float: left" ><i class="fas fa-search"></i></button>
                        </div>
                    </div>
            </div>
            <h1 class="title">
                SubzeroTorrents
            </h1>
            <h2 class="subtitle">
                Free torrent search engine
            </h2>
        </div>
    </div>
</section>
<!--
<div class="container is-fluid">
    <div class="notification">
        <form>
            <div class="field has-addons centered is-centered">
                <div class="control">
                    <input class="input is-rounded is-centered is-large" style="float: left" placeholder="Search...">
                </div>
                <div class="control">
                    <button class="button is-success is-rounded is-large" style="float: left"><i class="fas fa-search"></i></button>
                </div>
            </div>
        </form>
    </div>
</div>-->

<div class="container is-fluid">
    <div class="notification" id="resDiv">
        <p class="centered">Please enter a search term!</p>
    </div>
</div>

<script src="js/main.js"></script>
</body>
</html>