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
let playerPosition = { x: 1, y: 1 };
let currentMaze = [];
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

function drawMaze(maze) {
    document.getElementById('maze').style.fontFamily = 'monospace';
    document.getElementById('maze').style.fontSize = '20px';
    document.getElementById('maze').style.lineHeight = '1';
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

function isValidMove(x, y) {
    return currentMaze[y] && currentMaze[y][x] === ' ';
}
function generateAsciiArt() {
    try {
        const container = document.getElementById('maze');
        const randomArt = asciiArts[Math.floor(Math.random() * asciiArts.length)];
        
        // Style container
        container.style.fontFamily = 'monospace';
        container.style.whiteSpace = 'pre';
        container.style.textAlign = 'center';
        container.style.padding = '20px';
        container.style.backgroundColor = '#000';
        container.style.color = '#fff';
        container.style.fontSize = '16px';
        
        // Display art
        container.textContent = randomArt;
    } catch (error) {
        console.error('Failed to generate ASCII art:', error);
    }
}

function executeCommand() {
    const terminal = document.getElementById('terminal');
    if (!terminal) return;

    const command = terminal.value.trim().toLowerCase();
    
    switch(command) {
        case 'ascii':
            generateAsciiArt();
            break;
        case 'maze':
            generateMaze();
            break;
        default:
            alert('Unknown command. Use "ascii" or "maze"');
    }
    
    terminal.value = ''; // Clear input
}

// Event listener for command button
document.getElementById('commandButton')?.addEventListener('click', executeCommand);
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
    `,
    `
    ╔══════════════════════╗
    ║╔═╗╔═╗╔═╗╔═╗╔═╗╔═╗╔═╗║
    ║║█║║▓║║▒║║░║║▒║║▓║║█║║
    ║╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝║
    ║╔═╗╔═╗╔═╗╔═╗╔═╗╔═╗╔═╗║
    ║║▓║║▒║║░║║█║║░║║▒║║▓║║
    ║╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝║
    ╚══════════════════════╝
    `,
    `
    ╔═══════════════════╗
    ║▓░▒█▓░▒█▓░▒█▓░▒█▓░║
    ║░▒█▓░▒█▓░▒█▓░▒█▓░▒║
    ║▒█▓░▒█▓░▒█▓░▒█▓░▒█║
    ║█▓░▒█▓░▒█▓░▒█▓░▒█▓║
    ║▓░▒█▓░▒█▓░▒█▓░▒█▓░║
    ╚═══════════════════╝
    `,
    `
    ╔════════════════╗
    ║▄▄▄▀▀▀▄▄▄▀▀▀▄▄▄║
    ║███▄▄▄███▄▄▄███║
    ║▀▀▀███▀▀▀███▀▀▀║
    ║▄▄▄▀▀▀▄▄▄▀▀▀▄▄▄║
    ║███▄▄▄███▄▄▄███║
    ║▀▀▀███▀▀▀███▀▀▀║
    ╚════════════════╝
    `,
    `
    ╔══════════════════╗
    ║╔═╦═╗╔═╦═╗╔═╦═╗╔═║
    ║║█║█║║▓║▓║║▒║▒║║░║
    ║╠═╬═╣╠═╬═╣╠═╬═╣╠═║
    ║║▓║▓║║▒║▒║║░║░║║█║
    ║╠═╬═╣╠═╬═╣╠═╬═╣╠═║
    ║║▒║▒║║░║░║║█║█║║▓║
    ║╚═╩═╝╚═╩═╝╚═╩═╝╚═║
    ╚══════════════════╝
    `,
    `
    ╔════════════════════╗
    ║█▀▄▀█▒▀▄▀▒░▄▀▄░█▀▄║
    ║█▀▄▀█▒▀▄▀▒░▄▀▄░█▀▄║
    ║█▄▀▄█▒▄▀▄▒░▀▄▀░█▄▀║
    ║█▄▀▄█▒▄▀▄▒░▀▄▀░█▄▀║
    ╚════════════════════╝
    `,
    `
    ╔═════════════╗
    ║ (╯°□°)╯︵┻━┻║  
    ╚═════════════╝
    `, // Table Flip
    `
    ╔═══════════╗
    ║ ¯\\_(ツ)_/¯ ║
    ╚═══════════╝
    `, // Shrug
    `
    ╔════════════╗
    ║ ಠ_ಠ BRUH ಠ_ಠ║
    ╚════════════╝
    `, // Disapproval
    `
    ╔═══════════╗
    ║▄▀▄ ᴹᴱᵂ ▄▀▄║
    ║(●˙—˙●)♥   ║
    ╚═══════════╝
    `, // Nyan Cat
    `
    ╔═════════════╗
    ║ (◉︵◉) HALP ║
    ╚═════════════╝
    `, // Panic
    `
    ╔════════════╗
    ║ █▄█ ▀█▀    ║
    ║ WHY U NO?  ║
    ╚════════════╝
    `, // Why U No
];


function executeCommand() {
    const terminal = document.getElementById('terminal');
    if (!terminal) return;

    const command = terminal.value.trim().toLowerCase();
    
    switch(command) {
        case 'maze':
            generateMaze();
            break;
        case 'ascii':
            generateAsciiArt();
            break;
        case 'help':
            alert('Available commands: maze, ascii, help');
            break;
        default:
            alert('Unknown command. Type "help" for available commands.');
    }
    
    terminal.value = ''; // Clear input after execution
}
function updatePlayerPosition(newX, newY) {
    if (currentMaze[newY] && currentMaze[newY][newX] !== ' ') {
        playerPosition = { x: newX, y: newY };
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
