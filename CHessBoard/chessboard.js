// User story 1: Function to print data to the body of the document
function print(data) {
    const label = document.createElement('span');  // Create a span element
    label.innerHTML = data;  // Set its content
    document.body.appendChild(label);  // Append it to the body
  }
  
  // User story 2: Function to insert a new line (break element)
  function newLine() {
    const br = document.createElement('br');  // Create a <br> element
    document.body.appendChild(br);  // Append it to the body
  }
  
  // User story 3: Declare the board size
  const board_size = 8;  // Change this value to create larger or smaller boards
  
  // User story 4: Create the chessboard grid
  function createChessBoard() {
    for (let row = 0; row < board_size; row++) {
      for (let col = 0; col < board_size; col++) {
        // If the sum of row and col is even, print '*', otherwise print '#'
        if ((row + col) % 2 === 0) {
          print('*');
        } else {
          print('#');
        }
      }
      newLine();  // Move to the next line after every row
    }
  }
  
  // Call the function to create the chessboard
  createChessBoard();
  