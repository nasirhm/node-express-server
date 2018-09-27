import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

import User from '../../models/user';

const signup = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, function(err, hash) {
      if (err) {
        reject(err);
      } else {
        const user = new User({
          _id: new mongoose.Types.ObjectId(),
          email: email,
          password: hash
        });

        user
          .save()
          .then(() => {
            resolve(user);
          })
          .catch(err => {
            reject(err);
          });
      }
    });
  });
};

const signin = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    User.findOne({ email: email })
      .exec()
      .then(function(user) {
        bcrypt.compare(password, user.password, function(err, result) {
          if (err) {
            reject(err);
          }
          if (result) {
            resolve(user);
          }
          reject(new Error('test custom error'));
        });
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const signupCtrl = signup;
export const signinCtrl = signin;
