import dotenv from 'dotenv'
dotenv.config()
const configs = {
    serverConfigs: {
        PORT: process.env.PORT
    },
    dbConfigs: {
        DB_URL: process.env.MongoDBURI
    }
}
export default configs;