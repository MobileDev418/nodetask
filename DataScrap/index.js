const fs = require('fs');
const fetch = require('node-fetch');

// const getJson = url => fetch(url).then(res=>res.json());

// const URL = 'https://api.bitfinex.com/v1/trades/btcusd';
const urls = [
  'https://api.bitfinex.com/v1/trades/btcusd',
  'https://api.bitfinex.com/v1/trades/ethusd',
  'https://api.bitfinex.com/v1/trades/btcusd',
];

const files = ['result1.txt', 'result2.txt', 'result3.txt'];

const writeFile = (path, content) => new Promise((resolve, reject) => {
  fs.writeFile(path, content, 'utf8', (error) => {
    if (error) {
      reject(error);
    }
    resolve('done');
  });
});

// getJson(URL).then( res =>{ writeFile('./btcusd.txt', JSON.stringify(res))});

const requests = urls.map(url => fetch(url).then(res => res.json()));

const scrap = function () {
  Promise.all(requests)
    .then(responses => responses.forEach(
      (response, index) => { writeFile(files[index], JSON.stringify(response)); },
    ));
};

scrap();
