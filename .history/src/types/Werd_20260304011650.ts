export interface Werd {
  id: string;
  word: string;
  pronunciation?: string;
  partOfSpeech?: string;
  meaning: string;
  funfact?: string;
  source?: string;
  tags: string[];
}
