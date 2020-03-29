// Update with your config settings.
module.exports = {
    development: {
        client: "sqlite3",
        connection: {
            filename: "./config/database/db.sqlite"
        },
        migrations: {
            directory: './config/database/migrations'
        },
        useNullAsDefault: true

    }
};