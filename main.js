lwx=0;
rwx=0;
dif=0;

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
    lwx=results[0].pose.leftWrist.x;
    rwx=results[0].pose.rightWrist.x;
    dif=floor(lwx-rwx)
console.log(dif)
}
}
function draw() {
    background("white")
 textSize(dif)
fill("black")
textAlign(CENTER)
text("monisha",width/2,height/2)
document.getElementById("size").innerHTML = "font size will be " + dif + "px";
}