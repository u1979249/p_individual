// Obtenemos la información del ranking desde localStorage
var rankingData = localStorage.getItem('puntuaciones');

// Si no hay información de ranking en localStorage, creamos una nueva
if (!rankingData) {
  rankingData = JSON.stringify([]);
  localStorage.setItem('rankingData', rankingData);
}

// Parseamos los datos del ranking a un arreglo de objetos
var ranking = JSON.parse(rankingData);

// Ordenamos los datos del ranking por puntuación de mayor a menor
ranking.sort(function(a, b) {
  return b.score - a.score;
});

// Obtenemos la tabla del ranking desde el archivo HTML
var table = document.getElementById('ranking-table');

// Iteramos sobre los datos del ranking y los agregamos a la tabla
for (var i = 0; i < ranking.length; i++) {
  var row = table.insertRow(-1);
  var rankCell = row.insertCell(0);
  var nameCell = row.insertCell(1);
  var scoreCell = row.insertCell(2);
  rankCell.innerHTML = i + 1;
  nameCell.innerHTML = ranking[i].name;
  scoreCell.innerHTML = ranking[i].score;
}
