import * as Knex from "knex";

export const config = {

    client: "sqlite3",
    connection: {
        filename: "server/config/database/db.sqlite"
    },
    migrations: {
        directory: 'server/config/database/migrations'
    },
    useNullAsDefault: true

}

export const instance: Knex = Knex(config as Knex.Config)

export const db = () => instance;