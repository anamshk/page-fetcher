
const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const url2 = process.argv[3];
request(url, (error, response, body)=> {
  
  if (error) {
    console.error(error);
    return;
  }
  console.log(response.statusCode);
  console.log(body);

  fs.writeFile(url2, body, err => {
    if (err) {
      console.error(err);
      return;
    }
    let length = fs.statSync(url2).size;
    console.log(`Downloaded saved ${length} bytes.`);
  });

  

  // fs.stat(url2, (err, stats) => {
  //   if (err) {
  //     console.log(`File doesn't exist.`);
  //     return;
  //   } else {
  //     console.log(stats.size);
  //   }
    
  // });
  
});
