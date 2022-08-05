let dino = document.querySelector('#dino')
let cactus = document.querySelector('#cactus')


document.addEventListener("keydown", function(event){
    jump()

})

function jump(){
    if (dino.classList != "jump"){
        dino.classList.add("jump")
    }
    setTimeout(function(){ //позволяет вызвать функцию 1 раз через определенный промежуток времени
        dino.classList.remove("jump")
    }, 300)
}


let isAlive = setInterval(function(){ //позволяет вызывать функцию регулярно через определенный интервал времени
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top")) //разбивает строковый элемент и возвращает целое число 
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left")) // возвращает объект содержащий значение всех ссс свойств элемента (позволяет получить свойства)

    if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140){
        alert("GAME OVER!")
    }
}, 10)