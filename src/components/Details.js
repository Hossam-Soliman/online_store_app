import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { withRouter } from "react-router";
import '../details.css'



const Details = (props) => {

    const [product, setProduct] = useState('')

        useEffect(()=>{
            axios.get(`http://localhost:8080/api/details/${props.match.params.id}`)
            .then(res=>{
                setProduct(res.data)
                console.log(res.data)
            })
        },[])

        const handleCart = (e) =>{

            const cartProduct = {
                title: product.title,
                price: product.price
            }
            axios.post('http://localhost:8080/api/add-to-cart', cartProduct)
            .then(res =>{
                if(res.data === "This product is in your cart"){
                    alert(res.data)
                }
               else{
                    window.location.href='/cart'
                }
            })
        }

        const zoomImage = () =>{
            const lightbox = document.createElement('div')
            lightbox.id = 'lightbox'
            document.body.appendChild(lightbox)
            const image =  document.getElementById('img')
            lightbox.classList.add('active')
            const img = document.createElement('img')
            img.src = image.src
            while (lightbox.firstChild) {
              lightbox.removeChild(lightbox.firstChild)
            }
            lightbox.appendChild(img)

            lightbox.addEventListener('click', e => {                    //e.target is the element that triggered the event (e.g., the user clicked on)  // e.currentTarget is the element that the event listener is attached to (lightbox)
                if (e.target !== e.currentTarget) return
                lightbox.classList.remove('active')
              })
        }

        

    return ( 
        <div className="productDetails container">
            <div className="row">
                <div className="product-img col-md-6 col-sm-12">
                    <img id='img' src={process.env.PUBLIC_URL + `/uploads/${product.file}`} alt="" onClick={zoomImage}></img>
                </div>
                <div className="product-details col-md-6 col-sm-12">
                    <h1>{product.title}</h1>
                    <h2>{product.price}$</h2>
                    <p>Description: {product.description}</p><br></br>
                    <p>Section: {product.availability}</p>
                    <button onClick={handleCart}>ADD TO CART</button>
                    <button>BUY NOW</button>
                </div>
            </div>
        </div>
     );
}
 
export default withRouter(Details);