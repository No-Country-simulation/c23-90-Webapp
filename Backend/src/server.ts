import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
// import { config } from "./config/config";
import { errorHandler } from "./middlewares/handlers.middleware";

// import {} from "./routes";

const app: Application = express();

// Middlewares
app.use( express.json() );
app.use( cors() );
app.use( morgan( "short" ) );

// Routes

app.all( "*", ( req, res ) => res.status( 404 ).json( { message: "This route doesn't exists." } ) );

app.use( "*", errorHandler );

export default app;