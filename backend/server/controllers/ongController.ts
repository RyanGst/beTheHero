import OngRepository from '../repositories/ongRepository';
import * as httpStatus from 'http-status';


const sendReponse = function (res, statusCode, data) {
  res.status(statusCode).json(data)
}

class OngController {
  constructor() { }

  get(req, res) {
    OngRepository
      .getAll()
      .then(user => sendReponse(res, httpStatus.OK, user))
      .catch(err => console.error.bind(console, `Error ${err}`))
  }

  create(req, res) {
    OngRepository
      .create(req.body)
      .then(menus => sendReponse(res, httpStatus.CREATED, menus))
      .catch(err => console.error.bind(console, `Error ${err}`))
  }

}

export default new OngController();
