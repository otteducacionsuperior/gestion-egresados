import express from "express";
import path from "path";
import dotenv from "dotenv";
import routes from "./routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// ==========================
// Middlewares
// ==========================

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../public")));

// ==========================
// View Engine
// ==========================

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// ==========================
// Routes
// ==========================

app.get("/", (req, res) => {
  res.redirect("/dashboard");
});

app.use("/", routes);

// ==========================
// 404 Handler
// ==========================

app.use((req, res) => {
  res.status(404).render("404", {
    title: "Página no encontrada"
  });
});

// ==========================
// Server Start
// ==========================

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
