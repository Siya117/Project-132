img5 = "";
status5 = "";

function preload()
{
    img5 = loadImage('printer.jpg');
}

function setup()
{
    canvas = createCanvas(650, 420);
    canvas.center();
    document.getElementById("status5").innerHTML = "Status: Detecting Objects";
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
    image(img5, 0, 0, 650, 420);
    fill("blue");
    text("SwitchBoard", 290, 220);
    noFill();
    stroke("blue");
    rect(270, 200, 100, 70);
    //gfdsdfgvfd
    fill("red");
    text("Printer", 350, 350);
    noFill();
    stroke("red");
    rect(330, 330, 200, 90);
}

function back()
{
    window.location = "index.html";  
}