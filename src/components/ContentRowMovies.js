import React,{Component} from 'react';
import SmallCard from './SmallCard';


/* let productInDataBase = {
    color:   "primary",
    titulo: "Total usuarios",
    valor: 21,
    icono: "fas fa-film",
}


let amount ={
    color:   "success",
    titulo: "Total awards",
    valor: 79,
    icono: "fas fa-award",
}

let user = {
    color:   "warning",
    titulo: "Actors quantity",
    valor: 49,
    icono: "fas fa-user",
}

let cardProps = [productInDataBase,amount,user]; */


class ContentRowTop extends Component {
    constructor(){
        super();
        this.state ={
            usersList :[],
           
        }
    }
    componentDidMount(){
        fetch('/api/users')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(users =>{
            this.setState({
                usersList : users.data,
            
            })
        })
        .catch(error=> console.log("error 99"))
    }
    render(){
      
        return (
            
            <React.Fragment>
            {/*<!-- Content Row -->*/}
            <div className="row">
                {
                    this.state.usersList.map((user,index)=>{
                        return <SmallCard  {...user}  key= {index}/>
                    })  
                  
                    }
                         
            </div>
            </React.Fragment>
        )
    }
    
}
export default ContentRowTop;

/* this.state.usersList.map((user,index)=>{
                        return <SmallCard  {...user}  key= {index}/>
                    })  */