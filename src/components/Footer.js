import React from 'react';
import imagenFondo from '../assets/images/fondofooter.jpg';

function Footer(){
    return (
        <React.Fragment>
			<footer className="sticky-footer bg-white">
			{/* <img className="img-fluid px-0 px-sm-0 mt-0 mb-0" style={{width: 100 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/> */}
			<img src={imagenFondo} className="img-fluid pb-10" alt="asd"></img>
				<div className="container my-auto">
					
					<div className="copyright text-center my-auto " style={{fontSize: 1.5 +'rem'}}>

						<span>Copyright &copy; Dashboard 2021</span>
					</div>
				</div>
			</footer>

        </React.Fragment>
    )
}
export default Footer;