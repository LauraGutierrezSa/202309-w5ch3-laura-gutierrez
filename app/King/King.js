import Character from "../Character/Character.js";

class King extends Character {
  reignedYears;

  constructor(name, family, age, reignedYears) {
    super(name, family, age);
    this.reignedYears = reignedYears;
  }

  communicate() {
    return `${super.communicate()} You're all going to die! `;
  }
}

export default King;
