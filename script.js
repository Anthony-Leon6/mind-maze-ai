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
        '            |                 |     |              |           ',
        '+-----+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+',
    ],
    
];

const asciiArts = [

    `
    /\\___/\\
   (  o o  )
   (  =^=  )
    (______)
    `, // Cat
    `
     ,_____,
    /       \\
   /  ^   ^  \\
  ( (  o_o  ) )
   \\ \\     / /
    \\_)===(_/
    `, // Owl
    `
      /^\\
     /   \\
    /     \\
   /__|_|__\\
    `, // Simple House
    `
    .-""""-.
   /        \\
  /_        _\\
 // }      { \\\\
 \\\\  _//\\\\_ //
  \\\\/      \\//
   '--------'
    `, // Robot Face
    `
     .---.
    /_____\\
    |[ ]|
    |---|
    |___|
    `, // Castle Tower
    `
    |\\---/|
    | o_o |
     \\_^_/
    `, // Simple Cat
    `
     /\\
    /  \\
   /____\\
   |    |
   |[]  |
   |____|
    `, // House
    `
(\\____/)
  (o.o)
  (")(")"
    `, // Bunny
    `
    /\\___/\\
    (o   o)
    ( =^= )
    (______)
    `, // Another Cat
    `
      __{}__
     /     \\
    /       \\
    \\       /
     \\__ __/
    `, // UFO
    `
    ▄█▀█▀█▄
    ▀▀▀██▀▀▀
    ░▀█▄█▀░
    `, // Butterfly
    `
    /\\_/\\
    ((@v@))
    {_._}
    /   \\
    |     |   
    |     |   
    |_____|  
    `, // Wise Owl
    `
      ____
     /    \\
    | ^  ^ |
    \\  ==  /
     \\____/
    `,
    `
    ╔═════════════╗
    ║ (◉︵◉) HALP ║
    ╚═════════════╝
    `,
    `
    ╔═╦═╦═╦═╗
    ║█║▓║▒║░║
    ╠═╬═╬═╬═╣
    ║░║▒║▓║█║
    ╠═╬═╬═╬═╣
    ║▓║░║█║▒║
    ╚═╩═╩═╩═╝
    `,   
    `
    ╔══════════════════════════════════════════╗
    ║╔════════════╗╔════════════╗╔════════════╗║
    ║║▓░▒█▓░▒█▓░▒║║█▄▀▄█▄▀▄█▄▀║║▀▄█▀▄█▀▄█▀▄║║
    ║║░▒█▓░▒█▓░▒█║║▄█▄▀▄█▄▀▄█▄║║▄▀▄█▀▄█▀▄█▀║║
    ║║▒█▓░▒█▓░▒█▓║║█▄▀▄█▄▀▄█▄▀║║▀▄█▀▄█▀▄█▀▄║║
    ║╚════════════╝╚════════════╝╚════════════╝║
    ║╔═╦═╦═╦═╦═╦═╗╔═╦═╦═╦═╦═╦═╗╔═╦═╦═╦═╦═╦═╗║
    ║║█║▓║▒║░║▒║▓║║▓║▒║░║█║▓║▒║║░║▒║▓║█║▒║░║║
    ║╠═╬═╬═╬═╬═╬═╣╠═╬═╬═╬═╬═╬═╣╠═╬═╬═╬═╬═╬═╣║
    ║║▓║▒║░║█║░║▒║║▒║░║█║▓║▒║░║║█║▓║▒║░║▓║█║║
    ║╚═╩═╩═╩═╩═╩═╝╚═╩═╩═╩═╩═╩═╝╚═╩═╩═╩═╩═╩═╝║
    ║╔══════════════════════════════════════╗  ║
    ║║██▀▄▀▄▀▄██░▒▓█▀▄▀▄▀▄██░▒▓█▀▄▀▄▀▄██║  ║
    ║║██▄▀▄▀▄▀██▓▒░██▄▀▄▀▄▀██▓▒░██▄▀▄▀▄▀║  ║
    ║║██▀▄▀▄▀▄██░▒▓█▀▄▀▄▀▄██░▒▓█▀▄▀▄▀▄██║  ║
    ║╚══════════════════════════════════════╝  ║
    ╚══════════════════════════════════════════╝
    `,
    `
    ╔════════════════════════════════════╗
    ║╔═╗╔═╗╔═╗║╔═╗╔═╗╔═╗║╔═╗╔═╗╔═╗║╔═╗║
    ║║█║║▓║║▒║║║░║║▒║║▓║║║█║║▓║║▒║║║░║║
    ║╚═╝╚═╝╚═╝║╚═╝╚═╝╚═╝║╚═╝╚═╝╚═╝║╚═╝║
    ║▓░▒█▓░▒█▓║░▒█▓░▒█▓░║▒█▓░▒█▓░▒║█▓░║
    ║░▒█▓░▒█▓░║▒█▓░▒█▓░▒║█▓░▒█▓░▒█║▓░▒║
    ║╔═╗╔═╗╔═╗║╔═╗╔═╗╔═╗║╔═╗╔═╗╔═╗║╔═╗║
    ║║▀║║▄║║█║║║▀║║▄║║█║║║▀║║▄║║█║║║▀║║
    ║╚═╝╚═╝╚═╝║╚═╝╚═╝╚═╝║╚═╝╚═╝╚═╝║╚═╝║
    ╚════════════════════════════════════╝
    `,
    `
    ╔══════════════════════════════╗
    ║╔═╦═╗╔═╦═╗║╔═╦═╗╔═╦═╗║╔═╦═╗║
    ║║█║█║║▓║▓║║║▒║▒║║░║░║║║█║█║║
    ║╠═╬═╣╠═╬═╣║╠═╬═╣╠═╬═╣║╠═╬═╣║
    ║║▀║▄║║█║▀║║║▄║█║║▀║▄║║║█║▀║║
    ║╠═╬═╣╠═╬═╣║╠═╬═╣╠═╬═╣║╠═╬═╣║
    ║║░║░║║█║█║║║▓║▓║║▒║▒║║║░║░║║
    ║╚═╩═╝╚═╩═╝║╚═╩═╝╚═╩═╝║╚═╩═╝║
    ║▄▀▄█▀▄█▀▄█║▀▄█▀▄█▀▄█▀║▄█▀▄█║
    ║▀▄█▀▄█▀▄█▀║▄█▀▄█▀▄█▀▄║█▀▄█▀║
    ╚══════════════════════════════╝
    `
    `
    ╔══════════════════════════════════════════╗
    ║╔════════════╗   ｡◕‿◕｡   ╔════════════╗  ║
    ║║(づ｡◕‿‿◕｡)づ║  NOTICE  ║░▒▓█▓▒░║║░▒▓║  ║
    ║║  ME  PLS  ║   ME!!!   ║▓▒░█▓▒░║║░▒▓║  ║
    ║╚════════════╝   ฅ^•ﻌ•^ฅ ╚════════════╝  ║
    ║╔═╦═╦═╦═╦═╦═╗╔═══════════╗╔═╦═╦═╦═╦═╦═╗║
    ║║█║▓║▒║░║▒║▓║║ (◉︵◉) ←  ║║░║▒║▓║█║▒║░║║
    ║╠═╬═╬═╬═╬═╬═╣║ ME WHEN   ║╠═╬═╬═╬═╬═╬═╣║
    ║║▓║▒║░║█║░║▒║║ NO PIZZA  ║║█║▓║▒║░║▓║█║║
    ║╚═╩═╩═╩═╩═╩═╝╚═══════════╝╚═╩═╩═╩═╩═╩═╝║
    ║   ▄█▀█▄  ╔═══════════════╗  ▄█▀█▄      ║
    ║  ╚(●⌒●)╝║ Y U NO LIKE ME║ ╚(●⌒●)╝     ║
    ║   ╔═╗   ║  (╯°□°）╯︵┻━┻║   ╔═╗       ║
    ║   ╚═╝   ╚═══════════════╝   ╚═╝       ║
    ╚══════════════════════════════════════════╝
    `,
    `
    ╔══════════════════════════════════════════╗
    ║╔═══╗╔═══╗╔═══╗  ▄▄▄▄▄▄▄  ╔═══╗╔═══╗╔═══║
    ║║▀▄▀║║▄█▄║║░▒▓║ █┌─┐┌─┐█ ║▓▒░║║▄█▄║║▀▄▀║
    ║║█▄█║║░▒▓║║▄█▄║ █└─┘└─┘█ ║▄█▄║║▓▒░║║█▄█║
    ║╚═══╝╚═══╝╚═══╝  ▀▀▀▀▀▀▀  ╚═══╝╚═══╝╚═══║
    ║ ╔═════════╗  ┏━━━━━━━━┓  ╔═════════╗    ║
    ║ ║(｡◕‿◕｡)→║  ┃BOOP!!!!┃  ║←(｡◕‿◕｡)║    ║
    ║ ╚═════════╝  ┗━━━━━━━━┛  ╚═════════╝    ║
    ║▄▀▄▀▄▀▄▀▄▀▄▀▄[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]▄▀▄▀▄▀▄▀▄▀▄║
    ║█▀█▀█▀█▀█▀█▀█▀DEAL WITH IT▀█▀█▀█▀█▀█▀█▀█║
    ╚══════════════════════════════════════════╝
    `

];
const playerSymbol = 'ⓢ';
const exitSymbol = 'ⓔ';

