import { ApiResponse, ResponseStatus, Status } from "../api";
import { IApiReply } from "../interfaces/apis.interface";

export function InjectTryCatch(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethodImplementation = descriptor.value;

  descriptor.value = async function (...args: any[]) {
    const [, response] = args;

    try {
      return await originalMethodImplementation.apply(this, args);
    } catch (error: any) {
      const reply: IApiReply = new ApiResponse(
        Status.EXCEPTION,
        error.message || "An error occurred",
        error
      );

      return response.status(ResponseStatus.ERROR).json(reply);
    }
  };

  return descriptor;
}
