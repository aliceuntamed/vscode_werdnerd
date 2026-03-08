import type { Werd } from "../../../types";
import {
  getWordOfTheDay as getLocalWordOfTheDay,
  getAllWerds as getLocalAllWerds,
  getAllTags as getLocalAllTags,
} from "../../../data/werds";

export async function insertWerd(
  _werd: Omit<Werd, "werd_id">,
): Promise<Werd | null> {
  // For local data, we'll just return null (can't insert to static data)
  console.warn("insertWerd not supported with local data");
  return null;
}

export async function getRandomWerd(): Promise<Werd | null> {
  return await getLocalWordOfTheDay();
}

export async function getAllWerds(): Promise<Werd[]> {
  return await getLocalAllWerds();
}

export async function getAllTags(): Promise<string[]> {
  return getLocalAllTags();
}
