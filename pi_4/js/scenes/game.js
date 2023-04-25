class GameScene extends Phaser.Scene {
    constructor (){
        super('GameScene');
		this.cards = null;
		this.firstClick = null;
		this.score = 100;
		this.correct = 0;
		this.dificultad="";
		this.num_cards=0;
    }

    preload (){	
		this.load.image('back', '../resources/back.png');
		this.load.image('cb', '../resources/cb.png');
		this.load.image('co', '../resources/co.png');
		this.load.image('sb', '../resources/sb.png');
		this.load.image('so', '../resources/so.png');
		this.load.image('tb', '../resources/tb.png');
		this.load.image('to', '../resources/to.png');
	}
	
    create (){	

		var json = localStorage.getItem("config") ||	 '{"cards":2,"dificulty":"hard"}';
		var objeto=JSON.parse(json);
		this.dificultad=objeto.dificulty;
		this.num_cards=objeto.cards
		let arraycards = ['co', 'cb', 'sb', 'so', 'tb', 'to'];
		let arrayRandom = []
		this.cameras.main.setBackgroundColor(0xBFFCFF);
		
		
		function getRandomInt(max) {
			return Math.floor(Math.random() * max);
		  }
		for (var i=0;i<5;i++){
			arrayRandom.push(console.log(getRandomInt(7)))
		}
			

		this.add.image(50, 300, arraycards[0]); //aleatoriedad arraycards[]
		this.add.image(150, 300, arraycards[1]);
		this.add.image(250, 300, arraycards[2]);
		this.add.image(350, 300, arraycards[3]);
		if(this.num_cards>=3){
			this.add.image(450, 300, arraycards[0]); 
			this.add.image(550, 300, arraycards[1]);
			if(this.num_cards==4){
				this.add.image(650, 300, arraycards[0]); 
				this.add.image(750, 300, arraycards[1]);
			}
		}
		
		this.cards = this.physics.add.staticGroup();
		
		
		var tiempo=0
		if (this.dificultad=="hard"){
			tiempo=750
		}
		else if(this.dificultad=="normal"){
			tiempo=1250
		}
		else tiempo=2000
		
		setTimeout(() => {
			this.cards.create(50, 300, 'back');
			this.cards.create(150, 300, 'back');
			this.cards.create(250, 300, 'back');
			this.cards.create(350, 300, 'back');
			if(this.num_cards>=3){
				this.cards.create(450, 300, 'back'); //aleatoriedad arraycards[]
				this.cards.create(550, 300, 'back');
				if(this.num_cards==4){
					this.cards.create(650, 300, 'back'); //aleatoriedad arraycards[]
					this.cards.create(750, 300, 'back');
				}
			}
			let i = 0;
			console.log(arraycards);
			this.cards.children.iterate((card)=>{
				card.card_id = arraycards[i];
				i++;
				card.setInteractive();
				card.on('pointerup', () => {
					card.disableBody(true,true);
					console.log( card.card_id);
					if (this.firstClick){
						console.log("entro3");
						if (this.firstClick.card_id !== card.card_id){
							this.score -= 20;
							console.log("entro1");
							//card.disableBody(true,true)
							setTimeout(()=>{
								console.log("entro");
								this.firstClick.enableBody(false, 0, 0, true, true);
								card.enableBody(false, 0, 0, true, true);
								this.firstClick = null;
							},500);
							if (this.score <= 0){
								alert("Game Over");
								loadpage("../");
							}
						}
						else{
							console.log("entro4");
							this.correct++;
							if (this.correct >= 2){
								alert("You Win with " + this.score + " points.");
								loadpage("../");
							}
							this.firstClick = null;
						}
						
					}
					else{
						this.firstClick = card;
					}
				}, card);
			});

		},tiempo);

		
	}
	
	update (){	}
}

