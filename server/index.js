const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const bcryptjs = require("bcryptjs");
const PORT = 5000;
const app = express();
const path = require("path");
const MONGB_URL = "mongodb://127.0.0.1:27017/admin-panel-data";

//jwt token connecation
const auth = require("./middleware/authMiddleware");
const userRoutes = require("./routes/authRoutes");

//api 
app.use('/api/users', userRoutes)

//middelwere
app.use(auth)

// middelwere
app.use(cors());
app.use(express.json());
mongoose.connect(MONGB_URL);
const db = mongoose.connection;

db.on("error", (err) => {
  console.error("Mongodb Connection error", err);
});

db.once("open", () => {
  console.log("Mongodb is connected");
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

app.post("/register", async (req, res) => {
  try {
    const hasspassword = await bcryptjs.hashSync(req.body.password, 10);
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hasspassword,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.error("Error druing registration", error);
    res.status(500).json({ error: "inter server error" });
  }
});

app.post("/login", async (req, res) => {
  //login
  try {
    const { email, password } = req.body;

    // 1. Correct way to find user in MongoDB
    const user = await User.findOne({ email: email });

    // Check if the user exists
    if (!user) {
      return res.status(400).send("User Not Found!");
    }

    // 2. Use bcryptjs (matching your import) and the correct property name (.password)
    const match = await bcryptjs.compare(password, user.password);

    if (match) {
      // Note: res.redirect often requires a front-end handler or a full-page post
      // For APIs, it's usually better to send a success message or token
      res
        .status(200)
        .json({ message: "Logged In Successfully!", user: user.name });
      app.use(express.static(path.join(__dirname, "home")));
      // res.redirect("/home");
    } else {
      res.status(401).send("Invalid Credentials");
    }
  } catch (e) {
    console.error("Login Error:", e);
    res.status(500).send("Server error during login");
  }
});

// Product Upload

// app.post("/submitform", upload.single(""), function (req, res, next) {});

// app.post(
//   "/photos/upload",
//   upload.array("photos", 12),
//   function (req, res, next) {},
// );

// const uploadMiddleware = upload.fields([
//   { name: "avatar", maxCount: 1 },
//   { name: "gallery", maxCount: 8 },
// ]);
// app.post("/cool-profile", uploadMiddleware, function (req, res, next) {});

app.listen(PORT);
