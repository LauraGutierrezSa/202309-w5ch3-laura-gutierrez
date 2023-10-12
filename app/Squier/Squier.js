import Character from "../Character/Character.js";

class Squier extends Character {
  servedCharacter = "knight";
  assKissingLevel;

  constructor(characterName, assKissingLevel, servedCharacter) {
    super(characterName);
    this.assKissingLevel = assKissingLevel;
    this.servedCharacter = servedCharacter;
  }

  communicate() {
    return `${super.communicate()} I'm a loser :'( `;
  }
}

export default Squier;
