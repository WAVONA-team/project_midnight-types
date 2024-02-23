import { type Track } from "./Track";
import { type User } from "./User";
export type Playlist = {
    id: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    tracks?: Track[] | null;
    user?: User | null;
};
