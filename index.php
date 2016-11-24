<?php 
	$partido = "pumas-tigres";
	$likeName = "";
	$loveName = "Verón";
	$wowName = "Palencia";
	$hahaName = "Ferreti";
	$sadName = "El Arbitro";
	$angryName = "Gignac";
/*
	$partido = "leon-xolos";
	$likeName = "";
	$loveName = "Boselli";
	$wowName = "Yarbrough";
	$hahaName = "El Piojo";
	$sadName = "El Arbitro";
	$angryName = "Dayro";*/
?>
<!DOCTYPE html>
<html>
	<head>
		<title>Juanfutbol</title>
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0, minimal-ui">
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet"> 
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
		<script type="text/javascript" src="js/jquery.waypoints.js"></script>
		<script type="text/javascript">
			var partido = '<?php echo $partido; ?>';
		</script>
	</head>
	<body>
		<link rel="stylesheet" type="text/css" href="css/normalize.css">
		<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="css/style.css">

		<article style='background-image: url("images/<?php echo $partido; ?>/background.jpg");'>
			<div class="container-fluid">
				<div class="row">
					<div class="react-col col-md-4">
						<img id="cara-love" class="caras img-responsive img-center" src="images/<?php echo $partido; ?>/love1.png">
						<p id="love-name" class="react-name text-center"><?php echo $loveName; ?></p>
						<p id="love-count" class="react-count text-center"></p>
						<img class="reactios love-img" src="images/reactions/love.png">
						<div id="love-guante" class="guante"></div>
					</div>
					<div class="react-col col-md-4">
						<img id="cara-sad" class="caras img-responsive img-center" src="images/<?php echo $partido; ?>/sad1.png">
						<p id="sad-name" class="react-name text-center"><?php echo $sadName; ?></p>
						<p id="sad-count" class="react-count text-center"></p>
						<img class="reactios sad-img" src="images/reactions/sad.png">
						<div id="sad-guante" class="guante"></div>
					</div>
					<div class="react-col col-md-4">
						<img id="cara-angry" class="caras img-responsive img-center" src="images/<?php echo $partido; ?>/angry1.png">
						<p id="angry-name" class="react-name text-center"><?php echo $angryName; ?></p>
						<p id="angry-count" class="react-count text-center"></p>
						<img class="reactios angry-img" src="images/reactions/angry.png">
						<div id="angry-guante" class="guante"></div>
					</div>
				</div>
				<div id="row-2" class="row">
					<div class="react-col col-md-4 col-md-offset-2">
						<img id="cara-wow" class="caras img-responsive img-center" src="images/<?php echo $partido; ?>/wow1.png">
						<p id="wow-name" class="react-name text-center"><?php echo $wowName; ?></p>
						<p id="wow-count" class="react-count text-center"></p>
						<img class="reactios wow-img" src="images/reactions/wow.png">
						<div id="wow-guante" class="guante"></div>
					</div>
					<div class="react-col col-md-4">
						<img id="cara-haha" class="caras img-responsive img-center" src="images/<?php echo $partido; ?>/haha1.png">
						<p id="haha-name" class="react-name text-center"><?php echo $hahaName; ?></p>
						<p id="haha-count" class="react-count text-center"></p>
						<img class="reactios haha-img" src="images/reactions/haha.png">
						<div id="haha-guante" class="guante"></div>
					</div>
				</div>
			</div>
		</article>
		
		<script type="text/javascript" src="js/bootstrap.min.js"></script>
		<script type="text/javascript" src="js/script.js"></script>
	</body>
</html>