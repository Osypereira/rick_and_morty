const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/"



const getCharDetail =  async (req, res) => {
    const { id } = req.params
    
  try {
    const result= await axios.get(URL + id)
    const character = {
      
      id: result.data.id,
      status:result.data.id,
      name: result.data.name,
      image: result.data.image,
      gender: result.data.gender,
      species: result.data.species
    }
    res.status(200).json(character)
  } catch (error) {
    res.status(500).send(error.message)
  }


//.then(res => res.data)
//.then(data => {
     // return{
         //      id: data.id,
          //     name: data.name,
          //     image: data.image,
           //   gender: data.gender,
           //   species: data.species,
//origin: data.origin.name
      }
   //  } )
   //console.log(result, "estos es el resultado")
      
    //  .catch(err=> res.status(500).json({error: err.message}) );
    //  return res.status(200).json(result)


//


module.exports = getCharDetail;