"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { getInformacionUsuario, login } from "../services/auth";

export default function Login() {
  const router = useRouter();

  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });

  const [register, setRegister] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    console.log("handleChange name", name);
    console.log("handleChange value", value);
    setUsuario((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log("setUsuario", value);
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
        // router.push("./administrador");
        console.log("/administrador");
      } else {
        // router.push("./jugador");
        console.log("/jugador");
      }
    } else {
      alert("Login fallido. Por favor, verifica tus credenciales.");
    }
  };

  const toggleForms = (val: string) => {
    setRegister(val == "register");
  };

  return (
    // <Form>
    //   <div className="mb-3">
    //     <Form.Label>Email address</Form.Label>
    //     <Form.Control type="email" placeholder="Enter email" />
    //     <Form.Text className="text-muted">
    //       We'll never share your email with anyone else.
    //     </Form.Text>
    //   </div>

    //   <div className="mb-3">
    //     <Form.Label>Password</Form.Label>
    //     <Form.Control type="password" placeholder="Password" />
    //   </div>
    //   <Button variant="primary" type="submit">
    //     Submit
    //   </Button>
    // </Form>

    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container">
        <div className="toggle-container">
          <button
            id="login-toggle"
            className="btn btn-custom"
            onClick={() => toggleForms("login")}
          >
            Login
          </button>
          {/* Este re register no lo tengo todavia */}
          <button
            id="register-toggle"
            className="btn btn-custom"
            onClick={() => toggleForms("register")}
          >
            Register
          </button>
        </div>
        {!register && (
          <form id="login-form">
            <h2 className="text-center">Login</h2>
            <div className="form-group">
              <label htmlFor="login-email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                required
                value={usuario.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="login-password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                value={usuario.password}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="button"
              className="btn btn-custom btn-block  mt-4"
              onClick={() => handleLogin()}
            >
              Login
            </button>
          </form>
        )}
        {register && (
          <form id="register-form">
            <h2 className="text-center">Register</h2>
            <div className="form-group">
              <label htmlFor="register-email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={usuario.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="register-password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                required
                value={usuario.password}
                onChange={handleChange}
              />
            </div>
            <button
              type="button"
              className="btn btn-custom btn-block mt-4"
              onClick={() => handleLogin()}
            >
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
