require('dotenv').config();

const { port } = require('./config');
const app = require('./app');

function startApp() {
  app.listen(port, () => {
    console.log(`App is running on port: ${port}`);
  });
}

startApp();
