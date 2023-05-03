import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import storiesRouter from "./routes/routes";
import { API_PREFIX } from "./constants";
import cors from "cors";

dotenv.config();

export const app: Express = express();
const PORT = process.env.PORT || 3001;

app.use(
    cors({
        origin: "http://localhost:3000",
    })
);

app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong");
});

app.use(API_PREFIX, storiesRouter);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
