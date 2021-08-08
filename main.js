
mX=0;
mY=0;

function preload() { 
    Moustache = loadImage('https://i.postimg.cc/VNS24xDh/unnamed-moustache.png');
    
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
console.log("poseNet is initialized");
}

function gotPoses(results) {
    if(results.length>0)
    {
        console.log(results);
        mX=results[0].pose.nose.x-35;
        mY=results[0].pose.nose.y-12;
        console.log("nose x = " + mX);
        console.log("nose y = " + mY);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(Moustache,mX,mY,70,70);
}

function take_snapshot(){
    save('Moustache.png');
}