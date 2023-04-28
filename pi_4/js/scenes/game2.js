class GameScene extends Phaser.Scene {
    constructor (){
        super('GameScene');
		this.cards = null;
		this.firstClick = null;
		this.score = 100;
		this.correct = 0;
		this.dificultad="";
		this.num_cards=0;
        this.empieza=false;
        this.tiempo=0;
        this.array=[];
        this.arrCard=[];
        this.arrCopi=[];
        this.puntuacio;
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
		let arrayCopia=[]
        
		this.cameras.main.setBackgroundColor(0xBFFCFF);
		
		
		
        this.repartir(this.num_cards, arraycards, arrayRandom, arrayCopia);
		this.empieza=true;
	}
	
	update (){	
        if(this.empieza){
            this.empieza=false;
            this.correct=0;
            console.log(this.array)
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
                this.cards.children.iterate((card)=>{
                    card.card_id = this.array[i];
                    i++;
                    card.setInteractive();
                    card.on('pointerup', () => {
                        card.disableBody(true,true);
                        console.log( card.card_id);
                        if (this.firstClick){
                            
                            if (this.firstClick.card_id !== card.card_id){
                                this.score -= 20;
                        
                                //card.disableBody(true,true)
                                setTimeout(()=>{
                                    
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
                                
                                this.correct++;
                                if (this.correct >= this.num_cards){
                                    alert("You Win with " + this.score + " points.");
                                    this.repartir(this.num_cards, this.arrCard, this.array, this.arrCopi)
                                    this.empieza=true;
                                   
                                }
                                this.firstClick = null;
                            }
                            
                        }
                        else{
                            this.firstClick = card;
                        }
                    }, card);
                });
        
            },this.tiempo);
        }
    }

    repartir(num, a, b, c){
        let num_cards=num;
        let arraycards=a;
        let arrayRandom=b;
        let arrayCopia=c;
        function barajar(num_cards){
            for(let i =0; i<num_cards;i++){
                arrayRandom[i]=arraycards[Math.floor(Math.random()*6)]
                console.log(i + "primero " + arrayRandom[i]);
            }
            var a=num_cards
            for(let i=0;i<4;i++){
                arrayCopia[i]=arrayRandom[i]
            }
            for(let i=num_cards;i<(num_cards*2);i++){
                console.log("entra")
                var indice=Math.floor(Math.random()*a)
                arrayRandom[i]=arrayCopia[indice];
                console.log(i + "segundo " + arrayRandom[i])
                arrayCopia.splice(indice, 1);
                a--;
            }
        
        }
        barajar(this.num_cards);
        this.array=arrayRandom;
        console.log(this.array)
        this.arrCard=arraycards;
        this.arrCopi=arrayCopia;
        this.add.image(50, 300, arrayRandom[0]); //aleatoriedad arraycards[]
        this.add.image(150, 300, arrayRandom[1]);
        this.add.image(250, 300, arrayRandom[2]);
        this.add.image(350, 300, arrayRandom[3]);
        if(this.num_cards>=3){
            this.add.image(450, 300, arrayRandom[4]); 
            this.add.image(550, 300, arrayRandom[5]);
            if(this.num_cards==4){
                this.add.image(650, 300, arrayRandom[6]); 
                this.add.image(750, 300, arrayRandom[7]);
            }
        }
    
        this.cards = this.physics.add.staticGroup();

    
		if (this.dificultad=="hard"){
			this.tiempo=750
		}
		else if(this.dificultad=="normal"){
			this.tiempo=1250
		}
		else this.tiempo=2000
    
    }
}
