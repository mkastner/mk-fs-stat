const fs = require('fs');
/**
 * promisified fs.stat
 *
 * @param  {String} filePath target file path either dir or file
 * @return {Promise} resolves to null if no file exists otherwise to stats 
 */
module.exports = function statFile(filePath) {

  return new Promise(async function(resolve, reject) {

    try {

      fs.stat(filePath, function(err, stats) {

        if (err) {

          if (err && err.code === 'ENOENT') {
              
            resolve(null);
          } else {
             
            reject(err);
          }
        }
     
        resolve(stats);
      });

    } catch (err) {
      
      console.error(err);
    }
  });
}
