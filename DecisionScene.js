class DecisionScene extends Scene {
    constructor() {
      super();
  
      // Create description object for the scenario
      const description = new Description(
        "A student has a high fever and a cough. What should you do?",
        width / 2,
        height / 4
      );
  
      // Create the buttons for the available actions and define their actions
      const actionButton1 = new Button(
        "Send the student home",
        width / 3,
        height / 2,
        180,
        50,
        () => {
          // Perform the action associated with the first button
          // You can update the game state or load another scene based on the player's choice
          console.log("Student sent home");
        }
      );
  
      const actionButton2 = new Button(
        "Tell the student to stay in class",
        (2 * width) / 3,
        height / 2,
        220,
        50,
        () => {
          // Perform the action associated with the second button
          // You can update the game state or load another scene based on the player's choice
          console.log("Student stays in class");
        }
      );
  
      // Add game objects to the scene
      this.addGameObject(description);
      this.addGameObject(actionButton1);
      this.addGameObject(actionButton2);
    }
  }
  