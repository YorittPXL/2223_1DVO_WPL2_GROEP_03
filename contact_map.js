function initMap() {
    // De coördinaten van het middelpunt van de kaart
    var center = {lat: 52.379189, lng: 4.899431};

    // De opties voor de kaart
    var mapOptions = {
        center: center,
        zoom: 12
    };

    // Maak de kaart aan in de kaart-container
    var map = new google.maps.Map(document.getElementById('map-container'), mapOptions);
}

initMap();