import express from "express";
import {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";


const router = express.Router();

router.post("/", createUser); // POST /api/users
router.get("/", getUsers); // GET /api/users
router.put("/:id", updateUser); // PUT /api/users/:id
router.delete("/:id", deleteUser); // DELETE /api/users/:id

//jwt token


export default router;
