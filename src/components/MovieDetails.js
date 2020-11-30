import React from 'react';
import {connect} from 'react-redux';

const MovieDetails=(props)=>{
    if(!props.selectedMovie){
        return(
            <div className="details-container" style={{width:'20%'}}>
                <h2>Movie</h2>
                <div className="Properties">
                    <p>select Movie</p>
                </div>
        </div>
        )
    }
    else{
        return(
            <div className="details-container" style={{width:'20%'}}>
                <h2>Movie</h2>
                <div className="Properties">
                    <p>Title:{props.selectedMovie.title}</p>
                    <p>ReleaseDate:{props.selectedMovie.releaseDate}</p>
                    <p>Rating:{props.selectedMovie.rating}</p>

                </div>
        </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        selectedMovie:state.selectedMovie
    }
}

export default connect(mapStateToProps)(MovieDetails)