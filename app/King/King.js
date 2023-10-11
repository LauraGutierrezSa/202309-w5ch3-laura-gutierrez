import Character from "../Character/Character.js";

class King extends Character {
  reignedYears;

  constructor(characterName) {
    super(characterName);
  }

  communicate() {
    return `${super.communicate()} You're all going to die! `;
  }
}

export default King;
