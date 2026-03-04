import dictionary from "../data/boggleWords.json";
import freq from "../data/letterFrequency.json";
import { generateBoard } from "./generateBoard";
import { existsOnBoard } from "./existsOnBoard";
import { scoreWord } from "./scoreWord";

export class BoggleEngine {
  board: string[][];
  dictionary: Set<string>;

  constructor() {
    this.dictionary = new Set(dictionary.map((w) => w.toLowerCase()));
    this.board = generateBoard(freq);
  }

  resetBoard() {
    this.board = generateBoard(freq);
  }

  validate(word: string) {
    const clean = word.toUpperCase();

    return (
      clean.length >= 3 &&
      this.dictionary.has(clean.toLowerCase()) &&
      existsOnBoard(this.board, clean)
    );
  }

  score(word: string) {
    return scoreWord(word);
  }
}
