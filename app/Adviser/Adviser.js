import Character from "../Character/Character.js";

class Advicer extends Character {
  advicedCharacter;

  constructor(characterName, advicedPersonsName) {
    super(characterName);
    this.advicedCharacter = advicedPersonsName;
  }

  communicate() {
    return `${super.communicate()} I don't know why but I think I'm going to die soon... `;
  }
}

export default Advicer;
