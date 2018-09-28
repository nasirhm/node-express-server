import MongoDB from 'mongoose';

import { dbConfig } from '../../config';

const connUrl = `mongodb+srv://${dbConfig.user}:${dbConfig.pass}@${
  dbConfig.host
}/test?retryWrites=true`;
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
        resolve('💾 => is connected');
      })
      .catch(err => {
        reject(err);
      });
  });
};
