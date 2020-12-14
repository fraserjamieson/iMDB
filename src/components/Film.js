import React from "react";

const Film = ({name, url}) => {

  return (
    <>
        <li>
            <a rel="nowt" target="_blank" href={url}>{name}</a>
        </li>
        
    </>
  );

}

export default Film;