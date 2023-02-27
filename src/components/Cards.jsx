import Card from "./Card";
import styled from "styled-components";

const Container = styled.div`
   display: flex;
   border: 5px solid #3c096c;
   align-items: center;
   justify-content: center;
   padding: 20px;
   margin:20px;
   flex-wrap: wrap;
   gap: 160px;
   
`





function Cards({ characters, onClose }) {
   
   return (
      <Container>
         {
            characters.map(({id, name, species, gender, image}) => {
               return <Card
                  id={id}
                  key={id}
                  name={name}
                  species={species}
                  gender={gender}
                  image={image}
                  onClose={() => onClose(id)}
               />
            })
         }
      </Container>


   )
}

export default Cards;