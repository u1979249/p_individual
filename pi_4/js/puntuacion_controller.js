var load_obj = function(){
	var vue_instance = new Vue({
		el: "#puntuaciones_id",
		data: {
			puntuaciones: []
		},
		created: function(){
			let arrayPuntuaciones = [];
			if(localStorage.puntuaciones){
				arrayPuntuaciones = JSON.parse(localStorage.puntuaciones);
				if(!Array.isArray(arrayPuntuaciones)) arrayPuntuaciones = [];
			}
			this.puntuaciones = arrayPuntuaciones;

		}
	});
	return {}; 
}();

