import IncidentRepository from '../repositories/incidentRepository';
import * as httpStatus from 'http-status';
import { Request, Response } from 'express'

const sendReponse = function (res: Response, statusCode, data, header?) {
  res.header('X-total-Count', header);
  res.status(statusCode).json(data)
}

class IncidentController {

  get(req: Request, res: Response) {
    IncidentRepository
      .getAll(req.query)
      .then(ong => {
        sendReponse(res, httpStatus.OK, ong.incidents, ong.count['count(*)'])
      })
      .catch(err => console.error.bind(console, `Error ${err}`))
  }

  create(req: Request, res: Response) {
    IncidentRepository
      .create(req.body, req.headers)
      .then(data => sendReponse(res, httpStatus.CREATED, data))
      .catch(err => console.error.bind(console, `Error ${err}`))
  }

  delete(req: Request, res: Response) {
    IncidentRepository
      .delete(req.params, req.headers)
      .then(() => sendReponse(res, httpStatus.NO_CONTENT, null))
      .catch(err => console.error.bind(console, `Error ${err}`))
  }

}

export default new IncidentController();
