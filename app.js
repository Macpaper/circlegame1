import Enemy from "./enemy.js"
import Player from "./player.js"
import Powerup from "./powerup.js"

const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let player1 = new Player(canvas)
player1.draw(ctx)

let enemy_list = []
let bullet_list = []
let powerup_list = []

powerup_list.push(new Powerup(canvas))

let wave = 1

function loop() {
    // Background color
    ctx.fillStyle = "rgb(50, 50, 50)"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    enemy_list = enemy_list.filter(e => !e.dead)
    for (let e of enemy_list) {
        e.draw(ctx)
    }

    if (enemy_list.length == 0) {
        spawnEnemies()
    }

    for (let b of bullet_list) {
        b.update(enemy_list)
        b.draw(ctx)
    }

    // Only keeps powerup objects if p.delete is false
    powerup_list = powerup_list.filter(p => p.deleteMe == false)
    for (let p of powerup_list) {
        p.update()
        p.draw(ctx)
    }

    player1.update(enemy_list, bullet_list, powerup_list)
    player1.draw(ctx)

    spawnPowerups()
}

let powerup_timer = Date.now();
let powerup_delay = Math.random() * 5000
function spawnPowerups() {
    if (Date.now() - powerup_timer > powerup_delay) {
        powerup_timer = Date.now()
        powerup_list.push(new Powerup(canvas))
    }
}

function spawnEnemies() {
    // spawn a bunch of enemies
    for (let i = 0; i < wave * 5; i++) {
        let enemy1 = new Enemy(canvas)
        enemy_list.push(enemy1)
    }
    wave += 1
}

setInterval(loop, 17)