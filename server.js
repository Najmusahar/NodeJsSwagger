import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongooseConnection from "./mongo.js";
import router from "./routes/index.js";
import cors from "cors";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

dotenv.config();

const port = process.env.PORT || 4000;
const app = express();

app.use(express.json()); // Replaced body-parser
app.use(express.urlencoded({ extended: true }));

const corsOrigin = ["http://localhost:5173"];

app.use(
  cors({
    origin: corsOrigin,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

mongooseConnection();

app.use("/api", router);

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "Simple swagger setup",
      description: "A simple swagger implementation",
      contact: {
        name: "Orbit Technologys",
      },
    },
    servers: [
      {
        url: "http://localhost:4000",
        description: "local host",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
