/********************************* STARTS : Variable Declaration Section ***************************************/
var baiduMap = {} || window.baiduMap;
var baiduStoreMapData = [] || window.baiduStoreMapData;
var baiduMapContainer = 'map_canvas';
var baiduMapZoomLevel = 3;
var defaultLat = 39.921988;
var defaultLong = 116.417854;

var storesMarker = [];
var showRoomsMarker = [];
var outletsMarker = [];
var currentLocationMarker = [];
var searchLocBaiduMarker = null;
var storesMarkerInfoWindowContents = [];
var showRoomsMarkerInfoWindowContents = [];
var outletsMarkerInfoWindowContents = [];

var storeMarkerIcon = '../js/mapIconImages/stores-location.png';
var showRoomsMarkerIcon = '../js/mapIconImages/showrooms-location.png';
var outletsMarkerIcon = '../js/mapIconImages/outlets-location.png';
var downArrorMarkerIcon ='../js/mapIconImages/down-arrow.png';
var closeMarkerIcon = '../js/mapIconImages/infobox-close.png';
var curLocIcon = '../js/mapIconImages/current-location.png';
var searchLocIcon = '../js/mapIconImages/search_marker.png';
var aKey = 'GW5NF4cL3N7Gsp4px1Ka1XzgRTO1pukZ';

var infoWindowMarker;
/********************************* ENDS : Variable Declaration Section ***************************************/

/********************************* STARTS : On load of page, Prompt the user to allow Access Current Location and set on the Map *************************************************************************/
$(document).ready(function(){
	loadMap();
	navigator.geolocation.getCurrentPosition(translatePoint);
});

/**
 * This function helps in translating the position into coordinates
 * @param position
 */
function translatePoint(position){
     var currentLat = position.coords.latitude;
     var currentLon = position.coords.longitude;
     var gpsPoint = new BMap.Point(currentLon, currentLat);
     BMap.Convertor.translate(gpsPoint, 0, initCurrentLocationMap);    
}

/**
 * This function helps in creating and adding current location position on map.
 * @param point
 */
function initCurrentLocationMap(point){
	 var currLocationBaiduIcon = new BMap.Icon(curLocIcon, new BMap.Size(20,32), { imageOffset: new BMap.Size(0, 0), anchor: new BMap.Size(10, 30) });
	 var curLocBaiduMarker = new BMap.Marker(point, {icon:currLocationBaiduIcon});
	 currentLocationMarker.push(curLocBaiduMarker);
     baiduMap.addOverlay(curLocBaiduMarker);
}

/********************************* ENDS : Prompt the user to allow Access Current Location and set on the Map *************************************************************************/

