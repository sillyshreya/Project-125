function setup () {
   canvas=createCanvas(300,300);
   canvas.center();
   video=createCapture(VIDEO);
   video.hide();
   
}
noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup() {
  video = createCapture(VIDEO);
  video.size(550,500);
  canvas = createCanvas(550,550);
  canvas.position(560,150);
  poseNet= ml5.poseNet(video,modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}
function  gotPoses(results) {
    if (results.length >0)
    {
        console.log(results);
       
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX-rightWristX);
    }
    }
    function draw ()
{
    background('#969A97');

  text('Shreya',50,400); 
    fill('#F90093');
   
    textSize(difference);
}
