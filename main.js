function start(){
   objectDetecter = ml5.objectDetecter('cocossd', modelLoaded);
   document.getElementById("Status").innerHTML ="Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loadel!")
    Status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function image() {
    image(video, 0, 0, 480, 380);
}