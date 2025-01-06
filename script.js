const mazes = [
    [
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa   a',
        '8   8               8               8           8                   8   8',
        '8   8   aaaaaaaaa   8   aaaaa   aaaa8aaaa   aaaa8   aaaaa   aaaaa   8   8',
        '8               8       8   8           8           8   8   8       8   8',
        '8aaaaaaaa   a   8aaaaaaa8   8aaaaaaaa   8aaaa   a   8   8   8aaaaaaa8   8',
        '8       8   8               8           8   8   8   8   8           8   8',
        '8   a   8aaa8aaaaaaaa   a   8   aaaaaaaa8   8aaa8   8   8aaaaaaaa   8   8',
        '8   8               8   8   8       8           8           8       8   8',
        '8   8aaaaaaaaaaaa   8aaa8   8aaaa   8   aaaaa   8aaaaaaaa   8   aaaa8   8',
        '8           8       8   8       8   8       8           8   8           8',
        '8   aaaaa   8aaaa   8   8aaaa   8   8aaaaaaa8   a   a   8   8aaaaaaaaaaa8',
        '8       8       8   8   8       8       8       8   8   8       8       8',
        '8aaaaaaa8aaaa   8   8   8   aaaa8aaaa   8   aaaa8   8   8aaaa   8aaaa   8',
        '8           8   8           8       8   8       8   8       8           8',
        '8   aaaaa   8   8aaaaaaaa   8aaaa   8   8aaaa   8aaa8   aaaa8aaaaaaaa   8',
        '8   8       8           8           8       8   8   8               8   8',
        '8   8   aaaa8aaaa   a   8aaaa   aaaa8aaaa   8   8   8aaaaaaaaaaaa   8   8',
        '8   8           8   8   8   8   8           8               8   8       8',
        '8   8aaaaaaaa   8   8   8   8aaa8   8aaaaaaa8   aaaaaaaaa   8   8aaaaaaa8',
        '8   8       8   8   8           8           8   8       8               8',
        '8   8   aaaa8   8aaa8   aaaaa   8aaaaaaaa   8aaa8   a   8aaaaaaaa   a   8',
        '8   8                   8           8               8               8   8',
        '8   8aaaaaaaaaaaaaaaaaaa8aaaaaaaaaaa8aaaaaaaaaaaaaaa8aaaaaaaaaaaaaaa8aaa8',
    ],
    [
        '+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+',
        '|        |        |                                            |',
        '+  +--+  +  +--+--+  +--+--+--+--+--+--+--+--+--+  +--+--+--+  +',
        '|     |     |        |     |     |              |     |        |',
        '+--+  +  +--+  +--+--+  +  +  +  +  +--+--+--+  +--+  +  +--+--+',
        '|     |  |     |        |     |  |        |  |  |     |     |  |',
        '+  +--+  +  +--+  +--+--+--+--+--+--+  +--+--+  +--+--+--+  +--+',
        '|  |     |  |  |  |              |  |  |     |        |  |     |',
        '+  +--+--+  +--+  +  +--+--+--+  +  +  +  +  +--+  +  +--+--+  +',
        '|        |  |     |     |     |  |  |     |     |  |           |',
        '+  +--+  +  +  +--+--+  +--+  +  +--+--+--+--+  +  +--+--+--+--+',
        '|  |     |  |        |     |  |              |  |           |  |',
        '+  +  +--+  +--+--+--+--+  +  +--+--+--+--+  +  +--+  +--+  +--+',
        '|  |  |                    |              |  |     |  |  |     |',
        '+  +  +  +--+--+--+--+--+--+--+  +--+--+  +- +--+  +  +  +--+  +',
        '|  |        |     |                    |  |     |  |     |     |',
        '+  +--+--+  +  +  +  +--+  +--+--+  +--+--+  +  +  +--+  +  +--+',
        '|  |        |  |  |     |        |  |        |  |  |  |  |     |',
        '+  +  +--+--+  +  +--+  +  +--+--+--+  +--+--+--+  +  +  +--+  +',
        '|  |  |        |     |  |     |     |           |  |     |  |  |',
        '+  +  +  +--+--+--+--+  +--+  +  +--+--+--+--+  +  +--+--+--+  +',
        '|  |                       |  |     |  |  |     |        |  |  |',
        '+  +  +--+--+--+--+--+--+--+--+--+  +--+--+  +--+--+--+  +--+  +',
        '|  |        |     |  |        |  |  |  |              |  |     |',
        '+--+--+--+  +  +  +  +  +--+  +--+  +--+  +--+  +--+--+  +  +--+',
        '|     |     |  |  |  |  |  |        |  |  |     |     |  |     |',
        '+  +--+  +--+  +  +  +  +--+--+--+--+--+  +  +--+  +  +  +--+--+',
        '|           |  |  |  |                 |  |  |     |  |        |',
        '+--+--+--+  +--+  +  +--+--+--+--+--+  +  +  +--+--+--+--+--+  +',
        'START ->          |                 |     |              | END ->',
        '+-----+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+',
    ],
];

const asciiArts = [
    `
      ____
    _|__  |__
   /   /\\   \\
  /___/  \\___\\
   |  |/\\|  |
   |  |  |  |
  /____\\/____\\
    `,
    `
       _____
      /     \\
     | () () |
      \\  ^  /
       |||||
       |||||
    `,
    
    
 
];


let playerPosition = { x: 1, y: 1 };
let currentMaze = [];

function drawMaze(maze) {
    document.getElementById('maze').textContent = maze.map((row, y) =>
        row.map((cell, x) =>
            x === playerPosition.x && y === playerPosition.y ? '@' : cell
        ).join('')
    ).join('\n');
}

function generateMaze() {
    currentMaze = mazes[Math.floor(Math.random() * mazes.length)].map(row => row.split(''));
    playerPosition = { x: 1, y: 1 }; 
    drawMaze(currentMaze);
}
function generateAsciiArt() {
    const randomAsciiArt = asciiArts[Math.floor(Math.random() * asciiArts.length)];
    document.getElementById('maze').textContent = randomAsciiArt;
}
function executeCommand() {
    const command = document.getElementById('terminal').value.trim().toLowerCase();
    if (command === 'maze') {
        generateMaze();
    } else if (command === 'ascii') {
        generateAsciiArt();
    } else {
        alert('Unknown command. Use "maze" or "ascii".');
    }
}

function updatePlayerPosition(newX, newY) {
    if (currentMaze[newY] && currentMaze[newY][newX] !== ' ') {
        playerPosition = { x: newX, y: newY };
        drawMaze(currentMaze);
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp') {
        updatePlayerPosition(playerPosition.x, playerPosition.y - 1);
    } else if (event.key === 'ArrowDown') {
        updatePlayerPosition(playerPosition.x, playerPosition.y + 1);
    } else if (event.key === 'ArrowLeft') {
        updatePlayerPosition(playerPosition.x - 1, playerPosition.y);
    } else if (event.key === 'ArrowRight') {
        updatePlayerPosition(playerPosition.x + 1, playerPosition.y);
    }
});

function copyToClipboard() {
    var copyText = document.getElementById("copyText");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}
