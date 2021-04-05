import React from "react";
import Film from "./Film";

const FilmList = ({films}) => {									
    const filmNodes = films.map((film) => {						
      return (															
        <Film name={film} key={film.id}/>			
      );		
    });													
  
    return (
      <>
        <ul>
            {filmNodes}
        </ul>
      </>
    );
  
  }

export default FilmList;