import { Scene, GameObjects, Physics } from 'phaser'
import { config } from '../config'
import Bird from '../sprites/ISprite'


export default class GameScene extends Scene implements IGameScene {
  private logo : any
  private particles : any
   
  constructor() {
    super({ key: 'Game' })
  }
    
  preload() {
    this.add.image(400, 300, 'background');
    this.logo = this.physics.add.image(200, 52, 'logo');
    this.particles = this.add.particles('particles');
  }

  create() {
    this.startGame()
  }

  startGame() {
    this.logo.setVelocity(100, 200);
    this.logo.setBounce(1, 1);
    this.logo.setCollideWorldBounds(true);

    var emitter = this.particles.createEmitter({
        speed: 100,
        scale: { start: 0, end: 1.5 },
        blendMode: 3
    });
    emitter.startFollow(this.logo);
  }

  update(){
  }
}