import { getAllTags as getLocalTags } from "../../../data/werds";

export async function getAllTags() {
  return getLocalTags();
}
