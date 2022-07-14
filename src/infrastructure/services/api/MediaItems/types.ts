export type MediaItems = MediaItem[];

export default interface MediaItem {
  id: number;
  name: string;
  cover: string;
  languages: string[];
  status: "ready" | "error" | "transcribing";
  createdAt: string;
  updatedAt: string;
}
