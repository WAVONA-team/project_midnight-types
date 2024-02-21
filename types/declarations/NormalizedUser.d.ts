import { Playlist } from "./Playlist";
import { Track } from "./Track";
export type NormalizedUser = {
    id: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    spotifyOAUTH: string | null;
    yandexOAUTH: string | null;
    vkOAUTH: string | null;
    appleOAUTH: string | null;
    tracks?: Track[] | null;
    playlist?: Playlist[] | null;
};
