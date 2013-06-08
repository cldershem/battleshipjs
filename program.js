// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas('boardCanvas');

// create a rectangle object
var rect = new fabric.Rect({
    left: 100,
    top: 100,
    fill: 'red',
    width: 20,
    height: 20,
    angle: 45,
    hasControls: false,
});

rect.on('selected', function() {
    
    alert('taco');
});

// "add" rectangle onto canvas
canvas.add(rect);
