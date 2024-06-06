require("dotenv").config()

module.exports={
 port:process.env.PORT,
 mongodbURI:process.env.MongoDBURI
}