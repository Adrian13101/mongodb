import app from "./app.js";
import { config } from "./config/env.config.js";
import { connectDB } from "./config/db.config.js";

try {
  await connectDB();
} catch (error) {
  console.error(`No se pudo conectar a MongoDB: ${error.message}`);
  process.exit(1);
}

app.listen(config.port, () => {
  console.log(`Servidor escuchando en http://localhost:${config.port} (${config.nodeEnv})`);
});
