// Import Paper.js.
import paper from 'paper';

// Get canvas element reference.
const canvas = document.querySelector('canvas');

// Setup Paper.js.
paper.setup(canvas);

// Draw an orange circle at the view center.
new paper.Path.Circle({
    center: paper.view.center,
    radius: 50,
    fillColor: 'orange'
})
