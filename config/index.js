const config = require('./config');

module.exports = {
    getDbConnectionString: function () {
        return `mongodb+srv://${config.username}:${config.password}@cluster0-ylm4b.mongodb.net/nodetodos?retryWrites=true&w=majority`;
    }
}