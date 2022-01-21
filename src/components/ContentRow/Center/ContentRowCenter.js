import React from 'react';
import LastMovieInDb from './LastProductoAdd';
import GenresInDb from './GenresInDb';

function ContentRowCenter(){
    return (
        <div className="row">
                       
            <LastMovieInDb />

            <GenresInDb />

        </div>
    )
}

export default ContentRowCenter;