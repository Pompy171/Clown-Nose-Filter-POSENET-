noseX=0;
noseY=0;

function preload() {
    clown_nose=loadImage('https://i.postimg.cc/G2kBMC53/CLOWN-NOSE-removebg-preview.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    //webcam 
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    //loading posnet
    posenet = ml5.poseNet(video, model_loaded);

    posenet.on("pose", gotposes);
}

function model_loaded() {
    console.log("poseNet is loaded.");
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose,noseX,noseY,30,30);
}

function take_snapshot() {
    save("clown.png");
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        noseX= results[0].pose.nose.x-10;
        noseY= results[0].pose.nose.y-10;

        console.log("nose x position - " + noseX);
        console.log("nose y position - " +noseY);
    }
}