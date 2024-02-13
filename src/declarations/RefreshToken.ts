import { type User } from "./User";

export type Token = {
  refreshToken: string;
  userId: string;

  user: User;
};
