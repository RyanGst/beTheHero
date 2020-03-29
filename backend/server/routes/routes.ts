import * as express from "express";

import Auth from '../config/auth';

import uploads from '../config/uploads'
import ongController from "../controllers/ongController";

export class Routes {
    private router: express.Router;

    public routes(app): void {

        app.route("/").get((req, res) => {
            res.send({ 'result': 'version 0.0.1' })
        });

        app.route('/ongs').get(ongController.get)
        app.route('/ongs').post(ongController.create)
    }
}