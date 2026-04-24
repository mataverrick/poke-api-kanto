import pokeball from '../assets/pokeball.png'

function Nav(){
    return (
        <ul className='nav-container'>
            <li><img id ="pokeimage" src ={pokeball} alt="" /></li>
            <li>Pokemon</li>
        </ul>
    )
}

export default Nav;