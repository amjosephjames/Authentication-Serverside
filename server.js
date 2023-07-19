const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 4231;

// const connectDB = require("./utils/db");
require("./utils/db");
const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

app.use("/api/user", require("./router/userRouter"));

app.get("/", (req, res) => {
  return res.status(200).json({ message: "welcome to my auth api" });
});

app.listen(PORT, () => console.log(`Server is listening on Port ${PORT}`));
