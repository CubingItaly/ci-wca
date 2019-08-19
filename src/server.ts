import bodyparser from "body-parser";
import compression from "compression";
import express from "express";
import helmet from "helmet";
import * as schedule from "node-schedule";
import { importWCA } from "./chron";
import { router } from "./api/api";

const app = express();
const PORT = process.env.PORT || 4200;
const PRODUCTION = process.env.NODE_ENV === "production";


app.use(helmet());
app.use(bodyparser.json());
app.use(compression());
app.use(bodyparser.urlencoded({ extended: true }));

app.use("/api", router);

app.use(function (req, res, next) {
    // TODO replace this with an error page.
    res.status(404).send('Sorry cant find that!');
});

app.set("port", PORT);

const server = app.listen(app.get("port"), () => {
    console.log("Server up.");
    schedule.scheduleJob("28 38 3 * * 2", () => importWCA());
});