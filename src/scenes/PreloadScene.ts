import { Scene } from 'phaser'

export default class PreloadScene extends Scene {
  constructor() {
    super({ key: 'Preload' })
  }

  preload() {
    let image = this.load.image.bind(this.load)
    let spritesheet = this.load.spritesheet.bind(this.load)
    let audio = this.load.audio.bind(this.load)

    // Images and Spritesheet
    this.load.setPath('src/assets/images/')
    image('background', '800x600bg.png')
    image('logo', 'logo.png')
    image('particles', 'particles.png')
  }

  create() {
    this.scene.start('Menu')
  }
}