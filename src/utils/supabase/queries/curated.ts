import { getCuratedPicks as getLocalCurated } from "../../../data/werds";
import type { Werd } from "../../../types";

export async function getCuratedWerds(): Promise<Werd[]> {
  return await getLocalCurated();
}
