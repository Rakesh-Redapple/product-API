const ProductModel=require('../models/productModel');

const AsyncCatch= require("../middleware/async");
const productModel = require('../models/productModel');

exports.add=AsyncCatch(async(req,res)=>{
  const product= await productModel.create({
    name:req.body.name,
    price:req.body.price,
    rating:req.body.rating,
    company:req.body.company,
    featured:req.body.featured
  });
  console.log(product);
    res.status(201).json({status:"success",result:product,msg:'product added successfully'});
})

exports.getAllProduct=AsyncCatch(async(req,res)=>{
    const productDetails=await ProductModel.find({featured:true,name:'radhika'}).select('-__v');


    res.status(200).json({productDetails,nbHits:productDetails.length});
})

exports.Product=AsyncCatch(async(req,res)=>{
    console.log(req.query);
    const products=await ProductModel.find(req.query).select('-__v');
    console.log(products);
    res.status(200).json({products,nbHits:products.length});
})