import { type Playlist } from "./Playlist";
import { type Token } from "./RefreshToken";
import { type Track } from "./Track";

export type User = {
  id: string;
  activationToken: string;
  refreshToken: Token;

  createdAt: Date;
  updatedAt: Date;

  email: string;
  password: string;

  spotifyOAUTH: string;
  yandexOAUTH: string;
  vkOUATH: string;

  tracks?: Track[];
  playlist?: Playlist[];
};
