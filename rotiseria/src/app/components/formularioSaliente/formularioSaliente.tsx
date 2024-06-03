import { IUsuario } from "@/app/model/user.model";
import {
  getInformacionUsuario,
  login,
  registerUser,
} from "@/app/services/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function FormSaliente() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [register, setRegister] = useState(false);

  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });

  const [usuarioRegister, setUsuarioRegister] = useState({
    name: "",
    lastName: "",
    dni: 0,
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleChangeLogin = (e: any) => {
    const { name, value } = e.target;
    setUsuario((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangeRegister = (e: any) => {
    const { name, value } = e.target;
    setUsuarioRegister((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    const body = {
      email: usuario.email,
      password: usuario.password,
    };
    const loginExitoso = await login(body);
    if (loginExitoso) {
      const userData = await getInformacionUsuario();
      if (userData?.rolId === 1) {
        router.push("/admin");
      } else {
        router.push("/user");
      }
    } else {
      alert("Login fallido. Por favor, verifica tus credenciales.");
    }
  };

  // ----------------- BOTON DE REGISTRO -----------------
  const handleRegister = async () => {
    const user: IUsuario = {
      name: usuarioRegister.name,
      lastName: usuarioRegister.lastName,
      dni: usuarioRegister.dni,
      email: usuarioRegister.email,
      password: usuarioRegister.password,
    };
    const registerExitoso = await registerUser(user);
  };

  const toggleForms = (val: string) => {
    setRegister(val == "register");
  };

  const handleLoginAndToggle = () => {
    handleShow();
    toggleForms("login");
  };

  return (
    <>
      <Button variant="primary" onClick={() => handleLoginAndToggle()}>
        Iniciar Sesion
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {!register && <Modal.Title>Iniciar Sesion</Modal.Title>}
          {register && <Modal.Title>Registrarse</Modal.Title>}
        </Modal.Header>
        <Modal.Body>
          {!register && (
            <Form>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  autoFocus
                  name="email"
                  required
                  value={usuario.email}
                  onChange={(e) => handleChangeLogin(e)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Contaseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="contraseña"
                  autoFocus
                  name="password"
                  required
                  value={usuario.password}
                  onChange={(e) => handleChangeLogin(e)}
                />
              </Form.Group>
            </Form>
          )}

          {register && (
            <Form>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre"
                  autoFocus
                  name="name"
                  required
                  value={usuarioRegister.name}
                  onChange={(e) => handleChangeRegister(e)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Apellido"
                  autoFocus
                  name="lastName"
                  required
                  value={usuarioRegister.lastName}
                  onChange={(e) => handleChangeRegister(e)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="dni">
                <Form.Label>Dni</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Dni"
                  autoFocus
                  name="dni"
                  required
                  value={usuarioRegister.dni}
                  onChange={(e) => handleChangeRegister(e)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  autoFocus
                  name="email"
                  required
                  value={usuarioRegister.email}
                  onChange={(e) => handleChangeRegister(e)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Contaseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="contraseña"
                  autoFocus
                  name="password"
                  required
                  value={usuarioRegister.password}
                  onChange={(e) => handleChangeRegister(e)}
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>

        {register && (
          <Modal.Footer>
            <Button variant="primary" onClick={() => handleRegister()}>
              Registrarse
            </Button>
            <Button variant="light" onClick={() => handleClose()}>
              Cancelar
            </Button>
            <Button variant="secondary" onClick={() => toggleForms("login")}>
              Login
            </Button>
          </Modal.Footer>
        )}
        {!register && (
          <Modal.Footer>
            <Button variant="secondary" onClick={() => toggleForms("register")}>
              Registrarse
            </Button>
            <Button variant="light" onClick={() => handleClose()}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={() => handleLogin()}>
              Ingresar
            </Button>
          </Modal.Footer>
        )}
      </Modal>
    </>
  );
}

export default FormSaliente;
