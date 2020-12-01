import React from 'react';
import {connect} from 'react-redux';



const MovieDetails=(props)=>{
    if(!props.selectedMovie){
        return(
            <div className="details-container" style={{width:'20%'}}>
                <h2>Movie</h2>
                <div className="properties">
                    <p>Please Select the Movie</p>
                </div>
        </div>
        )
    }
    else  {
        return(
            
            <div className="details-container" style={{width:'20%'}}>
                <h2>Movie</h2>
                <div className="properties">
                    <p>Title : {props.selectedMovie.title}</p>
                    <p>ReleaseDate : {props.selectedMovie.releaseDate}</p>
                    <p>Ratings : {props.selectedMovie.rating}</p>
                    <p>Image : {props.selectedMovie.image}</p>
                    <img src={props.selectedMovie.image} alt={props.selectedMovie.title}/>
                    
           
                    
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

export default connect(mapStateToProps)(MovieDetails);