class Rotor {
  constructor(rotorNum) {
    let wiringString = "";
    switch(rotorNum) {
      case 1:
        wiringString = "EKMFLGDQVZNTOWYHXUSPAIBRCJ";
        this.notchSpot = 17;
        break;
      case 2:
        wiringString = "AJDKSIRUXBLHWTMCQGZNPYFVOE";
        this.notchSpot = 5;
        break;
      case 3:
        wiringString = "BDFHJLCPRTXVZNYEIWGAKMUSQO";
        this.notchSpot = 22;
        break;
      case 4:
        wiringString = "ESOVPZJAYQUIRHXLNFTGKDCMWB";
        break;
      case 5:
        wiringString = "VZBRGITYUPSDNHLXAWMJQOFECK";
        break;
      default:
        wiringString = "incorrect rotor input";
    }
    this.wiring = wiringString.toLowerCase().split("");
    this.rotorNo = rotorNum;
    //this.position = 1;
  }

  sendSignal(direction, letter) {
    if (direction) { //going forward through rotor
      const index = letters.indexOf(letter);
      const output = this.wiring[index];

      return output;
    } else { //going backwards through rotor
      const index = letters.indexOf(letter);
      return letters[this.wiring.indexOf(letter)];
    }
  }
  
  updatePosition() {
    for (let i = 0; i < this.position; i++) {
      this.wiring.push(this.wiring.shift());
    }
  }
  
  downPosition() {
    this.position--;
    this.wiring.push(this.wiring.shift());
  }

  shiftPosition() {
    this.position++;
    for (let i = 0; i < this.wiring.length - 1; i++) {
      this.wiring.push(this.wiring.shift());
    }
  }
}