export async function connectDB() {
  console.log("Connected database")

  await seedData()
}
