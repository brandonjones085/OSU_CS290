//begins the program
var begin = function() {
  var body = document.getElementsByTagName('body')[0];
  var row = 1;
  var col = 1;

  //Function makes the table
  var makeTable = function() {
    var tbl = document.createElement('table');
    var tblBody = document.createElement('tbody');
    var headerRow = document.createElement('tr');
    tbl.style.margin = '30px';

    //Creates the header row
    for (let i = 0; i < 4; i++) {
      var header = document.createElement('th');
      header.textContent = 'Header ' + (i + 1);
      headerRow.appendChild(header);
      header.style.border = '1px solid black';
    }

    //Creates the remaining columns and rows
    for (let i = 1; i < 4; i++) {
      var row = document.createElement('tr');
      for (let j = 1; j < 5; j++) {
        var cell = document.createElement('td');
        var cellArea = i + ', ' + j;
        cell.textContent = cellArea;

        //Sets the border for all the cells except the marked cell
        cell.style.border = '1px solid black';

        //Sets the border for the initial marked cell
        if (i == 1 && j == 1) {
          cell.style.border = '5px solid black';
        }

        cell.id = cellArea;

        row.appendChild(cell);
      }

      tbl.appendChild(headerRow);
      tblBody.appendChild(row);
    }

    tbl.appendChild(tblBody);
    body.appendChild(tbl);
    tbl.style.border = '1px solid black';
  };

  //Controls all the buttons
  var makeButton = function() {
    //Creating the five buttons
    var upButton = document.createElement('Button');
    upButton.style.margin = '10px';
    var downButton = document.createElement('Button');
    downButton.style.margin = '10px';
    downButton.style.marginLeft = '60px';
    var leftButton = document.createElement('Button');
    var rightButton = document.createElement('Button');
    var markButton = document.createElement('Button');
    upButton.innerHTML = 'Up';
    downButton.innerHTML = 'Down';
    leftButton.innerHTML = 'Left';
    rightButton.innerHTML = 'Right';
    markButton.innerHTML = 'Mark';
    body.appendChild(downButton);
    body.appendChild(leftButton);
    body.appendChild(upButton);
    body.appendChild(rightButton);
    body.appendChild(markButton);

    //controls the current row
    var cellId = col + ', ' + row;
    var move = function() {
      var celle = document.getElementById(cellId);
      celle.style.border = '5px solid black';

      //Adding the event listener for all the buttons
      upButton.addEventListener('click', function(event) {
        if (col > 1) {
          celle.style.border = '1px solid black';
          col--;
          cellId = col + ', ' + row;
          celle = document.getElementById(cellId);
          celle.style.border = '5px solid black';
        }
      });

      //moves down button
      downButton.addEventListener('click', function(event) {
        if (col < 3) {
          celle.style.border = '1px solid black';
          col++;
          cellId = col + ', ' + row;
          celle = document.getElementById(cellId);
          celle.style.border = '5px solid black';
        }
      });

      //moves left button
      leftButton.addEventListener('click', function(event) {
        if (row > 1) {
          celle.style.border = '1px solid black';
          row--;
          cellId = col + ', ' + row;
          celle = document.getElementById(cellId);
          celle.style.border = '5px solid black';
        }
      });

      //moves right button
      rightButton.addEventListener('click', function(event) {
        if (row < 4) {
          celle.style.border = '1px solid black';
          row++;
          cellId = col + ', ' + row;
          celle = document.getElementById(cellId);
          celle.style.border = '5px solid black';
        }
      });

      //Changes color to yellow
      markButton.addEventListener('click', function(event) {
        cellId = col + ', ' + row;
        celle = document.getElementById(cellId);
        celle.style.backgroundColor = 'yellow';
      });

      celle = document.getElementById(cellId);
      celle.style.border = '5px solid black';
    };

    move();
  };
  makeTable();
  makeButton();
};

begin();
