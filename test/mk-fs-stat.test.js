const path = require('path');
const tape = require('tape');
const fsStat = require('../index');

async function main() {

  tape(async (t) => {

    try {

      let existingFilePath = path.join(path.resolve('./'), 'test/playground/testfile.txt');

      let existResult = await fsStat(existingFilePath);

      // console.log('existResult', existResult);

      t.ok(existResult, 'success');

      let notThereFilePath = path.join(path.resolve('./'), 'test/playground/notthere.txt');

      let notThereResult = await fsStat(notThereFilePath);

      t.notOk(notThereResult, 'file not existing');

      //console.log('notThereResult', notThereResult);

      t.end();
    } catch(err) { 
      
      console.error(err);
    }
  });
}

main();
