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
  const page=parseInt(req.query.page)||1;
  const limit=parseInt(req.query.limit)||5;
  const skip=(page-1)*limit;
  //const fieldList=(req.query.fields).split(',').join('  ');
  const results=results.skip(skip).limit(page);
   // const productDetails=await ProductModel.find({}).select('-__v').limit(5).sort('name').skip(5);
     let productDetails=await ProductModel.find(results);
    // console.log(productDetails);
    res.status(200).json({resultData:productDetails,nbHits:productDetails.length});
  
})

exports.Product=AsyncCatch(async(req,res)=>{
    const {featured,name}=req.query;
    const queryObject={};
    if(featured){
      queryObject.featured=featured==='true'?true:false
    }
    if(name){
      queryObject.name={$regex:name,$options:'i'};

    }
    const page=Number(req.query.page)||1;
    const limit=Number(req.query.limit)||5;
    const skip=(page-1)*limit;
    const products=await ProductModel.find(queryObject).skip(skip).limit(limit);
  
  
    //console.log(products);
    res.status(200).json({products,nbHits:products.length});
})