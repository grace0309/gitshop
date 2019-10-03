const fetch = require('node-fetch');

const TRADE_GECKO_URL = `https://api.tradegecko.com/products`
const SHOPIFY_URL_PRODUCTS = `https://googaagoo.myshopify.com/admin/api/2019-10/products.json`

// post new product
function postShopify(title, description, vendor, product_type, tag) {
  fetch(SHOPIFY_URL_PRODUCTS, {
    method: 'POST',
    headers: {
      "X-Shopify-Access-Token": "7b47a593ed1c3672952ffff75dcaf70d",
      "Content-Type": "application/json" },
    body: JSON.stringify({
      "product": {
        "title": `${title}`,
        "body_html": `${description}`,
        "vendor": `${vendor}`,
        "product_type": `${product_type}`,
        "tags": `${tag}`
      }
    })
  }).then(response => response.json())
  .then((jsonData) => {
    console.log(jsonData);
  });
}

// Print product
function checkProducts(title, description, vendor, product_type, tag) {
  fetch(SHOPIFY_URL_PRODUCTS, {
    method: 'GET',
    headers: {
      "X-Shopify-Access-Token": "7b47a593ed1c3672952ffff75dcaf70d",
      "Content-Type": "application/json" }
    }).then(response => response.json())
  .then((jsonData) => {
    const nameExisted = jsonData.products.map(product => product.title);
    if (nameExisted.includes(`${title}`)) {
      console.log("Error")
    } else {
      postShopify(title, vendor, product_type, tag);
    }
  });
}

function stockCheck() {
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
      checkProducts(title, description, vendor, product_type, tag);
    });
  });
}

stockCheck()




