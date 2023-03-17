import './App.css'
import Cards from './components/Cards'
import NavBar from "./components/NavBar";
import About from "./components/About";
import Detail from "./components/Detail";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Form from "./components/Form";
import Favorites from "./components/Favorites"
import { getCharacter } from './redux/actions';
import { useDispatch, useSelector} from "react-redux"



function App () {
   const dispatch =  useDispatch();
   const allCharacters = useSelector(state => state.allCharacters);
   
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
  }, [access, location.pathname, navigate]) 



  const onSearch = (character) => {
   // console.log(character)
      fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)

         .then((response) => response.json())
         .then((data) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
               dispatch(getCharacter(data))
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
         <Route path="favorites" element={<Favorites/> } />
      </Routes>

      

    </div>
  )
}  

export default App
