const mongoose = require('mongoose');

// mongodb://localhost/Feelm

mongoose.connect('mongodb+srv://admin:admin@cluster0.v3wf6.mongodb.net/Feelm?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));