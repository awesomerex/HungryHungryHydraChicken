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
		"bug-scuttle" : "assets/sounds/Bug_scuttle.wav",
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

// function drawAnimatedEnemy(context, drawable, debug){
// 	if(debug){
// 		context.strokeRect(drawable.x, drawable.y, drawable.width, drawable.height);
// 	}
// 	else{
// 		drawable.draw(context);
// 	}
// }


// function drawEntity(context, drawable, debug){
// 	if(debug){
// 		context.strokeRect(drawable.x, drawable.y, drawable.width, drawable.height);
// 	}
// 	else{
// 	context.fillStyle = drawable.color;
// 	context.fillRect(drawable.x, drawable.y, drawable.width, drawable.height);
// 	}
// }

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
	};
	manager.calcTotal = function(){
		this.total = this.redCount + this.blueCount;
	};
	return manager;
}

//code for eating enemies
var devour = function(enemy, manager){
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
	console.log(manager);
};


game.scenes.add("title", new Splat.Scene(canvas, function() {
	// initialization
	var scene = this;
	scene.debug = false;

	scene.enemies = [];
	scene.animatedEntities = [];
	scene.score = generateScoreManager();
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

	scene.spawn = function (spawner) {
		var enemy = new Splat.Entity(spawner.x, spawner.y , 30, 30);
		enemy.color = randomColor();
		enemy.direction = spawner.direction;
		enemy.devouredBy = "";
		scene.enemies.push(enemy);
	};

	scene.spawnAnimated = function (spawner) {
		var enemyType = scene.stage;
		var direction = "right";
		var color = randomColor();
		if(spawner.direction === -1){
			direction = "left";
		}

		var sprite = game.animations.get(enemyType +"-"+ color +"-"+ direction);
		console.log(sprite, enemyType +"-"+ color +"-"+ direction);
		var offsets = scene.enemyAnimations[enemyType+"-"+direction];
		var enemy = new Splat.AnimatedEntity(spawner.x, spawner.y, 30, 30, sprite.copy(), offsets.offx, offsets.offy);
		enemy.color = color;
		enemy.type = "animated";
		enemy.direction = spawner.direction;
		scene.enemies.push(enemy);
	};

	scene.randomSpawner = function(){
		var spawners = [scene.leftSpawner,scene.rightSpawner];
		return spawners[Math.floor(Math.random() * spawners.length)];
	};
	var leftHeadIdle = game.animations.get("chicken-left-idle");
	var leftHeadAttack = game.animations.get("chicken-left-attack");
	var rightHeadIdle = game.animations.get("chicken-right-idle");
	var rightHeadAttack = game.animations.get("chicken-right-attack");
	var chickenBody = game.animations.get("chicken-body-idle");
	var chickenBodyBig = game.animations.get("chicken-body-idle-big");
	scene.leftHeadAttack = new Splat.AnimatedEntity(canvas.width/2 - 175, canvas.height-100, 100, 20, leftHeadIdle, 0, -400);

	scene.leftHeadAttack.name = "left";
	scene.leftHeadAttack.devour = devour;
	scene.leftHeadAttack.animations = {"idle": {
											"image" : leftHeadIdle,
											"offx" : 0,
											"offy" : -400},
										"idleBig" : {
											"image" : leftHeadIdle,
											"offx" : 0,
											"offy" : -425
										},
									   "attack": {
									   		"image" :leftHeadAttack,
									   		"offx" : -50,
									   		"offy" : -400}
									   	};
	scene.leftHeadAttack.attack = function (){
		this.sprite = this.animations.attack.image;
		this.spriteOffsetX = this.animations.attack.offx;
		this.spriteOffsetY = this.animations.attack.offy;
	};
	scene.leftHeadAttack.idle = function (){
		this.sprite = this.animations.idle.image;
		this.spriteOffsetX = this.animations.idle.offx;
		this.spriteOffsetY = this.animations.idle.offy;
	};
	scene.leftHeadAttack.idleBig = function (){
		console.log("fire");
		this.sprite = this.animations.idleBig.image;
		this.spriteOffsetX = this.animations.idleBig.offx;
		this.spriteOffsetY = this.animations.idleBig.offy;	
	};
	
	scene.rightHeadAttack = new Splat.AnimatedEntity(canvas.width/2 + 50, canvas.height-100, 100, 20, rightHeadIdle, -50 , -400);
	scene.rightHeadAttack.name = "right";
	scene.rightHeadAttack.devour = devour;
	scene.rightHeadAttack.animations = {"idle": {
											"image" :rightHeadIdle,
											"offx" : -50,
											"offy" : -400 },
										"idleBig" : {
											"image" :rightHeadIdle,
											"offx" : -50,
											"offy" : -425
										},
										"attack": {
											"image" : rightHeadAttack,
											"offx" : -50,
											"offy" : -400}
										};
	scene.rightHeadAttack.attack = function (){
		this.sprite = this.animations.attack.image;
		this.spriteOffsetX = this.animations.attack.offx;
		this.spriteOffsetY = this.animations.attack.offy;
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

	scene.chickenBody = new Splat.AnimatedEntity(canvas.width/2, canvas.height-100, 100, 20, chickenBody, -300, -250);
	scene.chickenBody.animations = {"normal" : {
										"image" : chickenBody,
										"offx" : -300,
										"offy" : -250 },
									"big" : {
										"image" : chickenBodyBig,
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
		this.reset();
	});

	var attackTimerRight = new Splat.Timer(null, 600, function(){
		if(scene.chickenBody.state === "small"){
			scene.rightHeadAttack.idle();
		}
		if(scene.chickenBody.state === "big"){
			scene.rightHeadAttack.idleBig();
		}
		this.reset();
	});

	scene.timers.leftAttack = attackTimerLeft;
	scene.timers.rightAttack = attackTimerRight;

}, function(ellapsedMillis) {
	// simulation
	var scene = this;


//Developer functions
	if (game.keyboard.isPressed("1")){
		if (scene.debug === true){
			scene.debug = false;
		}else{
			scene.debug = true;
		}
	}

	if (game.keyboard.consumePressed("q")){
		var spawner = scene.randomSpawner();
		//scene.spawn(spawner);
		scene.spawnAnimated(spawner);
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

	if (game.keyboard.isPressed("w")){
		scene.leftHeadAttack.color = "green";
		scene.leftHeadAttack.state = "attack";
		scene.leftHeadAttack.attack();
		scene.timers.leftAttack.start();
	}
	else{
		scene.leftHeadAttack.color = "red";
		scene.leftHeadAttack.state = "idle";
	}

	if (game.keyboard.isPressed("e")){
		scene.rightHeadAttack.color = "green";
		scene.rightHeadAttack.state = "attack";
		scene.rightHeadAttack.attack();
		scene.timers.rightAttack.start();
	}
	else{
		scene.rightHeadAttack.color = "blue";
		scene.rightHeadAttack.state = "idle";
	}


	//enemy management
	for(var x = 0; x < scene.enemies.length; x++){
		scene.enemies[x].x += scene.enemies[x].direction;
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
			
			//register a devour and note which color eaten
			scene.leftHeadAttack.devour(scene.enemies[x], scene.score);
			scene.enemies.splice(x,1);
		}	

		//right
		if(scene.enemies[x] && 
			((scene.enemies[x].collides(scene.rightHeadAttack) && 
			  scene.rightHeadAttack.state==="attack" &&
			  scene.rightHeadAttack.sprite.frame === 1))){

			scene.rightHeadAttack.devour(scene.enemies[x], scene.score);
			scene.enemies.splice(x,1);
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

}));

game.scenes.switchTo("loading");
