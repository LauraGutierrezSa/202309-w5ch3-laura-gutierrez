import Character from "../Character/Character.js";

class Squier extends Character {
  servedCharacter = "knight";
  assKissingLevel;

  constructor(characterName) {
    super(characterName);
  }

  communicate() {
    return `${super.communicate()} I'm a loser :'( `;
  }
}

export default Squier;
