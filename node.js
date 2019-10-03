const fetch = require('node-fetch');

const TRADE_GECKO_URL = `https://api.tradegecko.com/products`

fetch(TRADE_GECKO_URL, {
  method: 'GET',
  headers: {'Authorization': 'Bearer ' + 'e5a873c8e2a1cc1f51ebaaf8b00a0f742ab6885a042420ef82dfbd84003dbe4b'}
}).then(response => response.json())
.then((jsonData) => {
  jsonData.products.forEach((data) => {
    const name = data.name;
    const brand = data.brand;
    console.log(name);
    console.log(brand);
  });
});

