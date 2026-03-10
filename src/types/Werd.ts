export interface Werd {
  werd_id: string;
  werd: string;
  pronunciation?: string;
  part_of_speech?: string;
  definition?: string;
  language?: string;
  tags?: string[] | string;
  source?: string;
}
