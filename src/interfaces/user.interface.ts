import { objId } from "../types";

export interface INewUser {
  readonly _id: objId;
  name: string;
  email: string;
  phone: string;
  password: string;
  isActive: string;
  createdAt?: string;
  updatedAt?: string;
}
