var drum_button_length = document.querySelectorAll(".drum").length;

for(var i = 0; i < drum_button_length; ++i)
{
    document.querySelectorAll("button")[i].addEventListener("click",function () {
        
        var test = this.innerHTML
        animationButton(test);
        Fun(test);
    })
}
        document.addEventListener("keydown",function (event){
            animationButton(event.key);
            Fun(event.key);
        });

function Fun(keyu){
    switch(keyu)
    {
        case 'w':
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
            case 'a':
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
                case 's':
                    var audio = new Audio("sounds/tom-3.mp3");
                    audio.play();
                    break;
                    case 'd':
                        var audio = new Audio("sounds/tom-4.mp3");
                        audio.play();
                        break;
                        case 'j':
                            var audio = new Audio("sounds/snare.mp3");
                            audio.play();
                            break;
                            case 'k':
                                var audio = new Audio("sounds/kick-bass.mp3");
                                audio.play();
                                break;
                                case 'l':
                                    var audio = new Audio("sounds/crash.mp3");
                                    audio.play();
                                    break;
                                    default:
                                        console.log(buttonInnerHTML);                                                              
    }
}

function animationButton(key)
{
    var activationButton = document.querySelector("."+key);
    activationButton.classList.add("pressed");
setTimeout(function(){
    activationButton.classList.remove("pressed");
}, 100.00);
}