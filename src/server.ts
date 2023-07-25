import mongoose from "mongoose";

import { Server } from "http";
import app from "./app";
import config from "./config";

let server: Server;

async function bootstrap() {
  try {
    await mongoose.connect(process.env.DATABASE_URL as string);
    console.log(`Database is connect successfully`);

    server = app.listen(config.port, () => {
      console.log(`Application listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Failed to connect server", error);
  }
}
bootstrap();
