import Enemy from "./enemy.js"
import Player from "./player.js"

const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let player1 = new Player(canvas)
player1.draw(ctx)

let enemy_list = []
for (let i = 0; i < 10; i++) {
    let enemy1 = new Enemy(canvas)
    enemy_list.push(enemy1)
}

function loop() {
    // Background color
    ctx.fillStyle = "rgb(50, 50, 50)"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    for (let e of enemy_list) {
        e.draw(ctx)
    }
   
    player1.update(enemy_list)
    player1.draw(ctx)
}

setInterval(loop, 17)