import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TeamWhereInput = {
  department?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  user?: UserWhereUniqueInput;
};
