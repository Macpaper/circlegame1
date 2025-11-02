export default class Enemy {
    constructor(canvas) {
        this.x = canvas.width * 4/5
        this.y = canvas.height * Math.random()
        this.dx = Math.random() * 10 - 5 
        this.dy = Math.random() * 10 - 5
        this.size = Math.random() * 50 + 10
        this.canvas = canvas

        let r = Math.random() * 255 
        let g = Math.random() * 255
        let b = Math.random() * 255
        this.color = `rgb(${r}, ${g}, ${b})`
    }

    draw(ctx) {
        ctx.fillStyle = this.color
        ctx.beginPath()
        let x = this.x 
        let y = this.y
        ctx.arc(x, y, this.size, 0, Math.PI * 2)
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