/********************************* STARTS : Event registration and handling of the category specific user actions and search **********************************************************/
$(document).ready(function(){
	
	/********************************* STARTS : Show/Hide Stores location Section **********************************************************/
	$("input[name='store_type'][type='checkbox'][id='stores']").change(function(){
		if( $(this).prop('checked') == true ){
			showMarkers(storesMarker, storesMarkerInfoWindowContents);
		} else {
			hideMarkers(storesMarker);
		}
	});
	/********************************* ENDS : Show/Hide Stores location Section **********************************************************/
	
	/********************************* STARTS : Show/Hide ShowRooms location Section **********************************************************/
	$("input[name='store_type'][type='checkbox'][id='showrooms']").change(function(){
		if( $(this).prop('checked') == true ){
			showMarkers(showRoomsMarker, showRoomsMarkerInfoWindowContents);
		} else {
			hideMarkers(showRoomsMarker);
		}
	});
	/********************************* ENDS : Show/Hide ShowRooms location Section **********************************************************/
	
	/********************************* STARTS : Show/Hide outlets location Section **********************************************************/
	$("input[name='store_type'][type='checkbox'][id='outlets']").change(function(){
		if( $(this).prop('checked') == true ){
			showMarkers(outletsMarker, outletsMarkerInfoWindowContents);
		} else {
			hideMarkers(outletsMarker);
		}
	});
	/********************************* ENDS : Show/Hide outlets location Section **********************************************************/
	
	/********************************* STARTS : Show/Hide current location Section **********************************************************/
	$("input[name='unique-name'][type='checkbox'][id='current-location']").change(function(){
		if( $(this).prop('checked') == true ){
			currentLocationMarker.forEach(function(marker) {
				baiduMap.addOverlay(marker);
			});
		} else {
			currentLocationMarker.forEach(function(marker) {
				baiduMap.removeOverlay(marker);
			});
		}
	});
	/********************************* ENDS : Show/Hide current location Section **********************************************************/
	
	/********************************* STARTS : Search Section **********************************************************/
	 $(".search-container").submit(function(e){
	        e.preventDefault();
	        if(searchLocBaiduMarker) {
	        	console.log('Removal of previous search location overlay : ' + searchLocBaiduMarker);
	        	baiduMap.removeOverlay(searchLocBaiduMarker);
	        	searchLocBaiduMarker = null;
	        } 
        	var address = $(this).find("input[name='query']").val();
	        if (address) {
	        	loadBaiduSearchLocOnMap(address);
	        }
	    });
		
	 //Reset the search section
	 $("#store-locator-reset").click(function(e){
        e.preventDefault();
        $("#store-locator-address").val("");
    });
    
    /**
     * This function helps in loading search results on Map with Baidu API
     */
   function loadBaiduSearchLocOnMap(address) {
	   console.log('Search requested for location : ' + address);
	   var myGeo = new BMap.Geocoder();
       myGeo.getPoint(address, function(point){
       	if (point) {
       		console.log('Search Location found , {Longitude = ' + point.lng + ',  latitude = ' + point.lat + '}');
       		var searchLocationBaiduIcon = new BMap.Icon(searchLocIcon, new BMap.Size(20,32), { imageOffset: new BMap.Size(0, 0), anchor: new BMap.Size(10, 30) });
  	 		searchLocBaiduMarker = new BMap.Marker(point, {icon:searchLocationBaiduIcon});
  	 	 	baiduMap.addOverlay(searchLocBaiduMarker);
      	} else {
      			console.log('Failed to search location : ' + address);
      			loadAltBaidyuSearchLocOnMap(address);
      	}
   	}, "Beijing");
   } 
   
   /**
    * This functiona acts as the alternate method to help in searching the address
    */
   function loadAltBaidyuSearchLocOnMap(searchAddress){
	   console.log('START : loadAltBaidyuSearchLocOnMap() => ' + searchAddress);
	   $.ajax({
		      type: "GET",
		      url: " https://maps.googleapis.com/maps/api/geocode/json",
		      data : { address : searchAddress },
		      success: function(searchResult){
		          console.log("Search location results : " + searchResult);
		          populateSearchResultsOnMap(searchResult);
		      },
		      error : function(errorResponse) {
		    	  console.log('error occured : ' + errorResponse);
		      }
		 });
	   console.log('END : loadAltBaidyuSearchLocOnMap() => ' + searchAddress);
   }
   
   /**
    * This populates the search results on the baidu map
    */
   function populateSearchResultsOnMap(searchResult) {
	   if(searchResult && searchResult.status === 'OK') {
		   var longitude = searchResult.results[0].geometry.location.lng;
		   var latitude = searchResult.results[0].geometry.location.lat;
		   mapToBaiduLocation(longitude, latitude);
	   } else {
		   console.log("Failed to search through alternate method");
	   }
   }

   /**
    * This function helps in getting equivalent Baidu map coordinates
    */
   function mapToBaiduLocation(longitude, latitude){
		   var reqCoords = longitude + ',' + latitude + ';'	+ longitude + ',' + latitude;
		   console.log(' reqCoords : ' + reqCoords);
		   $.ajax({
			      type: "GET",
			      url: " http://api.map.baidu.com/geoconv/v1/?coords="+reqCoords,
			      data : { from : 3, to : 5, ak : aKey },
			      dataType : 'jsonp',
			      success: function(baiduMappedLocationResult){
			          console.log("Baidu Mapped location results : " + baiduMappedLocationResult);
			          ShowSearchResultsOnMap(baiduMappedLocationResult);
			      },
			      error : function(errorResponse) {
			    	  console.log('error occured : ' + errorResponse);
			      }
			 });
   }
   
   /**
    * This function helps in adding marker on map based on the search result location
    */
   function ShowSearchResultsOnMap(baiduMappedLocationResult) {
	   if(baiduMappedLocationResult && baiduMappedLocationResult.status == 0) {
		   var baiduSearchLongitude = baiduMappedLocationResult.result[0].x;
		   var baiduSearchLatitude = baiduMappedLocationResult.result[0].y;
		   var searchResultPoint = new BMap.Point(baiduSearchLongitude, baiduSearchLatitude);
		   var searchLocationBaiduIcon = new BMap.Icon(searchLocIcon, new BMap.Size(20,32), { imageOffset: new BMap.Size(0, 0), anchor: new BMap.Size(10, 30) });
		   console.log('Search Location found , {Longitude = ' + baiduSearchLongitude + ',  latitude = ' + baiduSearchLatitude + '}');
 	 		searchLocBaiduMarker = new BMap.Marker(searchResultPoint, {icon:searchLocationBaiduIcon});
 	 	 	baiduMap.addOverlay(searchLocBaiduMarker);
	   }
   }
   
 /********************************* ENDS : Search Section **********************************************************/

});

