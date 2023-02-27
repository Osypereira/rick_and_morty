import SearchBar from "./SearchBar";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.nav`
   display: flex;
   border: 5px solid #3c096c;
   align-items: center;
   justify-content: flex-end;
   padding: 11px;
   margin:20px;
   flex-wrap: wrap;
   height:40px;
  
   
`
const ButtonContainer = styled.button`
 background-color: #9ef01a; 
 border: none;
 padding: 1px;
 margin: 2px;
 border-radius: 5px;

`



const Nav = ({onSearch}) => {
    return(
        <Container>
            <SearchBar onSearch={onSearch}/>
            
            <ButtonContainer as={Link} to= "/home">Home</ButtonContainer>
            <ButtonContainer as={Link} to= "/about">About</ButtonContainer>
            

        </Container>
    )
}

export default Nav;





