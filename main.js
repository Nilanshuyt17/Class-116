noseX = 0;
noseY = 0;

function preload() {
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(580, 350);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
     image(video, 0, 0, 400, 400);
     fill("red");
     stroke("red");
     circle(noseX, noseY, 50);
}

function modelLoaded() {
    console.log("Posenet is Initialized");
}

function gotPoses(results) {
     if (results.length > 0) {
           console.log(results);
           noseX = results[0].pose.nose.x;
           noseY = results[0].pose.nose.y;
           console.log("nose x = " + noseX);
           console.log("nose y = " + noseY);
     }
}