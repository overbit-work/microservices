import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TeamCreateInput = {
  name: string;
  user?: UserWhereUniqueInput | null;
};
