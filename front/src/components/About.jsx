import styled from "styled-components"

const Foto = styled.h2`
 background-color: #33415c;
 width:250px;
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
`
const Nombre = styled.p`
 color: var(--font-orange);
    font-size: 1.6rem;
    font-family: 'Gloria Hallelujah', cursive;
`



const About = () => {
    return (
        <div>
            <h2>Hola, soy Ova</h2>
            <h2>Soy un profesor de 47 años</h2>
            <h2>Vivo en San Miguel de Tucuman</h2>
            <Foto>
            <img  src={require("./imagenes/OMP.jpg")} alt="name" /> 
            <Nombre>  Osvaldo M. Pereira</Nombre>
            </Foto>
        </div>
    );
}

export default About;
