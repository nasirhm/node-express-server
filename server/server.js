require('dotenv').config();
import express from 'express';
import chalk from 'chalk';
import bodyParser from 'body-parser';
import MongoDB from 'mongoose';

import routes from './routes';

const app = express();
const serverPort = process.env.PORT || 9009;

const dbConnectionUrl = `mongodb+srv://${process.env.DB_USER}:${
  process.env.DB_PASS
}@${process.env.DB_HOST}/test?retryWrites=true`;

const dbConnectionSettings = {
  useNewUrlParser: true
};

const SERVER = app.listen(serverPort, () => {
  console.clear(); // eslint-disable-line
  console.info(chalk.bgBlack.green(`Server is running on port: ${serverPort}`)); // eslint-disable-line

  MongoDB.connect(
    dbConnectionUrl,
    dbConnectionSettings
  ).then(
    () => {
      console.info(chalk.green('DB: connected')); // eslint-disable-line
    },
    err => {
      console.error(chalk.red(err)); // eslint-disable-line
    }
  );
});

process.on('SIGINT', () => {
  console.clear(); // eslint-disable-line
  console.log(chalk.bgBlack.yellow('Server is close')); // eslint-disable-line
  MongoDB.disconnect(() => {
    console.log(chalk.yellow('DB: disconnected')); // eslint-disable-line
  });
  SERVER.close(() => {
    process.exit(0);
  });
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);

app.get('/check', function(req, res) {
  res.json({
    TEST: 'Welcome to the Node express JWT Tutorial'
  });
});
