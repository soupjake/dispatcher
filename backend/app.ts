import express from "express";
import cors from "cors"
import { health } from "./routes/health";
import { driver } from "./routes/driver";
import { connectDB } from "./db";

const app = express()
const port = 3000

app.use(cors())
app.use("/health", health)
app.use("/driver", driver)

async function start() {
  connectDB()

  app.listen(port, 
    () => console.log(`Mock API running at http://localhost:${port}`)
  )
}

start()

