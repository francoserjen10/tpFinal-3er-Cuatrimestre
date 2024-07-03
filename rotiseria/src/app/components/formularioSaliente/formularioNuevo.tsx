import React from 'react';
import './formSaliente.css';

const FormularioBueno = () => {
  return (
    <div id="formSaliente" className='main hidden fontsForm'>
      <input type="checkbox" id="chk" />

      <div className="signup">
        <form className="dflex">
          <label htmlFor="chk">Sign up</label>
          <input type="text" name="txt" placeholder="Username" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="pswd" placeholder="Password" required />
          <button>Sign up</button>
        </form>
      </div>

      <div className="login">
        <form className='dflex'>
          <label htmlFor="chk">Login</label>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="pswd" placeholder="Password" required />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default FormularioBueno;