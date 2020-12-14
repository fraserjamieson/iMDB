import React from "react";
import Film from "./Film";

const FilmList = ({films}) => {									
    const filmNodes = films.map(film => {						
      return (															
        <Film name={film.name} key={film.id}>{film.url}</Film>			
      );		
    },			
    const moreLink = () => {
        window.open('https://www.imdb.com/calendar/?region=gb')	
    };												
  
    return(
      <>
        {filmNodes}
        {moreLink}
      </>
    )
  
  }

export default FilmList;