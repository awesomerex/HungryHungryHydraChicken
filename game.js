"use strict";

var Splat = require("splatjs");
var canvas = document.getElementById("canvas");

var manifest = {
	"images": {
	},
	"sounds": {
		"attack1" : "assets/sounds/attack_voice1.wav",
		"attack2" : "assets/sounds/attack_voice2.wav",
		"attack3" : "assets/sounds/attack_voice3.wav",
		"attack4" : "assets/sounds/attack_voice4.wav",
		"attack5" : "assets/sounds/attack_voice5.wav",
		"attack6" : "assets/sounds/attack_voice6.wav",
		"bgm1" : "assets/sounds/Tale_of_the_Hydra_Chicken.wav",
		"bgm2" : "assets/sounds/Tale_of_the_Hydra_Chicken_opening_screen_version.wav",
		"beetle" : "assets/sounds/Bug_scuttle.wav",
		"elephant" : "assets/sounds/Elephant_stampede.wav",
		"grow_cluck" : "assets/sounds/Grow_time_cluck.wav",
		"grow_sound" : "assets/sounds/Grow_time_sound.wav",
		"idle_chicken" : "assets/sounds/Idle_chicken_clucking.wav",
		"pony" : "assets/sounds/Pony_Gallop.wav",
		"peck" : "assets/sounds/Beak_Peck_Impact.wav"
	},
	"fonts": {
	},
	"animations": {
		"bg-1" : {
			"strip" : "assets/images/Background_beetle_level.png",
			"frames" : 1,
			"msPerFrame" : 100
		},
		"bg-2" : {
			"strip" : "assets/images/Background_rat_level.png",
			"frames" : 1,
			"msPerFrame" : 100
		},
		"bg-3" : {
			"strip" : "assets/images/Background_sheep_level.png",
			"frames" : 1,
			"msPerFrame" : 100
		},
		"bg-4" : {
			"strip" : "assets/images/Background_pony_level.png",
			"frames" : 1,
			"msPerFrame" : 100
		},
		"bg-5" : {
			"strip" : "assets/images/Background_largest.png",
			"frames" : 1,
			"msPerFrame" : 100
		},
		"beetle-blue-right" : {
			"strip" : "assets/images/Blue_Beetle.png",
			"frames" : 2,
			"msPerFrame" : 100
		},
		"beetle-blue-left" : {
			"strip" : "assets/images/Blue_Beetle.png",
			"frames" : 2,
			"msPerFrame" : 100,
			"flip": "horizontal"
		},
		"beetle-red-right" : {
			"strip" : "assets/images/Red_Beetle_walk.png",
			"frames" : 2,
			"msPerFrame" : 100
		},
		"beetle-red-left" : {
			"strip" : "assets/images/Red_Beetle_walk.png",
			"frames" : 2,
			"msPerFrame" : 100,
			"flip" : "horizontal"
		},
		"pony-blue-right" : {
			"strip" : "assets/images/Blue_pony_animation.png",
			"frames" : 2,
			"msPerFrame" : 200
		},
		"pony-blue-left" : {
			"strip" : "assets/images/Blue_pony_animation.png",
			"frames" : 2,
			"msPerFrame" : 200,
			"flip": "horizontal"
		},
		"pony-red-right" : {
			"strip" : "assets/images/Red_pony_animation.png",
			"frames" : 2,
			"msPerFrame" : 200
		},
		"pony-red-left" : {
			"strip" : "assets/images/Red_pony_animation.png",
			"frames" : 2,
			"msPerFrame" : 200,
			"flip": "horizontal"
		},
		"elephant-blue-right" : {
			"strip" : "assets/images/Blue_Running_Elephant_animation.png",
			"frames" : 2,
			"msPerFrame" : 100
		},
		"elephant-blue-left" : {
			"strip" : "assets/images/Blue_Running_Elephant_animation.png",
			"frames" : 2,
			"msPerFrame" : 100,
			"flip": "horizontal"
		},
		"elephant-red-right" :{
			"strip" : "assets/images/Red_Running_Elephant_animation.png",
			"frames" : 2,
			"msPerFrame" : 100
		},
		"elephant-red-left" :{
			"strip" : "assets/images/Red_Running_Elephant_animation.png",
			"frames" : 2,
			"msPerFrame" : 100,
			"flip": "horizontal"
		},
		"rat-blue-right":{
			"strip" : "assets/images/Blue_Running_Rat_animation.png",
			"frames" : 2,
			"msPerFrame" : 100
		},
		"rat-blue-left":{
			"strip" : "assets/images/Blue_Running_Rat_animation.png",
			"frames" : 2,
			"msPerFrame" : 100,
			"flip": "horizontal"
		},
		"rat-red-right":{
			"strip" : "assets/images/Red_Running_Rat_animation.png",
			"frames" : 2,
			"msPerFrame" : 100
		},
		"rat-red-left":{
			"strip" : "assets/images/Red_Running_Rat_animation.png",
			"frames" : 2,
			"msPerFrame" : 100,
			"flip": "horizontal"
		},
		"sheep-blue-right":{
			"strip" : "assets/images/Blue_Running_Sheep.png",
			"frames" : 2,
			"msPerFrame" : 100
		},
		"sheep-blue-left":{
			"strip" : "assets/images/Blue_Running_Sheep.png",
			"frames" : 2,
			"msPerFrame" : 100,
			"flip": "horizontal"
		},
		"sheep-red-right":{
			"strip" : "assets/images/Red_Running_Sheep.png",
			"frames" : 2,
			"msPerFrame" : 100
		},
		"sheep-red-left":{
			"strip" : "assets/images/Red_Running_Sheep.png",
			"frames" : 2,
			"msPerFrame" : 100,
			"flip": "horizontal"
		},
		"chicken-body-idle" : {
			"strip" : "assets/images/Hydra_Chicken_body_animation.png",
			"frames" : 3,
			"msPerFrame" : 150
		},
		"chicken-body-idle-big" : {
			"strip" : "assets/images/Hydra_Chicken_body_animation_big.png",
			"frames" : 3,
			"msPerFrame" : 150
		},
		"chicken-left-idle" : {
			"strip" : "assets/images/Hydra_Chicken_red_head_idle_animation.png",
			"frames" : 3,
			"msPerFrame" : 150
		},
		"chicken-left-attack" :{
			"strip" : "assets/images/Red_Head_attack_Animation.png",
			"frames" : 6,
			"msPerFrame" : 100
		},
		"chicken-right-idle" : {
			"strip" : "assets/images/Hydra_Chicken_blue_head_idle_animation.png",
			"frames" : 3,
			"msPerFrame" : 150
		},
		"chicken-right-attack" : {
			"strip" : "assets/images/Blue_Head_attack_Animation.png",
			"frames" : 6,
			"msPerFrame" : 100
		},
		"bg-title" : {
			"strip" : "assets/images/Title_Screen.png",
			"frames" : 1,
			"msPerFrame" : 100
		},
		"title-logo" : {
			"strip" : "assets/images/Logo.png",
			"frames" : 1,
			"msPerFrame" : 100
		},
		"bg-zen" : {
			"strip" : "assets/images/Zen_finish.png",
			"frames" : 1,
			"msPerFrame" : 100
		},
		"bg-phoenix" : {
			"strip" : "assets/images/Phoenix_finish.png",
			"frames" : 1,
			"msPerFrame" : 100
		},
		"bg-dragon" : {
			"strip" : "assets/images/Dragon_finish.png",
			"frames" : 1,
			"msPerFrame" : 100
		}
	}
};

