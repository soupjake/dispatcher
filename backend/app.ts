import express from "express";
import cors from "cors"
import { health } from "./routes/health";
import { connectDB } from "./database";

const app = express()
const port = 3000

app.use(cors())
app.use('/health', health)

async function start() {
  await connectDB()

  app.listen(port, () => console.log(`Mock API running at http://localhost:${port}`))
}

start()

