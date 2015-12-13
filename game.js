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
		"beetle-blue" : {
			"strip" : "assets/images/Blue_Beetle.png",
			"frames" : 2,
			"msPerFrame" : 100
		},
		"pony-blue" : {
			"strip" : "assets/images/Blue_pony_animation.png",
			"frames" : 2,
			"msPerFrame" : 100
		},
		"pony-red" : {
			"strip" : "assets/images/Red_pony_animation.png",
			"frames" : 2,
			"msPerFrame" : 100
		},
		"elephant-blue" : {
			"strip" : "assets/images/Blue_Running_Elephant_animation.png",
			"frames" : 2,
			"msPerFrame" : 100
		},
		"elephant-red" :{
			"strip" : "assets/images/Red_Running_Elephant_animation.png",
			"frames" : 2,
			"msPerFrame" : 100
		},
		"rat-blue":{
			"strip" : "assets/images/Blue_Running_Rat_animation.png",
			"frame" : 2,
			"msPerFrame" : 100
		},
		"rat-red":{
			"strip" : "assets/images/Red_Running_Rat_animation.png",
			"frame" : 2,
			"msPerFrame" : 100
		},
		"sheep-blue":{
			"strip" : "assets/images/Blue_Running_Sheep.png",
			"frame" : 2,
			"msPerFrame" : 100
		},
		"sheep-red":{
			"strip" : "assets/images/Red_Running_Sheep.png",
			"frame" : 2,
			"msPerFrame" : 100
		},
		"chicken-body-idle" : {
			"strip" : "assets/images/Hydra_Chicken_body_animation.png",
			"frames" : 3,
			"msPerFrame" : 150
		},
		"chicken-left-idle" : {
			"strip" : "assets/images/Hydra_Chicken_red_head_idle_animation.png",
			"frames" : 3,
			"msPerFrame" : 150
		},
		"chicken-left-attack" :{
			"strip" : "assets/images/Blue_Head_attack_Animation.png",
			"frames" : 6,
			"msPerFrame" : 100
		},
		"chicken-right-idle" : {
			"strip" : "assets/images/Hydra_Chicken_blue_head_idle_animation.png",
			"frames" : 3,
			"msPerFrame" : 150
		},
		"chicken-right-attack" : {
			"strip" : "assets/images/Red_Head_attack_Animation.png",
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
	if(debug){
		context.strokeRect(drawable.x, drawable.y, drawable.width, drawable.height);
	}
	else{
		context.fillStyle = color;
		context.fillRect(drawable.x, drawable.y, drawable.width, drawable.height);
	}
}


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
	if(debug){
		context.strokeRect(drawable.x, drawable.y, drawable.width, drawable.height);
	}
	else{
		drawable.draw(context);
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
	scene.leftSpawner = new Splat.Entity(-10, canvas.height-100, 20,20);
	scene.leftSpawner.direction = 1;
	scene.leftSpawner.state = "idle";
	scene.rightSpawner = new Splat.Entity(canvas.width + 10, canvas.height-100, 20, 20);
	scene.rightSpawner.direction = -1;
	scene.rightSpawner.state = "idle";
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

	scene.randomSpawner = function(){
		var spawners = [scene.leftSpawner,scene.rightSpawner];
		return spawners[Math.floor(Math.random() * spawners.length)];
	};
	var leftHeadIdle = game.animations.get("chicken-left-idle");
	var leftHeadAttack = game.animations.get("chicken-left-attack");
	var rightHeadIdle = game.animations.get("chicken-right-idle");
	var rightHeadAttack = game.animations.get("chicken-right-attack");
	var chickenBody = game.animations.get("chicken-body-idle");
	scene.leftHeadAttack = new Splat.AnimatedEntity(canvas.width/2 - 100, canvas.height-100, 100, 20, leftHeadIdle, -50, -450);

	scene.leftHeadAttack.name = "left";
	scene.leftHeadAttack.devour = devour;
	scene.leftHeadAttack.animations = {"idle": leftHeadIdle,
									   "attack": leftHeadAttack};
	scene.leftHeadAttack.attack = function (){
		
	};
	
	scene.rightHeadAttack = new Splat.AnimatedEntity(canvas.width/2 + 100, canvas.height-100, 100, 20, rightHeadIdle, -50 , -450);
	//scene.rightHeadAttack.color ="white";
	scene.rightHeadAttack.name = "right";
	scene.rightHeadAttack.devour = devour;
	scene.rightHeadAttack.animations = {"idle": rightHeadIdle, 
										"attack": rightHeadAttack};

	scene.chickenBody = new Splat.AnimatedEntity(canvas.width/2, canvas.height-100, 100, 20, chickenBody, -300, -250);

	scene.animatedEntities.push(scene.leftHeadAttack);
	scene.animatedEntities.push(scene.rightHeadAttack);
	scene.animatedEntities.push(scene.chickenBody);



}, function(ellapsedMillis) {
	// simulation
	var scene = this;

	if (game.keyboard.isPressed("1")){
		if (scene.debug === true){
			scene.debug = false;
		}else{
			scene.debug = true;
		}
	}

	if (game.keyboard.isPressed("w")){
		scene.leftHeadAttack.color = "green";
		scene.leftHeadAttack.state = "attack";
	}
	else{
		scene.leftHeadAttack.color = "red";
		scene.leftHeadAttack.state = "idle";
	}

	if (game.keyboard.isPressed("e")){
		scene.rightHeadAttack.color = "green";
		scene.rightHeadAttack.state = "attack";

	}
	else{
		scene.rightHeadAttack.color = "blue";
		scene.rightHeadAttack.state = "idle";
	}

	if (game.keyboard.consumePressed("q")){
		var spawner = scene.randomSpawner();
		scene.spawn(spawner);
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
		      scene.leftHeadAttack.state==="attack"))) {
			
			//register a devour and note which color eaten
			scene.leftHeadAttack.devour(scene.enemies[x], scene.score);
			scene.enemies.splice(x,1);
		}	

		//right
		if(scene.enemies[x] && 
			(scene.enemies[x].collides(scene.rightHeadAttack) && 
			scene.rightHeadAttack.state==="attack")){

			scene.rightHeadAttack.devour(scene.enemies[x], scene.score);
			scene.enemies.splice(x,1);
		}
	}

	//move animated entities
	for(x = 0 ; x < scene.animatedEntities.length; x++){
		scene.animatedEntities[x].move(ellapsedMillis);
	}

}, function(context) {
	// draw
	var scene = this;
	context.fillStyle = "#fff";
	context.fillRect(0, 0, canvas.width, canvas.height);

	for(var x = 0; x < scene.enemies.length;  x++){
		drawEnemy(context, scene.enemies[x], scene.enemies[x].color);
	}

	
	//drawEntity(context, scene.rightHeadAttack, scene.debug);
	for(x = 0 ; x < scene.animatedEntities.length; x++){
		drawAnimatedEntity(context, scene.animatedEntities[x], scene.debug);
	}

}));

game.scenes.switchTo("loading");
