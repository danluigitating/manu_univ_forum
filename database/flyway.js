module.exports = {
    flywayArgs: {
        url: 'jdbc:mysql://localhost:3306/anonymous-blog',
        locations: "filesystem:database/scripts",
        user: "root",
        password: "smartasone11HH!",
        sqlMigrationSuffixes: ".sql",
        baselineOnMigrate: "true"
    }
}