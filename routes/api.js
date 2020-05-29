const express = require ('express');
const router = express.Router();
const multer = require('multer')
const path = require ('path')

const storage = multer.diskStorage({
    // destination: '../uploads',
    destination: '../client/public/uploads',
    filename: function(req, file, cb){
        cb(null, file.originalname + '-' + Date.now() + path.extname(file.originalname));
    }
})
const upload = multer ({storage: storage})



//IMPORT MODELS
const Product = require ('../models/Products');
const Cart = require ('../models/Cart');


router.post('/product', upload.single("file"), (req, res) =>{
 
    const product = new Product({
        title: req.body.title,
        price: req.body.price, 
        description: req.body.description,
        availability: req.body.availability,
        file: req.file.filename
    })

    Product.create(product).then(newProduct =>{
        res.send(req.file.filename)
        console.log(newProduct)
        console.log(req.file.filename)
    })
})


router.get('/products', (req, res)=>{
    Product.find({}).then((products)=>{
        res.send (products)
    })
})

router.get('/products/:id', (req, res) =>{
    Product.find({availability: req.params.id}).then(product =>{
        res.send(product)
    })
})


router.get('/details/:id', (req, res) =>{
    Product.findById({_id: req.params.id}).then(product=>{
        res.send(product)
    })
})


router.post('/add-to-cart', async (req, res)=>{
    const dublicatedProduct = await Cart.findOne({title: req.body.title})
    if (dublicatedProduct) return res.send('This product is in your cart')
    
    Cart.create(req.body).then((product)=>{
        res.send (product)
        console.log(product);
    })

})


router.delete('/delete/:id', (req, res)=>{
    Cart.findByIdAndRemove({_id: req.params.id}).then(product=>{
        console.log('deleted')
        res.send('deleted')
    })
})

router.get('/cart', (req, res) =>{
    Cart.find({}).then(products=>{
        res.send(products)
        console.log(products)
    })
})


module.exports = router; 


















// router.post('/add-to-cart', async (req, res)=>{
//     const dublicatedProduct = await Cart.findOne({title: req.body.title})
//     if (dublicatedProduct){
//         Cart.findOneAndUpdate({"title": dublicatedProduct.title }, {$set: {"quantity": dublicatedProduct.quantity + 1}},  function(err,doc) {
//             if (err) { throw err; }
//             else { 
//                 console.log("Updated");
//                 res.send("updated")
//                 }
//         }); 
//     }
//     else{
//         Cart.create(req.body).then((product)=>{
//             res.send (product)
//             console.log(product);
//         })
//     }
   
// })
