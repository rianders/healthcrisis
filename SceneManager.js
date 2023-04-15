class SceneManager {
    constructor() {
      this.scenes = {};
      this.currentScene = null;
    }
  
    registerScene(name, scene) {
      this.scenes[name] = scene;
    }
  
    loadScene(name) {
      const scene = this.getScene(name);
      if (!scene) {
        console.error(`Cannot load scene ${name}: scene not found`);
        return;
      }
  
      if (this.currentScene) {
        this.currentScene.unload();
      }
  
      scene.load();
      this.currentScene = scene;
    }
  
    displayCurrentScene() {
      if (this.currentScene) {
        this.currentScene.display();
      }
    }
  
    updateCurrentScene() {
      if (this.currentScene) {
        this.currentScene.update();
      }
    }
  
    mouseClicked() {
      if (this.currentScene) {
        this.currentScene.mouseClicked();
      }
    }
  
    getScene(name) {
      return this.scenes[name];
    }
  }
  