import express from "express";
import {
  Profile,
  register,
  getAllUsers,
  update,
  deleteUser,
  changePassword,
  login,
} from "../controller/registerController.js";

const registerRouter = express.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     RegisterUser:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         name:
 *           type: string
 *           description: The user's full name
 *         email:
 *           type: string
 *           description: The user's email (required, unique)
 *         password:
 *           type: string
 *           description: The user's password (hashed)
 *         phone:
 *           type: string
 *           description: The user's phone number
 *           nullable: true
 *         role:
 *           type: string
 *           enum: ["ADMIN", "STUDENT"]
 *           default: "ADMIN"
 *           description: The user's role (ADMIN or STUDENT)
 */

/**
 * @swagger
 * /api/user/profile:
 *   get:
 *     summary: Fetch user profile details
 *     description: Fetch profile details of the user
 *     tags:
 *       - Register Controller
 *     responses:
 *       '200':
 *         description: User profile fetched successfully
 *       '400':
 *         description: Unable to fetch user profile data
 */

registerRouter.route("/profile").get(Profile);

/**
 * @swagger
 * /api/user/register:
 *   post:
 *     summary: User Registration
 *     description: Register a new user
 *     tags:
 *       - Register Controller
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterUser'
 *     responses:
 *       '200':
 *         description: User registered successfully
 *       '400':
 *         description: Email already exists
 *       '500':
 *         description: Internal server error
 */

registerRouter.route("/register").post(register);

/**
 * @swagger
 * /api/user/getUsers:
 *   get:
 *     summary: User Registration
 *     description: Register a new user
 *     tags:
 *       - Register Controller
 *     responses:
 *       '200':
 *         description: User registered successfully
 *       '400':
 *         description: Email already exists
 *       '500':
 *         description: Internal server error
 */

registerRouter.route("/getUsers").get(getAllUsers);

/**
 * @swagger
 * /api/user/update/{userId}:
 *   put:
 *     summary: Update user information
 *     description: Update an existing user's details (name, email, and phone).
 *     tags:
 *       - Register Controller
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterUser'
 *     responses:
 *       '200':
 *         description: User updated successfully
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */

registerRouter.route("/update/:userId").put(update);

/**
 * @swagger
 * /api/user/delete/{userId}:
 *   delete:
 *     summary: Delete a user
 *     description: Delete a user by their userId.
 *     tags:
 *       - Register Controller
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user to delete
 *     responses:
 *       '200':
 *         description: User deleted successfully
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */

registerRouter.route("/delete/:userId").delete(deleteUser);

/**
 * @swagger
 * /api/user/changePassword/{userId}:
 *   post:
 *     summary: Change user password
 *     description: Change the password of an existing user by their userId.
 *     tags:
 *       - Register Controller
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user whose password needs to be changed
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterUser'
 *     responses:
 *       '200':
 *         description: Password updated successfully
 *       '400':
 *         description: Invalid userId
 *       '500':
 *         description: Internal server error
 */
registerRouter.route("/changePassword/:userId").post(changePassword);

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: User Login
 *     description: Authenticate user by email and password.
 *     tags:
 *       - Register Controller
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterUser'
 *     responses:
 *       '200':
 *         description: Login successful
 *       '400':
 *         description: Email not found or incorrect password
 *       '500':
 *         description: Internal server error
 */
registerRouter.route("/login").post(login);

export default registerRouter;
