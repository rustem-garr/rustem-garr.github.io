let video = document.getElementById("background-video");
let source = document.getElementsByTagName("source")[0];
let card = document.getElementsByClassName("card")[0];
let user_info = document.getElementsByClassName("user-info")[0];
let count = 1;

function changeMode(){
    if(count % 2 == 0){
        source.src = "./media/video/dark-mode.mp4";
        card.style.backgroundColor = "rgb(52, 48, 48)";
        user_info.style.color = "white";
        count += 1;
    }
    else{
        source.src = "./media/video/light-mode.mp4";
        card.style.backgroundColor = "grey";
        user_info.style.color = "black";
        count+=1;
    }
    video.load();
}