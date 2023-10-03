import { webServer } from "./src";
import { connectDB } from "./src/helpers/db/mongo/connection";
(async () => {
  await connectDB();
  webServer();
})();
