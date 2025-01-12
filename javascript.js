$('#myModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var pic = button.data('pic') // Extract info from data-* attributes
  var caption = button.data('caption')
  console.log($('#modal-pic').attr("src"))
  console.log(caption)
  $('#modal-pic').attr("src", pic);
  $('#modal-caption').html(caption);
})

// Detect request animation frame
var scroll = window.requestAnimationFrame || function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 
function loop() {
    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });
    scroll(loop);
}
loop();

function isElementInViewport(el) {
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

// Initialize and add the map
var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 3,
    center: new google.maps.LatLng(25.295202586754595, -51.9337846719139),
    mapTypeId: 'roadmap',
    styles: [
        {"elementType": "labels.text.fill", "stylers": [{"color": "#523735"}]},
        {"elementType": "labels.text.stroke", "stylers": [{"color": "#f5f1e6"}]},
        {"featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{"color": "#c9b2a6"}]},
        {"featureType": "administrative.land_parcel", "elementType": "geometry.stroke","stylers": [{"color": "#dcd2be"}]},
        {"featureType": "administrative.land_parcel", "elementType": "labels.text.fill", "stylers": [{"color": "#ae9e90"}]},
        {"featureType": "landscape", "stylers": [{"color": "#ebb7e2"}]},
        {"featureType": "landscape.natural", "elementType": "geometry", "stylers": [{"color": "#faf2ed"}]},
        {"featureType": "poi", "elementType": "geometry", "stylers": [{"color": "#dfd2ae"}]},
        {"featureType": "poi", "elementType": "labels.text.fill", "stylers": [{"color": "#93817c"}]},
        {"featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{"color": "#a5b076"}]},
        {"featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{"color": "#447530"}]},
        {"featureType": "road", "elementType": "geometry", "stylers": [{"color": "#f5f1e6"}]},
        {"featureType": "road.arterial", "elementType": "geometry","stylers": [{"color": "#fdfcf8"}]},
        {"featureType": "road.arterial", "elementType": "labels", "stylers": [{"visibility": "off"}]},
        {"featureType": "road.highway", "elementType": "geometry", "stylers": [{"color": "#f8c967"}]},
        {"featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{"color": "#e9bc62"}]},
        {"featureType": "road.highway", "elementType": "labels", "stylers": [{"visibility": "off"}]},
        {"featureType": "road.highway.controlled_access", "elementType": "geometry", "stylers": [{"color": "#e98d58"}]},
        {"featureType": "road.highway.controlled_access", "elementType": "geometry.stroke", "stylers": [{"color": "#db8555"}]},
        {"featureType": "road.local", "stylers": [{"visibility": "off"}]},
        {"featureType": "road.local", "elementType": "labels.text.fill", "stylers": [{"color": "#806b63"}]},
        {"featureType": "transit.line", "elementType": "geometry", "stylers": [{"color": "#dfd2ae"}]},
        {"featureType": "transit.line", "elementType": "labels.text.fill", "stylers": [{"color": "#8f7d77"}]},
        {"featureType": "transit.line", "elementType": "labels.text.stroke","stylers": [{"color": "#ebe3cd"}]},
        {"featureType": "transit.station", "elementType": "geometry", "stylers": [{"color": "#dfd2ae"}]},
        {"featureType": "water", "elementType": "geometry", "stylers": [{"color": "#7afaff"}]},
        {"featureType": "water", "elementType": "geometry.fill", "stylers": [{"color": "#b3d1d1"}]},
        {"featureType": "water", "elementType": "labels.text.fill", "stylers": [{"color": "#70756d"}]}
      ]
});

var locations = [
    ["<h6>Plano, TX</h6><p>My home! (2000-Present)</p>", 33.019844, -96.698883],
    ["<h6>Cambridge, MA</h6><p>I studied CS at MIT! <br> (2018-2023)</p>", 42.365250, -71.105011],
    ["<h6>Sao Paulo, Brazil</h6><p>I did a Global Teaching Lab here during IAP! <br> (Jan 2019)</p>", -23.548670, -46.638248],
    ["<h6>New York, NY</h6><p>I did a winter externship at Bank of America! <br> (Jan 2020)</p>", 40.755, -73.987],
    ["<h6>Seattle, Washington</h6><p>I did a summer internship at AWS! <br> (June-Aug 2020)</p>", 47.6062, -122.3321],
    ["<h6>Eindhoven, Netherlands</h6><p>I did a summer internship at Philips! <br> (June-Aug 2019)</p>", 51.441643, 5.469722],
    ["<h6>New York, NY</h6><p>I did a summer internship at Goldman Sachs! <br> (June-Aug 2021)</p>", 40.715, -74.015],
    ["<h6>London, UK</h6><p>I did a summer internship at J.P. Morgan! <br> (June-Aug 2022)</p>", 51.5076, 0.1276],
    ["<h6>Agadir, Morocco</h6><p>I did a Global Teaching Lab here during IAP! <br> (Jan 2023)</p>", 30.4326, -9.5887]
];

var infowindow = new google.maps.InfoWindow({maxWidth: 220});
for (var i = 0; i < locations.length; i++){
    var latLng = new google.maps.LatLng(locations[i][1], locations[i][2]);
    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        icon: './images/pin.png'
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function(){
            infowindow.setContent(locations[i][0]);
            infowindow.open(map, marker);
        }
    })(marker, i));
}
