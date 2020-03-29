import * as express from "express";

import OngController from "../controllers/ongController";
import IncidentController from "../controllers/incidentController";
import ProfileController from "../controllers/profileController";
import SessionController from "../controllers/sessionController";

export class Routes {
    private router: express.Router;

    public routes(app): void {

        app.route("/").get((req, res) => {
            res.send({ 'result': 'version 0.0.1' })
        });

        app.route('/ongs').get(OngController.get)
        app.route('/ongs').post(OngController.create)

        app.route('/incidents').post(IncidentController.create);
        app.route('/incidents').get(IncidentController.get);
        app.route('/incidents/:id').delete(IncidentController.delete);

        app.route('/profile').get(ProfileController.get);

        app.route('/sessions').post(SessionController.create);

    }
}