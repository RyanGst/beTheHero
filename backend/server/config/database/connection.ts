import * as Knex from "knex";

export const config = {

    client: "sqlite3",
    connection: {
        filename: "./db.sqlite"
    },
    migrations: {
        directory: './migrations'
    },
    useNullAsDefault: true

}

export const instance: Knex = Knex(config as Knex.Config)

export const db = () => instance;