/********************************* ENDS : Event registration and handling of the category specific user actions and search **********************************************************/

/****************** STARTS : Server call section to retrieve store information in order to show them on map ************************************/
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


/****************** ENDS : Server call section to retrieve store information in order to show them on map ************************************/

/**
 * This function helps in creating common configuration and setting involved in the map generation
 */
function initBaiduMapConfig() {
	baiduMap = new BMap.Map(baiduMapContainer);
	var point = new BMap.Point(defaultLong, defaultLat);
	baiduMap.centerAndZoom(point, baiduMapZoomLevel);
	baiduMap.enableScrollWheelZoom();
	baiduMap.enableContinuousZoom();	
	baiduMap.enablePinchToZoom();
	baiduMap.addControl(new BMap.NavigationControl());
	baiduMap.addControl(new BMap.ScaleControl());
	baiduMap.addControl(new BMap.OverviewMapControl());
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
	baiduStoreMapData = [
	                     {"longitude":116.417854,"latitude":39.921988,"type":"store","storeName":"Store A","StoreURL":"","addressLine1":"Store A Line 1","addressLine2":"Store A Line 2","formattedStoreContactNo":"(123) 459-1234","storeDescription":"Store A Description"},
	                     {"longitude":116.406605,"latitude":39.921585,"type":"showroom","storeName":"ShowRoom A","StoreURL":"","addressLine1":"ShowRoom A Line 1","addressLine2":"ShowRoom A Line 2","formattedStoreContactNo":"(123) 459-1236","storeDescription":"ShowRoom A Description"},
	                     {"longitude":116.412222,"latitude":39.912345,"type":"outlets","storeName":"Outlets B","StoreURL":"","addressLine1":"Outlets A Line 1","addressLine2":"Outlets A Line 2","formattedStoreContactNo":"(123) 459-1238","storeDescription":"Outlets A Description"}
	                    ];
	$.each(baiduStoreMapData, function(key, storeInfo){
		addBaiduMarker(storeInfo);
	});
	
}

/**
 * This function helps in adding the marker on the map based on the points information requested
 * @param latitude
 * @param longitude
 */
function addBaiduMarker(storeInfo) {
	var latitude = storeInfo.latitude;
	var longitude = storeInfo.longitude;
	var markerType = storeInfo.type;
	var addedMarkers;
	var infoWindowContent;
	var storeName = storeInfo.storeName;
	infoWindowContent = createInfoBoxContent(storeInfo);
	if(markerType === 'store') {
		storesMarkerInfoWindowContents.push(infoWindowContent);
		addedMarkers = createAndAddBaiduMarkerToMap(longitude, latitude, storeMarkerIcon, storeName);
		storesMarker.push(addedMarkers);
	} else if(markerType === 'showroom') {
		showRoomsMarkerInfoWindowContents.push(infoWindowContent);
		addedMarkers = createAndAddBaiduMarkerToMap(longitude, latitude, showRoomsMarkerIcon, storeName);
		showRoomsMarker.push(addedMarkers);
	} else if ( markerType === 'outlets') {
		outletsMarkerInfoWindowContents.push(infoWindowContent);
		addedMarkers = createAndAddBaiduMarkerToMap(longitude, latitude, outletsMarkerIcon, storeName);
		outletsMarker.push(addedMarkers);
	}

	//Click event handler for showing info window for each marker
	showInfoWindow(addedMarkers, infoWindowContent);
	
}

