import Card from "./Card";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  border: 5px solid #3c096c;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 20px;
  flex-wrap: wrap;
  gap: 160px;
`;

function Cards({ characters, onClose }) {
  return (
    <Container>
      {characters.map((character, index) => {
        return (
          <Card
            id={character.id}
            key={index}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            onClose={() => onClose(character.id)}
          />
        );
      })}
    </Container>
  );
}

export default Cards;
