const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/"



const getCharById =  async (req, res) => {
  const  { id } = req.params
  
  
  try {
    const result= await axios.get( URL +  id)
    console.log("result", result)
    
    const character = {
      
      id: result.data.id,
      name: result.data.name,
      image: result.data.image,
      gender: result.data.gender,
      species: result.data.species
    }
    res.status(200).json(character)
    }  catch (error) {
      res.status(500).send(error.message)
    }
    } 
    
   // .then(res => res.data)
    //.then(data => {
     // return{
     // }
    // } )
   //console.log(result, "estos es el resultado")
      




module.exports= getCharById;




         
