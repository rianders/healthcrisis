class GameEntity {
    constructor(x, y, w, h) {
      this.x = x; // X position of the entity
      this.y = y; // Y position of the entity
      this.width = w; // Width of the entity
      this.height = h; // Height of the entity
    }
  
    // Set the position of the entity
    setPosition(x, y) {
      this.x = x;
      this.y = y;
    }
  
    // Set the size of the entity
    setSize(w, h) {
      this.width = w;
      this.height = h;
    }
  
    // Check if a given point (x, y) is within the entity's bounds
    contains(x, y) {
        const width = this.buttonWidth ? this.buttonWidth : this.w;
        const height = this.buttonHeight ? this.buttonHeight : this.h;
        return x >= this.x - width / 2 &&
               x <= this.x + width / 2 &&
               y >= this.y - height / 2 &&
               y <= this.y + height / 2;
      }
      
  
    // Placeholder function for handling mouse events, to be overridden in subclasses
    clicked() {}
  
    // Placeholder function for displaying the entity, to be overridden in subclasses
    display() {}
  }
  