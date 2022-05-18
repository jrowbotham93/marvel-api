import { connect } from "mongoose";

export async function database() {
  try {
    if (!process.env.MONGO_CONN_STRING) {
      throw new Error("💀 No DB connection string found");
    }
    await connect(process.env.MONGO_CONN_STRING);

    console.log("🚀 Connected to DB");
  } catch (err) {
    console.error(`💀 Connection to DB failed: ${err}`);
  }
}
