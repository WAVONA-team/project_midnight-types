import { type Playlist } from "./Playlist";
import { type User } from "./User";
export type Track = {
    id: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    url: string;
    imgUrl: string | null;
    author: string | null;
    source: string;
    playlist?: Playlist[] | null;
    user?: User | null;
};
