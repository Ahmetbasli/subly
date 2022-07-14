import type { Media } from "./Schemas";
export type MediaItems = Media["media"];
type MediaItem = MediaItems[0];
export default MediaItem;
