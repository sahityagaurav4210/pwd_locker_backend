export enum ResponseStatus {
  OK = 200,
  CREATED = 201,
  UPDATED = 202,
  BAD_REQ = 400,
  UNAUTHORISED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  TOO_LARGE_REQ = 413,
  INV_PAYLOAD = 422,
  ERROR = 500,
  UNAVAILABLE = 503,
}

export enum Status {
  SUCCESS = "success",
  ERROR = "error",
  EXCEPTION = "exception",
  VALIDATION = "validation",
}

export class ApiResponse {
  constructor();
  constructor(status: Status, message: string);
  constructor(status: Status, message: string, data: any);
  constructor(status: Status, message: string, data: any, entryBy: string);

  constructor(
    private status: Status = Status.SUCCESS,
    private message: string = "",
    private data: any = null,
    private entryBy: string = "127.0.0.1"
  ) {}

  public get STATUS() {
    return this.status;
  }

  public get MESSAGE() {
    return this.message;
  }

  public get DATA() {
    return this.data;
  }

  public get ENTERED_BY() {
    return this.entryBy;
  }
}

export enum API_URLS {
  BASE_URL = "/api",
  USER_URL = "/user",
}
