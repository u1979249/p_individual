function start_game(){
	name = prompt("User name");
	loadpage("./html/game.html");
}


function exit (){
	if (name != ""){
		alert("Leaving " + name + "'s game");
	}
	name = "";
	loadpage("../index.html");
}

function options(){
	// TODO: Open options menu
	console.log("Options menu button");
}

function loadpage(url){
    window.location.assign(url);
}

function go_pi_2(){
    loadpage("./pi_2/index.html");
}
