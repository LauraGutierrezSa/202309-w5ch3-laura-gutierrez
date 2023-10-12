import Character from "./Character/Character.js";
import King from "./King/King.js";
import Knight from "./Knight/Knight.js";
import Squier from "./Squier/Squier.js";
import Adviser from "./Adviser/Adviser.js";

const king = new King(
  "Joffrey Baratheon",
  "Baratheon and Lannister",
  13,
  true,
  "Game of Thrones",
);
const knight = new Knight(
  "Jamie Lannister",
  "House of Lannister",
  41,
  true,
  "Game of Thrones",
);
const warrior = new Knight(
  "Daenerys Targaryen",
  "House of Targaryen",
  13,
  true,
  "Game of Thrones",
);
const adviser = new Adviser(
  "Tyrion Lannister",
  "House of Lannister",
  37,
  true,
  "Game of Thrones",
  "Daenerys Targaryen",
);

const squier = new Squier(
  "Bronn",
  "Blackwaters",
  32,
  true,
  "Game of Thrones",
  "Jaime Lannister",
);

const charactersArray = [king, knight, warrior, adviser, squier];

const getCharactersCommunications = (characters) => {
  let messages = [];

  charactersArray.forEach((character) => {
    messages.push(character.communicate());
  });
  return messages;
};

console.log(getCharactersCommunications());
