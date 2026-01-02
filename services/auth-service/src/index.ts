import { logger } from "@/utils/logger";
import { createApp } from "./app";
import { createServer } from "http";

const main = async () => {
  try {
    const app = createApp();

    const server = createServer(app);

    const port =

    
  } catch (error) {
    logger.error({ error }, "failed to start auth service");
    process.exit(1);
  }
};
