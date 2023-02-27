import {Link} from "react-router-dom";
import styled from "styled-components";

const Contenedor = styled.div`
 background-color: #33415c;
 width:200px;
 height:350px;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 border-radius: 20px;
 margin-top: 20px;
 box-shadow: 0 0 20px #d100d1;
 border: 15px solid #33415c;
 padding: 10 px;
`;

const ButtonContainer = styled.button`
 background-color: #9ef01a;
 color: #9ef01a;
 border: 100px;
 border-radius: 20px;
 
`
const ContainerImage = styled.img`
 width:150px;
`
const Container = styled.h2`
   text-align: center;
   padding: px;
   color: #9ef01a;
`
const Containera = styled.h4`
   text-align: center;
   padding: px;
   color: #9ef01a;
`

function Card({ id,name, gender, onClose, species, image }) {
   return (
      <Contenedor>
         <ButtonContainer onClick={onClose}>"</ButtonContainer>
       
         <Link to={`/detail/${id}`}>
            <Container>{name}</Container>
            <Containera>{species}</Containera>
            <Containera>{gender}</Containera>
            <ContainerImage  src={image} alt="name" /> 

         </Link>
         
      </Contenedor>
   );
}
export default Card;