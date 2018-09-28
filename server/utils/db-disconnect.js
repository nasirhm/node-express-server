import MongoDB from 'mongoose';

export default () => {
  return new Promise((resolve, reject) => {
    try {
      MongoDB.disconnect(() => {
        resolve('💾 => is disconnected');
      });
    } catch (err) {
      reject(err);
    }
  });
};
