var baiduMap = {} || window.baiduMap;
	var baiduStoreMapData = [] || window.baiduStoreMapData;
	var baiduMapContainer = 'map_canvas';
	var baiduMapZoomLevel = 15;
	var defaultLat = 39.921988;
	var defaultLong = 116.417854;
	
	var storesMarker = [];
	var showRoomsMarker = [];
	var outletsMarker = [];
	var storesMarkerInfoWindowContents = [];
	var showRoomsMarkerInfoWindowContents = [];
	var outletsMarkerInfoWindowContents = [];

	var storeMarkerIcon = '../js/mapIconImages/stores-location.png';
	var showRoomsMarkerIcon = '../js/mapIconImages/showrooms-location.png';
	var outletsMarkerIcon = '../js/mapIconImages/outlets-location.png';
	var downArrorMarkerIcon = '../js/mapIconImages/down-arrow.png';
	var closeMarkerIcon = '../js/mapIconImages/close.gif';
	
	$(document).ready(function(){
		loadMap();
	});


	$(document).ready(function(){
		
		$("input[name='store_type'][type='checkbox'][id='stores']").change(function(){
			if( $(this).prop('checked') == true ){
				showMarkers(storesMarker, storesMarkerInfoWindowContents);
			} else {
				hideMarkers(storesMarker);
			}
		});
		
		$("input[name='store_type'][type='checkbox'][id='showrooms']").change(function(){
			if( $(this).prop('checked') == true ){
				showMarkers(showRoomsMarker, showRoomsMarkerInfoWindowContents);
			} else {
				hideMarkers(showRoomsMarker);
			}
		});
		
		$("input[name='store_type'][type='checkbox'][id='outlets']").change(function(){
			if( $(this).prop('checked') == true ){
				showMarkers(outletsMarker, outletsMarkerInfoWindowContents);
			} else {
				hideMarkers(outletsMarker);
			}
		});
		
		$("input[name='unique-name'][type='checkbox'][id='current-location']").change(function(){
			if( $(this).prop('checked') == true ){
				alert('Need to show Current Location marker');
			} else {
				alert('Need to hide Need to hide Current Location marker');
			}
		});
		
		
		
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
		var point = new BMap.Point(defaultLong, defaultLat);
		baiduMap.centerAndZoom(point, baiduMapZoomLevel);
		baiduMap.enableScrollWheelZoom();
		baiduMap.enableContinuousZoom();	
		//baiduMap.enablePinchToZoom();	
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
		baiduStoreMapData = [{"longitude":116.417854,"latitude":39.921988,"type":"store","storeName":"Store A","StoreURL":"","addressLine1":"Store A Line 1","addressLine2":"Store A Line 2","formattedStoreContactNo":"(123) 459-1234","storeDescription":"Store A Description"},{"longitude":116.406605,"latitude":39.921585,"type":"showroom","storeName":"ShowRoom A","StoreURL":"","addressLine1":"ShowRoom A Line 1","addressLine2":"ShowRoom A Line 2","formattedStoreContactNo":"(123) 459-1236","storeDescription":"ShowRoom A Description"},{"longitude":116.412222,"latitude":39.912345,"type":"outlets","storeName":"Outlets B","StoreURL":"","addressLine1":"Outlets A Line 1","addressLine2":"Outlets A Line 2","formattedStoreContactNo":"(123) 459-1238","storeDescription":"Outlets A Description"}];
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
		baiduIcon = new BMap.Icon(markerImage, new BMap.Size(300,157));
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
	
	function createInfoBoxContent(storeInfo) {
		
		var storeName = storeInfo.storeName;
		var storeURL = storeInfo.StoreURL;
		var addressLine1 = storeInfo.addressLine1;
		var addressLine2 = storeInfo.addressLine2;
		var formattedStoreContactNo = storeInfo.formattedStoreContactNo;
		var storeDescription = storeInfo.storeDescription;
		
		var content = '<div class="lulu-infobox">'+
        '<h1><a href="' + storeURL + '">' + storeName + '</a></h1>'+
        '<h2>contact</h2>'+ '<p class="address">' + addressLine1 + "<br>" + addressLine2 + '</p>'+ '<br>'+
        '<a href="tel:' + formattedStoreContactNo + '">' + formattedStoreContactNo + '</a>' + + '<br>'+
        '<h3>' + storeDescription + '</h3>' +
        '</div>';
        
        return content;
	}
	
	//var opts = {width:300, height:100};
	
	function showInfoWindow(addedMarkers, infoWindowContent) {
        addedMarkers.addEventListener('click', function(event){
		    var target = event.target;
			var point = new BMap.Point(target.getPosition().lng, target.getPosition().lat);
			var infoWindow = new BMap.InfoWindow(infoWindowContent);
			this.openInfoWindow(infoWindow, point);
        });
	}
