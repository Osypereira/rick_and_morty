import './App.css'
import Cards from './components/Cards'
import NavBar from "./components/NavBar";
import About from "./components/About";
import Detail from "./components/Detail";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Form from "./components/Form";


function App () {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const username = "osypereira@gmail.com";
  const password = "123asd";

  const login = (userData) => {
   if(userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
   }

}
  useEffect(() =>{
    !access && navigate("/")
  }, [access])



  const onSearch = (character) => {
    
      fetch(`https://rickandmortyapi.com/api/character/${character}`)
         .then((response) => response.json())
         .then((data) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('No hay personajes con ese ID');
            }
         });
   
  }

  const onClose = (id) => {
    setCharacters(characters.filter(character => character.id !== id))
  }


  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname === "/" ? <Form login={login}/> : <NavBar onSearch={onSearch}/>}
      
      <Routes>
         <Route path="home" element={<Cards onClose={onClose} characters={characters}/>} />
         <Route path="about" element={<About />} />
         <Route path="detail/:detailId" element={<Detail />} />
      </Routes>

      

    </div>
  )
}  

export default App
