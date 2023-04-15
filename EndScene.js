class EndScene extends Scene {
    constructor(isSuccessful) {
      super();
  
      // Create the title and description objects based on the game outcome
      const title = isSuccessful
        ? new Title("You Saved the School!", width / 2, height / 4)
        : new Title("School Health Crisis Continues", width / 2, height / 4);
      const description = isSuccessful
        ? new Description("Congratulations on managing the outbreak!", width / 2, height / 2)
        : new Description("Unfortunately, the outbreak was not contained.", width / 2, height / 2);
  
      // Create the restart button and define its action
      const restartButton = new Button(
        "Restart",
        width / 2,
        (3 * height) / 4,
        100,
        50,
        () => {
          // Restart the game by loading the IntroScene
          sceneManager.loadScene("IntroScene");
        }
      );
  
      // Add game objects to the scene
      this.addGameObject(title);
      this.addGameObject(description);
      this.addGameObject(restartButton);
    }
  }
  