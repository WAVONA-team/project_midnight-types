import { type Track } from "./Track";
import { type User } from "./User";

export type Playlist = {
  id: string;
  name: string;

  userIdCustomPlaylists: string;
  userIdSavedTracks: string;
  userIdFavouriteTracks: string;

  createdAt: Date;
  updatedAt: Date;

  tracks?: Track[] | null;
  userForCustomPlaylists?: User | null;
  userForSavedTracks?: User | null;
  userForFavouriteTracks?: User | null;
};
