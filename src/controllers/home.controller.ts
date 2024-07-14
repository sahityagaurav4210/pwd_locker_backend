import { Request, Response } from "express";
import { ApiResponse, ResponseStatus, Status } from "../api";
import { IApiReply } from "../interfaces/apis.interface";
import { InjectTryCatch } from "../decorators/exception.decorators";

class HomeController {
  @InjectTryCatch
  public static ping(request: Request, response: Response): Response {
    const reply: IApiReply = new ApiResponse(Status.SUCCESS, "Pong", {
      version: "v1.0",
    });

    return response.status(ResponseStatus.OK).json(reply);
  }

  @InjectTryCatch
  public static shutdown(request: Request, response: Response): void {
    const reply: IApiReply = new ApiResponse(
      Status.SUCCESS,
      "Shutdown is successful"
    );

    response.status(ResponseStatus.OK).json(reply);
    process.exit(0);
  }
}

export default HomeController;
