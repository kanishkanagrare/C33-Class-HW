var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight = 300;
var score = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
     stroke("white");
   }


    for (var j = 75; j <=width; j=j+50)
    {

       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50)
    {

       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50)
    {

       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50)
    {

       plinkos.push(new Plinko(j,375));
    }

}



function draw() {

  background("blue");

  Engine.update(engine);
  ground.display();

  stroke("black")
  textSize(20)
  text("Score : "+score,20,30);

  noStroke();
  textSize(30);
  text("Press space to drop the plinkos", width/2 - 205, 450);
  text("500",width/2-385,525);
  text("500",width/2+335,525);
  text("400",width/2-305,525);
  text("400",width/2+255,525);
  text("300",width/2-225,525);
  text("300",width/2+175,525);
  text("200",width/2-145,525);
  text("200",width/2+95,525);
  text("100",width/2-65,525);
  text("100",width/2+15,525);

   for (var i = 0; i < plinkos.length; i++) {

     plinkos[i].display();

   }

   if (keyCode === 32){
   if(frameCount % 30===0){
     particles.push(new Particle(random(0,800), 10,10));
      score++;
    //  score();
   }
}

  for (var j = 0; j < particles.length; j++) {

     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {

     divisions[k].display();
   }
}

function score()  {
  if (particles != null)
  {
    particles.display();

    if(particles.body.position.y > 400)
    {

      if (particles.body.position.x < 300)
      {
        score = score + 500;
        particles != null
        if(count >= 5) gameState = "end"
      }

        else if(particles.body.position.x < width/2-385 && particles.body.position.x > width/2-305)
        {
          score = score + 400;
          particles != null
          if (count>= 5) gameState = "end"
        }


        else if (particles.body.position.x < width/2-335 && particles.position.x > width/2-225)
        {
          score = score + 300;
          particles != null
          if (count>= 5) gameState = "end"
        }


        else if(particles.body.position.x < width/2-225 && particles.body.position.x > width/2-145)
        {
          score = score + 200;
          particles != null
          if (count>= 5) gameState = "end"
        }


        else if (particles.body.position.x < width/2-65 && particles.position.x > width/2)
        {
          score = score + 100;
          particles != null
          if (count>= 5) gameState = "end"
        }

        else if(particles.body.position.x < width/2+335 && particles.body.position.x > width/2+225)
        {
          score = score + 500;
          particles != null
          if (count>= 5) gameState = "end"
        }


        else if (particles.body.position.x < width/2-335 && particles.position.x > width/2-225)
        {
          score = score + 400;
          particles != null
          if (count>= 5) gameState = "end"
        }


        else if(particles.body.position.x < width/2-225 && particles.body.position.x > width/2-145)
        {
          score = score + 300;
          particles != null
          if (count>= 5) gameState = "end"
        }


        else if (particles.body.position.x < width/2-145 && particles.position.x > width/2-65)
        {
          score = score + 200;
          particles != null
          if (count>= 5) gameState = "end"
        }

        else if (particles.body.position.x < width/2-65 && particles.position.x > width/2)
        {
          score = score + 100;
          particles != null
          if (count>= 5) gameState = "end"
        }
    }
  }
/*
  if(particles.position.y > 500){
    if (particles.position.x < width/2 - 385)
    {
      score = score + 500
    }

      if (particles.position.x < width/2 - 335 && particles.position.x > width/2 - 385)
      {
        score = score + 500
      }

      if (particles.position.x < width/2 - 335 && particles.position.x > width/2 - 385)    {
        score = score + 500
      }

      if (particles.position.x < width/2 - 335 && particles.position.x > width/2 - 385)    {
        score = score + 500
      }
      if (particles.position.x < width/2 - 335 && particles.position.x > width/2 - 385)    {
        score = score + 500
      }

      if (particles.position.x < width/2 - 335 && particles.position.x > width/2 - 385)    {
        score = score + 500
      }

      if (particles.position.x < width/2 - 335 && particles.position.x > width/2 - 385)    {
        score = score + 500
      }
      if (particles.position.x < width/2 - 335 && particles.position.x > width/2 - 385)    {
        score = score + 500
      }
      */
  }
