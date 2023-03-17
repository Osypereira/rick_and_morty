import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ButtonContainer = styled.button`
background-color: #9ef01a;
color: #d100d1;

`

const ContainerDatos = styled.div`
border-radius: 10px;
border: 5px solid

width: 200px;
height: 350px;

align-items: center;
justify-content: center;
flex-direction: column;
border-radius: 20px;
margin-top: 20px;
box-shadow: 0 0 20px #d100d1;
border: 1px solid #33415c;
`


const Detail = () => {
    const { detailId } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

    
    return (

        <ContainerDatos>
            <ButtonContainer>
                <Link to="/home">Home</Link>
            </ButtonContainer>
            <h1>{character.name}</h1>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.gender}</p>
            <p>{character.origin?.name}</p>
            <img src={character.image} alt={character.name} />
        </ContainerDatos>
    );
}

export default Detail;
