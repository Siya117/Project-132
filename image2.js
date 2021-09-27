img2 = "";
status2 ="";

function preload()
{
    img2 = loadImage('clock.jpg');
}

function setup()
{
    canvas = createCanvas(650, 420);
    canvas.center();
    document.getElementById("status2").innerHTML = "Status: Detecting Objects";
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
    image(img2, 0, 0, 650, 420);
    fill("blue");
    text("Tube Light", 170, 85);
    noFill();
    stroke("blue");
    rect(150, 70, 450, 50);
    //gfdsdfgvfd
    fill("red");
    text("Clock", 300, 210);
    noFill();
    stroke("red");
    rect(280, 190, 130, 130);
}



function back()
{
    window.location = "index.html";  
}