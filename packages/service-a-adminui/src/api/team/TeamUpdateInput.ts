import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TeamUpdateInput = {
  name?: string;
  user?: UserWhereUniqueInput | null;
};
