import {Link} from 'react-router-dom'
import './styles.css'

export default function Header(){
    return (

        <header classname = 'cabecalho'>
            <h1>Universo Rick And Morty</h1>
                <nev>
                    <ol>

                        <Link to ="/">
                        <li>Home</li>
                        </Link>
                        
                        <Link to ="/About">
                        <li>Sobre</li>
                        </Link>

                        <Link to ="/rick-and-morty">
                        <li>Personagem</li>
                        </Link>

                    </ol>
                </nev>
        </header>
    )
}