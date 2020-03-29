import * as express from "express";
import * as morgan from "morgan";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import { Routes } from "./routes/routes"

class App {
  public app: express.Application;
  private morgan: morgan.Morgan;
  private bodyParser;
  // private database: DataBase;
  public router: Routes = new Routes();

  constructor() {
    this.app = express();
    this.enableCors();
    this.middleware();
    // this.database = new DataBase();
    this.dataBaseConnection();
    this.router.routes(this.app);
  }

  enableCors() {
    const options: cors.CorsOptions = {
      credentials: true,
      methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
      origin: '*',
      preflightContinue: false
    };

    this.app.use(cors(options));
  }

  dataBaseConnection() {
    // this.database.createConnection();
  }

  closedataBaseConnection(message, callback) {
    // this.database.closeConnection(message, () => callback());
  }

  middleware() {
    this.app.use(morgan("dev"));
    this.app.use(bodyParser.json());
  }
}

export default new App();
