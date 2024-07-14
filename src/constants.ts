export class ServerConfiguration {
  private static port: number;
  private static host: string;

  public static get PORT() {
    ServerConfiguration.port = Number(process.env.PORT) || 8001;

    return ServerConfiguration.port;
  }

  public static get HOST() {
    ServerConfiguration.host = process.env.HOST || "localhost";

    return ServerConfiguration.host;
  }
}

export enum ModelNames {
  USER = "user",
}
