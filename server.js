const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bookRoutes = require("./routes/bookRoutes");
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(`${process.env.URI}`)
  .then(() => {
    console.log("Connected to Database!");
  })
  .catch((e) => {
    console.log(e);
  });

app.use("/api", bookRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on PORT: ${process.env.PORT}`);
});
