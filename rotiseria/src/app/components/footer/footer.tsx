import '@fortawesome/fontawesome-free/css/all.min.css';
import './footer.css';

export const FooterFinal = () => {
    return (
        <footer className="pie-pagina">
            <div className="grupo-1">
                <div className="box">
                    <figure>
                        <a href="#">
                            <img src="../imagenes/imagenLogo/LogoRotiseria.png" alt="Logo de SLee Dw" />
                        </a>
                    </figure>
                </div>
                <div className="box texto">
                    <h2>Encuentrenos en nuestro local!</h2>
                <div className='mapa'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.8890680636473!2d-60.32088798849646!3d-36.893001981863044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959445c5824205ed%3A0x8a66343066dcadd!2sNecochea%202987%2C%20Olavarr%C3%ADa%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1716730688577!5m2!1ses-419!2sar" width="400" height="300" style={{ border: 0 }}/*allowfullscreen=""*/ loading="lazy" /*referrerpolicy="no-referrer-when-downgrade"*/></iframe>
                </div>
                </div>
                <div className="box">
                    <h2>SÍGUENOS</h2>
                    <div className="red-social">
                        <a href="#" className="fa fa-facebook"></a>
                        <a href="#" className="fa fa-instagram"></a>
                        <a href="#" className="fa fa-twitter"></a>
                        <a href="#" className="fa fa-youtube"></a>
                    </div>
                </div>
            </div>
            <div className="grupo-2">
                <small>&copy; 2021 <b>SLee Dw</b> - Todos los Derechos Reservados.</small>
            </div>
        </footer>
    )
}