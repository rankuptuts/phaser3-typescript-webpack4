export const gameConfig = {
  type: Phaser.AUTO,
  parent: 'phaser-container',
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  },
  banner: false
}

export const config = {
  someProp: 500,
}