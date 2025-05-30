// var bounceNameTimeoutId;

// function Vector(x, y, z) {
//     this.x = x;
//     this.y = y;
//     this.z = z;

//     this.set = function (x, y) {
//         this.x = x;
//         this.y = y;
//     };
// }

// function PointCollection() {
//     this.mousePos = new Vector(0, 0);
//     this.pointCollectionX = 0;
//     this.pointCollectionY = 0;
//     this.points = [];

//     this.update = function () {
//         for (var i = 0; i < this.points.length; i++) {
//             var point = this.points[i];

//             var dx = this.mousePos.x - point.curPos.x;
//             var dy = this.mousePos.y - point.curPos.y;
//             var dd = (dx * dx) + (dy * dy);
//             var d = Math.sqrt(dd);

//             point.targetPos.x = d < 150 ? point.curPos.x - dx : point.originalPos.x;
//             point.targetPos.y = d < 150 ? point.curPos.y - dy : point.originalPos.y;

//             point.update();
//         }
//     };

//     this.shake = function () {
//         var randomNum = Math.floor(Math.random() * 5) - 2;

//         for (var i = 0; i < this.points.length; i++) {
//             var point = this.points[i];
//             var dx = this.mousePos.x - point.curPos.x;
//             var dy = this.mousePos.y - point.curPos.y;
//             var dd = (dx * dx) + (dy * dy);
//             var d = Math.sqrt(dd);
//             if (d < 50) {
//                 this.pointCollectionX = Math.floor(Math.random() * 5) - 2;
//                 this.pointCollectionY = Math.floor(Math.random() * 5) - 2;
//             }
//             point.draw(bubbleShape, this.pointCollectionX, this.pointCollectionY);
//         }
//     };

//     this.draw = function (bubbleShape, reset) {
//         for (var i = 0; i < this.points.length; i++) {
//             var point = this.points[i];

//             if (point === null)
//                 continue;

//             if (window.reset) {
//                 this.pointCollectionX = 0;
//                 this.pointCollectionY = 0;
//                 this.mousePos = new Vector(0, 0);
//             }

//             point.draw(bubbleShape, this.pointCollectionX, this.pointCollectionY, reset);
//         }
//     };

//     this.reset = function (bubbleShape) {};
// }

// function Point(x, y, z, size, color) {
//     this.curPos = new Vector(x, y, z);
//     this.color = color;

//     var bubbleScaleFactor = 1.3; // Adjust to make bubbles bigger
//     this.originalPos = new Vector(x, y, z);
//     this.radius = size * bubbleScaleFactor;
//     this.size = size * bubbleScaleFactor;
//     this.targetPos = new Vector(x, y, z);

//     this.friction = document.Friction;
//     this.rotationForce = document.rotationForce;
//     this.springStrength = 0.1;

//     this.originalPos = new Vector(x, y, z);
//     this.radius = size * 0.5;
//     this.size = size * 0.5;
//     this.targetPos = new Vector(x, y, z);
//     this.velocity = new Vector(0.0, 0.0, 0.0);

//     this.update = function () {
//         var dx = this.targetPos.x - this.curPos.x;
//         var dy = this.targetPos.y - this.curPos.y;
//         // Orthogonal vector is [-dy,dx]
//         var ax = dx * this.springStrength - this.rotationForce * dy;
//         var ay = dy * this.springStrength + this.rotationForce * dx;

//         this.velocity.x += ax;
//         this.velocity.x *= this.friction;
//         this.curPos.x += this.velocity.x;

//         this.velocity.y += ay;
//         this.velocity.y *= this.friction;
//         this.curPos.y += this.velocity.y;

//         var dox = this.originalPos.x - this.curPos.x;
//         var doy = this.originalPos.y - this.curPos.y;
//         var dd = (dox * dox) + (doy * doy);
//         var d = Math.sqrt(dd);