let playerPosition = { x: 1, y: 1 };
let currentMaze = [];

function drawMaze(maze) {
    document.getElementById('maze').textContent = maze.map((row, y) =>
        row.map((cell, x) => {
            if (x === playerPosition.x && y === playerPosition.y) {
                return playerSymbol;
            } else if (x === exitPosition.x && y === exitPosition.y) {
                return exitSymbol;
            }
            return cell;
        }).join('')
    ).join('\n');
}

function generateMaze() {
    currentMaze = mazes[Math.floor(Math.random() * mazes.length)].map(row => row.split(''));
    // Find starting position marked with ⓢ
    for (let y = 0; y < currentMaze.length; y++) {
        for (let x = 0; x < currentMaze[y].length; x++) {
            if (currentMaze[y][x] === playerSymbol) {
                playerPosition = { x, y };
                currentMaze[y][x] = ' '; // Clear the starting position
                break;
            }
        }
    }
    drawMaze(currentMaze);
}

function isValidMove(x, y) {
    return currentMaze[y] && 
           currentMaze[y][x] && 
           (currentMaze[y][x] === ' ' || currentMaze[y][x] === exitSymbol);
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

document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(event) {
    const key = event.key;
    let newX = playerPosition.x;
    let newY = playerPosition.y;

    if (key === 'ArrowUp') {
        newY--;
    } else if (key === 'ArrowDown') {
        newY++;
    } else if (key === 'ArrowLeft') {
        newX--;
    } else if (key === 'ArrowRight') {
        newX++;
    }

    if (isValidMove(newX, newY)) {
        playerPosition.x = newX;
        playerPosition.y = newY;
        drawMaze(currentMaze);
    }
}

function isValidMove(x, y) {
    return currentMaze[y] && currentMaze[y][x] && currentMaze[y][x] === ' ';
}


function copyToClipboard() {
    var copyText = document.getElementById("copyText");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}
