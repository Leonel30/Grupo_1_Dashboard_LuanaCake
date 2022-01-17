import React,{Component} from 'react';
// import SmallCard from './SmallCard';
import SmallCardProducts from './SmallCardProducts';



class ContentRowProducts extends Component {
    constructor(){
        super();
        this.state ={
            productsList : [],         
        }
    }
    componentDidMount(){
        fetch('/api/products')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(products =>{
            this.setState({
                productsList : products.data,
            
            })
        })
        .catch(error=> console.log(error))
    }
    render(){
      
        return (
            
            <React.Fragment>
            {/*<!-- Content Row -->*/}
            <div className="container-fluid">
            {/* <div className="container-fluid">
                {
                    this.state.usersList.map((user,index)=>{
                        return <SmallCard  {...user}  key= {index}/>
                    })  
                }             
            </div> */}

            <div className="container-fluid">
            {
                    this.state.productsList.map((product,index)=>{
                        return <SmallCardProducts  {...product}  key= {index}/>
                    })  
                }             
            </div>
            </div>
            </React.Fragment>
        )
    }
    
}
export default ContentRowProducts;

/* this.state.usersList.map((user,index)=>{
                        return <SmallCard  {...user}  key= {index}/>
                    })  */