//         this.targetPos.z = d / 100 + 1;
//         var dz = this.targetPos.z - this.curPos.z;
//         var az = dz * this.springStrength;
//         this.velocity.z += az;
//         this.velocity.z *= this.friction;
//         this.curPos.z += this.velocity.z;

//         this.radius = this.size * this.curPos.z;
//         if (this.radius < 1) this.radius = 1;
//     };

//     this.draw = function (bubbleShape, dx, dy) {
//         ctx.fillStyle = this.color;
//         if (bubbleShape == "square") {
//             ctx.beginPath();
//             ctx.fillRect(this.curPos.x + dx, this.curPos.y + dy, this.radius * 1.5, this.radius * 1.5);
//         } else {
//             ctx.beginPath();
//             ctx.arc(this.curPos.x + dx, this.curPos.y + dy, this.radius, 0, Math.PI * 2, true);
//             ctx.fill();
//         }
//     };
// }

// function makeColor(hslList, fade) {
//     var hue = hslList[0] /*- 17.0 * fade / 1000.0*/ ;
//     var sat = hslList[1] /*+ 81.0 * fade / 1000.0*/ ;
//     var lgt = hslList[2] /*+ 58.0 * fade / 1000.0*/ ;
//     return "hsl(" + hue + "," + sat + "%," + lgt + "%)";
// }

// function phraseToHex(phrase) {
//     var hexphrase = "";
//     for (var i = 0; i < phrase.length; i++) {
//         hexphrase += phrase.charCodeAt(i).toString(16);
//     }
//     return hexphrase;
// }

// function initEventListeners() {
//     $(window).bind('resize', updateCanvasDimensions).bind('mousemove', onMove);

//     canvas.ontouchmove = function (e) {
//         e.preventDefault();
//         onTouchMove(e);
//     };

//     canvas.ontouchstart = function (e) {
//         e.preventDefault();
//     };

//     canvas.get(0).addEventListener('mouseleave', function () {
//         window.reset = true;
//         clearTimeout(bounceNameTimeoutId);
//     });

//     $(window).mouseenter(function () {
//         window.reset = false;
//         if (!bounceNameTimeoutId) {
//             bounceName();
//         }
//     });
// }

// function updateCanvasDimensions() {
//     var container = $(".canvas-container");
//     canvas.attr({
//         width: container.width(),
//         height: container.height()
//     });
//     canvasWidth = canvas.width();
//     canvasHeight = canvas.height();
//     draw();
// }

// function onMove(e) {
//     if (pointCollection) {
//         pointCollection.mousePos.set(e.pageX - canvas.offset().left, e.pageY - canvas.offset().top);
//     }
// }

// function onTouchMove(e) {
//     if (pointCollection) {
//         pointCollection.mousePos.set(e.targetTouches[0].pageX - canvas.offset().left, e.targetTouches[0].pageY - canvas.offset().top);
//     }
// }

// function bounceName() {
//     if (!window.reset) {
//         shake();
//         bounceNameTimeoutId = setTimeout(bounceName, 30); // Store the timeout ID
//     }
// }

// function bounceBubbles() {
//     draw();
//     update();
//     setTimeout(bounceBubbles, 30);
// }

// function draw(reset) {
//     var tmpCanvas = canvas.get(0);

//     if (tmpCanvas.getContext === null) {
//         return;
//     }

//     ctx = tmpCanvas.getContext('2d');
//     ctx.clearRect(0, 0, canvasWidth, canvasHeight);

//     bubbleShape = typeof bubbleShape !== 'undefined' ? bubbleShape : "circle";

//     if (pointCollection) {
//         pointCollection.draw(bubbleShape, reset);
//     }
// }

// function shake() {
//     var tmpCanvas = canvas.get(0);

//     if (tmpCanvas.getContext === null) {
//         return;
//     }

//     ctx = tmpCanvas.getContext('2d');
//     ctx.clearRect(0, 0, canvasWidth, canvasHeight);

//     bubbleShape = typeof bubbleShape !== 'undefined' ? bubbleShape : "circle";

