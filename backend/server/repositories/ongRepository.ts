import { instance } from '../config/database/connection';
import { randomBytes } from 'crypto';
import Ong from '../models/ongModel';

class OngRepository {

  async getAll() {
    try {
      return await instance.select('*').from('ongs');
    } catch (error) {
      return error;
    }
  }

  async create(ong: Ong) {
    const { name, email, whatsapp, city, uf } = ong;

    const id = randomBytes(4).toString('HEX');

    await instance.insert({id, name, email, whatsapp, city, uf}).into('ongs')

    return {id}
  }
}


export default new OngRepository;
