const apiKey = '3e57f18e176145f7af811543232106';

const locationInput = document.getElementById('location');
const btnBuscar = document.getElementById('btn-buscar');
const temperaturaLabel = document.getElementById('temperatura');
const descripcionLabel = document.getElementById('descripcion');
const iconoClima = document.getElementById('icono-clima');

btnBuscar.addEventListener('click', buscarDatosClima);

function buscarDatosClima() {
    const location = locationInput.value;

    //solicitud del clima a la api
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&lang=es&q=${encodeURIComponent(location)}`)
        .then(response => response.json())
        .then(data => {
            const {location, current} = data;
            const temperatura = current.temp_c;

            temperaturaLabel.textContent = `${temperatura}ºC`;
            descripcionLabel.textContent = current.condition.text;

            const codigoIcono = current.condition.icon;
            const urlIcono = `https:${codigoIcono}`;
            iconoClima.setAttribute('src', urlIcono);
            iconoClima.setAttribute('alt', current.condition.text);
        })

        .catch(error => {
            console.log('Error al obtener datos del clima; ', error);
        });
}




