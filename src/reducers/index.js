import {combineReducers} from 'redux';


const movieReducer=()=>
{
    return[
        {title:"KGF",releaseDate:"21/06/2019",rating:9,image:"KGF.jpg"},
        {title:"Kirik Party",releaseDate:"05/09/2017",rating:8,image:"kirikparty.jpg"},
        {title:"Dil Bechara",releaseDate:"08/11/2020",rating:8.8,image:"dilbechara.jpg"},
        {title:"Bahubali",releaseDate:"06/04/2015",rating:9.2,image:"bahubali.jpg"},
        {title:"Magadheera",releaseDate:"09/03/2013",rating:8.9,image:"magadheera.jpg"}
    ]
}


const selectedMovieReducer=(state=null,action)=>{
switch(action.type){
    case "MOVIE_SELECTED":
        return action.payload
    default:
    return state
}
}

export default combineReducers({
    movies:movieReducer,
    selectedMovie:selectedMovieReducer,
})