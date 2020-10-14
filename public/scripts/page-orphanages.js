// tipos de dados
// String = ""
// Number = 01
// object = {}
// boolean = true ou false
// aray = []

// create map
const map = L.map('mapid').setView([-22.9137233,-43.1830779], 16); // criando mapa

// create and add tileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
).addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// create popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>')

// create and add marker
L
.marker([-22.9137233,-43.1830779], { icon })
.addTo(map)
.bindPopup(popup);