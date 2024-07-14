import { Request, Response } from "express";
import { InjectTryCatch } from "../decorators/exception.decorators";
import User from "../models/users.model";
import { ApiResponse, ResponseStatus, Status } from "../api";

class UserController {
  @InjectTryCatch
  public static async createNewUser(
    request: Request,
    response: Response
  ): Promise<Response> {
    const newUser = await new User(request.body).save();
    const reply = new ApiResponse(
      Status.SUCCESS,
      "User registered successfully",
      newUser
    );

    return response.status(ResponseStatus.CREATED).json(reply);
  }
}

export default UserController;
