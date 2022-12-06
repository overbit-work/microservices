import { Department as TDepartment } from "../api/department/Department";

export const DEPARTMENT_TITLE_FIELD = "id";

export const DepartmentTitle = (record: TDepartment): string => {
  return record.id || record.id;
};