/**
 * This function helps in creating and adding marker category specific to the BAIDU map
 * @param longitude
 * @param latitude
 * @param markerImage
 * @returns {BMap.Marker}
 */
function createAndAddBaiduMarkerToMap(longitude, latitude, markerImage, storeName) {
	
	var baiduMarkerPoint;
	var baiduIcon;
	var baiduMarker;
	baiduMarkerPoint = new BMap.Point(longitude, latitude);
	baiduIcon = new BMap.Icon(markerImage, new BMap.Size(20,32), { imageOffset: new BMap.Size(0, 0), anchor: new BMap.Size(10, 30), infoWindowAnchor: new BMap.Size(10, 0)});
	baiduMarker = new BMap.Marker(baiduMarkerPoint, {icon:baiduIcon});
	baiduMarker.setTitle(storeName);
	baiduMap.addOverlay(baiduMarker);
	return baiduMarker;
}

/**
 * This helps in showing markers at run time
 * @param baiduMarkers
 */
function showMarkers(baiduMarkers, infoWindoContentData) {
	baiduMarkers.forEach(function(marker, index) {
		baiduMap.addOverlay(marker);
		showInfoWindow(marker, infoWindoContentData[index]);
	});
}

/**
 * This helps in hiding markers at run time
 * @param baiduMarkers
 */
function hideMarkers(baiduMarkers) {
	baiduMarkers.forEach(function(marker) { 
		baiduMap.removeOverlay(marker);
	});
}

/**
 * This function create context to be shown on the info window
 * @param storeInfo
 * @returns {String}
 */
function createInfoBoxContent(storeInfo) {
	
	var storeName = storeInfo.storeName;
	var storeURL = storeInfo.StoreURL;
	var addressLine1 = storeInfo.addressLine1;
	var addressLine2 = storeInfo.addressLine2;
	var formattedStoreContactNo = storeInfo.formattedStoreContactNo;
	var storeDescription = storeInfo.storeDescription;
	
	var content = '<img id = "closeWaiduInfoBox" align = "right" src="' + closeMarkerIcon + '" align="right" style=" position: absolute; right:0; top:0;cursor: pointer; margin : 15px 0px 0px 5spx;" onclick="closeBaiduInfoBox();"><h1>'+ 
    	'<a align = "left" href="' + storeURL + '">' + storeName + '</a></h1>'+
    '<h2>contact</h2>'+ '<p class="address">' + addressLine1 + "<br>" + addressLine2 + '</p>'+ '<br>'+
    '<a href="tel:' + formattedStoreContactNo + '">' + formattedStoreContactNo + '</a><br>'+
    '<h3>' + storeDescription + '</h3><br clear="all"/>';
	return content;
}


/**
 * This function helps in showing the info window
 * @param addedMarkers
 * @param infoWindowContent
 */
function showInfoWindow(addedMarkers, infoWindowContent) {
	var lng = addedMarkers.point.lng;
	var lat = addedMarkers.point.lat;
	var infoWindow = new BMap.InfoWindow(infoWindowContent, {enableAutoPan : true, closeIconUrl :  closeMarkerIcon});
	var Point = new BMap.Point(lng, lat);
    addedMarkers.addEventListener('click', function(event){
    	infoWindowMarker = this;
    	this.openInfoWindow(infoWindow, Point);
    });
}

/**
 * This function helps in closing the current infowindow associated with the appropriate markers
 */
function closeBaiduInfoBox(){
	infoWindowMarker.closeInfoWindow();
}