var game = new Splat.Game(canvas, manifest);

function randomColor(){
	var colors = ["red", "blue"];
	return colors[Math.floor(Math.random() * colors.length)];
}

function drawEnemy(context, drawable, color, debug){
	
		if(drawable.type === "animated"){
			drawable.draw(context);
		}
		else{
			context.fillStyle = color;
			context.fillRect(drawable.x, drawable.y, drawable.width, drawable.height);
		}
		if(debug){
		context.strokeRect(drawable.x, drawable.y, drawable.width, drawable.height);
	}
}

function drawAnimatedEntity(context, drawable, debug){
	drawable.draw(context);
	if(debug){
		context.strokeRect(drawable.x, drawable.y, drawable.width, drawable.height);
	}
}

function generateScoreManager(){
	var manager = {
		total: 0,
		redCount: 0,
		blueCount: 0,
		matchedCount: 0,
		unmatchedCount: 0,
		ending : "",
		score : 0
	};
	manager.calcTotal = function(){
		this.total = this.redCount + this.blueCount;
	};
	manager.calcEnding = function(){
		if(this.matchedCount > this.unmatchedCount){
			this.ending = "phoenix";
		}
		if(this.matchedCount < this.unmatchedCount){
			this.ending = "dragon";
		}
		if(this.score === 0){
			this.ending = "zen";
		}
	};

	manager.calcScore = function(){
		var matchedTotal = this.matchedCount * 100;
		var unmatchedTotal = this.unmatchedCount * -100;
		this.score = matchedTotal + unmatchedTotal;
	};

	return manager;
}

