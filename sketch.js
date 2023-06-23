var backgroundImage
var shooterImg
var zombieImg
var heart1Img,heart2Img,heart3Img



function preload(){
backgroundImage=loadImage("assets/bg1.jpg")
shooterImg=loadImage("assets/shooter_2.png")
shooterShootingImg=loadImage("assets/shooter_3.png")
zombieImg=loadImage("assets/zombie.png")
heart1Img=loadImage("assets/heart_1.png")
heart2Img=loadImage("assets/heart_2.png")
heart3Img=loadImage("assets/heart_3.png")

}
function setup() {
  createCanvas(windowWidth,windowHeight);
  //adding the background image
bg=createSprite(displayWidth/2,displayHeight/2,20,20)
bg.addImage(backgroundImage)
bg.scale=0.8
//creating the player sprite

player=createSprite(displayWidth-1250,displayHeight-289,50,50)
player.addImage(shooterImg)
player.scale=0.5
player.debug=true
player.setCollider("rectangle",0,0,300,500)


zombieGroup=new Group()

heart1=createSprite(displayWidth-150,40,20,20)
heart1.addImage=(heart1Img)
heart1.visible=true
heart1.scale=1

} 




function draw() {
  background(0); 
drawSprites()
if(keyDown("W")||touches.length>0){
player.y=player.y-30

}
if(keyDown("S")||touches.length>0){
  player.y=player.y+30

  }
if(keyWentDown("space")){
player.addImage(shooterShootingImg)

}
else if(keyWentUp("space")){
player.addImage(shooterImg)

}
zombieagent()
if(zombieGroup.isTouching(player)){
for(var i =0;i<zombieGroup.length;i++){
if(zombieGroup[i].isTouching(player)){
zombieGroup[i].destroy()

}

}

}



}

function zombieagent(){
if(frameCount%50===0){
  zombie=createSprite(random(950,1200),random(250,600),40,40)
zombie.addImage(zombieImg)
zombie.scale=0.2
zombie.velocityX=-3
zombie.debug=true
zombie.setCollider("rectangle",0,0,450,1050)
zombie.lifetime=500
zombieGroup.add(zombie)

}


}
