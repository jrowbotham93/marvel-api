import "dotenv/config";

import { server } from "./loaders/server";
import { database } from "./loaders/database";

async function main(): Promise<void> {
  try {
    await database();

    const apolloServer = await server();

    const { url } = await apolloServer.listen();

    console.log(`🚀 Server ready at ${url}`);
  } catch (err) {
    console.error("💀 Error starting the server", err);
  }
}

main();
