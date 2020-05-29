import React, {useEffect, useState}from 'react';
import '../products.css'
import axios from 'axios'
import {Link} from 'react-router-dom'



const Product = () => {

    const [products, setProducts] = useState([])

    // useEffect(()=>{
        
    //     const products =  document.querySelectorAll('.products-list .product')
    //     products.forEach(product =>{
    //         product.addEventListener('click', e => {
    //             window.location.href = '/details/hossam'
    //         })
    //     })
    // })

    useEffect(()=>{
        axios.get('http://localhost:8080/api/products')
        .then(res =>{
            setProducts(res.data)
            console.log(res.data)
        })
    }, [])

    const newProduct = products.length? products.map(product =>{
        return(
            <Link to={`/details/${product._id}`} className="col-md-4 col-sm-6" key={product._id}>
                <div className="product ">
                    <img src={process.env.PUBLIC_URL + `/uploads/${product.file}`} alt=""></img>
                    <span>{product.title}</span>
                    <span>price: {product.price} $</span>
                    <button>ADD TO CART</button>
                </div>
            </Link>
        )
        })
        : <h4 style={{textAlign:'right', fontSize: '40px'}}>Sorry, no new products available</h4>

    return ( 
        <div className="products-list container">
            <div className="row">
                {newProduct}
            </div>
        </div>
     );
}
 
export default Product;