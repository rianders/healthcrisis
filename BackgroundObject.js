class BackgroundObject extends GameEntity {
    constructor(img) {
      super(0, 0, 0, 0);
      this.setImage(img);
    }
  
    setImage(img) {
      this.img = img;
    }
  
    display() {
      image(this.img, this.x, this.y, this.w, this.h);
    }
  }
  