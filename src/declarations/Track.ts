import { type Playlist } from "./Playlist";
import { type User } from "./User";

export type Track = {
  id: string;
  userIdTracks: string;
  userIdSearchHistory: string;

  createdAt: Date;
  updatedAt: Date;

  title: string;
  url: string;
  urlId: string;
  imgUrl: string | null;
  author: string | null;
  source: string;
  duration: string;

  playlist?: Playlist[] | null;
  user?: User | null;
};
