const Product = require("../model/product.model");


// comparison  operator
// const getAllProducts = async (req, res) => {
//   try {
//     // const allProducts = await Product.find({ price: {$lte: 200000}}).sort({price: 1})
//     // const allProducts = await Product.find({ price: { $nin: [70000, 100000] } }).sort({
//     //   price: 1,
//     // });

//     const price = req.query.price

//     let allProducts;

//     if (price) {
//       allProducts = await Product.find({ price: { $gt: price } }).sort({
//         price: 1,
//       });
//     } else {
//       allProducts = await Product.find().sort({
//         price: 1,
//       });
//    }
//     //  const allProducts = await Product.find().limit(3);
    
//    if (allProducts.length > 0) {
//      res.status(200).send({
//         success: true,
//         message: 'Products retrieved successfully',
//         data: allProducts
//       });
//    } else {
//      res.status(404).send({
//        success: false,
//        message: 'No products found',
//        data: null
//       });
//    }
//  } catch (error) {
//   res.status(500).send({message: error.message});
//  }
// };

// logical operators
// const getAllProducts = async (req, res) => {
//   try {
//     let allProducts;

//     // allProducts = await Product.find(
//     //   {
//     //     $and : [
//     //       { price: { $gt: 50000 } },
//     //       { price: { $lt: 200000 }
//     //   }]
//     // })
//     // .sort({
//     //     price: 1,
//     //   });
//     // allProducts = await Product.find(
//     //   {
//     //     $or : [
//     //       { price: { $gt: 50000 } },
//     //       { price: { $lt: 200000 }
//     //   }]
//     // })
//     // .sort({
//     //     price: 1,
//     //   });

//      allProducts = await Product.find({
//        price: { $not: { $gt: 50000 } }
//      }).sort({
//        price: 1,
//      });
   
   
//     //  const allProducts = await Product.find().limit(3);
    
//    if (allProducts.length > 0) {
//      res.status(200).send({
//         success: true,
//         message: 'Products retrieved successfully',
//         data: allProducts
//       });
//    } else {
//      res.status(404).send({
//        success: false,
//        message: 'No products found',
//        data: null
//       });
//    }
//  } catch (error) {
//   res.status(500).send({message: error.message});
//  }
// };


// counting, sorting, selecting
const getAllProducts = async (req, res) => {
  try {
    let allProducts;
    let allProductsCount;

    // sorting
    // const  allProducts = await Product.find().sort({
    //    price: 1,
    //  });

    // counting
    //  allProductsCount = await Product.find().countDocuments()

    // selecting
    allProducts = await Product.find().select({title: 1, price: 1, _id: 0}).sort({
       price: 1,
     });

    //  const allProducts = await Product.find().limit(3);

    // res.status(200).send({
    //   success: true,
    //   message: `found ${allProductsCount} products`,
    //   data: allProductsCount,
    // });

     res.status(200).send({
      success: true,
      message: `found all products`,
      data: allProducts,
    });

  } catch (error) {
  res.status(500).send({message: error.message});
 }
};


const getSingleProduct = async (req, res) => { 
  try {
    const productId = req.params.id;
    // const foundProduct = await Product.findById(productId, {title: 1, _id: 0})
    // const foundProduct = await Product.findById(productId).select({ title: 1, _id: 0 })
    const foundProduct = await Product.findById(productId)
    if (foundProduct) {
      res.status(200).send({
        success: true,
        message: 'Product found',
        data: foundProduct
      });
    } else {
      res.status(404).send({ 
        success: false,
        message: 'Product not found',
        data: null
       });
    }
  } catch (error) {
    res.status(500).send({message: error.message});
  }
}

const createProduct = async (req, res) => { 
 

  try {
    // create a new product
    const { title, price, quantity } = req.body;

    const newProduct = new Product({title, price, quantity});

    // save the product to the database
    const savedProduct = await newProduct.save()

    // const savedMultipleProducts = await Product.insertMany([
    //   { title: 'Samsung Tab', price: '40000', quantity: 1 },
    //   { title: 'iPhone 12', price: '100000', quantity: 5 },
    //   { title: 'Google Pixel 5', price: '70000', quantity: 3 },
    //   { title: 'Xiaomi Mi 11', price: '60000', quantity: 2 },
    // ]);

    res.status(201).send(savedProduct);
    // res.status(201).send(savedMultipleProducts);
  } catch (error) {
    res.status(500).send({message: error.message});
  }
}


module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct
}