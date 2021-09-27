img4 = "";
status4 = "";

function preload()
{
    img4 = loadImage('fan.jpg');
}

function setup()
{
    canvas = createCanvas(650, 420);
    canvas.center();
    document.getElementById("status4").innerHTML = "Status: Detecting Objects";
} 

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, result)
{
    if (error) {
        console.log(error);
    }
        console.log(result);
}

function draw()
{
    image(img4, 0, 0, 650, 420);
    fill("blue");
    text("Fan", 270, 25);
    noFill();
    stroke("blue");
    rect(250, 5, 300, 150);
}

function back()
{
    window.location = "index.html";  
}