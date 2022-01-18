import React from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg';
import GenresInDb from './GenresInDb';
import ContentRowUsers from './ContentRowUsers';
import ContentRowProducts from './ContentRowProducts';

function ContentRowTop(){
    return(
        <React.Fragment>
			
				{/*<!-- Content Row Top -->*/}
				<h1 className="h3  text-gray-800 text-center">App Dashboard</h1>
				<div className="d-flex justify-content-start mb-3 mt-2">
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowUsers/>
					{/*<!-- End movies in Data Base -->*/}
					
					<ContentRowProducts />
					{/* <!-- Content Row Last Movie in Data Base -->*/}
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;