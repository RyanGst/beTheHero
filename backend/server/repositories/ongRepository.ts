import { instance } from '../config/database/connection';

class OngRepository {
  private database;

  constructor() {
    this.database = instance;
  }

  getAll() {
    console.log('you got this')
    // return this.database('ongs').select('*');
  }

  getById(_id) {
    return this.database.findById(_id);
  }

  create(user) {
    return this.database.create(user);
  }

  update(_id, user) {
    const updateUser = (<any>Object).assign({}, user);
    return this.database.findByIdAndUpdate(_id, updateUser, { new: true });
  }

  delete(_id) {
    return this.database.findByIdAndRemove(_id);
  }

}


export default new OngRepository;
