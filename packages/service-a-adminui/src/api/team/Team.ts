import { User } from "../user/User";

export type Team = {
  createdAt: Date;
  id: string;
  name: string;
  updatedAt: Date;
  user?: User | null;
};
