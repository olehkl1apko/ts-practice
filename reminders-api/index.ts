import express from "express";
import reminderRouter from "./routes/reminders";

const app = express();

app.use(express.json());
app.use("/reminders", reminderRouter);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(8000, () => {
  console.log("Server started...");
});
