import { instance } from '../config/database/connection';

class ProfileRepository {

    async getAll(headers) {
        const ong_id = headers.authorization;

        const incidents = await instance.table('incidents').where('ong_id', ong_id).select('*')

        return incidents;
    }

}


export default new ProfileRepository;
