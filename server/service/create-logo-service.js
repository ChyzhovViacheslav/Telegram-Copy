const path = require('path')
const { createCanvas } = require('canvas')
const fs = require('fs')

class CreateLogo {
    createLogo(username) {
        const imageName = `${Date.now()}.png`

        const backgroundColor = [
            '#C98BB9',
            '#7293DC',
            '#b7bf73',
            '#73DEC9',
            '#E0C08D',
            '#BBD3FC',
            '#96e3c8'
        ]

        const randomNum = Math.floor(Math.random() * (backgroundColor.length - 0) + 0)

        const canvas = createCanvas(512, 512)
        const context = canvas.getContext('2d')

        context.fillStyle = backgroundColor[randomNum];
        context.fillRect(0, 0, 512, 512);

        context.font = "regular 256pt 'PT Sans'"
        context.textAlign = 'center'
        context.fillStyle = '#fff'
        context.fillText(username[0].toUpperCase(), 256, 382)

        const buffer = canvas.toBuffer('image/png')
        fs.writeFileSync(path.resolve('server', 'images', imageName), buffer)
        return imageName
    }
}

module.exports = new CreateLogo()