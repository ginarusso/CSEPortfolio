// Define letter and vector classes
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(v) {
        return new Vector(this.x + v.x, this.y + v.y);
    }
}

// Function to draw the name
function drawName(name, letterColors) {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    let x = 50; // Start position for text
    let y = 100; // Vertical position

    name.split('').forEach((letter, index) => {
        ctx.fillStyle = `rgb(${letterColors[index % letterColors.length].join(',')})`; // Apply the color
        // ctx.font = "30px 'Chewy', cursive";
        ctx.font="30px 'Mystery Quest'";
        ctx.fillText(letter, x, y);
        x += 40; // Space out the letters
    });
}

var red = [0, 100, 63];
var orange = [40, 100, 60];
var yellow = [55, 100, 50];
var lime = [80, 100, 50];
var green = [120, 100, 40];
var teal = [180, 100, 40];
var cyan = [180, 100, 60];
var blue = [220, 100, 55];
var indigo = [270, 100, 30];
var violet = [300, 100, 50];
var magenta = [330, 100, 50];
var pink = [350, 100, 70];
var gold = [50, 100, 70];
var silver = [0, 0, 80];
var bronze = [30, 60, 50];
var deepRed = [0, 80, 50];
var forestGreen = [100, 70, 40];
var skyBlue = [200, 90, 70];
var darkBlue = [220, 70, 40];
var lavender = [270, 60, 80];
var hotPink = [330, 100, 70];
var coral = [16, 100, 70];
var salmon = [6, 100, 80];
var turquoise = [170, 100, 50];
var olive = [60, 80, 50];
var maroon = [0, 70, 40];
var navy = [240, 100, 30];
var lightGreen = [90, 100, 70];
var lightBlue = [210, 100, 70];
var lightPink = [350, 100, 90];
var brown = [30, 80, 30];
var beige = [40, 70, 90];
var cream = [45, 60, 95];
var slateGray = [0, 0, 50];
var lightGray = [0, 0, 70];
var darkGray = [0, 0, 30];

var letterColors = [
    red, orange, yellow, lime, green, teal, cyan, blue, indigo, violet,
    magenta, pink, gold, silver, bronze, deepRed, forestGreen, skyBlue,
    darkBlue, lavender, hotPink, coral, salmon, turquoise, olive, maroon,
    navy, lightGreen, lightBlue, lightPink, brown, beige, cream,
    slateGray, lightGray, darkGray
];


