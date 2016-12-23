var map;
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function init() {
    var opt = {
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var mm = document.getElementById("mymap");
    map = new google.maps.Map(mm, opt);

    if (navigator.geolocation == null) {
        window.alert("位置情報が利用できません。");
        return;
    }
    navigator.geolocation.getCurrentPosition(success, error);
}

function success(position) {
    var p = new google.maps.LatLng(position.coords.latitude,
        position.coords.longitude);
    map.setCenter(p);
}

function error(e) {
    window.alert("位置情報が利用できません。");
    var p = new google.maps.LatLng(0, 0);
    map.setCenter(p);
}

init();