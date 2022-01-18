import React, {Component} from 'react';
import Genre  from './Genre';

/*
let genres = [
    {genre: 'Acción'},
    {genre: 'Animación'},
    {genre: 'Aventura'},
    {genre: 'Ciencia Ficción'},
    {genre: 'Comedia'},
    {genre: 'Documental'},
    {genre: 'Drama'},
    {genre: 'Fantasia'},
    {genre: 'Infantiles'},
    {genre: 'Musical'}
]
*/
class  GenresInDb extends Component{
    constructor(){
        super();
        //Aquí vamos a colocar los estados iniciales        
        this.state = {
            genresList : []
        }
    }
    //Aquí debemos llamar al componentDidMount
    componentDidMount(){
        fetch('/api/genres')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then((generos) =>{
            
            this.setState({
                genresList : generos.data 
            })
        })
        .catch(error => console.log('Ups hay un error '+error))
    }
    //Crear las funciones que van a ser llamadas por los eventos
    alerta() {
        // alert('Con esto estamos hasta el momento, deben practicar ustedes')
    }

    render(){
        return (
            <React.Fragment>
                    {/*<!-- Categories in DB -->*/}
                    <div className="col-lg-6 mb-4">						
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6  onMouseOver={() => this.alerta() }   className="m-0 font-weight-bold text-gray-800">GenresInDb</h6>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    {
                                        this.state.genresList.map((genre,index)=>{
                                            return  <Genre  {...genre}  key={index} />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
               
            </React.Fragment>
        )
    }


}
export default GenresInDb;