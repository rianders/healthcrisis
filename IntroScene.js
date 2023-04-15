class IntroScene extends Scene {
    constructor() {
      super("IntroScene");
  
      // Create the title and description objects
      const title = new Title("School Health Crisis", width / 2, height / 4);
      const description = new Description(
        "Welcome to School Health Crisis! As the health representative for the school, it's up to you to manage an outbreak of a mysterious disease. Your decisions will determine the fate of the students and the school. Are you up for the challenge?",
        width / 2,
        height / 2,
        width / 2.5
      );
  
      // Create the start button and define its action
      const startButton = new Button(
        "Start",
        width / 2,
        (3 * height) / 4,
        150,
        50,
        () => {
          // Change the scene when the start button is clicked
          sceneManager.loadScene("DecisionScene");
        }
      );
  
      // Add the game objects to the scene
      this.addGameObject(title);
      this.addGameObject(description);
      this.addGameObject(startButton);
    }
  
    draw() {
      // Call the parent draw() function
      super.draw();
  
      // Set the background color
      background(255, 245, 231);
    }
  }
  