class GameObject extends GameEntity {
    constructor(x, y, w, h) {
      super(x, y, w, h);
    }
  
    // Override the display() function for custom rendering of the game object
    display() {
      // Custom rendering logic for the game object
    }
  }
  
  class Title extends GameObject {
    constructor(text, x, y) {
      super(x, y, 0, 0);
      this.text = text;
    }
  
    display() {
      textAlign(CENTER, CENTER);
      textSize(32);
      fill(0);
      text(this.text, this.x, this.y);
    }
  }
  
  class Description extends GameObject {
    constructor(text, x, y) {
      super(x, y, 0, 0);
      this.text = text;
    }
  
    display() {
      textAlign(CENTER, CENTER);
      textSize(16);
      fill(0);
      text(this.text, this.x, this.y);
    }
  }
  
  class Button extends GameObject {
    constructor(text, x, y, action, padding = 10) {
        super(x, y, 0, 0); // Pass 0 for width and height for now
        this.text = text;
        this.action = action;
        console.log("[Button text:", this.text + "]"); // Log the text value to the console

        this.padding = padding;
        // Calculate the button's dimensions based on the text and padding
        
        //const textWidth = this.text.textWidth(text);
        // const textHeight = this.text.textAscent() + this.text.textDescent();
        // const buttonWidth = textWidth + padding * 2;
        // const buttonHeight = textHeight + padding * 2;
    
        // Set the button's dimensions
        //this.setSize(buttonWidth, buttonHeight);
      }
    
  
    setAction(action) {
      this.action = action;
    }
  
    clicked() {
      if (this.action) {
        this.action();
      }
    }
  
    display() {
        // Draw the button background
        noStroke();
        fill("#0074D9");
        rectMode(CENTER);
        rect(this.x, this.y, this.w=100, this.h=100);
    
        // Draw the button text
        textAlign(CENTER, CENTER);
        textSize(16);
        fill("#FFFFFF");
        text(this.text, this.x, this.y);
      }
  }
  