//code for eating enemies
var devour = function(enemy, manager, scene){
	if(enemy.color === "red"){
		manager.redCount++;
		if(this.name === "left"){
			manager.matchedCount ++;
		}
		if(this.name === "right"){
			manager.unmatchedCount ++;
		}
	}
	if(enemy.color === "blue"){
		manager.blueCount++;
		if(this.name === "left"){
			manager.unmatchedCount ++;
		}
		if(this.name === "right"){
			manager.matchedCount ++;
		}
	}
	manager.calcTotal();
	manager.setStage();
	manager.calcScore();
	if(manager.total % 20 === 0){
		//new level
		//clear old enemies
		scene.enemies = [];
		scene.chickenBody.reset();
		game.sounds.play("grow_cluck");
		game.sounds.play("grow_sound");
	}

	if(manager.total % 20 === 10){
		//half way through level
		scene.chickenBody.morph();
	}

	//console.log(manager);
};


game.scenes.add("main", new Splat.Scene(canvas, function() {
	// initialization
	var scene = this;
	scene.debug = false;
	scene.attackSounds = ["attack1", "attack2", "attack3","attack4","attack5","attack6"];
	scene.enemies = [];
	scene.animatedEntities = [];
	game.score = generateScoreManager();
	game.score.setStage = function(){
		if(this.total >= 20 && this.total < 40){
			scene.stage = "rat";
			scene.bgimage.sprite = game.animations.get("bg-2");
		}
		if(this.total >= 40 && this.total < 60){
			scene.stage = "sheep";
			scene.bgimage.sprite = game.animations.get("bg-3");
		}
		if(this.total >= 60 && this.total < 80){
			scene.stage = "pony";
			scene.bgimage.sprite = game.animations.get("bg-4");
			scene.chickenBody.morph();
		}
		if(this.total >= 80){
			scene.stage = "elephant";
			scene.bgimage.sprite = game.animations.get("bg-5");
		}
		if(this.total >= 100){
			game.sounds.stop("bgm1");
			game.sounds.stop("elephant");
			game.scenes.switchTo("credits");
		}
	};
	scene.stages = ["beetle", "rat", "sheep" , "pony", "elephant"];
	scene.currentStage = 0;
	scene.stage = "beetle";
	scene.incrementStage = function (currentStage){
		scene.stage = scene.stages[currentStage];
	};
	scene.enemyAnimations = {
		"pony-left" : {
			"offx" : -75,
			"offy" : -75
		},
		"pony-right" : {
			"offx" : -75,
			"offy" : -75
		},
		"beetle-right" : {
			"offx" : -50,
			"offy" : -50
		},
		"beetle-left" : {
			"offx" : -100,
			"offy" : -50
		},
		"rat-left" : {
			"offx" : -50,
			"offy" : -25
		},
		"rat-right" : {
			"offx" : -125,
			"offy" : -25
		},
		"sheep-left" : {
			"offx" : -100,
			"offy" : -50
		},
		"sheep-right" : {
			"offx" : -100,
			"offy" : -50
		},
		"elephant-left" : {
			"offx" : -100,
			"offy" : -75
		},
		"elephant-right" : {
			"offx" : -100,
			"offy" : -75
		}
	};

	scene.setStage = function (){
		scene.stage = scene.stages[Math.floor(Math.random() * scene.stages.length)];
		scene.leftSpawner.state = scene.stage;
		scene.rightSpawner.state = scene.stage;
	};
	var bg = game.animations.get("bg-1");
	scene.bgimage = new Splat.AnimatedEntity(0,0, canvas.width, canvas.height, bg, 0, 0);
	scene.animatedEntities.push(scene.bgimage);

	scene.leftSpawner = new Splat.Entity(-10, canvas.height-100, 20,20);
	scene.leftSpawner.direction = 1;
	scene.leftSpawner.state = scene.stage;
	scene.rightSpawner = new Splat.Entity(canvas.width + 10, canvas.height-100, 20, 20);
	scene.rightSpawner.direction = -1;
	scene.rightSpawner.state = scene.stage;
	scene.leftKills = 0;
	scene.rightKills = 0;
	scene.totalKills = 0;
	scene.init = 0;

	scene.spawn = function (spawner) {
		var enemy = new Splat.Entity(spawner.x, spawner.y , 30, 30);
		enemy.color = randomColor();
		enemy.direction = spawner.direction;
		enemy.devouredBy = "";
		enemy.mod = Math.floor(Math.random()*3);
		scene.enemies.push(enemy);
	};

	scene.spawnAnimated = function (spawner, color) {
		var enemyType = scene.stage;
		if(enemyType === "beetle"){
			game.sounds.play("beetle");
		}
		if(enemyType === "sheep" || enemyType === "pony"){
			game.sounds.stop("beetle");
			game.sounds.play("pony");
		}
		if(enemyType === "elephant"){
			game.sounds.stop("pony");
			game.sounds.play("elephant");
		}
		var direction = "right";
		if(spawner.direction === -1){
			direction = "left";
		}

		var sprite = game.animations.get(enemyType +"-"+ color +"-"+ direction);
		var offsets = scene.enemyAnimations[enemyType+"-"+direction];
		var enemy = new Splat.AnimatedEntity(spawner.x, spawner.y, 30, 30, sprite.copy(), offsets.offx, offsets.offy);
		enemy.color = color;
		enemy.type = "animated";
		enemy.direction = spawner.direction;
		enemy.mod = Math.floor(Math.random()*3+1);
		scene.enemies.push(enemy);
	};

	scene.randomSpawner = function(){
		var spawners = [scene.leftSpawner,scene.rightSpawner];
		return spawners[Math.floor(Math.random() * spawners.length)];
	};
	// var leftHeadIdle = ;
	// var leftHeadAttack = ;
	// var rightHeadIdle = ;
	// var rightHeadAttack = ;
	// var chickenBody = ;
	// var chickenBodyBig = ;
	scene.leftHeadAttack = new Splat.AnimatedEntity(canvas.width/2 - 175, canvas.height-100, 100, 20, game.animations.get("chicken-left-idle"), 0, -400);

	scene.leftHeadAttack.name = "left";
	scene.leftHeadAttack.state = "idle";
	scene.leftHeadAttack.devour = devour;
	scene.leftHeadAttack.canAttack = true;
	scene.leftHeadAttack.animations = {"idle": {
											"image" : game.animations.get("chicken-left-idle"),
											"offx" : 0,
											"offy" : -400},
										"idleBig" : {
											"image" : game.animations.get("chicken-left-idle"),
											"offx" : 0,
											"offy" : -425
										},
									   "attack": {
									   		"image" :game.animations.get("chicken-left-attack"),
									   		"offx" : -50,
									   		"offy" : -400}
									   	};
	scene.leftHeadAttack.attack = function (){
		this.sprite = this.animations.attack.image;
		this.spriteOffsetX = this.animations.attack.offx;
		this.spriteOffsetY = this.animations.attack.offy;
		if(this.state === "idle"){
			game.sounds.play(scene.attackSounds[Math.floor(Math.random() * scene.attackSounds.length)]);
		}
		this.state = "attack";
	};
	scene.leftHeadAttack.idle = function (){
		this.sprite = this.animations.idle.image;
		this.spriteOffsetX = this.animations.idle.offx;
		this.spriteOffsetY = this.animations.idle.offy;
	};
	scene.leftHeadAttack.idleBig = function (){
		this.sprite = this.animations.idleBig.image;
		this.spriteOffsetX = this.animations.idleBig.offx;
		this.spriteOffsetY = this.animations.idleBig.offy;	
	};
	
	scene.rightHeadAttack = new Splat.AnimatedEntity(canvas.width/2 + 50, canvas.height-100, 100, 20, game.animations.get("chicken-right-idle"), -50 , -400);
	scene.rightHeadAttack.name = "right";
	scene.rightHeadAttack.state = "idle";
	scene.rightHeadAttack.devour = devour;
	scene.rightHeadAttack.canAttack = true;
	scene.rightHeadAttack.animations = {"idle": {
											"image" :game.animations.get("chicken-right-idle"),
											"offx" : -50,
											"offy" : -400 },
										"idleBig" : {
											"image" :game.animations.get("chicken-right-idle"),
											"offx" : -50,
											"offy" : -425
										},
										"attack": {
											"image" : game.animations.get("chicken-right-attack"),
											"offx" : -50,
											"offy" : -400}
										};
	scene.rightHeadAttack.attack = function (){
		this.sprite = this.animations.attack.image;
		this.spriteOffsetX = this.animations.attack.offx;
		this.spriteOffsetY = this.animations.attack.offy;
		if(this.state === "idle"){
			game.sounds.play(scene.attackSounds[Math.floor(Math.random() * scene.attackSounds.length)]);
		}
		this.state = "attack";
	};
	scene.rightHeadAttack.idle = function (){
		this.sprite = this.animations.idle.image;
		this.spriteOffsetX = this.animations.idle.offx;
		this.spriteOffsetY = this.animations.idle.offy;
	};
	scene.rightHeadAttack.idleBig = function (){
		this.sprite = this.animations.idleBig.image;
		this.spriteOffsetX = this.animations.idleBig.offx;
		this.spriteOffsetY = this.animations.idleBig.offy;	
	};

	scene.chickenBody = new Splat.AnimatedEntity(canvas.width/2, canvas.height-100, 100, 20, game.animations.get("chicken-body-idle"), -300, -250);
	scene.chickenBody.animations = {"normal" : {
										"image" : game.animations.get("chicken-body-idle"),
										"offx" : -300,
										"offy" : -250 },
									"big" : {
										"image" : game.animations.get("chicken-body-idle-big"),
										"offx" : -350,
										"offy" : -275}
									};
	scene.chickenBody.state = "small";
	scene.chickenBody.morph = function (){
		this.sprite = this.animations.big.image;
		this.spriteOffsetX = this.animations.big.offx;
		this.spriteOffsetY = this.animations.big.offy;
		this.state="big";
		scene.leftHeadAttack.spriteOffsetX = scene.leftHeadAttack.animations.idleBig.offx;
		scene.leftHeadAttack.spriteOffsetY = scene.leftHeadAttack.animations.idleBig.offy;
		scene.rightHeadAttack.spriteOffsetX = scene.rightHeadAttack.animations.idleBig.offx;
		scene.rightHeadAttack.spriteOffsetY = scene.rightHeadAttack.animations.idleBig.offy;
	};
	scene.chickenBody.reset = function () {
		this.sprite = this.animations.normal.image;
		this.spriteOffsetX = this.animations.normal.offx;
		this.spriteOffsetY = this.animations.normal.offy;
		this.state="small";
		scene.leftHeadAttack.spriteOffsetX = scene.leftHeadAttack.animations.idle.offx;
		scene.leftHeadAttack.spriteOffsetY = scene.leftHeadAttack.animations.idle.offy;
		scene.rightHeadAttack.spriteOffsetX = scene.rightHeadAttack.animations.idle.offx;
		scene.rightHeadAttack.spriteOffsetY = scene.rightHeadAttack.animations.idle.offy;
	};

	scene.animatedEntities.push(scene.chickenBody);
	scene.animatedEntities.push(scene.leftHeadAttack);
	scene.animatedEntities.push(scene.rightHeadAttack);


	//TIMERS!!!!
	var attackTimerLeft = new Splat.Timer(null, 600, function(){
		if(scene.chickenBody.state === "small"){
			scene.leftHeadAttack.idle();
		}
		if(scene.chickenBody.state === "big"){
			scene.leftHeadAttack.idleBig();
		}
		scene.leftHeadAttack.state="idle";
		this.reset();
	});

	var attackTimerRight = new Splat.Timer(null, 600, function(){
		if(scene.chickenBody.state === "small"){
			scene.rightHeadAttack.idle();
		}
		if(scene.chickenBody.state === "big"){
			scene.rightHeadAttack.idleBig();
		}
		scene.rightHeadAttack.state="idle";
		this.reset();
	});
	var spawnTimer = new Splat.Timer(null, 1050, function(){
		//scene.spawnAnimated(scene.leftSpawner, "red");
		//scene.spawnAnimated(scene.rightSpawner, "blue");
		scene.spawnAnimated(scene.randomSpawner(), randomColor());
		this.reset();
		this.start();
	});
	var peckSoundTimer = new Splat.Timer(null, 100, function(){
		game.sounds.play("peck");
		this.reset();
	});

	scene.timers.leftAttack = attackTimerLeft;
	scene.timers.rightAttack = attackTimerRight;
	scene.timers.spawnTimer = spawnTimer;
	scene.timers.peckSoundTimer = peckSoundTimer;
	scene.timers.timeLimit = new Splat.Timer( undefined, 1000, function(){
    	scene.decrementSecond();
    	this.reset();
    	this.start();
  	});
  	scene.timers.timeLimit.start();

  	scene.decrementSecond = function(){
    var min = game.time.minute;
    var second1 = game.time.second1;
    var second2 = game.time.second2;

    second2 --;

    if (second2 < 0){
      second1 --;
      second2 = 9;
    }
    if (second1 < 0){
      min --;
      second1 = 5;
    }
    game.time.minute = min;
    game.time.second1 = second1;
    game.time.second2 = second2;
  };

  game.time = {};
  // game.time.minute = 1;
  // game.time.second1 = 5;
  // game.time.second2 = 9;
  	game.time.minute = 0;
	game.time.second1 = 0;
	game.time.second2 = 10;

}, function(ellapsedMillis) {
	// simulation
	var scene = this;

	//init
	if (scene.init === 0){
		scene.init = 1;
		scene.timers.spawnTimer.start();
		game.sounds.play("bgm1",true);
		scene.leftHeadAttack.canAttack = true;
		scene.leftHeadAttack.notEating = true;
		scene.rightHeadAttack.canAttack = true;
		scene.rightHeadAttack.notEating = true;
	}

	if(game.time.minute === 0 && game.time.second1 === 0 && game.time.second2 ===0){
		game.sounds.stop("bgm1");
		game.sounds.stop("elephant");
		game.scenes.switchTo("credits");
	}

//Developer functions
	if (game.keyboard.isPressed("1")){
		if (scene.debug === true){
			scene.debug = false;
		}else{
			scene.debug = true;
		}
	}

	if (game.keyboard.consumePressed("2")){
		scene.incrementStage(scene.currentStage);
		scene.currentStage ++;
		if(scene.currentStage === scene.stages.length){
			scene.currentStage = 0;
		}
	}

	if (game.keyboard.consumePressed("3")){
		scene.chickenBody.morph();
	}

// end developer functions

	if (game.keyboard.consumePressed("f")){
		scene.leftHeadAttack.color = "green";
		scene.leftHeadAttack.attack();
		scene.timers.leftAttack.start();
		scene.timers.peckSoundTimer.start();
	}

	if (game.keyboard.consumePressed("j")){
		scene.rightHeadAttack.color = "green";
		scene.rightHeadAttack.attack();
		scene.timers.rightAttack.start();
		scene.timers.peckSoundTimer.start();
	}

	//enemy management
	for(var x = 0; x < scene.enemies.length; x++){
		scene.enemies[x].x += scene.enemies[x].direction * scene.enemies[x].mod;
		//left side enemy management
		if(scene.enemies[x] && scene.enemies[x].x < -20){
			this.enemies.splice(x,1);
		}
		//right side enemy management
		if(scene.enemies[x] && this.enemies[x].x > canvas.width + 20){
			this.enemies.splice(x,1);
		}
		//collision
		//left
		if(scene.enemies[x] && 
			((scene.enemies[x].collides(scene.leftHeadAttack) &&
		      scene.leftHeadAttack.state==="attack" && 
		      scene.leftHeadAttack.sprite.frame === 1))) {
			
			if(scene.leftHeadAttack.notEating){
				scene.leftHeadAttack.notEating = false;
				scene.leftHeadAttack.devour(scene.enemies[x], game.score, scene);
				scene.enemies.splice(x,1);
			}
		}	

		//right
		if(scene.enemies[x] && 
			((scene.enemies[x].collides(scene.rightHeadAttack) && 
			  scene.rightHeadAttack.state==="attack" &&
			  scene.rightHeadAttack.sprite.frame === 1))){
			if(scene.rightHeadAttack.notEating){
				scene.rightHeadAttack.notEating = false;
				scene.rightHeadAttack.devour(scene.enemies[x], game.score, scene);
				scene.enemies.splice(x,1);
			}
		}
	}

	//move animated entities
	for(x = 0 ; x < scene.animatedEntities.length; x++){
		scene.animatedEntities[x].move(ellapsedMillis);
	}
	for(x = 0 ; x < scene.enemies.length; x++){
		scene.enemies[x].move(ellapsedMillis);
	}

	//sync animations
	if (scene.chickenBody.sprite.frame === 0){
		if(scene.leftHeadAttack.sprite.name === "chicken-left-idle"){
			scene.leftHeadAttack.sprite.frame = 0;
		}
		if(scene.rightHeadAttack.sprite.name === "chicken-right-idle"){
			scene.rightHeadAttack.sprite.frame = 0;
		}
	}
	if (scene.rightHeadAttack.sprite.name === "chicken-right-attack"){
		if(scene.rightHeadAttack.sprite.frame === 2){
			scene.rightHeadAttack.canAttack = false;
		}
		if(scene.rightHeadAttack.sprite.frame === 5){
			scene.rightHeadAttack.canAttack = true;
			scene.rightHeadAttack.notEating = true;
		}
	}

	if (scene.leftHeadAttack.sprite.name === "chicken-left-attack"){
		if(scene.leftHeadAttack.sprite.frame === 2){
			scene.leftHeadAttack.canAttack = false;
		}
		if(scene.leftHeadAttack.sprite.frame === 5){
			scene.leftHeadAttack.canAttack = true;
			scene.leftHeadAttack.notEating = true;
		}
	}

}, function(context) {
	// draw
	var scene = this;
	context.fillStyle = "#fff";
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	//drawEntity(context, scene.rightHeadAttack, scene.debug);
	for(var x = 0 ; x < scene.animatedEntities.length; x++){
		drawAnimatedEntity(context, scene.animatedEntities[x], scene.debug);
	}
	for(x = 0; x < scene.enemies.length;  x++){
		drawEnemy(context, scene.enemies[x], scene.enemies[x].color, scene.debug);
	}
	context.font = "bold 30px Arial";
	context.fillText("Score :" + game.score.score, 0, 100);
	context.fillText("Time : " + game.time.minute + " : "+game.time.second1+""+game.time.second2, canvas.width - 200 , 100);

}));

