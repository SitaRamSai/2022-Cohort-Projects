const express = require('express');
const server = express();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./api/routes/users');

server.use(bodyParser.json({ limit: '30mb', extended: true }));
server.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
server.use(cors());

server.use('/users', userRoutes);

const CONNECTION_URL = 'mongodb+srv://SitaRam:OnePlus6!@cluster0.d8b4q.mongodb.net/test?retryWrites=true&w=majority';
const PORT = 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      server.listen(PORT, () => {
        console.log(`Server running on port: ${PORT}`);
      })
    })
    .catch(err => {
      console.error(err);
    })


// const express = require('express');
// const server = express();

// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const cors = require('cors');

// // const postRoutes = require('./routes/posts');
// const userRoutes = require('./api/routes/users')

// server.use(bodyParser.json({ limit: '30mb', extended: true }));
// server.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
// server.use(errorHandler);
// server.use(cors());

// // server.use('/posts', postRoutes);

// server.use('/users', userRoutes );

// const CONNECTION_URL = 'mongodb+srv://SitaRam:OnePlus6!@cluster0.d8b4q.mongodb.net/test?retryWrites=true&w=majority';
// const PORT = 5000;

// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'))
//     // .then(() => {
//     //     server.listen(PORT, () => {
//     //         console.log(`Server running on port: ${PORT}`)
//     //     })
//     // })
//     // .catch(err => console.log( err.message ))

    
    
//     function errorHandler (err, req, res, next) {
//         if (res.headersSent) {
//           return next(err)
//         }
//         res.status(500)
//         res.render('error', { error: err })
//       }
