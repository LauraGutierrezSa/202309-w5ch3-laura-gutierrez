import Character from "./Character/Character.js";
import King from "./King/King.js";
import Knight from "./Knight/Knight.js";
import Squier from "./Squier/Squier.js";
import Adviser from "./Adviser/Adviser.js";

const king = new King("Joffrey Baratheon");
const knight = new Knight("Jamie Lannister");
const warrior = new Knight("Daenerys Targaryen");
const adviser = new Adviser("Tyrion Lannister", "Daenerys Targaryen");
const squier = new Squier("Bronn", "Jaime Lannister");

const charactersArray = [king, knight, warrior, adviser, squier];

const getCharactersCommunications = (characters) => {
  let messages = [];

  charactersArray.forEach((character) => {
    messages.push(character.communicate());
  });
  return messages;
};

console.log(getCharactersCommunications());
