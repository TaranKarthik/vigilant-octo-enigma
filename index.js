var noseX,noseY;
var leftWristX,rightWristX;
var difference;



function preload(){


}

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    ctx = createCanvas(550,450);
    ctx.position(560,110);

    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',resultObtained);

}

function modelLoaded(){
    console.log(
        "Posenet Initialized Blah blah blah."
    );
}

function resultObtained(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nosex= " + noseX + " NoseY= " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX-rightWristX);
        console.log(difference + " is the size of the square ");
        console.log("leftWristX= " + leftWristX + " rightwristx " + rightWristX);
        

    }
}

function draw(){
    background(70);
    fill('#ff3b48');
    stroke('#ff3b48');
    square(noseX,noseY,difference);
    document.getElementById("square_side").innerHTML = "Width 'n' height of the square- " + difference + "px ";
}