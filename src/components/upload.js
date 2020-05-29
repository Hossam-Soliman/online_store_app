// import React, {useState} from 'react';
// import axios from 'axios';

// const upload = () => {
//     const[title, setTitle] = useState('')
//     const[price, setPrice] = useState('')
//     const[description, setDescription] = useState('')
//     const[file, setFile] = useState('')

//     const handleSubmit = (e) =>{
//         e.preventDefault();
//         const data = new FormData();
//         data.append("title", title);
//         data.append("price", price);
//         data.append("description", description);
//         data.append("file", file);
//     }

//     axios.post('http://localhost:8080/api/product', data).then(res=>{
//         console.log(res.data)
//         console.log(file)
//     })


//     return ( 
//         <div className="AddItem">
//             <form onSubmit={this.handleSubmit}>
//                 <input type="text" name="title" placeholder="title" onChange={(e)=>setTitle(e.target.value)}></input>
//                 <input type="text" name="price" placeholder="price" onChange={(e)=>setPrice(e.target.value)}></input>
//                 <input type="text" name="description" placeholder="description" onChange={(e)=>setDescription(e.target.value)}></input>
//                 <input type="file" name="file" onChange={(e)=>setFile(e.target.files[0])}></input>
//                 <button>submit</button>
//             </form>
//         </div>
//      );
// }
 
// export default upload;