//     if (pointCollection) {
//         pointCollection.shake(bubbleShape);
//     }
// }

// function update() {
//     if (pointCollection)
//         pointCollection.update();
// }

// function drawName(name, letterColors) {
//     updateCanvasDimensions();
//     var g = [];
//     var offset = 0;
//     var overallTextScale = 0.5; // Adjust this value to control the overall text size
//     var bubbleSizeMultiplier = 1.5; // Adjust this to make the bubbles bigger (values > 1)

//     function addLetter(cc_hex, ix, letterCols) {
//         if (typeof letterCols !== 'undefined') {
//             if (Object.prototype.toString.call(letterCols) === '[object Array]' && Object.prototype.toString.call(letterCols[0]) === '[object Array]') {
//                 letterColors = letterCols;
//             }
//             if (Object.prototype.toString.call(letterCols) === '[object Array]' && typeof letterCols[0] === "number") {
//                 letterColors = [letterCols];
//             }
//         } else {
//             // if undefined set black
//             letterColors = [[0, 0, 27]];
//         }

//         if (document.alphabet.hasOwnProperty(cc_hex)) {
//             var chr_data = document.alphabet[cc_hex].P;
//             var bc = letterColors[ix % letterColors.length];

//             for (var i = 0; i < chr_data.length; ++i) {
//                 point = chr_data[i];

//                 g.push(new Point(point[0] * overallTextScale + offset,
//                     point[1] * overallTextScale,
//                     0.0,
//                     point[2] * bubbleSizeMultiplier * overallTextScale, // Scale bubble size
//                     makeColor(bc, point[3])));
//             }
//             offset += document.alphabet[cc_hex].W * overallTextScale;
//         }
//  }

//     var hexphrase = phraseToHex(name);

//     var col_ix = -1;
//     for (var i = 0; i < hexphrase.length; i += 2) {
//         var cc_hex = "A" + hexphrase.charAt(i) + hexphrase.charAt(i + 1);
//         if (cc_hex != "A20") {
//             col_ix++;
//         }
//         addLetter(cc_hex, col_ix, letterColors);
//     }

//     for (var j = 0; j < g.length; j++) {
//         g[j].curPos.x = (canvasWidth / 2 - (offset / overallTextScale) / 2) + g[j].curPos.x; // Adjust centering
//         g[j].curPos.y = (canvasHeight / 2 - 105 * overallTextScale) + g[j].curPos.y;       // Adjust vertical centering
//         g[j].originalPos.x = (canvasWidth / 2 - (offset / overallTextScale) / 2) + g[j].originalPos.x; // Adjust original X
//         g[j].originalPos.y = (canvasHeight / 2 - 105 * overallTextScale) + g[j].originalPos.y;   // Adjust original Y
//     }

//     pointCollection = new PointCollection();
//     pointCollection.points = g;
//     initEventListeners();
// }

// window.reset = false;

// // REMOVE THESE TWO EVENT LISTENERS:
// // $(window).mouseleave(function () {
// //     window.reset = true;
// //     clearTimeout(bounceNameTimeoutId); // Stop the bounceName loop
// // });

// // $(window).mouseenter(function () {
// //     window.reset = false;
// //     // Optionally restart the bouncing if it should resume on mouseenter
// //     // bounceNameTimeoutId = setTimeout(bounceName, 30);
// //     if (!bounceNameTimeoutId) { // Start it only if it's not already running
// //         bounceName();
// //     }
// // });

// var canvas = $("#myCanvas");
// var canvasHeight;
// var canvasWidth;
// var ctx;
// var pointCollection;

// document.rotationForce = 0.0;
// document.Friction = 0.85;

// var white = [0, 0, 100];
// var black = [0, 0, 27];
// var red = [0, 100, 63];
// var orange = [40, 100, 60];
// var green = [75, 100, 40];
// var blue = [196, 77, 55];
// var purple = [280, 50, 60];

