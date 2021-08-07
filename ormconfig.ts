module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: ['src/4-framework/models/*.ts'],
  migrations: ['src/shared/infra/typeorm/migrations/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'src/4-framework/models',
    migrationsDir: 'src/shared/infra/typeorm/migrations',
    subscribersDir: 'src/subscriber'
  }
}
