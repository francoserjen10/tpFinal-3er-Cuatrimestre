"use client";
import React, { useState } from "react";
import "./Contacto.css";
import "bootstrap/dist/css/bootstrap.css";

export const Contacto = () => {
  const [campoValido, setCampoValido] = useState<string[]>([]);
  let [isFormulariovalido, setisFormulariovalido] = useState(false);

  const enviarContacto = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const asunto = formData.get("asunto")?.toString();
    const mail = formData.get("mail")?.toString();
    const mensaje = formData.get("mensaje")?.toString();

    const newCampoValido: string[] = [];

    let formularioValido: boolean = true;

    if (asunto) {
      if (asunto.length < 3) {
        newCampoValido.push('is-invalid');
        formularioValido = false;
      } else {
        newCampoValido[0] = 'is-valid';
      }
    }

    if (mail) {
      if (mail.length < 3 || !mail.includes('@')) {
        newCampoValido.push('is-invalid');
        formularioValido = false;
      } else {
        newCampoValido.push('is-valid');
      }
    }

    if (mensaje) {
      if (mensaje.length < 3) {
        newCampoValido.push('is-invalid');
        formularioValido = false;
      } else {
        newCampoValido.push('is-valid');
      }
    }

    setCampoValido(newCampoValido);
    setisFormulariovalido(formularioValido);
  }

  return (
    <section id='linkcontacto'>
      <div className='d-flex flex-row flex-wrap contacto'>
        <div className='d-flex flex-column justify-content-center align-items-center redes'>
          <figure>
            <a href="#">
              <img src="../imagenes/imagenLogo/LogoRotiseria.png" alt="Logo Programing" />
            </a>
          </figure>
        </div>

        <div className='d-flex flex-column justify-content-center formulario'>
          <h4>CONTACTANOS</h4>
          <form className="row g-3" id="form" onSubmit={enviarContacto}>
            <label htmlFor="validationServer01" className="form-label col-md-2">Asunto</label>
            <div className="col-md-10">
              <input type="text" className={`form-control ${campoValido[0]}`} id="asunto" name="asunto" placeholder="Ingrese asunto" required />
              <div id="validationServer01Feedback" className="invalid-feedback">
                El asunto debe tener 3 o más caracteres.
              </div>
            </div>

            <label htmlFor="validationServer02" className="form-label col-sm-2">Mail</label>
            <div className="col-md-10 needs-validation">
              <input type="text" className={`form-control ${campoValido[1]}`} id="mail" name="mail" placeholder="Ingrese su mail" required />
              <div id="validationServer02Feedback" className="invalid-feedback">
                Ingrese un mail válido
              </div>
            </div>

            <label htmlFor="validationServer03" className="form-label col-sm-2">Mensaje</label>
            <div className="col-md-10 needs-validation">
              <textarea className={`form-control ${campoValido[2]}`} id="mensaje" name="mensaje" placeholder="Ingrese el mensaje" required></textarea>
              <div id="validationServer03Feedback" className="invalid-feedback">
                El asunto debe tener 3 o más caracteres.
              </div>
            </div>

            <div className="col-12">
              <button className="btn btn-danger btn-contacto" type="submit" id="btn-registrarse">Enviar</button>
            </div>
            {isFormulariovalido && (
              <div className="alert alert-success" role="alert">
                Su consulta ha sido enviada, nos pondremos en contacto al mail indicado.
                ¡Muchas gracias!
              </div>)}
          </form>
        </div>

        <div className='d-flex flex-column justify-content-center align-items-center mapa'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.8890680636473!2d-60.32088798849646!3d-36.893001981863044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959445c5824205ed%3A0x8a66343066dcadd!2sNecochea%202987%2C%20Olavarr%C3%ADa%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1716730688577!5m2!1ses-419!2sar"
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="footer">
        <small>&copy; 2021 <b>Rotiseria Programing</b> - Todos los Derechos Reservados.</small>
      </div>
    </section>
  );
} 