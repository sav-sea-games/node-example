var robot = require("robotjs");

// Speed up the mouse.
robot.setMouseDelay(500);
// var twoPI = Math.PI * 2.0;
// var screenSize = robot.getScreenSize();
// var height = (screenSize.height / 2) - 10;
// var width = screenSize.width;

// for (var x = 0; x < width; x++)
// {
// 	y = (height * Math.sin((twoPI * x) / width) + height);
// 	robot.moveMouse(x, y);
// }


//open bluestacks
robot.moveMouse(120, 1022);
robot.mouseClick();


//search
robot.moveMouse(1238, 778);
robot.mouseClick();


//gold
robot.moveMouse(1330, 752);
robot.mouseClick();



//search click
robot.moveMouse(1590, 838);
robot.mouseClick();


//gather click
robot.moveMouse(1440, 560);
robot.mouseClick();


// plan select
robot.moveMouse(1406, 557);
robot.mouseClick();


// march
robot.moveMouse(1545, 865);
robot.mouseClick();
