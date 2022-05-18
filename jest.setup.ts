import { error } from "console";
import { disconnect, connect } from "mongoose";
const connectToDb = async () => {
  if (!process.env.MONGO_CONN_STRING)
    throw new Error("No DB connection string found");
  await connect(process.env.MONGO_CONN_STRING).catch((error) =>
    console.error(error)
  );
};

beforeAll(async () => {
  await connectToDb();
});

afterAll(async () => {
  await disconnect();
});
