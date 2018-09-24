import express from 'express';
import chalk from 'chalk';
// import bodyParser from 'body-parser';

const app = express();

const PORT = process.env.PORT || 9009;
const SERVER = app.listen(PORT, () => {
  console.clear(); // eslint-disable-line
  console.log(chalk.bgBlack.green(`Server is running on Port: ${PORT}`)); // eslint-disable-line
});

process.on('SIGINT', () => {
  console.clear(); // eslint-disable-line
  console.log(chalk.bgBlack.yellow('Server is close')); // eslint-disable-line
  SERVER.close(() => {
    process.exit(0);
  });
});
