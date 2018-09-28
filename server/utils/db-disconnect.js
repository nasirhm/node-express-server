import MongoDB from 'mongoose';
import { logConfig } from '../../config';

export default () => {
  return new Promise((resolve, reject) => {
    try {
      MongoDB.disconnect(() => {
        resolve(logConfig.database.disconnection);
      });
    } catch (err) {
      reject(err);
    }
  });
};
