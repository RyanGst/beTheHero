import * as Knex from "knex";

export const config = {
    development: {
        client: "sqlite3",
        connection: {
            filename: "./db.sqlite"
        },
        migrations: {
            directory: './migrations'
        },
        useNullAsDefault: true
    },
}

const instance: Knex = Knex(config as Knex.Config)

export const db = () => instance;