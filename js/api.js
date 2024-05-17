function iniciarMap(){
    var coord = {lat:-33.033524,lng:-71.53312};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 19,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}


function iniciarMapSurf(){
  var coord = {lat:-33.033524,lng:-71.53312};
  var map = new google.maps.Map(document.getElementById('mapSurf'),{
    zoom: 19,
    center: coord
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map
  });
}


function iniciarMapSurf2(){
  var coord = {lat:-33.033524,lng:-71.53312};
  var map = new google.maps.Map(document.getElementById('mapSurf2'),{
    zoom: 19,
    center: coord
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map
  });
}