var baiduMap = {} || window.baiduMap;
var baiduStoreMapData = [] || window.baiduStoreMapData;
var baiduMapContainer = 'map_canvas';
var baiduMapZoomLevel = 15;
var defaultLat = 116.404;
var defaultLong = 39.915;


$(document).ready(function(){
	loadMap();
});


/**
 * Server call to get the store details
 */
function getStoreData(){
	/*$.ajax({
      type: "POST",
      url: "../html/response.html",
      success: function(resultData){
          alert("Save Complete : " + resultData);
          storeMapData = resultData;
      },
      error : function(errorResponse) {
    	  alert('error occured : ' + errorResponse);
      }
 });
 return storeMapData;
 */
}

/**
 * This function helps in creating common configuration and setting involved in the map generation
 */
function initBaiduMapConfig() {
	baiduMap = new BMap.Map(baiduMapContainer);
	var point = new BMap.Point(defaultLat, defaultLong);
	baiduMap.centerAndZoom(point, baiduMapZoomLevel);
	window.baiduMap = baiduMap;
}

/**
 * This function helps in loading map in the map Container
 */
function loadMap() {
	initBaiduMapConfig();
	
	/**
	 * 1. Get Server data from Server
	 * 2. Iterate over storeData and populate map
	 */
	
	//remove above hardCoding once server code is in place or custom store data provided by client in any form 
	//storeMapData = getStoreData();
	baiduStoreMapData = [{"longitude":116.34455821640596,"latitude":39.92805897486837},{"longitude":116.42014555403168,"latitude":39.90786802906522},{"longitude":116.4185905604133,"latitude":39.91800989459023},{"longitude":116.38085396878016,"latitude":39.93100637717548},{"longitude":116.42591613949898,"latitude":39.91162012284861},{"longitude":116.36005939949703,"latitude":39.92468954453223},{"longitude":116.36649123309752,"latitude":39.907918426832325},{"longitude":116.4302960828572,"latitude":39.91414002231574},{"longitude":116.33653853722959,"latitude":39.92252752030005},{"longitude":116.41794939934924,"latitude":39.908488577147516},{"longitude":116.41996497506523,"latitude":39.917056766365796},{"longitude":116.3494336999557,"latitude":39.92921395795512},{"longitude":116.3640331775793,"latitude":39.93229851896867},{"longitude":116.42396612888842,"latitude":39.912911462470774},{"longitude":116.34289374766483,"latitude":39.92972453979731},{"longitude":116.35375750734305,"latitude":39.910262310969934},{"longitude":116.37718320073068,"latitude":39.91014754195528},{"longitude":116.36840465119838,"latitude":39.92291471111395},{"longitude":116.42482514477634,"latitude":39.90979051777687},{"longitude":116.4103603329159,"latitude":39.90945976001113},{"longitude":116.34443364808553,"latitude":39.93245060847492},{"longitude":116.37382003697583,"latitude":39.91526466908088},{"longitude":116.40171776593368,"latitude":39.930939789357964},{"longitude":116.36421981807327,"latitude":39.91201613084136},{"longitude":116.36839923767323,"latitude":39.921307434122916}];
	$.each(baiduStoreMapData, function(key, storeInfo){
		addBaiduMarker(storeInfo.latitude, storeInfo.longitude);
	});
	
}

/**
 * This function helps in adding the marker on the map based on the points information requested
 * @param latitude
 * @param longitude
 */
function addBaiduMarker(latitude, longitude) {
	var baiduMarkerPoint = new BMap.Point(longitude, latitude);
	var baiduMarker = new BMap.Marker(baiduMarkerPoint);
	baiduMap.addOverlay(baiduMarker);
}

function createInfoBox() {
	
}