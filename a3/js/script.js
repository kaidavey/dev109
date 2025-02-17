// Creating variables for content divs
var lContent = document.getElementById('lContent');
var rContent = document.getElementById('rContent');

// Helper function for creating a symbol char
var createSymbol = function(symbol, evenOdd, leftRight) {
    var sym = document.createElement('p');
    sym.innerHTML = symbol;

    // Give symbol element class left or right for alignment within div
    sym.setAttribute('class', leftRight);

    // Use evenOdd parameter to assign corrent color to the symbol
    sym.style.color = document.getElementById(evenOdd + 'Color').value;

    // Add the created element to left/right div
    if (leftRight == 'left') {
        lContent.appendChild(sym);
    } else {
        rContent.appendChild(sym);
    }
}

// Helper function to create break element
var createBreak = function(leftRight) {
    var br = document.createElement('br');

    // Add the created element to left/right div
    if (leftRight == 'left') {
        lContent.appendChild(br);
    } else {
        rContent.appendChild(br);
    }
}

// Main function called to create rhombus
function createRhombus(height, symbol) {
    // Clear the content divs before creating new rhombus
    lContent.innerHTML = '';
    rContent.innerHTML = '';

    // Create the 4 sections of the rhombus
    createTop(height, symbol, "left");
    createTop(height, symbol, "right");
    createBottom(height, symbol, "left");
    createBottom(height, symbol, "right");
}

// Function for creating bottom section
function createBottom(height, symbol, leftRight) {
    for (var i = height; i > 0; i--) {
        for (var j = 0; j < i; j++) {
            if (j % 2 == 0) {
                createSymbol(symbol, 'even', leftRight);
            } else {
                createSymbol(symbol, 'odd', leftRight);
            }
        }
        createBreak(leftRight);
    }
    createBreak(leftRight);
}

// Function for creating top section
function createTop(height, symbol, leftRight) {
    for (var i = 1; i <= height; i++) {
        for (var j = 0; j < i; j++) {
            if (j % 2 == 0) {
                createSymbol(symbol, 'even', leftRight);
            } else {
                createSymbol(symbol, 'odd', leftRight);
            }
        }
        createBreak(leftRight);
    }
    createBreak(leftRight);
}
