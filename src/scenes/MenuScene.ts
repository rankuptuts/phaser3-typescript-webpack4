import { Scene, GameObjects } from 'phaser'

export default class MenuScene extends Scene {
  constructor() {
    super({ key: 'Menu' }) 
  }
  
  preload() {
  }

  create() {
    this.scene.start('Game')
  }
}