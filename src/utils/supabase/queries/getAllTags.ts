import { getAllTags as getLocalTags } from "../../../data/werd_data";

export async function getAllTags() {
  return getLocalTags();
}
