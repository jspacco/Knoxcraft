/////////////////////////LOAD MATERIALS///////////////////////

var allMaterials = [];
var materialNames = {};
materialNames['AIR'] = 0;

// Registers a material
function addMat(name, filename) {
  allMaterials.push(filename);
  /* Note that the first index in the materials array is actually
   * item '1' (air is 0)
   */
  materialNames[name] = allMaterials.length;
}

addMat("STONE", "stone");
addMat("GRANITE", "stone_granite");
addMat("POLISHED_GRANITE", "stone_granite_smooth");
addMat("DIORITE", "stone_diorite");
addMat("POLISHED_DIORITE", "stone_diorite_smooth");
addMat("ANDESITE", "stone_andesite");
addMat("POLISHED_ANDESITE", "stone_andesite_smooth");
addMat("GRASS", ["grass_side", "grass_side", "grass_top", "dirt", "grass_side", "grass_side"]);
addMat("DIRT", "dirt");
addMat("COARSE_DIRT", "coarse_dirt");
addMat("PODZOL", ["dirt_podzol_top", "dirt_podzol_side"]);
addMat("COBBLESTONE", "cobblestone");
addMat("OAK_WOOD_PLANK", "planks_oak");
addMat("SPRUCE_WOOD_PLANK", "planks_spruce");
addMat("BIRCH_WOOD_PLANK", "planks_birch");
addMat("JUNGLE_WOOD_PLANK", "planks_jungle");
addMat("ACACIA_WOOD_PLANK", "planks_acacia");
addMat("BIRCH_WOOD_PLANK", "planks_birch");
addMat("DARK_OAK_WOOD_PLANK", "planks_big_oak");
// TODO Add the following:
/*
 * OAK_SAPLING
 * SPRUCE_SAPLING
 * BIRCH_SAPLING
 * JUNGLE_SAPLING
 * ACACIA_SAPLING
 * DARK_OAK_SAPLING
 * FLOWING_WATER
 * STILL_WATER
 * FLOWING_LAVA
 * STILL_LAVA
 */
addMat("BEDROCK", "bedrock");
addMat("SAND", "sand");
addMat("RED_SAND", "red_sand");
addMat("GRAVEL", "gravel");
addMat("GOLD_ORE", "gold_ore");
addMat("IRON_ORE", "iron_ore");
addMat("COAL_ORE", "coal_ore");
addMat("OAK_WOOD", ["log_oak", "log_oak", "log_oak_top", "log_oak", "log_oak", "log_oak_top"]);
addMat("SPRUCE_WOOD", ["log_spruce", "log_spruce", "log_spruce_top", "log_spruce", "log_spruce", "log_spruce_top"]);
addMat("BIRCH_WOOD", ["log_birch", "log_birch", "log_birch_top", "log_birch", "log_birch", "log_birch_top"]);
addMat("JUNGLE_WOOD", ["log_jungle", "log_jungle", "log_jungle_top", "log_jungle", "log_jungle", "log_jungle_top"]);
// TODO: Add leaves
addMat("SPONGE", "sponge");
addMat("WET_SPONGE", "sponge_wet");
// TODO: Add GLASS
addMat("LAPIS_LAZULI_ORE", "lapis_ore");
addMat("LAPIS_LAZULI_BLOCK", "lapis_block");
// TODO Add dispenser
addMat("SANDSTONE", ["sandstone_normal", "sandstone_normal", "sandstone_top", "sandstone_bottom", "sandstone_normal", "sandstone_normal"]);
addMat("CHISELED_SANDSTONE", ["sandstone_carved", "sandstone_carved", "sandstone_top", "sandstone_bottom", "sandstone_carved", "sandstone_carved"]);
addMat("SMOOTH_SANDSTONE", ["sandstone_smooth", "sandstone_smooth", "sandstone_top", "sandstone_bottom", "sandstone_smooth", "sandstone_smooth"]);
// TODO add noteblock
addMat("WHITE_WOOL", "wool_colored_white");
addMat("ORANGE_WOOL", "wool_colored_orange");
addMat("MAGENTA_WOOL", "wool_colored_magenta");
addMat("LIGHT_BLUE_WOOL", "wool_colored_light_blue");
addMat("YELLOW_WOOL", "wool_colored_yellow");
addMat("LIME_WOOL", "wool_colored_lime");
addMat("PINK_WOOL", "wool_colored_pink");
addMat("GRAY_WOOL", "wool_colored_gray");
addMat("LIGHT_GRAY_WOOL", "wool_colored_silver");
addMat("CYAN_WOOL", "wool_colored_cyan");
addMat("PURPLE_WOOL", "wool_colored_purple");
addMat("BLUE_WOOL", "wool_colored_blue");
addMat("BROWN_WOOL", "wool_colored_brown");
addMat("GREEN_WOOL", "wool_colored_green");
addMat("RED_WOOL", "wool_colored_red");
addMat("BLACK_WOOL", "wool_colored_black");
addMat("GOLD_BLOCK", "gold_block");
addMat("IRON_BLOCK", "iron_block");
addMat("BRICKS", "brick");
addMat("TNT", ["tnt_side", "tnt_side", "tnt_top", "tnt_bottom", "tnt_side", "tnt_side"]);
addMat("BOOKSHELF", "bookshelf");
addMat("MOSS_STONE", "cobblestone_mossy");
addMat("OBSIDIAN", "obsidian");
addMat("MONSTER_SPAWNER", "mob_spawner");
addMat("DIAMOND_ORE", "diamond_ore");
addMat("DIAMOND_BLOCK", "diamond_block");
addMat("CRAFTING_TABLE", ["crafting_table_side", "crafting_table_side", "crafting_table_top", "crafting_table_bottom", "crafting_table_side", "crafting_table_side"]);
addMat("FARMLAND", "farmland_dry");
// TODO Add Furnace
addMat("SNOW", ["grass_side_snowed", "grass_side_snowed", "snow", "dirt", "grass_side_snowed", "grass_side_snowed"]);
addMat("ICE", "ice_packed");
addMat("SNOW_BLOCK", "snow");
addMat("CACTUS", ["cactus_side", "cactus_side", "cactus_top", "cactus_top", "cactus_side", "cactus_side"]);
addMat("CLAY", "clay");



