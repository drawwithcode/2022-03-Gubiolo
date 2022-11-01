
//Declare Microphone and Check variable for changing text
let mic;
let check = 1;
// Declare Array of buttons and array of sounds
let consigli = [];
let buttons = [];
//set value for noise
let seed = 0;

//Load the sound in the array
function preload() {
  consigli[1] = loadSound("./assets/Consiglio (7).mp3");
  consigli[2] = loadSound("./assets/Consiglio (1).mp3");
  consigli[3] = loadSound("./assets/Consiglio (2).mp3");
  consigli[4] = loadSound("./assets/Consiglio (3).mp3");
  consigli[5] = loadSound("./assets/Consiglio (4).mp3");
  consigli[6] = loadSound("./assets/Consiglio (5).mp3");
  consigli[7] = loadSound("./assets/Consiglio (6).mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  //load the image in the array
  for (let i = 0; i < 7; i++) {
    buttons.push(createImg(button = "./assets/BFG.png")); 
  }
  
  
 
 
 
}
//BG Color
let colorbg = "#ff1c64";

function draw() {
 
  background(colorbg);
  seed++; // Increase it to use it in the noise function
  
  //Background dots changing with the mouse position
  for(let x = 10; x < width; x += width/50) {
    for(let y = 10; y < height; y += height/30) {
      //set distance between dots position and mouse position
      let distance = dist(x,y,mouseX,mouseY); 
      let remap = map(distance, 0, width, 0, 5); 
      noStroke();
      fill("#ffdd75");
      ellipse(x, y, remap);
    }
  }
  //text
  textAlign(CENTER);
  textFont("Nabla");
  textSize(200);
  text("BELLO FIGO", width / 2, height / 3);
  text("MOTIVATIONAL", width / 2, height / 2 + 70);
  textSize(25);
  textFont("Atkinson Hyperlegible");
  t = "Billone, hold down ENTER to ask Bello Figo for advice";
  text(t, width / 2, height - 100);
  
 
  //When the Enter key is down change Bg color and text and if the mic output is detected use microphone volume to change textSize.
  if (keyIsDown(ENTER)) {
    colorbg = "blue"; 


    check = 0;
    fill(colorbg);
    rect(width / 2, height - 100, 600, 50);
    fill("#ffdd75")

    if (mic) {
    const micLevel = mic.getLevel();
    let g = map(micLevel, 0, 1, 25, 70)
      textSize(g);
      console.log(g);
    t = "Billone, now you can talk!";
    text(t, width / 2, height - 100);}

  } else {colorbg = "#ff1c64"; }
//variable control, if the enter key was pressed then the text will be displayed
    if (check == 0) {
    textSize(20)
    fill("white");
    text("Click on a face of Bello Figo to receive advice.", width / 2, height - 200);
  }
   //Buttons noise move function
  buttons.forEach(function (button, i) { 
   let x = noise((seed + (1000 * i)) / 300) * windowWidth;
   let y = noise((seed - (1000 * i)) / 300) * windowHeight;
    

   //Set Button Size and Dinamically change the position of each button in the array
   button.size(150, 150);
   button.position(x, y);
  
    //Call Function to play mp3 file randomly when mouse click on the button images
   button.mousePressed(Consiglio);
  })
  


}


//Function to play mp3 file randomly when mouse click on the button images
function Consiglio() {
  let v = int(random(1, 7));
  consigli[v].play();
  
}
//Window responsive
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
//Set the audio input when the ENTER key is pressed.
function keyPressed() {
  if (keyCode === ENTER) {
    userStartAudio();
    mic = new p5.AudioIn();
	  mic.start();
  }
}





