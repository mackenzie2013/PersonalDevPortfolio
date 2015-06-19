var canvas = document.getElementById('dragonDevCanvas');
var context = canvas.getContext('2d');


// Variables
var radius = 50;
var height = canvas.height;
var width = canvas.width;
var centerX = radius + 5;
var centerY = centerX + 50;

// Body and Left Flame
context.beginPath();
context.fillStyle = "#ed2d00";
context.arc(centerX, centerY, radius, 1.8 * Math.PI, 1.2 * Math.PI, false);
context.lineWidth = 1;
context.bezierCurveTo(25, centerY - 45, 35, centerY - 55, 29, centerY - 70);
context.bezierCurveTo(40, centerY - 65, 40, centerY - 55, 45, centerY - 50);

// Right Flame
context.quadraticCurveTo(40, centerY - 80, 55, centerY - 105);
context.bezierCurveTo(60, centerY - 65, 105, centerY - 50, centerX + radius, centerY);
context.fill();
context.closePath();

// Inner Outline
context.beginPath();
context.fillStyle = "white";
context.arc(centerX, centerY, 37, 1.6 * Math.PI, 2 * Math.PI, true);
context.bezierCurveTo(90, centerY - 45, 62, centerY - 50, 54, centerY - 83);
context.bezierCurveTo(53, centerY - 53, 60, centerY - 50, 65, centerY - 37);
context.fill();
context.closePath();

// Center Circle
context.beginPath();
context.fillStyle = "#ed2d00";
context.arc(centerX, centerY, 25, 0, Math.PI * 2, true);
context.fill();
context.closePath();

// DragonDev
var textLineY = 135;
var textLineX = 110;
context.fillStyle = "black";
context.font = "70px Century Gothic";
context.fillText("D", textLineX, textLineY);
context.fillText("r", textLineX + 48, textLineY);
context.fillText("a", textLineX + 65, textLineY);
context.fillText("g", textLineX + 108, textLineY);
context.fillText("o", textLineX + 151, textLineY);
context.fillText("n", textLineX + 193, textLineY);
context.fillStyle = "#ed2d00";
context.fillText("D", textLineX + 230, textLineY);
context.fillText("e", textLineX + 278, textLineY);
context.fillText("v", textLineX + 318, textLineY);

// Dragon Explanation
var A = [160, 177];
var bracketRad = 8;
context.beginPath();
context.lineWidth = 3;
context.strokeStyle = "Black";
context.moveTo(135, A[0]);
context.arc(145, A[0], bracketRad, Math.PI, 0.5 * Math.PI, true);
context.arc(220, A[1], bracketRad, 1.5 * Math.PI, 0);
context.arc(238, A[1], bracketRad, 1 * Math.PI, 1.5 * Math.PI);
context.arc(320, A[0], bracketRad, 0.5 * Math.PI, 0, true);

context.moveTo(370, A[0]);
context.arc(378, A[0], bracketRad, Math.PI, 0.5 * Math.PI, true);
context.arc(400, A[1], bracketRad, 1.5 * Math.PI, 0);
context.arc(410 + bracketRad, A[1], bracketRad, 1 * Math.PI, 1.5 * Math.PI);
context.arc(440, A[0], bracketRad, 0.5 * Math.PI, 0, true);
context.stroke();
context.closePath();

// Explanation Text
context.font = "bold 15px Century Gothic";
context.fillStyle = "Black";
var lineHeight = 20;
context.fillText("Named after", A[0] + 10, A[1] + lineHeight);
context.fillText("Keith Dragon,", A[0] + 10, A[1] + lineHeight * 2);
context.fillText("founder & CEO", A[0] + 5, A[1] + lineHeight * 3);

context.fillText("Short for", A[0] + 220, A[1] + lineHeight);
context.fillText("development,", A[0] + 200, A[1] + lineHeight * 2);
context.fillText("like software", A[0] + 205, A[1] + lineHeight * 3);

