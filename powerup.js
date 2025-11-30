export default class Powerup {
    constructor(canvas) {
        this.x = Math.random() * canvas.width // 0 -> width of screen
        this.y = 0
        this.size = 10
        this.deleteMe = false
    }
    update() {
        this.y += 3
    }
    draw(ctx) {
        ctx.fillStyle = "yellow"
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
    }
}