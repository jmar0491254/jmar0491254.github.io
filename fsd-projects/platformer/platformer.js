$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();

  toggleGrid();

    // TODO 2 - Create Platforms

createPlatform(100, 700, 300, 500);
createPlatform(300, 600, 250, 50, "red");
createPlatform(500, 500, 250, 400);
createPlatform(0, 700, 250, 50, "red");
createPlatform(750, 400, 300, 400);
createPlatform(300, 550, 250, 50, "red");
createPlatform(1100, 300, 300, 500);
createPlatform(300, 600, 250, 50, "red");


    // TODO 3 - Create Collectables
createCollectable("steve", 1300, 250);
createCollectable("diamond", 200, 170, 0.5, 0.7);
createCollectable("steve", 700, 450);


    
    // TODO 4 - Create Cannons
createCannon("right", 600, 2000);
createCannon("right", 500, 2000);
createCannon("right", 800, 2000);
createCannon("top", 300, 500);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
