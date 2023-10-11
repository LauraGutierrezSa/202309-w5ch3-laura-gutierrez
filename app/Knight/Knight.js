import Character from "../Character/Character.js";

class Kight extends Character {
  weapon;
  skills;

  constructor(characterName) {
    super(characterName);
  }

  communicate() {
    return `${super.communicate()} I hit first. Then I ask. `;
  }
}

export default Kight;
