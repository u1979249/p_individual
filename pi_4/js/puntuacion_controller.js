var load_obj = function(){
	var vue_instance = new Vue({
		el: "#puntuacion_id",
		data: {
			puntos: []
		},
		created: function(){
			let arrayPartides = [];
			if(localStorage.puntuaciones){
				arrayPuntuacion = JSON.parse(localStorage.puntuaciones);
				if(!Array.isArray(arrayPuntuacion)) arrayPuntuacion = [];
			}
			this.puntos = arrayPuntuacion;
		},
		methods: { 
			
		}
	});
	return {}; 
}();

