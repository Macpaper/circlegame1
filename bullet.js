export default class Bullet {
    constructor(canvas, x, y, angle) {
        this.x = x
        this.y = y
        this.angle = angle

        this.size = 10
        this.canvas = canvas

        this.color = "yellow"
    }

    update(enemy_list) {
        for (let e of enemy_list) {
            let distX = e.x - this.x
            let distY = e.y - this.y
            let distance = Math.sqrt(distX * distX + distY * distY)
            if (distance < e.size + this.size) {
                e.size -= 5
            }    
        }

        this.x += 15
    }

    draw(ctx) {
        ctx.fillStyle = this.color
        ctx.beginPath()
        let x = this.x 
        let y = this.y
        ctx.arc(x, y, this.size, 0, Math.PI * 2)
        ctx.fill()
    }
}