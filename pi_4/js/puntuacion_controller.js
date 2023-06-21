var load_obj = function(){
	var vue_instance = new Vue({
<<<<<<< HEAD
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

=======
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

>>>>>>> 96509d62031373a921a9a63eb563c042b7db3f23
