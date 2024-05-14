import Link from 'next/link';
import './nav.css'

export const Nav = () => {
    return (
        <nav className="menu" >
            <ul className="items">
                <Link className='links'
                    href={{ pathname: '/home', }}
                >INICIO
                </Link>

                <Link className='links'
                    href={
                        {
                            pathname: '/cardempleos',
                        }
                    }
                > QUIENES SOMOS
                </Link>

                <Link className='links'
                    href={
                        {
                            pathname: '/cardcandidatos',
                        }
                    }
                > MENUS
                </Link>

                <Link className='links'
                    href={
                        {
                            pathname: '/cardturismo',
                        }
                    }
                >¿PREGUNTAS?
                </Link>
                <Link className='links'
                    href='/home#linkcontacto'
                >CONTACTENOS
                </Link>
            </ul>
        </nav>

    );
}