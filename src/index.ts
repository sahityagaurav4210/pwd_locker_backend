import "dotenv/config";

import app from "./app";
import { ServerConfiguration } from "./constants";
import Database from "./db";
import { STATES } from "mongoose";

(async () => {
  try {
    const connection = await Database.connect(
      process.env.DB_QUERY_STRING || ""
    );

    if (connection[STATES.connected]) {
      app.listen(ServerConfiguration.PORT, ServerConfiguration.HOST, () =>
        console.log(`Server is started on port ${ServerConfiguration.PORT}`)
      );
    } else console.error(`Error connecting to database....`);
  } catch (error) {
    console.error("An error occured", error);
  }
})();
