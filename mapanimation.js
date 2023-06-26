// Este array contiene las coordenadas de las paradas
const busStops = [
  [-71.093729, 42.359244],
  [-71.094915, 42.360175],
  [-71.0958, 42.360698],
  [-71.099558, 42.362953],
  [-71.103476, 42.365248],
  [-71.106067, 42.366806],
  [-71.108717, 42.368355],
  [-71.110799, 42.369192],
  [-71.113095, 42.370218],
  [-71.115476, 42.372085],
  [-71.117585, 42.373016],
  [-71.118625, 42.374863],
];

// esto contiene mi token
mapboxgl.accessToken = 
'pk.eyJ1IjoibWF0aWFzcGFyZ2EiLCJhIjoiY2xpdGlhYWg0MDk0YTNlbXM0enE4ZWJkeCJ9.D7qA6Tky2-8bfuSL3lUNrg';

//crea un mapa, indica centro y zoom
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71.104081, 42.368554],
  zoom: 14,
});

//crea marcador que recorre el mapa y lo inicia en las coordenadas del MIT
let marker = new mapboxgl.Marker().setLngLat([-71.093729, 42.359244]).addTo(map);

//variables globales para la funcion
let counter = 0;
let shouldStop = false;

//funcion para recorrer las paradas
function move() {
  const moveMarker = () => {
    if (counter >= busStops.length || shouldStop ) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  };

  setTimeout(moveMarker, 1000);
};

//función para el boton reset
function reset(){
  shouldStop = true;
  marker.setLngLat([-71.093729, 42.359244]);
  counter = 0; // Reiniciar el contador si se desea reiniciar el recorrido desde el principio
  shouldStop = false;
  move(); // Volver a iniciar la función move
}
