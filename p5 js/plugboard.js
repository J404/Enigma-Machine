class PlugBoard {
  constructor() {
    this.connections = [
      ["p", "o"],
      ["m", "l"],
      ["i", "u"],
      ["k", "j"],
      ["n", "h"],
      ["y", "t"],
      ["g", "b"],
      ["v", "f"],
      ["r", "e"],
      ["d", "c"]
    ];
    this.plugLetters = this.setMajorTable();
  }
  
  setMajorTable() {
    let mainArray = [];
    
    for (let i = 0; i < this.connections.length; i++) {
      for (let j = 0; j < 2; j++) {
        mainArray.push(this.connections[i][j]);
      }
    }
    
    return mainArray;
  }
  
  reassign(letter1, newLetter) {
    for (let i = 0; i < this.connections.length; i++) {
      for (let j = 0; j < 2; j++) {
        if (letter1 === this.connections[i][j] && j === 0) {
          this.connections[i][1] = newLetter;
          this.plugLetters = this.setMajorTable();
          return;
        } else if (letter1 === this.connections[i][j] && j === 1) {
          this.connections[i][0] = newLetter;
          this.plugLetters = this.setMajorTable();
          return;
        }
      }
    }
    this.addPair(letter1, newLetter);
  }
  
  addPair(a, b) {
    this.connections[this.connections.length] = [a, b];
    this.plugLetters = this.setMajorTable();
  }
  
  /* returnPair(letter) {
    for (let i = 0; i < this.connections.length; i++) {
      for (let j = 0; j < 2; j++) {
        if (this.connections[i][j] === letter) {
          return (j === 0) ? this.connections[i][1] : this.connections[i][0];
        }
      }
    }
  } */
  
  passSignal(letter) {
    for (let i = 0; i < this.connections.length; i++) {
      for (let j = 0; j < 2; j++) {
        if (this.connections[i][j] === letter) {
          return (j === 0) ? this.connections[i][1] : this.connections[i][0];
        }
      }
    }
  }
  
}