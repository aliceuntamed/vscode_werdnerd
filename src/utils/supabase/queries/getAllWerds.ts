import { getAllWerds as getLocalWerds } from "../../../data/werds";

export async function getAllWerds() {
  return await getLocalWerds();
}
