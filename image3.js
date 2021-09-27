img3 = "";
status3 = "";

function preload()
{
    img3 = loadImage('curtain.jpg');
}

function setup()
{
    canvas = createCanvas(650, 420);
    canvas.center();
    document.getElementById("status3").innerHTML = "Status: Detecting Objects";
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
    image(img3, 0, 0, 650, 420);
    fill("blue");
    text("A.C", 170, 85);
    noFill();
    stroke("blue");
    rect(150, 50, 400, 70);
    //gfdsdfgvfd
    fill("red");
    text("Curtain", 30, 150);
    noFill();
    stroke("red");
    rect(10, 130, 470, 200);
}

function back()
{
    window.location = "index.html";  
}