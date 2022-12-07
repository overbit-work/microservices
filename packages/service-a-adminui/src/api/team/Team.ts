import { User } from "../user/User";

export type Team = {
  createdAt: Date;
  department: string | null;
  id: string;
  name: string;
  updatedAt: Date;
  user?: User | null;
};
