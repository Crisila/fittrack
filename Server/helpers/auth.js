const bcrypt = require('bcrypt');

const hashPass = (password) => {
     return new Promise((resolve, reject) => {
          bcrypt.genSalt(12, (err, salt) => {
               if (err) {
                    reject(err);
               }
               bcrypt.hash(password, salt, (err, hash) => {
                    if (err) {
                         reject(err);
                    }
                    resolve(hash);
               });
          });
     })
};

const comparePass = (password, hash) => {
     return bcrypt.compare(password, hash)
     };


module.exports = {
     hashPass,
     comparePass
}