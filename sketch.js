/* create global variable */
var ball,squashBall,paddle, paddleImage, edges;

function preload() 
{
 /* preload the animation */
 paddleImage = loadImage("paddle.png");
 squashBall = loadImage("ball.png");
}

function setup() 
{
  /* creates canvas */
  createCanvas(400, 400);
  
  /* create paddle and add animation to it */
  paddle = createSprite(380, 200);
  paddle.addImage("player", paddleImage);
  
  // create ball and animate it 
  ball = createSprite(350, paddle.y);
  ball.addImage("squash", squashBall)
  
  //to give velocity to the ball
  ball.velocityX = -9;
  ball.velocityY = random(-9, 9);
}

function draw() 
{
  /* to give the color to the background */
  background(205,153,0);
  
  //to create edges
  edges = createEdgeSprites();
  
  /* to bounce off the ball with edges */
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  //to bouce off the ball with paddle and give callback fuction
  ball.bounceOff(paddle, randomVelocity());  
  
  /* to restrict paddle to go out of boundary */
  paddle.bounceOff(edges[2]);
  paddle.bounceOff(edges[3]);
  
  //to move the paddle up and down
  if(keyDown(UP_ARROW))
  {
    paddle.y = paddle.y - 20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y = paddle.y + 20;
  }
  
  /* to respawn the ball after going beyond right edge */
  if (ball.x > 450)
  {
    ball.x = 350;
    ball.y = paddle.y;
  }
  
  //to execute sprites
  drawSprites();
}

/* to make the fuction for random velocity */
function randomVelocity()
{
  if (ball.isTouching(paddle))
  {
    ball.velocityY = random(-9, 9);
  }
}

// THE END