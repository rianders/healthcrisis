class SceneManager {
    constructor() {
      this.scenes = {}; // A dictionary to store the registered scenes
      this.currentScene = null; // A reference to the currently active scene
    }
  
    // Register a new scene with a name and an instance of the scene
    registerScene(name, scene) {
      this.scenes[name] = scene;
    }
  
    // Load a scene by name, making it the current active scene
    loadScene(name) {
        const scene = this.getScene(name);
      
        if (scene) {
          // Clear out previous scene's game objects and backgrounds
          if (this.currentScene) {
            this.currentScene.clearScene();
          }
      
          this.currentScene = scene;
        } else {
          console.error(`Scene "${name}" not found.`);
        }
      }
      
  
    // Update the current scene
    updateCurrentScene() {
      if (this.currentScene) {
        this.currentScene.update();
      }
    }
  
    // Display the current scene
    displayCurrentScene() {
      if (this.currentScene) {
        this.currentScene.display();
      }
    }
  
    // Pass the mouse click event to the current scene
    mouseClicked() {
      if (this.currentScene) {
        this.currentScene.mouseClicked();
      }
    }
  
    // Retrieve a specific scene by name
    getScene(name) {
      return this.scenes[name];
    }
  }
  