import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

import User from '../../models/user';

const signup = (req, res) => {
  bcrypt.hash(req.body.password, 10, function(err, hash) {
    if (err) {
      return res.status(500).json({
        error: err
      });
    } else {
      const user = new User({
        _id: new mongoose.Types.ObjectId(),
        email: req.body.email,
        password: hash
      });

      user
        .save()
        .then(() => {
          res.status(200).json({
            success: 'New user has been created'
          });
        })
        .catch(err => {
          res.status(500).json({
            error: err
          });
        });
    }
  });
};

const signin = (req, res) => {
  User.findOne({ email: req.body.email })
    .exec()
    .then(function(user) {
      bcrypt.compare(req.body.password, user.password, function(err, result) {
        if (err) {
          return res.status(401).json({
            failed: 'Unauthorized Access'
          });
        }
        if (result) {
          return res.status(200).json({
            success: 'Welcome to the JWT Auth'
          });
        }
        return res.status(401).json({
          failed: 'Unauthorized Access'
        });
      });
    })
    .catch(error => {
      res.status(500).json({
        error: error
      });
    });
};

export const signupMid = signup;
export const signinMid = signin;
