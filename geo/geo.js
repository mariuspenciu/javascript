

get_geo_position();

function on_success(pos)
{
	document.getElementById("text").innerHTML = "lat =" + pos.coords.latitude + "long= " + pos.coords.longitude + " acc=" + pos.coords.accuracy; 
	
	var map_str = "https://maps.googleapis.com/maps/api/staticmap?" + "center=" + pos.coords.latitude + "," + pos.coords.longitude + "&zoom=17&size=400x300&maptype=satellite&key=AIzaSyCF8PQvuf9jIsOyqaaddrBxdOowBKOlif4";
	document.getElementById("map").setAttribute("src", map_str);
}


function on_error(e)
{
	document.getElementById("text").innerHTML = e.message;
}
var geo_params = {
	enableHighAcurracy : true,
	timeout : 1000,
	maximumAge : 0
};

function get_geo_position()
{
	var geo = navigator.geolocation;
	
	geo.getCurrentPosition(on_success, on_error, geo_params);
}