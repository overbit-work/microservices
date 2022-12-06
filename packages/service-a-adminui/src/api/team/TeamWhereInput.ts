import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TeamWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  user?: UserWhereUniqueInput;
};
