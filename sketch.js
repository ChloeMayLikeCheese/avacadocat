var cat
var backgroundFruit
var catImg
var backGroundImg
var background
var fruit
var score = 0
var ground
var lost = 0
var fish
var fishImg

gameState = "play"

function preload (){
   catImg = loadImage ("cat.png")
   backGroundImg = loadImage ("background.jpg")
 backgroundFruitImg = loadImage ("fruit2.png")
     fruitImg = loadImage ("fruit.png")
     fishImg = loadImage ("fish.png")
}
function setup(){

    createCanvas(windowWidth,windowHeight)
    fish = createSprite (200,200)
    fish.visible = false
    cat = createSprite(250,455,50,50)
    //cat.debug = true
    cat.setCollider("circle",-75,80,50) 
    ground = createSprite (windowWidth / 2,650,windowWidth,30)
    ground.visible = false
    //ground.debug = true

    
    
   cat.addImage ("cat",catImg)
   for (var i = 0 ;i < 30 ; i ++){
    backgroundFruit = createSprite(random(10,windowWidth - 200),random (130,windowHeight - 600 ),30,30)
    backgroundFruit.addImage ("backGroundFruit",backgroundFruitImg)
    backgroundFruit.scale = 0.2
    
   }
   for (var i = 0 ;i < 20 ; i ++){
    fruit = createSprite(random(10,windowWidth - 200),random (130,windowHeight - 600 ),30,30)
    fruit.addImage ("fruit  ",fruitImg)
    fruit.scale = 0.2
 
    
   }

   
}

function draw(){

    background(backGroundImg)
    textSize (50)
    text ("Score  "+  score,100,50)

    textSize (30) 
    text ("Avocado lost ☹️ "+ lost ,windowWidth-270,50)

 if(gameState === "play"){


if(keyDown(LEFT_ARROW)){
    cat.x = cat.x - 70  
  

}
drop ()
fishDrop()
if(keyDown(RIGHT_ARROW)){
    cat.x = cat.x + 70  

}
if (cat.isTouching(fruit)) {
    fruit.destroy()
    score = score + 1
}
if (cat.isTouching(fish)) {
    fish.destroy()
    score = score + 5
}
if (fruit.isTouching(ground)&& fruit.y > cat.y +20) {
    fruit.destroy()
lost = lost + 1
}
if (lost === 10) {
gameState = "end"   
}
    drawSprites()
}
 else if (gameState === "end"){
 
    textSize (100)
    text ("oh no, no avacados for the cat",200, 200)
    
 }
}

function drop (){
    if (frameCount%40 === 10) {
        fruit = createSprite(random(10,windowWidth - 200),random (130,windowHeight - 600 ),30,30)
    // fruit.shapeColor = "green"
    fruit.velocityY = 10
    fruit.addImage ("fruit  ",fruitImg)
    fruit.scale = 0.2
    }
}
function fishDrop (){
    if (frameCount%300 === 10) {
        fish = createSprite(random(10,windowWidth - 200),random (130,windowHeight - 600 ),30,30)
    // fruit.shapeColor = "green"
    fish.velocityY = 10
    fish.addImage ("fish  ",fishImg)
    fish.scale = 0.2
    }
}




