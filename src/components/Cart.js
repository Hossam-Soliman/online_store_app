import React, {useEffect, useState} from 'react';
import axios from 'axios'
import PayPal from './PayPal'
import { FaTrashAlt} from "react-icons/fa";

const Cart = () => {

    const [products, setProduct] = useState([])
    const [total, setTotal] = useState(0);

    useEffect(()=>{
        axios.get('http://localhost:8080/api/cart')
        .then(res=>{
            setProduct(res.data)
        })
    },[])

    useEffect(()=>{
        var select = document.querySelectorAll('tr select')
        var table = document.getElementById('table')
        for (let i=1; i<table.rows.length; i++){
            table.rows[i].cells[3].innerHTML = parseInt(select[i-1].value, 10) * parseInt(table.rows[i].cells[2].innerHTML, 10)
        }
    })

    const calcSum = (e) =>{
        var sum = 0;
        var table = document.getElementById('table')
        for (let i=1; i<table.rows.length; i++){
            sum = sum + parseInt(table.rows[i].cells[3].innerHTML, 10)
        }
        console.log(sum)
        setTotal(sum)
    }

        const handleChange = (e) =>{
            var table = document.getElementById('table')
            var select = document.querySelectorAll('tr select')
            for (let i=1; i<table.rows.length; i++){
                table.rows[i].cells[3].innerHTML = parseInt(select[i-1].value, 10) * parseInt(table.rows[i].cells[2].innerHTML, 10)
            }
        }

        const deleteProduct = (id) =>{
            axios.delete(`http://localhost:8080/api/delete/${id}`)
            .then(res =>{
                window.location.href='/cart'
            })
        }

    const productsList = products.length? products.map(product=>{
        return(
  
            <tbody key={product._id}>
                <tr style={{fontSize: 18, fontWeight:'bold'}}>
                    <td  >{product.title}<FaTrashAlt style={{float: 'left', color: '#D20A2C', width: 20, height: 20, cursor:'pointer'}} onClick={()=>{deleteProduct(product._id)}}/></td>
                    <td><select id="select" onChange={handleChange} >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                    </select></td>
                    <td>{product.price}</td>
                    <td></td>
                </tr>
            </tbody>            
        )
    })
    : <h3 style={{textAlign:'center', fontWeight:'bold', color: '#D20A2C', margin: '20px'}}>No new items in the cart</h3>

    return ( 
        <React.Fragment>
            <table id ="table" style={{margin:'0 auto'}}>
                <thead>
                    <tr>
                        <th>Items</th>
                        <th>QNT</th>
                        <th>Price</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                {productsList}
            </table>
            <button className="button" style={{marginRight: 300, marginTop:20, float: 'right', marginBottom: 50}} onClick={calcSum}>Calculate Sum</button>
            <h5 id="total" style={{float:'right', marginRight: -80, marginTop: 70, fontWeight: 'bold'}}><span></span>Total: <span>{total}</span> $</h5>
            <PayPal/>
            
        </React.Fragment>
        
     );
}
 
export default Cart;