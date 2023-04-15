class Scene {
    constructor() {
      this.gameObjects = []; // A list of game objects in the scene
      this.backgroundObjects = []; // A list of background objects in the scene
    }
  
    // Add a game object to the scene
    addGameObject(obj) {
      this.gameObjects.push(obj);
    }
  
    // Remove a game object from the scene
    removeGameObject(obj) {
      const index = this.gameObjects.indexOf(obj);
      if (index > -1) {
        this.gameObjects.splice(index, 1);
      }
    }
  
    // Add a background object to the scene
    addBackground(bg) {
      this.backgroundObjects.push(bg);
    }
  
    // Remove a background object from the scene
    removeBackground(bg) {
      const index = this.backgroundObjects.indexOf(bg);
      if (index > -1) {
        this.backgroundObjects.splice(index, 1);
      }
    }

    clearScene() {
        this.gameObjects = [];
        this.backgroundObjects = [];
      }
      
    load() {
        // Load any necessary assets for the scene, such as images or sounds
        this.bgImg = loadImage('assets/school_background.png');
        //this.sound = loadSound('assets/to/sound.wav');
      }
    // Update the state of the scene and its game objects
    update() {
      for (const obj of this.gameObjects) {
        if (typeof obj.update === 'function') {
          obj.update();
        }
      }
    }
  
    // Display the scene and its game objects
    display() {
      // Display the background objects
      for (const bg of this.backgroundObjects) {
        bg.display();
      }
  
      // Display the game objects
      for (const obj of this.gameObjects) {
        obj.display();
      }
    }
  
    // Handle mouse events for the scene and its game objects
    mouseClicked() {
      for (const obj of this.gameObjects) {
        if (typeof obj.clicked === 'function' && obj.contains(mouseX, mouseY)) {
          obj.clicked();
        }
      }
    }
  }
  