/////////////////////////Initialize world/////////////////////
var createGame = require('voxel-engine');
var game = createGame({
  generate: function(x, y, z) {
    return y === 0 ? materialNames['GRASS'] : 0;
  },
  chunkDistance: 2,
  materials: allMaterials,
  materialFlatColor: false
});
game.appendTo(document.body);

// Set origin to RED
game.setBlock(new Array(0, 0, 0), materialNames['RED']);

game.setBlock(new Array(0, 3, 0), materialNames['GRASS']);

// Now we have a world, but no player. The following code fixes that
var createPlayer = require('voxel-player')(game);
var substack = createPlayer('substack.png');
substack.possess();
substack.position.set(0,5,0);

// highlight blocks when you look at them
var highlight = require('voxel-highlight')
var highlightPos
var hl = game.highlighter = highlight(game, { color: 0x00ff00 })
hl.on('highlight', function (voxelPos) { highlightPos = voxelPos })
hl.on('remove', function (voxelPos) { highlightPos = null })

game.on('fire', function (target, state) {
  // Purely for debugging purposes
  document.getElementById("looklocation").innerHTML = highlightPos + " (type: " + game.getBlock(highlightPos) + ")";
})

/////////////////////////////////////Begin Turtle related code/////////////////

// Register the HTML buttons to run the relevant scripts
document.getElementById("runscript").addEventListener("click", runScript);
document.getElementById("JSONUploadButton").addEventListener('change', parseJSON, false);
document.getElementById("undo").addEventListener("click", undo);

// Turtle variables
// For some ungodly reason, the creators of voxeljs decided to use Arrays to represent positions instead of vectors
var position = new Array(0,1,0)
var turnAngle = 0;
var blockPlace = true;
var blockType = 1;

// The current commands that will be run (extracted directly from the JSON)
var curScript = null;

// Undo functionality
var curUndo = [];
var allUndos = [];

/* This is a lame javascript way of creating hashmaps. The things in brackets
 * are keys, and their assigned objects are values. Note that these "integers"
 * are actually keys, not array indexes. Really, they're parameters
 */
var angleMappings = {}
angleMappings[0] = new Array(1,0,0);
angleMappings[45] = new Array(1,0,1);
angleMappings[90] = new Array(0,0,1);
angleMappings[135] = new Array(-1,0,1);
angleMappings[180] = new Array(-1,0,0);
angleMappings[225] = new Array(-1,0,-1);
angleMappings[270] = new Array(0,0,-1);
angleMappings[315] = new Array(1,0,-1);

