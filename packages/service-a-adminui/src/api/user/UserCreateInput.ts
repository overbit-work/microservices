import { InputJsonValue } from "../../types";
import { TeamCreateNestedManyWithoutUsersInput } from "./TeamCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  teams?: TeamCreateNestedManyWithoutUsersInput;
  username: string;
};
