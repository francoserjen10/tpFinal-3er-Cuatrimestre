'use client'
import './introduccionMenus.css';


const ClikearFiltro = () => {
    return (
        <>
            <button className='contenedorEleccion estiloCarnes'>
                <p className='posicionTexto'>Carnes</p>
                <img className='regularImagen' src="./imagenes/imagenesFiltro/imagenCarne/imagenCarne.png" alt="" />
            </button>

            <button className='contenedorEleccion estiloBebidas'>
                <p className='posicionTexto'>Bebidas</p>
                <img className='regularImagen' src="./imagenes/imagenesFiltro/imagenCerveza/cervezaCorona1.png" alt="" />
            </button>

            <button className='contenedorEleccion estiloPastas'>
                <p className='posicionTexto'>Pastas</p>
                <img className='regularImagen' src="./imagenes/imagenesFiltro/imagenPastas/imagenPastas.png" alt="" />
            </button>

            <button className='contenedorEleccion estiloPastas'>
                <p className='posicionTexto'>Pastas</p>
                <img className='regularImagen' src="./imagenes/imagenesFiltro/imagenPastas/imagenPastas.png" alt="" />
            </button>

            <button className='contenedorEleccion estiloPastas'>
                <p className='posicionTexto'>Pastas</p>
                <img className='regularImagen' src="./imagenes/imagenesFiltro/imagenPastas/imagenPastas.png" alt="" />
            </button>

            <button className='contenedorEleccion estiloPastas'>
                <p className='posicionTexto'>Pastas</p>
                <img className='regularImagen' src="./imagenes/imagenesFiltro/imagenPastas/imagenPastas.png" alt="" />
            </button>

            <button className='contenedorEleccion estiloPastas'>
                <p className='posicionTexto'>Pastas</p>
                <img className='regularImagen' src="./imagenes/imagenesFiltro/imagenPastas/imagenPastas.png" alt="" />
            </button>

        </>

    )
}

export const IntroduccionMenus = () => {
    return (
        <>

            <div className="introduccion">
                <ClikearFiltro />
            </div>

        </>
    )
} 