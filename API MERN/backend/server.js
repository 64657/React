const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const userRoutes = require('./routes/userRoutes');
const noteRoutes = require('./routes/noteRoutes');
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");

const app = express();
dotenv.config();

const DB_URL = process.env.DB_URL;

app.use(express.json());
app.use(cors());

mongoose
  .connect(DB_URL, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use('/api/users', userRoutes);
app.use("/api/notes", noteRoutes);



// Serve the React Vite app in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/frontend/dist")));

  // Put this catch-all route at the end
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "frontend/frontend/dist/index.html"));
  });
}

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
