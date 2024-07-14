import { Status } from "../api";

export interface IApiReply {
  STATUS: Status;
  MESSAGE: string;
  DATA?: any;
  ENTERED_BY?: string;
}
