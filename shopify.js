const fetch = require('node-fetch');

const SHOPIFY_URL = `https://googaagoo.myshopify.com/admin/api/2019-10/products.json`

// post new product

// fetch(SHOPIFY_URL, {
//   method: 'POST',
//   headers: {
//     "X-Shopify-Access-Token": "7b47a593ed1c3672952ffff75dcaf70d",
//     "Content-Type": "application/json" },
//   body: JSON.stringify({
//     "product": {
//       "title": "Burton Custom Freestyle 151",
//       "body_html": "<strong>Good snowboard!</strong>",
//       "vendor": "Burton",
//       "product_type": "Snowboard",
//       "tags": "Barnes & Noble, John's Fav, \"Big Air\""
//     }
//   })
// }).then(response => response.json())
// .then((jsonData) => {
//   console.log(jsonData);
// });

// Print product
fetch(SHOPIFY_URL, {
  method: 'GET',
  headers: {
    "X-Shopify-Access-Token": "7b47a593ed1c3672952ffff75dcaf70d",
    "Content-Type": "application/json" }
  }).then(response => response.json())
.then((jsonData) => {
  console.log(jsonData);
});
