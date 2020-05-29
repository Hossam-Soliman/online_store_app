import React, {useState} from 'react';
import axios from 'axios';
import '../addProduct.css'


const upload = (props) => {
    const[title, setTitle] = useState('')
    const[price, setPrice] = useState('')
    const[description, setDescription] = useState('')
    const[availability, setAvailability] = useState('')
    const[file, setFile] = useState('')
    // const[uploaded, setUploaded] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        const data = new FormData();
        data.append("title", title);
        data.append("price", price);
        data.append("description", description);
        data.append("availability", availability);
        data.append("file", file);

     

        axios.post('http://localhost:8080/api/product', data).then(res=>{
        console.log(res.data)
        // setUploaded(res.data)
        }).then(()=>{
            window.location.href='/'
            // props.history.push('/')  
        })
    }

    // const image = file? 
    // <img style={{width: '100%', height: '100%'}} src={process.env.PUBLIC_URL + `/uploads/${uploaded}`} alt=""></img>
    // : null
    
    return ( 
        <div className="AddItem">
            <h3 className="addText" style={{textAlign: 'center', color: '#D20A2C', marginBottom:40, fontWeight:'bold'}}>Add Product</h3>
            <form onSubmit={handleSubmit} encType= "multipart/form-data" >
                <input type="text" name="title" placeholder="title" onChange={(e)=>setTitle(e.target.value)}></input>
                <input type="text" name="price" placeholder="price" onChange={(e)=>setPrice(e.target.value)}></input>
                <input type="text" name="description" placeholder="description" onChange={(e)=>setDescription(e.target.value)}></input>
                <span style={{marginRight: 5}}>section</span>
                <select required onChange={(e)=>setAvailability(e.target.value)}>
                    <option disabled selected> -- select an option -- </option>
                    <option value="smartphones">SmartPhones</option>
                    <option value="tablets">Tablets</option>
                    <option value="wearables">Wearables</option>
                    <option value="accessories">Accessories</option>
                </select>
                <input type="file" name="file" onChange={(e)=>setFile(e.target.files[0])}></input>
                <button>submit</button>
            </form> 
        </div>
     );
}
 
export default upload;