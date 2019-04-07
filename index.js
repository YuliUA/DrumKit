let drumArr=document.querySelectorAll(".drum")

for(let i=0; i<drumArr.length;i++){
    drumArr[i].addEventListener("click", function() {
        let buttonText= this.innerHTML
        makeSound(buttonText)
        buttonAnimation(buttonText)
    })
} 

document.addEventListener('keydown', function(e){
    makeSound(e.key)
})

function makeSound(key){
    switch (key) {
        case 'w':
            let tom1 = new Audio('./sounds/tom-1.mp3')
            tom1.play()
            buttonAnimation(key)
            break;
        case 'a':
            let tom2 = new Audio('./sounds/tom-2.mp3')
            tom2.play()
            buttonAnimation(key)
            break;
        case 's':
            let tom3 = new Audio('./sounds/tom-3.mp3')
            tom3.play()
            buttonAnimation(key)
            break;
        case 'd':
            let tom4 = new Audio('./sounds/tom-4.mp3')
            tom4.play()
            buttonAnimation(key)
            break;
        case 'j':
            let snare = new Audio('./sounds/snare.mp3')
            snare.play()
            buttonAnimation(key)
            break;
        case 'k':
            let crash = new Audio('./sounds/crash.mp3')
            crash.play()
            buttonAnimation(key)
            break;
        case 'l':
            let kick = new Audio('./sounds/kick-bass.mp3')
            kick.play()
            buttonAnimation(key)
            break;
        default:
            break;
    }
}

function buttonAnimation(currentKey){
    let button = document.querySelector(`.${currentKey}`);
    button.classList.add('pressed')
    setTimeout(()=>{
        button.classList.remove('pressed')
    },200)
}
