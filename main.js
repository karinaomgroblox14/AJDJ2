songbp = "";
songhp = "";

function preload(){
songbp = loadSound("Blackpink DKWTD.mp3");
songhp = loadSound("hedwig theme.mp3");
}

function setup() {
canvas = createCanvas(600, 500);
canvas.center();

video = createCapture(VIDEO);
video.hide();
}

function draw() {
image(video, 0, 0, 600, 500);
}

function play() {
song.play();
}


