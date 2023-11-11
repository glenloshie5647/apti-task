/* sophisticated_complex_code.js */

// This code generates a random maze using the Depth-First Search algorithm.

// Maze class to create a maze grid with desired dimensions
class Maze {
  constructor(width, height) {
    this.width = width; // Number of columns
    this.height = height; // Number of rows

    // Create a grid with cells
    this.grid = [];
    for (let row = 0; row < height; row++) {
      let rowArray = [];
      for (let col = 0; col < width; col++) {
        let cell = {
          row,
          col,
          walls: {
            top: true,
            right: true,
            bottom: true,
            left: true
          },
          visited: false
        };
        rowArray.push(cell);
      }
      this.grid.push(rowArray);
    }
  }

  // Get the neighboring cells of a given cell
  getNeighbors(cell) {
    const { row, col } = cell;
    const neighbors = [];

    if (row > 0) neighbors.push(this.grid[row - 1][col]); // Top neighbor
    if (col < this.width - 1) neighbors.push(this.grid[row][col + 1]); // Right neighbor
    if (row < this.height - 1) neighbors.push(this.grid[row + 1][col]); // Bottom neighbor
    if (col > 0) neighbors.push(this.grid[row][col - 1]); // Left neighbor

    return neighbors.filter(neighbor => !neighbor.visited); // Return unvisited neighbors
  }

  // Recursive function to generate the maze using Depth-First Search algorithm
  generateMaze() {
    const stack = []; // Stack to store visited cells
    const startCell = this.grid[0][0];
    startCell.visited = true;
    stack.push(startCell);

    while (stack.length > 0) {
      const currentCell = stack[stack.length - 1];
      const neighbors = this.getNeighbors(currentCell);

      if (neighbors.length === 0) {
        stack.pop(); // Dead end, backtrack
      } else {
        const randomNeighbor = neighbors[Math.floor(Math.random() * neighbors.length)];
        randomNeighbor.visited = true;
        this.removeWalls(currentCell, randomNeighbor);
        stack.push(randomNeighbor);
      }
    }
  }

  // Remove walls between two adjacent cells
  removeWalls(cell1, cell2) {
    const rowDiff = cell1.row - cell2.row;
    const colDiff = cell1.col - cell2.col;

    if (rowDiff === 1) {
      cell1.walls.top = false;
      cell2.walls.bottom = false;
    } else if (rowDiff === -1) {
      cell1.walls.bottom = false;
      cell2.walls.top = false;
    }

    if (colDiff === 1) {
      cell1.walls.left = false;
      cell2.walls.right = false;
    } else if (colDiff === -1) {
      cell1.walls.right = false;
      cell2.walls.left = false;
    }
  }
}

// Function to display the maze using ASCII characters
function displayMaze(maze) {
  let display = "";

  // Draw top border
  display += "+";
  for (let col = 0; col < maze.width; col++) {
    display += "--+";
  }
  display += "\n";

  // Draw cells
  for (let row = 0; row < maze.height; row++) {
    let topBorder = "|";
    let bottomBorder = "+";
    for (let col = 0; col < maze.width; col++) {
      const cell = maze.grid[row][col];
      topBorder += cell.walls.top ? "--" : "  ";
      topBorder += "|";
      bottomBorder += cell.walls.bottom ? "--" : "  ";
      bottomBorder += "+";
    }
    display += topBorder + "\n";
    display += bottomBorder + "\n";
  }
  console.log(display);
}

// Create a 10x10 maze and display it
const maze = new Maze(10, 10);
maze.generateMaze();
displayMaze(maze);