// setTimeout(updateCanvasDimensions, 30);

// var blue = [196, 77, 55];
// var purple = [280, 50, 60];
// var letterColors = [red, orange, green, blue, purple];

// drawName(myName, letterColors);

// bounceBubbles();
// bounceName(); // Add this line to start the shaking animation

var bounceNameTimeoutId;
var myName = "Let's Create!"; // Initial name, will be randomized

const messages = ["Let's Create!", "Happy Coding!", "micro:bit Madness!", "Explore Tech!", "Let's Innovate!", "Python Power!", "Let's Learn!", "Javascript Jam!", "Scratch Quest", "Trinket Bytes"];

function Vector(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;

    this.set = function (x, y) {
        this.x = x;
        this.y = y;
    };
}

function PointCollection() {
    this.mousePos = new Vector(0, 0);
    this.pointCollectionX = 0;
    this.pointCollectionY = 0;
    this.points = [];

    this.update = function () {
        for (var i = 0; i < this.points.length; i++) {
            var point = this.points[i];

            var dx = this.mousePos.x - point.curPos.x;
            var dy = this.mousePos.y - point.curPos.y;
            var dd = (dx * dx) + (dy * dy);
            var d = Math.sqrt(dd);

            point.targetPos.x = d < 150 ? point.curPos.x - dx : point.originalPos.x;
            point.targetPos.y = d < 150 ? point.curPos.y - dy : point.originalPos.y;

            point.update();
        }
    };

    this.shake = function () {
        var randomNum = Math.floor(Math.random() * 5) - 2;

        for (var i = 0; i < this.points.length; i++) {
            var point = this.points[i];
            var dx = this.mousePos.x - point.curPos.x;
            var dy = this.mousePos.y - point.curPos.y;
            var dd = (dx * dx) + (dy * dy);
            var d = Math.sqrt(dd);
            if (d < 50) {
                this.pointCollectionX = Math.floor(Math.random() * 5) - 2;
                this.pointCollectionY = Math.floor(Math.random() * 5) - 2;
            }
            point.draw(bubbleShape, this.pointCollectionX, this.pointCollectionY);
        }
    };

    this.draw = function (bubbleShape, reset) {
        for (var i = 0; i < this.points.length; i++) {
            var point = this.points[i];

            if (point === null)
                continue;

            if (window.reset) {
                this.pointCollectionX = 0;
                this.pointCollectionY = 0;
                this.mousePos = new Vector(0, 0);
            }

            point.draw(bubbleShape, this.pointCollectionX, this.pointCollectionY, reset);
        }
    };

    this.reset = function (bubbleShape) {};
}

function Point(x, y, z, size, color) {
    this.curPos = new Vector(x, y, z);
    this.color = color;

    var bubbleScaleFactor = 1.3; // Adjust to make bubbles bigger
    this.originalPos = new Vector(x, y, z);
    this.radius = size * bubbleScaleFactor;
    this.size = size * bubbleScaleFactor;
    this.targetPos = new Vector(x, y, z);

    this.friction = document.Friction;
    this.rotationForce = document.rotationForce;
    this.springStrength = 0.1;

    this.originalPos = new Vector(x, y, z);
    this.radius = size * 0.5;
    this.size = size * 0.5;
    this.targetPos = new Vector(x, y, z);
    this.velocity = new Vector(0.0, 0.0, 0.0);

    this.update = function () {
        var dx = this.targetPos.x - this.curPos.x;
        var dy = this.targetPos.y - this.curPos.y;
        // Orthogonal vector is [-dy,dx]
        var ax = dx * this.springStrength - this.rotationForce * dy;
        var ay = dy * this.springStrength + this.rotationForce * dx;

        this.velocity.x += ax;
        this.velocity.x *= this.friction;
        this.curPos.x += this.velocity.x;

        this.velocity.y += ay;
        this.velocity.y *= this.friction;
        this.curPos.y += this.velocity.y;

        var dox = this.originalPos.x - this.curPos.x;
        var doy = this.originalPos.y - this.curPos.y;
        var dd = (dox * dox) + (doy * doy);
        var d = Math.sqrt(dd);

        this.targetPos.z = d / 100 + 1;
        var dz = this.targetPos.z - this.curPos.z;
        var az = dz * this.springStrength;
        this.velocity.z += az;
        this.velocity.z *= this.friction;
        this.curPos.z += this.velocity.z;

        this.radius = this.size * this.curPos.z;
        if (this.radius < 1) this.radius = 1;
    };

    this.draw = function (bubbleShape, dx, dy) {
        ctx.fillStyle = this.color;
        if (bubbleShape == "square") {
            ctx.beginPath();
            ctx.fillRect(this.curPos.x + dx, this.curPos.y + dy, this.radius * 1.5, this.radius * 1.5);
        } else {
            ctx.beginPath();
            ctx.arc(this.curPos.x + dx, this.curPos.y + dy, this.radius, 0, Math.PI * 2, true);
            ctx.fill();
        }
    };
}

