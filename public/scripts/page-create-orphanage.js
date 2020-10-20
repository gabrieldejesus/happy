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
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

// create and add marker

let marker; // iniciar variavel vazia

map.on('click', (event) => {
    const lat = event.latlng.lat; // pegar lat
    const lng = event.latlng.lng; // pegar lng

    // taking map data and inserting it into hidden inputs
    document.querySelector('[name=lat').value = lat;
    document.querySelector('[name=lng').value = lng;

    // remove icon
    marker && map.removeLayer(marker)
    
    // add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map) // add in map
})

// add the photo field
function addPhotoField() {
    // get photo container #images
    const container = document.querySelector('#images');
    // get the container to duplicate .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload');
    // clone the last added image
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);
    // check if the field is empty, if yes, do not add it to the image container
    const input = newFieldContainer.children[0];

    if(input.value == "") {
        return
    }

    // limpar o campo antes de adicionar ao container de imagens
    input.value = ""
    // add the clone to the #images container
    container.appendChild(newFieldContainer);
}

function deleteField(event) {
    const span = event.currentTarget;
    const fieldsContainer = document.querySelectorAll('.new-upload');
    if(fieldsContainer.length <= 1) {
        // clear the field value
        span.parentNode.children[0].value = "";
        return
    }

    // delete the field
    span.parentNode.remove();
}

// select yes or no
function toggleSelect(event) {

    // remove the class .active (from the buttons)
    document.querySelectorAll('.button-select button')
    .forEach(function(button) {
        button.classList.remove('active');
    })
    // put class .active on that clicked button
    const button = event.currentTarget; // of the button that is clicked
    button.classList.add('active');

    // update my input hidden with the selected value
    const input = document.querySelector('[name="open_on_weekends"]');
    input.value = button.dataset.value
}