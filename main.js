function setup() {
    video = createCapture(VIDEO);
    video.size(650, 600);
    video.position(200,200);

    canvas= createCanvas(650, 600);
    canvas.position(1100,200)

    posenet = ml5.poseNet(video,modelLoaded);
posenet.on('pose', gotPoses);
} 

function modelLoaded() {
    console.log("posenet is done");
}

function gotPoses (results) {

if (results.length > 0) 
{
    console.log(results)
}

}
function draw() {
    
}