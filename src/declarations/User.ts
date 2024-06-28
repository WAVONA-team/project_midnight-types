import { type Playlist } from "./Playlist";
import { type Token } from "./RefreshToken";
import { type Track } from "./Track";

export type User = {
  id: string;
  activationToken: string | null;
  resetToken: string | null;
  refreshToken?: Token | null;

  createdAt: Date;
  updatedAt: Date;

  email: string;
  password: string;

  spotifyOAUTH: string | null;
  spotifyRefresh: string | null;
  yandexOAUTH: string | null;
  vkOAUTH: string | null;
  appleOAUTH: string | null;

  tracks?: Track[] | null;
  searchHistory?: Track[] | null;

  playlists?: Playlist[] | null;
  savedTracks?: Playlist | null;
  favouriteTracks?: Playlist | null;
};

export type NormalizedUser = {
  id: string;
  email: string;

  createdAt: Date;
  updatedAt: Date;

  spotifyOAUTH: string | null;
  spotifyRefresh: string | null;
  yandexOAUTH: string | null;
  vkOAUTH: string | null;
  appleOAUTH: string | null;

  tracks?: Track[] | null;
  searchHistory?: Track[] | null;

  playlists?: Playlist[] | null;
  savedTracks?: Playlist | null;
  favouriteTracks?: Playlist | null;
};

export type UserWithAccessToken = {
  user: NormalizedUser;
  accessToken: string;
};

