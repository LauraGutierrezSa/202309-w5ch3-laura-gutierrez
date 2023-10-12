import Character from "../Character/Character.js";

class Knight extends Character {
  weapon;
  skills;

  constructor(name, family, age, weapon, skills) {
    super(name, family, age);
    this.weapon = weapon;
    this.skills = skills;
  }

  communicate() {
    return `${super.communicate()} I hit first. Then I ask. `;
  }
}

export default Knight;
