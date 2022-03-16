function initMap(){
    const svgMarker = {
        path: "M39.263 7.673c8.897 8.812 8.966 23.168.153 32.065l-.153.153L23 56 6.737 39.89C-2.16 31.079-2.23 16.723 6.584 7.826l.153-.152c9.007-8.922 23.52-8.922 32.526 0zM23 14.435c-5.211 0-9.436 4.185-9.436 9.347S17.79 33.128 23 33.128s9.436-4.184 9.436-9.346S28.21 14.435 23 14.435z",
        fillOpacity: 1,
        scale: 0.8,
        anchor: new google.maps.Point(23,56)
    };

    let options ={
        zoom:12,
        center: {lat: 53.123482, lng: 18.008438}
    }

    const map = new google.maps.Map(
        document.querySelector('#map'),
        options);

    let marker = new google.maps.Marker(
        {position:{lat:options.center.lat, lng: options.center.lng},
        map: map,
        icon: svgMarker
    });
}
