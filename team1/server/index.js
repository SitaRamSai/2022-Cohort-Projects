const { default: mongoose } = require('mongoose');
const server = require('./api/server');

const CONNECTION_URL = 'mongodb://localhost/fun_blog';
const PORT = process.env.PORT;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Server listening on port: ${PORT}`)
        })
    })
    .catch(err => console.log( err.message ))