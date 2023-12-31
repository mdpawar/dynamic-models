//  USING SEQUELIZE

const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define('product', {
  id: {type: Sequelize.INTEGER,
    allowNull: false,
   autoIncrement: true,
    primaryKey:true
  },
  title:sequelize.STRING,
  price:{
    type: sequelize.DOUBLE,
    allowNull: false
  },
  imageUrl:{
    type: sequelize.STRING,
    allowNull: false
  },
  description: {
    type: sequelize.STRING,
    allowNull: false
  }
});

module.exports = Product;























// // const fs = require('fs'); not require when using sql
// // const path = require('path');

// const db = require('../util/databse');
// const Cart = require('./cart');

// // const p = path.join(
// //   path.dirname(process.main.filename),
// //   'data',
// //   'products.json'
// // ); NOT REQUIRED WHEN SUING SQL

// // const getProductsFromFile = cb => {
// //   fs.readFile(p, (err, fileContent) => {
// //     if (err) {
// //       cb([]);
// //     } else {
// //       cb(JSON.parse(fileContent));
// //     }
// //   });
// // }; NOT REQUIRED WHEN USING SQL

// module.exports = class Product {
//   constructor(id, title, imageUrl, description, price) {
//     this.id = id;
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this.price = price;
//   }

//   save() {
//     return db.execute(
//       'INSERT INTO products (title, price, imageURL, description) VALUES (?, ?, ?, ?)',
//       [this.title, this.price, this.imageUrl, this.description]
//     )
//     // getProductsFromFile(products => {
//     //   if (this.id) {
//     //     const existingProductIndex = products.findIndex(
//     //       prod => prod.id === this.id
//     //     );
//     //     const updatedProducts = [...products];
//     //     updatedProducts[existingProductIndex] = this;
//     //     fs.writeFile(p, JSON.stringify(updatedProducts), err => {
//     //       console.log(err);
//     //     });
//     //   } else {
//     //     this.id = Math.random().toString();
//     //     products.push(this);
//     //     fs.writeFile(p, JSON.stringify(products), err => {
//     //       console.log(err);
//     //     });
//     //   }
//     // });

//   }

//   static deleteById(id) {

//     return db.execute('DELETE FROM products WHERE id = ?', [id]);
//     // getProductsFromFile(products => {
//     //   const product = products.find(prod => prod.id === id);
//     //   const updatedProducts = products.filter(prod => prod.id !== id);
//     //   fs.writeFile(p, JSON.stringify(updatedProducts), err => {
//     //     if (!err) {
//     //       Cart.deleteProduct(id, product.price);
//     //     }
//     //   });
//     // });
//   }

//   static fetchAll() {

//     // getProductsFromFile(cb);

//     return db.execute('SELECT * FROM products');
//   }

//   static findById(id) {

//     return db.execute('SELECT * FROM products WHERE products.id = ?'[id]);
//     // getProductsFromFile(products => {
//     //   const product = products.find(p => p.id === id);
//     //   cb(product);
//     // });
//   }
// };
