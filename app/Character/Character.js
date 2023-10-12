class Character {
  name;
  family;
  age;
  isAlive = true;
  series = "Game of Thrones";

  constructor(characterName, characterFamily, characterAge) {
    this.name = characterName;
    this.family = characterFamily;
    this.age = characterAge;
  }

  die() {
    this.isAlive = false;
  }

  communicate() {
    return `I'm ${this.name} from ${this.family}'s family`;
  }
}

export default Character;
