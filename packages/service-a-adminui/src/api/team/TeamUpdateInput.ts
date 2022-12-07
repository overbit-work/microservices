import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TeamUpdateInput = {
  department?: string | null;
  name?: string;
  user?: UserWhereUniqueInput | null;
};