game.scenes.add("title", new Splat.Scene(canvas, function() {
	// initialization
	var scene = this;
	var titleBg = game.animations.get("bg-title");
	var title = new Splat.AnimatedEntity(0,0,canvas.width, canvas.height, titleBg, 0,0);

	var logo = game.animations.get("title-logo");
	var logoObj = new Splat.AnimatedEntity(0,canvas.height - 400,0,0,logo,0,0);

	scene.title = title;
	scene.logo = logoObj;
	scene.init = 0;
}, function (){
	//simulation
	var scene = this;
	if(scene.init === 0){
		game.sounds.play("bgm2", true);
		scene.init = 1;
	}
	if(game.keyboard.consumePressed("f")){
		game.scenes.switchTo("main");
		game.sounds.stop("bgm2");
	}
	if(game.keyboard.consumePressed("j")){
		game.scenes.switchTo("main");
		game.sounds.stop("bgm2");
	}
}, function(context){
	//draw
	var scene = this;
	scene.title.draw(context);
	scene.logo.draw(context);
	context.fillStyle = "#f00";
  	context.font = "bold 30px Courier";
  	context.fillText("Controls:", canvas.width - 300, 80);
  	context.fillText("F - Left Head", canvas.width - 300, 112);
  	context.fillText("J - Right Head", canvas.width - 300, 144);
}));




