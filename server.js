const express = require("express");
const path = require("path");

const app = express();

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/mypage/about", (req, res) => {
  res.render("mypage", {
    content: "about",
    activeMenu: "about",
  });
});

app.get("/mypage/services", (req, res) => {
  res.render("mypage", {
    content: "services",
    activeMenu: "services",
  });
});

app.get("/mypage/videos", (req, res) => {
  res.render("mypage", {
    content: "videos",
    activeMenu: "videos",
  });
});

app.get("/mypage/portfolio", (req, res) => {
  res.render("mypage", {
    content: "portfolio",
    activeMenu: "portfolio",
  });
});

app.get("/mypage/thanks", (req, res) => {
  res.render("mypage", {
    content: "thanks",
    activeMenu: "thanks",
  });
});

app.get("/mypage/contact", (req, res) => {
  res.render("mypage", {
    content: "contact",
    activeMenu: "contact",
  });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
