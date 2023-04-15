class Sprite extends GameEntity {
    constructor(img, x, y, w, h) {
      super(x, y, w, h);
      this.p5Sprite = createSprite(x, y, w, h);
      this.p5Sprite.addImage(img);
      this.p5Sprite.debug = false; // Set this to 'true' if you want to see the collider boundaries
    }
  
    // Set the image for the sprite
    setImage(img) {
      this.p5Sprite.addImage(img);
    }
  
    // Override the display() function to use p5.play's sprite functionality
    display() {
      // p5.play will automatically draw the sprite on the canvas
    }
  
    // Override the contains() function to use p5.play's sprite functionality
    contains(x, y) {
      return this.p5Sprite.overlapPoint(x, y);
    }
  
    // Remove the sprite from the p5.play sprite group when the object is removed
    remove() {
      this.p5Sprite.remove();
    }
  }
  