const { DB_URI } = require('./index');
const mongoose = require('mongoose');



async function main() {
    await mongoose.connect(DB_URI);
}

main()
    .then(() => console.log('Connected to the DB'))
    .catch(err => console.log(err));

module.exports = main;