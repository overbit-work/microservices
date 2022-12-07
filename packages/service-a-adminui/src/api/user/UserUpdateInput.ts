import { InputJsonValue } from "../../types";
import { TeamUpdateManyWithoutUsersInput } from "./TeamUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  teams?: TeamUpdateManyWithoutUsersInput;
  username?: string;
};
