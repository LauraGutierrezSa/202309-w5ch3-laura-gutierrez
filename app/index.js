import Character from "./Character/Character.js";
import King from "./King/King.js";
import Knight from "./Knight/Knight.js";
import Squier from "./Squier/Squier.js";
import Adviser from "./Adviser/Adviser.js";

const king = new King(
  5,
  "Joffrey Baratheon",
  "Baratheon and Lannister",
  13,
  true,
  "Game of Thrones",
);
const knight = new Knight(
  "Jamie Lannister",
  "Lannister",
  41,
  true,
  "Game of Thrones",
  "sword",
  10,
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
  "Lannister",
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

const charactersCommunicate = (characters) =>
  characters.map((charactersArray) => charactersArray.communicate());

charactersCommunicate(charactersArray).forEach((communicate) =>
  console.log(communicate),
);

king.die();

adviser.die();
