import ProfileRepository from '../repositories/profileRepository';
import * as httpStatus from 'http-status';
import { Request, Response } from 'express'

const sendReponse = function (res, statusCode, data) {
  res.status(statusCode).json(data)
}

class ProfileController {
  get(req: Request, res: Response) {
    ProfileRepository
      .getAll(req.headers)
      .then(ong => sendReponse(res, httpStatus.OK, ong))
      .catch(err => console.error.bind(console, `Error ${err}`))
  }

}

export default new ProfileController();
