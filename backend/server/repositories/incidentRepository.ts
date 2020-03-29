import { instance } from '../config/database/connection';
import { randomBytes } from 'crypto';

class IncidentRepository {

  async getAll(query) {
    const { page = 1 } = query;

    const [count] = await instance.table('incidents').count();

    try {
      const incidents = await instance
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select([
          'incidents.*',
          'ongs.name',
          'ongs.email',
          'ongs.whatsapp',
          'ongs.city',
          'ongs.uf'
        ])
        .from('incidents');
      return { "incidents": incidents, "count": count }
    } catch (error) {
      return error;
    }
  }

  async create(data, headers) {
    const { title, description, value } = data;
    const ong_id = headers.authorization;

    const [id] = await instance.insert({ title, description, value, ong_id }).into('incidents')

    return { id }
  }
  async delete(params, headers) {

    const { id } = params;
    const ong_id = headers.authorization;

    const incident = await instance.from('incidents').where('id', id).select('ong_id').first();

    if (incident.ong_id !== ong_id) {
      return new Error('Operation not permitted')
    }

    await instance.table('incidents').where('id', id).delete();

    return;
  }
}


export default new IncidentRepository;
