let character = document.getElementById("character")
let block = document.getElementById("block")
let score = document.getElementById("score")
let gameOver = document.getElementById("gameOver")
let _score = 0;
let scoreInterval = null;

document.addEventListener("keyup", function(event){
    if(event.keyCode != 38) return;
    // checking if there is class "animate" in the character (id) or not
    if(!character.classList.contains("animate")){
    // if not add animate an class for 500ms
    character.classList.add("animate");
    }
    setTimeout(()=>{
        character.classList.remove("animate");
    }, 500)
})

let checkGameOver = setInterval(()=>{
    let characterTop = parseInt(window.getComputedStyle(character).
    getPropertyValue("top")) // 50px -> 50
    let blockLeft = parseInt(window.getComputedStyle(block).
    getPropertyValue("left"))
    if(blockLeft < 75 && blockLeft>50 && characterTop >=130){
        gameOver.classList.add("show");
        clearInterval(scoreInterval)
        character.remove();
        block.remove();
    }
}, 10)

setTimeout(()=> {
    scoreInterval = setInterval(()=>{
        _score++;
        score.innerHTML = _score;
        score.innerHTML = _score;
    }, 100)
}, 1000)