game.scenes.add("credits", new Splat.Scene(canvas, function(){
	//initialization
	var scene = this;
	var zen = game.animations.get("bg-zen");
	var zenEnding = new Splat.AnimatedEntity(0,0,canvas.width,canvas.height,zen,0,0);
	var phoenix = game.animations.get("bg-phoenix");
	var phoenixEnding = new Splat.AnimatedEntity(0,0,canvas.width,canvas.height,phoenix,0,0);

	var dragon = game.animations.get("bg-dragon");
	var dragonEnding = new Splat.AnimatedEntity(0,0,canvas.width,canvas.height,dragon, 0,0);

	scene.zenEnding = zenEnding;
	scene.phoenixEnding = phoenixEnding;
	scene.dragonEnding = dragonEnding;
	game.score.calcEnding();


}, function (){
	//simulation
	if(game.keyboard.consumePressed("f")){
		game.scenes.switchTo("title");
	}
	if(game.keyboard.consumePressed("j")){
		game.scenes.switchTo("title");
	}

}, function (context){
	//draw
	var scene = this;
	if(game.score.ending === "zen"){
		scene.zenEnding.draw(context);
		context.fillStyle = "black";
	context.font = "bold 30px Courier";
	context.fillText("Score: "+game.score.score, 0 , 100);
	context.fillText("Credits:", 100, canvas.height - 120);
	context.fillText("Connan Bell - Art and Sound", 100, canvas.height - 80); 
	context.fillText("Rex Soriano @LoLo_R - Programming", 100, canvas.height - 40);
	}
	if(game.score.ending === "phoenix"){
		scene.phoenixEnding.draw(context);
		context.fillStyle = "black";
		context.font = "bold 30px Courier";
		context.fillText("Score: "+game.score.score, canvas.width - 500 , 50);
		context.fillText("Credits:", canvas.width - 600, canvas.height - 94);
		context.fillText("Connan Bell - Art and Sound", canvas.width - 600, canvas.height - 62); 
		context.fillText("Rex Soriano @LoLo_R - Programming", canvas.width - 600, canvas.height - 30);
	}
	if(game.score.ending === "dragon"){
		scene.dragonEnding.draw(context);
		context.fillStyle = "black";
		context.font = "bold 30px Courier";
		context.fillText("Score: "+game.score.score, 0 , 100);
		context.fillText("Credits:", 20, canvas.height - 94);
		context.fillText("Connan Bell - Art and Sound", 20, canvas.height - 62); 
		context.fillText("Rex Soriano @LoLo_R - Programming", 20, canvas.height -30);
	}
	
}));

game.scenes.switchTo("loading");
