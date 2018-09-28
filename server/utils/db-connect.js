import MongoDB from 'mongoose';

import { dbConfig, logConfig } from '../../config';

const { user, pass, host } = dbConfig;
const connUrl = `mongodb+srv://${user}:${pass}@${host}/test?retryWrites=true`;
const connSettings = {
  useNewUrlParser: true
};

export default () => {
  return new Promise((resolve, reject) => {
    MongoDB.connect(
      connUrl,
      connSettings
    )
      .then(() => {
        resolve(logConfig.database.connection);
      })
      .catch(err => {
        reject(err);
      });
  });
};
