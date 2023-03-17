import { useSelector, useDispatch } from "react-redux";
import { orderCards, filterCards } from "../redux/actions"


const Favorites = () => {
    const  {myFavorites}  = useSelector(state => state)
    const dispatch = useDispatch()

    const handlerOrder = (event) => {
        dispatch(orderCards(event.target.value));
        
    }

    const handlerFilter = (event) => {
        dispatch(filterCards(event.target.value));
    }

    return(
        <div>
            <div>
                <select onChange={handlerOrder} >
                    <option value="order" disabled="disabled">Order By</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select onChange={handlerFilter} >
                    <option value="filter" disabled="disabled">Filter By</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Gendless">Gendless</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
            { 
                myFavorites.map((character) => {
                    return(
                        <div>
                             <img src={character.image} alt={character.name}/>
                            
                            <div>
                                <h2>{character.name}</h2>
                                <h2>{character.species}</h2>
                                <h2>{character.gender}</h2>
                                <h2>{character.status}</h2>
                                <h2>{character.origin}</h2>
                            </div>
                            
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Favorites;