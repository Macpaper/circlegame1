export default class Player {
    constructor(canvas) {
        this.x = 100
        this.y = 500
        this.dx = 10
        this.dy = -5
        this.radius = 25
        this.canvas = canvas
        this.left = false
        this.right = false
        this.up = false
        this.down = false
        // Keyboard Event
        document.addEventListener("keydown", e => {
            if (e.key == "ArrowUp" || e.key == "w") {
                this.up = true
            }
            if (e.key == "ArrowDown" || e.key == "s") {
                this.down = true
            }
            if (e.key == "ArrowRight" || e.key == "d") {
                this.right = true
            }
            if (e.key == "ArrowLeft" || e.key == "a") {
                this.left = true
            }
        })
        document.addEventListener("keyup", e => {
            if (e.key == "ArrowUp" || e.key == "w") {
                this.up = false
            }
            if (e.key == "ArrowDown" || e.key == "s") {
                this.down = false
            }
            if (e.key == "ArrowRight" || e.key == "d") {
                this.right = false
            }
            if (e.key == "ArrowLeft" || e.key == "a") {
                this.left = false
            }
        })
    }
    
    update(enemy_list) {
        // enemy x, enemy y, player x, player y, enemy radius, player radius
        for (let e of enemy_list) {
            let distX = e.x - this.x
            let distY = e.y - this.y
            let distance = Math.sqrt(distX * distX + distY * distY)
            if (distance < e.size + this.radius) {
                this.radius = 0
            }    
        }
        let speed = 5
        if (this.up) {
            this.dy = -speed
        }
        if (this.down) {
            this.dy = speed
        }
        if (this.left) {
            this.dx = -speed
        }
        if (this.right) {
            this.dx = speed
        }

        if (this.x < 0) {
            this.x = 0
        }
        if (this.y < 0) {
            this.y = 0
        }
        if (this.y > this.canvas.height) {
            this.y = this.canvas.height
        }
        if (this.x > this.canvas.width) {
            this.x = this.canvas.width
        }

        this.x += this.dx
        this.y += this.dy
        this.dx = 0
        this.dy = 0

    }

    draw(ctx) {
        ctx.fillStyle = "red"
        ctx.beginPath()
        let x = this.x 
        let y = this.y
        ctx.arc(x, y, this.radius, 0, Math.PI * 2)
        ctx.fill()
    }
}