function renderOption(response) {
	var status = response.status;
	if(status === 0) {
		var lng = response.result.location.lng;
		var lat = response.result.location.lat;
		console.log('{lng : ' + lng + ', lat  : ' + lat + ' }');
	} else {
		alert("Error occured!!!");
	}
}

function doLocalSearch() {
	var map = new BMap.Map("allmap");          
	map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
	var local = new BMap.LocalSearch(map, {
		renderOptions:{map: map}
	});
	var search = document.getElementById('loc').value;
	local.search(search);
}

function showLocation(response) {
	var x = 20;
	alert('show Location');
}

	