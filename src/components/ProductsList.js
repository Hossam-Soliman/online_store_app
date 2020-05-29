import React , {Component} from 'react';
import Product from './Product'

class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Product />
            </div>
         );
    }
}
 
export default ProductsList;