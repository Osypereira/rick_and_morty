import styled from "styled-components";

import { useState } from "react";


function SearchBar({onSearch}) {
   const [character, setCharacter] = useState("")

   const handleChange = (event) => {
      setCharacter(event.target.value)

   }

   const Contained = styled.button`
   background-color: #9ef01a;
   border: none
   padding: 3px;
   margin: 2px;
   border-radius: 5px;
   `
   const ContainerInput = styled.input`
   background-color: white;
   border-radius: 6px;
   border: none;

   
   `

   return (
      <div>
         <ContainerInput type='search' value={character} onChange={handleChange}/>
      <Contained onClick={() => onSearch(character)}>Agregar</Contained> 
      </div>
   );
}

export default SearchBar;
