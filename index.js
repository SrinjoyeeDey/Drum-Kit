// document.querySelector("button").addEventListener("click",keyboardClick);

// function keyboardClick(){
//     alert("I got clicked");
// }
// document.querySelector("button").addEventListener("click",function() {
// alert("I got clicked");
// });

var numberOfDrums=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        //this keyword select that particular drum that is clicked .
        // console.log(this.innerHTML);
        // console.log(this.style.color="white");

//button press
        var buttonInnerHtml=this.innerHTML;
        
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    })
};
//keyboaard press
document.addEventListener("keydown",function (event) {
    //console.log(event);
    makeSound(event.key);
    
    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick=new Audio("sounds/kick.mp3");
            kick.play();
            break;

        default:
            console.log(buttonInnerHtml);
    }
};

function buttonAnimation(currentKey){
          var activeButton=  document.querySelector("."+currentKey);           //to get .w or .k
          activeButton.classList.add("pressed");

          setTimeout(function(){
            activeButton.classList.remove("pressed");
          },100);


    }





// var audio=new Audio("sounds/tom-1.mp3");
// audio.play();