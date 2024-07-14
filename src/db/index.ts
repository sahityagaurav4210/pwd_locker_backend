import mongoose, { ConnectionStates } from "mongoose";

class Database {
  public static async connect(url: string): Promise<typeof ConnectionStates> {
    const { STATES } = await mongoose.connect(url);
    return STATES;
  }
}

export default Database;
