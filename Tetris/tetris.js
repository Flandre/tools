class Tetris {
  constructor(width, height, speed) {
    this.width = width
    this.height = height
    this.speed = speed
  }
  init(){
    if(this.checkClip()){
      this.globalClip = new Array(this.height).fill(new Array(this.width).fill(0))
    } else {
      this.throwError('长宽设置不正确')
    }
  }
  getTetrisItem(){
    return [
      [[1, 1][1, 1]]
    ]
  }
  checkClip() {
    return (this.width > 3 && this.height > 5)
  }
  get GlobalClip() {
    return this.globalClip
  }
  throwError(msg) {
    alert(msg)
  }

}