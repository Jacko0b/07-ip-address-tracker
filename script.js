function initMap(){
    let options ={
        zoom:8,
        center: {lat: 42.3601, lng: -71.0589}
    }

    const map = new google.maps.Map(
        document.querySelector('#map'),
        options);
}
// function initMap() {
//     // The location of Uluru
//     const uluru = { lat: -25.344, lng: 131.036 };
//     // The map, centered at Uluru
//     const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 4,
//       center: uluru,
//     });
//     // The marker, positioned at Uluru
//     const marker = new google.maps.Marker({
//       position: uluru,
//       map: map,
//     });
//   }