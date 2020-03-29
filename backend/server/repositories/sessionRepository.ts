import { instance } from '../config/database/connection';

class SessionRepository {

    async create(data) {
        const { id } = data;

        const ong = await instance.table('ongs').where('id', id).select('name').first();

        if (!ong) {
            return new Error('No ong found with this id');
        };

        return ong;
    }

}


export default new SessionRepository;
