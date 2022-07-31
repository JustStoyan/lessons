const { PORT } = require('./config');
const routes = require('./routes');


const express = require('express');
const app = express();

require('./config/expressSettings')(app);
require('./config/mongoose');


app.use('/api', routes);

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));