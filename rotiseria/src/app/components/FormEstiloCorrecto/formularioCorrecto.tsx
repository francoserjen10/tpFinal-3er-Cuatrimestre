import React from 'react';
import './formSaliente.css'; // Importa tu CSS específico para SlideNavbar

const SlideNavbar: React.FC = () => {
  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div className="signup">
        <form>
          <label htmlFor="chk" aria-hidden="true">
            Sign up
          </label>
          <input type="text" name="txt" placeholder="User name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="pswd" placeholder="Password" required />
          <button>Sign up</button>
        </form>
      </div>

      <div className="login">
        <form>
          <label htmlFor="chk" aria-hidden="true">
            Login
          </label>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="pswd" placeholder="Password" required />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default SlideNavbar;

/* 
import React from 'react';
import './formSaliente.css';

const FormularioBueno = () => {
  return (
    <div className='mainForm'>
      <input type="checkbox" id="chk" />

      <div className="signupForm">
        <form>
          <label className='labelForm' htmlFor="chk">Sign up</label>
          <input className='inputForm' type="text" name="txt" placeholder="User name" required />
          <input className='inputForm' type="email" name="email" placeholder="Email" required />
          <input className='inputForm' type="password" name="pswd" placeholder="Password" required />
          <button className='buttonForm'>Sign up</button>
        </form>
      </div>

      <div className="loginForm">
        <form>
          <label className='labelForm' htmlFor="chk">Login</label>
          <input className='inputForm' type="email" name="email" placeholder="Email" required />
          <input className='inputForm' type="password" name="pswd" placeholder="Password" required />
          <button className='buttonForm'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default FormularioBueno;


*/