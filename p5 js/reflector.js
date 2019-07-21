class Reflector {
  constructor() {
    // reflector B pairs
    this.pairs = [
      ["a", "y"],
      ["b", "r"],
      ["c", "u"],
      ["d", "h"],
      ["e", "q"],
      ["f", "s"],
      ["g", "l"],
      ["v", "w"],
      ["i", "p"],
      ["j", "x"],
      ["k", "n"],
      ["z", "t"],
      ["m", "o"]
    ];
  }
  
  reflect(letter) {
    for (let i = 0; i < this.pairs.length; i++) {
      for (let j = 0; j < 2; j++) {
        if (letter === this.pairs[i][j]) {
          return (j === 1) ? this.pairs[i][0] : this.pairs[i][1];
        }
      }
    }
  }
}