import {Link} from "react-router-dom";
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react"
import { addFavorite, deleteFavorite } from "../redux/actions"
import React from "react"


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

function Card({ id, name, gender, onClose, species, image }) {
   const dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites)
   const [ isFav, setIsFav ] = useState(false);
   


   const handleFavorite = () => {
      if(isFav){
         setIsFav(false)
         dispatch(deleteFavorite(id));
         console.log(isFav)
         
      }
      else{
         setIsFav(true);
         dispatch(addFavorite({ id,name, gender,  species, image }))
         console.log(isFav)
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const onCloseCard = () => {
      onClose(id);
      dispatch(deleteFavorite(id));
   }

   return (
      <Contenedor>
       {( isFav ) 
          ? <button onClick={handleFavorite}>❤️</button>  
          : <button onClick={handleFavorite}>🤍</button>
       }
           
        
         <ButtonContainer onClick={onCloseCard}>x</ButtonContainer>
       
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

