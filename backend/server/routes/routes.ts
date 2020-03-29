import * as express from "express";

import Auth from '../config/auth';

import uploads from '../config/uploads'
import OngRepository from "../repositories/ongRepository";

export class Routes {
    private router: express.Router;

    public routes(app): void {

        app.route("/").get((req, res) => {
            res.send({ 'result': 'version 0.0.1' })
        });

        app.route('/ongs').get((req, res) => {
            OngRepository.getAll()
        })
    }
}