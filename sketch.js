// Global variables
let sceneManager;
let healthStatusManager;

// Preload assets
function preload() {
  // Load images, sounds, and other assets here
  // e.g., loadImage("assets/school_background.jpg");
}

// Setup function
function setup() {
  createCanvas(800, 600);

  // Initialize health status manager
  healthStatusManager = new HealthStatusManager(1000); // Assuming 1000 students in the school

  // Initialize scene manager
  sceneManager = new SceneManager();

  // Create and register scenes
  const introScene = new IntroScene();
  const decisionScene = new DecisionScene();
  const successEndScene = new EndScene(true);
  const failureEndScene = new EndScene(false);

  sceneManager.registerScene("IntroScene", introScene);
  sceneManager.registerScene("DecisionScene", decisionScene);
  sceneManager.registerScene("SuccessEndScene", successEndScene);
  sceneManager.registerScene("FailureEndScene", failureEndScene);

  // Load the intro scene
  sceneManager.loadScene("IntroScene");
}

// Draw function
function draw() {
  // Update and display the current scene
  sceneManager.updateCurrentScene();
  sceneManager.displayCurrentScene();
}

// Mouse clicked function
function mouseClicked() {
  // Pass the mouseClicked event to the current scene
  sceneManager.mouseClicked();
}