function makeColor(hslList, fade) {
    var hue = hslList[0] /*- 17.0 * fade / 1000.0*/ ;
    var sat = hslList[1] /*+ 81.0 * fade / 1000.0*/ ;
    var lgt = hslList[2] /*+ 58.0 * fade / 1000.0*/ ;
    return "hsl(" + hue + "," + sat + "%," + lgt + "%)";
}

function phraseToHex(phrase) {
    var hexphrase = "";
    for (var i = 0; i < phrase.length; i++) {
        hexphrase += phrase.charCodeAt(i).toString(16);
    }
    return hexphrase;
}

function initEventListeners() {
    $(window).bind('resize', updateCanvasDimensions).bind('mousemove', onMove);

    canvas.ontouchmove = function (e) {
        e.preventDefault();
        onTouchMove(e);
    };

    canvas.ontouchstart = function (e) {
        e.preventDefault();
    };

    canvas.get(0).addEventListener('mouseleave', function () {
        window.reset = true;
        clearTimeout(bounceNameTimeoutId);
    });

    $(window).mouseenter(function () {
        window.reset = false;
        if (!bounceNameTimeoutId) {
            bounceName();
        }
    });

    canvas.addEventListener('mouseenter', function() {
        myName = messages[Math.floor(Math.random() * messages.length)];
        drawName(myName, letterColors);
    });

    canvas.addEventListener('touchstart', function() {
        myName = messages[Math.floor(Math.random() * messages.length)];
        drawName(myName, letterColors);
    });

    canvas.addEventListener('mouseleave', function() {
        window.reset = true;
        clearTimeout(bounceNameTimeoutId);
    });

    canvas.addEventListener('touchend', function() {
        window.reset = true;
        clearTimeout(bounceNameTimeoutId);
    });
}

function updateCanvasDimensions() {
    var container = $(".canvas-container");
    canvas.attr({
        width: container.width(),
        height: container.height()
    });
    canvasWidth = canvas.width();
    canvasHeight = canvas.height();
    draw();
}

function onMove(e) {
    if (pointCollection) {
        pointCollection.mousePos.set(e.pageX - canvas.offset().left, e.pageY - canvas.offset().top);
    }
}

function onTouchMove(e) {
    if (pointCollection) {
        pointCollection.mousePos.set(e.targetTouches[0].pageX - canvas.offset().left, e.targetTouches[0].pageY - canvas.offset().top);
    }
}

function bounceName() {
    if (!window.reset) {
        shake();
        bounceNameTimeoutId = setTimeout(bounceName, 30); // Store the timeout ID
    }
}

function bounceBubbles() {
    draw();
    update();
    setTimeout(bounceBubbles, 30);
}

function draw(reset) {
    var tmpCanvas = canvas.get(0);

    if (tmpCanvas.getContext === null) {
        return;
    }

    ctx = tmpCanvas.getContext('2d');
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    bubbleShape = typeof bubbleShape !== 'undefined' ? bubbleShape : "circle";

    if (pointCollection) {
        pointCollection.draw(bubbleShape, reset);
    }
}

