const { mongodbURI } = require(".");

try {
    mongoose.connect(mongodbURI)
    mongoose.connection.on('open', () => {
        console.log('mongoose connection successfully');
    })
} catch (error) {
    console.log("error", error);
}