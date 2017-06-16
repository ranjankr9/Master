<!DOCTYPE html>
<html>
<head>

	<!-- STARTS : Custom meta info configuration -->
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
	<!-- ENDS : Custom meta info configuration -->
	
	<!-- STARTS : CSS Source configuration -->
	<link rel="stylesheet" href="<%=request.getContextPath() %>/css/storeLocator.css" lang="text/css" />
	<link rel="stylesheet" href="<%=request.getContextPath() %>/css/styles.css" lang="text/css" />
	<!-- ENDS : CSS Source configuration -->
	
	<!-- STARTS : JS Source configuration -->
	<script type="text/javascript" src="<%=request.getContextPath() %>/js/jquery-3.2.1.min.js"></script>
	<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=GW5NF4cL3N7Gsp4px1Ka1XzgRTO1pukZ"></script>
	<script type="text/javascript" src="<%=request.getContextPath() %>/js/converter.js"></script>
	<!-- ENDS : JS Source configuration -->
	
	<!-- STARTS : Title configuration -->
	<title>Baidu Map Store Locator</title>
	<!-- ENDS : Title configuration -->
	
</head>
<body>
	<div class="container">
		<div class="text" style="float: left; background-color: #fff; width: 100%;">
			<h1 style="text-align: center; width: 100%;">Store Locator </h1>
		</div>
		<div id="store_locator">
		    <div class="background">
		        <div id="search_box" class="inner-container">
		            <form class="search-container">
		                <input id="store-locator-address" type="search" name="query" placeholder="Enter City, Country or Postal/Zip Code" class="h1">
		                <div class="controls">
		                    <button type="reset" id="store-locator-reset"><i class="icon icon-close"></i></button>
		                    <button type="submit" id="store-locator-submit"><i class="icon icon-search"></i></button>
		                </div>
		            </form>
		        </div>
		        <div class="location-filters row">
		            <div class="inner-container">
		                <label class="filter replace-checkbox" for="stores">
		                    <input type="checkbox" name="store_type" value="store" id="stores" checked="checked">
		                    <span class="replace-checkbox-label h4 stores"><i class="icon icon-map-alt-marker"></i> stores</span>
		                </label>
		                <label class="filter replace-checkbox" for="showrooms">
		                    <input type="checkbox" name="store_type" value="showroom" id="showrooms" checked="checked">
		                    <span class="replace-checkbox-label h4 showrooms"><i class="icon icon-map-alt-marker"></i> showrooms</span>
		                </label>
		                <label class="filter replace-checkbox" for="outlets">
		                    <input type="checkbox" name="store_type" value="outlet" id="outlets" checked="checked">
		                    <span class="replace-checkbox-label h4 outlets"><i class="icon icon-map-alt-marker"></i> outlets</span>
		                </label>
		                <label class="filter replace-checkbox" for="current-location">
		                    <input type="checkbox" name="unique-name" id="current-location" checked="checked">
		                    <span class="replace-checkbox-label h4 location"><i class="icon icon-map-your-location"></i> your current location</span>
		              </label>
		            </div>
		        </div>
		        <div id="map_canvas" style="position: relative; overflow: hidden;"></div>
		    </div>
	    </div>
	</div>
	 <script type="text/javascript" src="<%=request.getContextPath() %>/js/storeLocator.js"></script>
	<%-- <script type="text/javascript">
	var map = new BMap.Map('map_canvas');
	map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
	var markerImage = "<%=request.getContextPath() %>/js/mapIconImages/stores-location.png";
	var baiduIcon = new BMap.Icon(markerImage);
	var marker = new BMap.Marker(new BMap.Point(116.3808, 39.9185), {icon:baiduIcon});
	
	//baiduMarker = new BMap.Marker(baiduMarkerPoint, {icon:baiduIcon});
	
	map.addOverlay(marker);
	var infoWindow = new BMap.InfoWindow('Hello!');
	marker.addEventListener('click', function(){
	    this.openInfoWindow(infoWindow);
	})
	</script> --%>	
</body>
</html>