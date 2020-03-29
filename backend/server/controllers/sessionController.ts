
import * as httpStatus from 'http-status';
import { Request, Response } from 'express'
import SessionRepository from '../repositories/sessionRepository';

const sendReponse = function (res, statusCode, data) {
    res.status(statusCode).json(data)
}

class SessionController {

    create(req: Request, res: Response) {
        SessionRepository
            .create(req.body)
            .then(ong => {
                sendReponse(res, httpStatus.OK, ong)
            })
            .catch(err => console.error.bind(console, `Error ${err}`))
    }

}

export default new SessionController();