// Called when user presses JSONUploadButton- begins
// reading the uploaded file
function parseJSON(evt) {
  document.getElementById("scriptstatus").innerHTML = "Loading script...";
  // registers updateJSON to run after the file has been read
  // (since we're not uploading multiple files at once, we can
  // just get the first element in the button's files list)
  readFile(evt.target.files[0], updateJSON);
}

// Called after the uploaded file's text has been processed
function updateJSON(e) {
  try {
    // Gets the text from the file reader (which triggered event e)
    var result = e.target.result;
    // Converts the text to a JSON file
    var json = JSON.parse(result);
    // Sets the current script to be the JSON's list of commands
    curScript = json.commands;
    document.getElementById("scriptstatus").innerHTML = json.scriptname + " has been loaded successfully!";
  }
  catch(err) {
    document.getElementById("scriptstatus").innerHTML = "ERROR READING FILE";
  }
}

// Registers the function onLoadCallBack to run after the file has been loaded
function readFile(file, onLoadCallback){
    var reader = new FileReader();
    reader.onload = onLoadCallback;
    reader.readAsText(file);
}

// Executes the commands stored in curScript
function runScript() {
  if (curScript === null) {
    window.alert("There is no loaded script!");
    return;
  }
  for (i = 0; i < curScript.length; i++) {
    //window.alert("Executing command: " + curScript[i].cmd);
    var cmd = curScript[i]
    switch(cmd.cmd) {
      case "forward":
        forward(cmd.args);
        break;
      case "backward":
        backward(cmd.args);
        break;
      case "right":
        right(cmd.args);
        break;
      case "left":
        left(cmd.args);
        break;
      case "up":
        up(cmd.args);
        break;
      case "down":
        down(cmd.args);
        break;
      case "turn":
        turnCommand(cmd.args);
        break;
      case "placeBlocks":
        setBlockPlace(cmd.args);
        break;
      case "blockPlaceMode":
        setBlock(cmd.args);
        break;
      case "setPosition":
        setPosition(cmd.args);
        break;
      case "setDirection":
        setDirection(cmd.args);
        break;
      default:
        window.alert("Did not recognize command " + cmd.cmd);
    }
  }
  if (curUndo.length > 0) {
    allUndos.push(curUndo);
    curUndo = [];
  }
}

// Runs when the user presses the undo button
function undo() {
  var undo = allUndos[allUndos.length - 1];
  // Removes the last element from the array (the second parameter is the number of elements
  // to remove- in this case 1
  allUndos.splice(allUndos.length - 1, 1);
  for (var i = 0; i < undo.length; i++) {
    game.setBlock(undo[i].pos, undo[i].type);
  }
}

// Turns the turtle deg degrees and bounds the result between 0 and 360
function turn(deg) {
  turnAngle = (turnAngle + (deg % 360) + 360) % 360 ;
}

// These functions let the turtle respond to commands
function forward(args) {
  var direction = angleMappings[turnAngle];
  var dist = args.dist;
  if (blockPlace === true) {
    while (dist > 0) {
      position[0] += direction[0];
      position[2] += direction[2];
      var copyPosition = new Array(position[0], position[1], position[2]);
      curUndo.push({pos: copyPosition, type: game.getBlock(copyPosition)});
      game.setBlock(position, blockType);
      dist--;
    }
  } else {
    position[0] += direction[0] * dist;
    position[2] += direction[2] * dist;
  }   
}

function backward(args) {
  turn(180);
  forward(args);
  turn(-180);
}

// I'm confused by these degree turns, but they seem to work
function right(args) {
  turn(90);
  forward(args);
  turn(-90);
}

function left(args) {
  turn(-90);
  forward(args);
  turn(90);
}

function up(args) {
  var dist = args.dist;
  if (blockPlace === true) {
    while (dist > 0) {
      position[1] += 1;
      game.setBlock(position, blockType);
      dist--;
    }
  } else {
    position[1] += dist;
  }
}

function down(args) {
  var dist = args.dist;
  if (blockPlace === true) {
    while (dist > 0) {
      position[1] -= 1;
      game.setBlock(position, blockType);
      dist--;
    }
  } else {
    position[1] -= dist;
  }
}

function turnCommand(args) {
  if (args.dir === "right") {
    turn(-1 * args.degrees);
  }
  
  if (args.dir === "left") {
    turn(args.degrees);
  }

}

function setBlockPlace(args) {
  blockPlace = args.place;
}

function setBlock(args) {
  blockType = args.blockType;
}

function setPosition(args) {
  position[0] = args.x;
  position[1] = args.y;
  position[2] = args.z;
}

// Direction? Is it just a degree?
function setDirection(args) {

}
