import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TeamCreateInput = {
  department?: string | null;
  name: string;
  user?: UserWhereUniqueInput | null;
};
