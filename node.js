const fetch = require('node-fetch');

const TRADE_GECKO_URL = `https://api.tradegecko.com/products`

fetch(TRADE_GECKO_URL, {
  method: 'GET',
  headers: {'Authorization': 'Bearer ' + 'e5a873c8e2a1cc1f51ebaaf8b00a0f742ab6885a042420ef82dfbd84003dbe4b'}
}).then(response => response.json())
.then((jsonData) => {
  jsonData.products.forEach((data) => {
    const title = data.name;
    const vendor = data.brand;
    const product_type = data.product_type;
    const description = data.description;
    const tag = data.tags;
    console.log(title);
    console.log(vendor);
    console.log(product_type);
    console.log(description);
    console.log(tag);
  });
});

//       "title": "Burton Custom Freestyle 151",
//       "body_html": "<strong>Good snowboard!</strong>",
//       "vendor": "Burton",
//       "product_type": "Snowboard",
//       "tags": "Barnes & Noble, John's Fav, \"Big Air\""
