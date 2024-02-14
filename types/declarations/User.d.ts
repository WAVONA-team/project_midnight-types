import { type Playlist } from "./Playlist";
import { type Token } from "./RefreshToken";
import { type Track } from "./Track";
export type User = {
    id: string;
    activationToken: string | null;
    refreshToken: Token;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    password: string;
    spotifyOAUTH: string | null;
    yandexOAUTH: string | null;
    vkOAUTH: string | null;
    tracks?: Track[] | null;
    playlist?: Playlist[] | null;
};