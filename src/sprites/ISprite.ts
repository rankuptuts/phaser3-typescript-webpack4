import { Physics } from 'phaser'
import { config } from '../config'

export default class ISprite extends Physics.Arcade.Sprite implements IGameSprite {
  constructor(scene, x, y, textureKey) {
    super(scene, x, y, textureKey)
  }
}