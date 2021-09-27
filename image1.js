img1 = "";
status1 = "";

function preload()
{
    img1 = loadImage('ac.jpg');
}

function setup()
{
    canvas = createCanvas(650, 420);
    canvas.center();
    //objectDetector = ml5.objectDetector(cocossd, modelLoaded);
    document.getElementById("status1").innerHTML = "Status: Detecting Objects";
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
    image(img1, 0, 0, 650, 420);
    fill("blue");
    text("A.C", 260, 85);
    noFill();
    stroke("blue");
    rect(250, 70, 300, 100);
    //gfdsdfgvfd
    fill("red");
    text("Secenry", 250, 200);
    noFill();
    stroke("red");
    rect(240, 170, 330, 150);
    
}

function back()
{
    window.location = "index.html";  
}
