import { pool } from '../Conection/mysql';

export class Data {
    async ExecuteQuery(Procedure: string) {
        try {
            var result = await pool.query(Procedure);
            console.log(result);
            return result;
        } catch (err) {
            throw new Error(err)
        }
    };
}