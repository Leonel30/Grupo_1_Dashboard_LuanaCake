import React,{Component} from 'react';
import SmallCardProducts from './SmallCardProducts';

//  let productInDataBase = {
//     color:   "primary",
//     titulo: "Total usuarios",
//     valor: 21,
//     icono: "fas fa-film",
// }


// let amount ={
//     color:   "success",
//     titulo: "Total awards",
//     valor: 79,
//     icono: "fas fa-award",
// }

// let user = {
//     color:   "warning",
//     titulo: "Actors quantity",
//     valor: 49,
//     icono: "fas fa-user",
// }

// let cardProps = [productInDataBase,amount,user];


class ContentRowProducts extends Component {
    constructor(){
        super();
        this.state ={
            productsList :[],         
        }
    }
    componentDidMount(){
        fetch('/api/products')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(products =>{
            this.setState({
                usersList : products.data,
            
            })
        })

        .catch(error=> console.log("error 99"))
    }
    render(){
      
        return (
            
            <React.Fragment>
            {/*<!-- Content Row -->*/}
            <div className="container-fluid">
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