function shake() {
    var tmpCanvas = canvas.get(0);

    if (tmpCanvas.getContext === null) {
        return;
    }

    ctx = tmpCanvas.getContext('2d');
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    bubbleShape = typeof bubbleShape !== 'undefined' ? bubbleShape : "circle";

    if (pointCollection) {
        pointCollection.shake(bubbleShape);
    }
}

function update() {
    if (pointCollection)
        pointCollection.update();
}

function drawName(name, letterCols) {
    updateCanvasDimensions();
    var g = [];
    var offset = 0;
    var overallTextScale = 0.5; // Adjust this value to control the overall text size
    var bubbleSizeMultiplier = 1.5; // Adjust this to make the bubbles bigger (values > 1)
    var letterColors = letterCols; // Use the provided letter colors

    function addLetter(cc_hex, ix, letterCols) {
        if (typeof letterCols !== 'undefined') {
            if (Object.prototype.toString.call(letterCols) === '[object Array]' && Object.prototype.toString.call(letterCols[0]) === '[object Array]') {
                letterColors = letterCols;
            }
            if (Object.prototype.toString.call(letterCols) === '[object Array]' && typeof letterCols[0] === "number") {
                letterColors = [letterCols];
            }
        } else {
            // if undefined set black
            letterColors = [[0, 0, 27]];
        }

        if (document.alphabet.hasOwnProperty(cc_hex)) {
            var chr_data = document.alphabet[cc_hex].P;
            var bc = letterColors[ix % letterColors.length];

            for (var i = 0; i < chr_data.length; ++i) {
                point = chr_data[i];

                g.push(new Point(point[0] * overallTextScale + offset,
                    point[1] * overallTextScale,
                    0.0,
                    point[2] * bubbleSizeMultiplier * overallTextScale, // Scale bubble size
                    makeColor(bc, point[3])));
            }
            offset += document.alphabet[cc_hex].W * overallTextScale;
        }
 }

    var hexphrase = phraseToHex(name);

    var col_ix = -1;
    for (var i = 0; i < hexphrase.length; i += 2) {
        var cc_hex = "A" + hexphrase.charAt(i) + hexphrase.charAt(i + 1);
        if (cc_hex != "A20") {
            col_ix++;
        }
        addLetter(cc_hex, col_ix, letterColors);
    }

    for (var j = 0; j < g.length; j++) {
        g[j].curPos.x = (canvasWidth / 2 - (offset / overallTextScale) / 2) + g[j].curPos.x; // Adjust centering
        g[j].curPos.y = (canvasHeight / 2 - 105 * overallTextScale) + g[j].curPos.y;       // Adjust vertical centering
        g[j].originalPos.x = (canvasWidth / 2 - (offset / overallTextScale) / 2) + g[j].originalPos.x; // Adjust original X
        g[j].originalPos.y = (canvasHeight / 2 - 105 * overallTextScale) + g[j].originalPos.y;   // Adjust original Y
    }

    pointCollection = new PointCollection();
    pointCollection.points = g;
    initEventListeners(); // Ensure event listeners are initialized after point collection is created
}

window.reset = false;

var canvas = $("#myCanvas");
var canvasHeight;
var canvasWidth;
var ctx;
var pointCollection;

document.rotationForce = 0.0;
document.Friction = 0.85;

var white = [0, 0, 100];
var black = [0, 0, 27];
var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];

setTimeout(updateCanvasDimensions, 30);

var blue = [196, 77, 55];
var purple = [280, 50, 60];
var letterColors = [red, orange, green, blue, purple];

// Load the alphabet data (assuming it's in 'alphabet.js')
$.getScript("/js/alphabet.js", function() {
    drawName(myName, letterColors);
    bounceBubbles();
    bounceName(); // Start the shaking animation
});