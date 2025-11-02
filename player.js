export default class Player {
    constructor(canvas) {
        this.x = 100
        this.y = 500
        this.dx = 10
        this.dy = -5
        this.canvas = canvas
    }

    draw(ctx) {
        ctx.fillStyle = "red"
        ctx.beginPath()
        let x = this.x 
        let y = this.y
        ctx.arc(x, y, 50, 0, Math.PI * 2)
        ctx.fill()

        if (y > this.canvas.height || y < 0) {
            this.dy = -this.dy
        }
        if (x > this.canvas.width || x < 0) {
            this.dx = -this.dx
        }
        this.x += this.dx
        this.y += this.dy
    }
}