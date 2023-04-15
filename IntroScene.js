class IntroScene extends Scene {
    constructor() {
      super("IntroScene");
      this.startButton = new Button(
        "Start",
        width / 2,
        (3 * height) / 4,
        200,
        75,
        () => {
          // Load the decision scene when the start button is clicked
          sceneManager.loadScene("DecisionScene");
        }
      );
  
      this.title = new Title(
        "School Health Crisis",
        width / 2,
        height / 4 - 50
      );
  
      this.subtitle = new Description(
        "You are the health representative for a school facing an outbreak of a mysterious disease. Your choices will determine the fate of the school and its students.",
        width / 2,
        height / 2 - 50
      );
  
      //this.background = new BackgroundObject(bgImg);
    }
  
    setup() {
      // Set up the canvas and other elements in the scene
      this.startButton.setPosition(width / 2, (3 * height) / 4);
      this.title.setPosition(width / 2, height / 4 - 50);
      this.subtitle.setPosition(width / 2, height / 2 - 50);
      this.background.setSize(width, height);
      this.background.setPosition(0, 0);
  
      // Add the game objects to the scene
      this.addBackground(this.background);
      this.addGameObject(this.startButton);
      this.addGameObject(this.title);
      this.addGameObject(this.subtitle);
    }
  }
  