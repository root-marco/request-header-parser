// MODULES
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

// APP
const app = express();
const PORT = 3000;
app.set('trust proxy', true);

// MIDDLEWARES
app.use(cors({
    optionsSuccessStatus: 200,
}));
app.use(express.static(`${process.cwd()}/src/public`));

// ROUTES
import apiRouter from "./src/routes/apiRouter.js";
app.use("/api", apiRouter);
import rootRouter from "./src/routes/rootRouter.js";
app.use("/", rootRouter);

// LISTEN
app.listen(PORT, () => {
    console.log(`Your app is listening on port ${PORT}`);
});
